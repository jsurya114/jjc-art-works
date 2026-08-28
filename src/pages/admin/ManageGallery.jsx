import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { db } from '../../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ImagePlus, Trash2, Loader2, Plus } from 'lucide-react';

export default function ManageGallery() {
  const [activeTab, setActiveTab] = useState('main'); // 'main', 'restorations', 'more', 'categories'
  
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Upload States
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  
  // Metadata for uploads/categories
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');

  // Collection mapping for images
  const collectionName = {
    main: 'gallery_main',
    restorations: 'gallery_restorations',
    more: 'gallery_more'
  }[activeTab];

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const q = query(collection(db, 'gallery_categories'), orderBy('createdAt', 'asc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(data);
      if (data.length > 0 && !category) {
        setCategory(data[0].name);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Fetch Image Items
  const fetchItems = async () => {
    if (activeTab === 'categories') return;
    setLoading(true);
    try {
      const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    } catch (err) {
      console.error("Error fetching items:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeTab !== 'categories') {
      fetchItems();
    }
  }, [activeTab]);

  // Handle Category Add
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    
    try {
      await addDoc(collection(db, 'gallery_categories'), {
        name: newCategoryName.trim(),
        createdAt: serverTimestamp()
      });
      setNewCategoryName('');
      fetchCategories();
    } catch (err) {
      console.error("Error adding category:", err);
      toast.error("Error adding category.");
    }
  };

  const performDeleteCategory = async (catId) => {
    try {
      await deleteDoc(doc(db, 'gallery_categories', catId));
      fetchCategories();
      toast.success("Category deleted.");
    } catch (err) {
      console.error("Error deleting category:", err);
      toast.error("Error deleting category.");
    }
  };

  const handleDeleteCategory = (catId) => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-slate-800">Are you sure? Images using this category will still exist but might not be filterable.</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => toast.dismiss(t.id)} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md">Cancel</button>
          <button onClick={() => { performDeleteCategory(catId); toast.dismiss(t.id); }} className="px-3 py-1.5 text-xs font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-md">Delete</button>
        </div>
      </div>
    ), { duration: Infinity, id: `del-cat-${catId}` });
  };

  // Handle Image Upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    // Validation for Main Gallery
    if (activeTab === 'main' && (!title || !category)) {
      toast.error("Please provide a title and select a category for the Main Gallery.");
      return;
    }

    setUploading(true);
    setProgress(25);
    
    // 1. Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'jjc_unsigned');
    formData.append('folder', `jjc_gallery/${activeTab}`);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/nq54fjxg/image/upload`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.secure_url) {
        setProgress(100);
        
        // 2. Save URL to Firestore
        const metadata = {
          imageUrl: data.secure_url,
          cloudinaryId: data.public_id,
          createdAt: serverTimestamp()
        };

        if (activeTab === 'main') {
          metadata.title = title;
          metadata.category = category;
        }

        await addDoc(collection(db, collectionName), metadata);
        
        // Reset
        setFile(null);
        setTitle('');
        setProgress(0);
        setUploading(false);
        
        // Refresh list
        fetchItems();
      } else {
        throw new Error(data.error?.message || "Cloudinary upload failed");
      }
    } catch (err) {
      console.error("Upload failed", err);
      setUploading(false);
      setProgress(0);
      toast.error("Upload failed: " + err.message);
    }
  };

  // Handle Image Delete
  const performDelete = async (item) => {
    try {
      await deleteDoc(doc(db, collectionName, item.id));
      fetchItems();
      toast.success("Image deleted.");
    } catch (err) {
      console.error("Error deleting item:", err);
      toast.error("Error deleting item.");
    }
  };

  const handleDelete = (item) => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-slate-800">Are you sure you want to delete this image?</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => toast.dismiss(t.id)} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md">Cancel</button>
          <button onClick={() => { performDelete(item); toast.dismiss(t.id); }} className="px-3 py-1.5 text-xs font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-md">Delete</button>
        </div>
      </div>
    ), { duration: Infinity, id: `del-img-${item.id}` });
  };

  const performSeedRestorations = async () => {
    
    setUploading(true);
    try {
      // 1. Add Category if it doesn't exist
      const catExists = categories.some(c => c.name === 'Restorations');
      if (!catExists) {
        await addDoc(collection(db, 'gallery_categories'), {
          name: 'Restorations',
          createdAt: serverTimestamp()
        });
        fetchCategories();
      }

      const mainItems = [
        { title: 'Antique Pews Restoration', category: 'Restorations', imageUrl: '/restoration_pews.jpg', cloudinaryId: 'local_pews', createdAt: serverTimestamp() },
        { title: 'Cathedral Altar Restoration', category: 'Restorations', imageUrl: '/restoration_altar.jpg', cloudinaryId: 'local_altar', createdAt: serverTimestamp() },
        { title: 'Wooden Pulpit Restoration', category: 'Restorations', imageUrl: '/restoration_pulpit.jpg', cloudinaryId: 'local_pulpit', createdAt: serverTimestamp() }
      ];

      // 2. Add to gallery_main
      for (const item of mainItems) {
        await addDoc(collection(db, 'gallery_main'), item);
      }

      // 3. Add to gallery_restorations
      for (const item of mainItems) {
        await addDoc(collection(db, 'gallery_restorations'), {
          imageUrl: item.imageUrl,
          cloudinaryId: item.cloudinaryId,
          createdAt: serverTimestamp()
        });
      }

      toast.success("Restorations seeded successfully!");
      if (activeTab !== 'categories') fetchItems();
    } catch (err) {
      console.error("Error seeding restorations:", err);
      toast.error("Error seeding data.");
    } finally {
      setUploading(false);
    }
  };

  const handleSeedRestorations = () => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-slate-800">This will add the 'Restorations' category and 3 recent restoration images to your gallery. Proceed?</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => toast.dismiss(t.id)} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md">Cancel</button>
          <button onClick={() => { performSeedRestorations(); toast.dismiss(t.id); }} className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">Proceed</button>
        </div>
      </div>
    ), { duration: Infinity, id: 'seed' });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Manage Gallery</h1>
          <p className="text-slate-500">Upload and manage images across your public gallery.</p>
        </div>
        <button 
          onClick={handleSeedRestorations}
          className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 text-sm font-medium transition-colors"
        >
          Seed Restorations Data
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-100 p-2 rounded-lg w-full">
        {['main', 'restorations', 'more', 'categories'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all capitalize ${
              activeTab === tab ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            {tab === 'main' ? 'Main Gallery' : tab}
          </button>
        ))}
      </div>

      {activeTab === 'categories' ? (
        /* ── MANAGE CATEGORIES TAB ── */
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-6">Manage Categories</h2>
          
          <form onSubmit={handleAddCategory} className="flex flex-col sm:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="e.g. Stained Glass"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              required
            />
            <button 
              type="submit"
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </form>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Current Categories</h3>
            {categories.length === 0 ? (
              <p className="text-slate-400 text-sm">No categories found.</p>
            ) : (
              categories.map(cat => (
                <div key={cat.id} className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="font-medium text-slate-700">{cat.name}</span>
                  <button 
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-2 rounded-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        /* ── IMAGE UPLOAD TABS ── */
        <>
          {/* Upload Form */}
          <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Add New Image</h2>
            <form onSubmit={handleUpload} className="space-y-4 max-w-2xl">
              
              <div className="flex items-center gap-4">
                <input 
                  type="file" 
                  accept="image/*"
                  required
                  onChange={(e) => setFile(e.target.files[0])}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>

              {activeTab === 'main' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Project Title</label>
                    <input 
                      type="text" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. St. Jude's Altar"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label>
                    {categories.length === 0 ? (
                      <div className="text-rose-500 text-sm mt-2">Please create a category first!</div>
                    ) : (
                      <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      >
                        {categories.map(c => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                disabled={!file || uploading || (activeTab === 'main' && categories.length === 0)}
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {uploading ? (
                  <><Loader2 className="animate-spin w-4 h-4" /> Uploading {progress}%</>
                ) : (
                  <><ImagePlus className="w-4 h-4" /> Upload Image</>
                )}
              </button>
            </form>
          </div>

          {/* Gallery Grid */}
          <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-6">Uploaded Images</h2>
            
            {loading ? (
              <div className="flex justify-center p-8 text-slate-400"><Loader2 className="animate-spin w-8 h-8" /></div>
            ) : items.length === 0 ? (
              <div className="text-center p-8 text-slate-500 bg-slate-50 rounded-lg">No images uploaded to this section yet.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {items.map(item => (
                  <div key={item.id} className="flex flex-col border border-slate-200 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    
                    <div className="relative aspect-square bg-slate-100">
                      <img src={item.imageUrl} alt="gallery" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="p-3 flex flex-col justify-between flex-1">
                      {activeTab === 'main' ? (
                        <div className="mb-3">
                          <p className="text-slate-800 text-sm font-semibold truncate">{item.title}</p>
                          <p className="text-slate-500 text-[11px] uppercase tracking-wider truncate">{item.category}</p>
                        </div>
                      ) : (
                        <div className="mb-3">
                           <p className="text-slate-400 text-[11px] uppercase tracking-wider">Uploaded Image</p>
                        </div>
                      )}
                      
                      <button 
                        onClick={() => handleDelete(item)}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white rounded-md transition-colors text-xs font-bold"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
