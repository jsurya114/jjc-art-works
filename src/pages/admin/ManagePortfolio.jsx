import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { db } from '../../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { Loader2, Trash2, Plus, Pencil, X, Upload } from 'lucide-react';

const CATEGORIES = ['Full Interiors', 'Altars', 'Seating', 'Restoration'];

const LAYOUT_OPTIONS = [
  { value: 'regular', label: 'Regular', span: 'col-span-1', height: 'h-[400px]' },
  { value: 'wide', label: 'Wide', span: 'col-span-1 md:col-span-2', height: 'h-[400px]' },
  { value: 'tall', label: 'Tall', span: 'col-span-1', height: 'h-[400px] md:h-[600px]' },
  { value: 'featured', label: 'Featured (Large)', span: 'col-span-1 md:col-span-2 row-span-2', height: 'h-[400px] md:h-[600px]' },
];

export default function ManagePortfolio() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [location, setLocation] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [layout, setLayout] = useState('regular');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'portfolio_items'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setItems(data);
    } catch (err) {
      console.error("Error fetching portfolio items:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const resetForm = () => {
    setTitle('');
    setCategory(CATEGORIES[0]);
    setLocation('');
    setYear(new Date().getFullYear().toString());
    setLayout('regular');
    setFile(null);
    setPreview('');
    setEditingItem(null);
    setShowForm(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editingItem && !file) {
      toast.error('Please select an image.');
      return;
    }
    if (!title.trim()) {
      toast.error('Please enter a project title.');
      return;
    }

    setUploading(true);

    try {
      let imageUrl = editingItem?.imageUrl || '';
      let cloudinaryId = editingItem?.cloudinaryId || '';

      // Upload new image if file selected
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'jjc_unsigned');
        formData.append('folder', 'jjc_portfolio');

        const res = await fetch('https://api.cloudinary.com/v1_1/nq54fjxg/image/upload', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();

        if (data.secure_url) {
          imageUrl = data.secure_url;
          cloudinaryId = data.public_id;
        } else {
          throw new Error(data.error?.message || 'Cloudinary upload failed');
        }
      }

      const selectedLayout = LAYOUT_OPTIONS.find(l => l.value === layout);

      const portfolioData = {
        title: title.trim(),
        category,
        location: location.trim(),
        year: year.trim(),
        imageUrl,
        cloudinaryId,
        layout: layout,
        span: selectedLayout.span,
        height: selectedLayout.height,
      };

      if (editingItem) {
        // Update existing
        await updateDoc(doc(db, 'portfolio_items', editingItem.id), portfolioData);
      } else {
        // Create new
        portfolioData.createdAt = serverTimestamp();
        await addDoc(collection(db, 'portfolio_items'), portfolioData);
      }

      resetForm();
      fetchItems();
    } catch (err) {
      console.error('Error saving portfolio item:', err);
      toast.error('Failed to save: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setLocation(item.location || '');
    setYear(item.year || '');
    setLayout(item.layout || 'regular');
    setPreview(item.imageUrl);
    setFile(null);
    setShowForm(true);
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete "${item.title}"? This cannot be undone.`)) return;
    try {
      await deleteDoc(doc(db, 'portfolio_items', item.id));
      fetchItems();
    } catch (err) {
      console.error('Error deleting portfolio item:', err);
      toast.error('Failed to delete.');
    }
  };

  const handleSeedData = async () => {
    const seedItems = [
      { title: "St. Jude's Basilica", category: 'Full Interiors', location: 'Thrissur, Kerala', year: '2023', imageUrl: '/portfolio_pews.jpg', cloudinaryId: 'seed_pews', layout: 'featured', span: 'col-span-1 md:col-span-2 row-span-2', height: 'h-[400px] md:h-[600px]' },
      { title: 'Grace Fellowship Church', category: 'Seating', location: 'Kochi, Kerala', year: '2022', imageUrl: '/services_chairs_1787384262537.jpg', cloudinaryId: 'seed_chairs', layout: 'regular', span: 'col-span-1', height: 'h-[400px]' },
      { title: 'Holy Redeemer Chapel', category: 'Altars', location: 'Palakkad, Kerala', year: '2021', imageUrl: '/portfolio_altar.jpg', cloudinaryId: 'seed_altar', layout: 'regular', span: 'col-span-1', height: 'h-[400px]' },
      { title: 'Sacred Heart Cathedral', category: 'Full Interiors', location: 'Kottayam, Kerala', year: '2023', imageUrl: '/portfolio_interior.jpg', cloudinaryId: 'seed_interior', layout: 'regular', span: 'col-span-1', height: 'h-[400px]' },
      { title: "St. Peter's Parish", category: 'Restoration', location: 'Kannur, Kerala', year: '2020', imageUrl: '/services_wood_carving_1787384193672.jpg', cloudinaryId: 'seed_woodcarving', layout: 'wide', span: 'col-span-1 md:col-span-2', height: 'h-[400px]' },
    ];
    try {
      for (const item of seedItems) {
        await addDoc(collection(db, 'portfolio_items'), { ...item, createdAt: serverTimestamp() });
      }
      fetchItems();
    } catch (err) {
      console.error('Error seeding:', err);
      toast.error('Failed to seed data.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Manage Portfolio</h2>
          <p className="text-sm text-slate-500 mt-1">Add, edit, or remove portfolio projects.</p>
        </div>
        <div className="flex gap-2">
          {items.length === 0 && !loading && (
            <button onClick={handleSeedData} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 text-sm font-medium transition-colors">
              Seed Original Data
            </button>
          )}
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            className="px-4 py-2 bg-[#26170c] text-white rounded-lg hover:bg-[#3d2b1f] text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Plus size={16} /> Add Project
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              {editingItem ? 'Edit Project' : 'Add New Project'}
            </h3>
            <button onClick={resetForm} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. St. Mary's Cathedral"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cba85a]/50 focus:border-[#cba85a]"
                required
              />
            </div>
            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cba85a]/50 focus:border-[#cba85a] bg-white"
              >
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {/* Location */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Kottayam, Kerala"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cba85a]/50 focus:border-[#cba85a]"
              />
            </div>
            {/* Year */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Year</label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g. 2024"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cba85a]/50 focus:border-[#cba85a]"
              />
            </div>
            {/* Layout Size */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Layout Size</label>
              <select
                value={layout}
                onChange={(e) => setLayout(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#cba85a]/50 focus:border-[#cba85a] bg-white"
              >
                {LAYOUT_OPTIONS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
              </select>
              <p className="text-xs text-slate-400 mt-1">Controls how much space this project takes in the grid.</p>
            </div>
            {/* Image */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Project Image {!editingItem && '*'}
              </label>
              <div className="flex items-center gap-4">
                {preview && (
                  <img src={preview} alt="Preview" className="w-16 h-16 rounded-lg object-cover border border-slate-200" />
                )}
                <label className="flex-1 border-2 border-dashed border-slate-300 rounded-lg px-4 py-3 text-center cursor-pointer hover:border-[#cba85a] hover:bg-[#fdfbf7] transition-colors">
                  <Upload size={16} className="mx-auto mb-1 text-slate-400" />
                  <span className="text-sm text-slate-500">{file ? file.name : 'Choose image...'}</span>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
            </div>
            {/* Submit */}
            <div className="md:col-span-2 flex justify-end gap-3 pt-2">
              <button type="button" onClick={resetForm} className="px-6 py-3 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading}
                className="px-6 py-3 text-sm font-medium text-white bg-[#26170c] rounded-lg hover:bg-[#3d2b1f] transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {uploading ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : (editingItem ? 'Update Project' : 'Add Project')}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Items List */}
      <div className="p-0">
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-[#cba85a]" />
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            No portfolio items yet. Click "Add Project" or "Seed Original Data" to get started.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                  <th className="px-6 py-4 font-medium">Image</th>
                  <th className="px-6 py-4 font-medium">Title</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Location</th>
                  <th className="px-6 py-4 font-medium">Year</th>
                  <th className="px-6 py-4 font-medium">Layout</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <img src={item.imageUrl} alt={item.title} className="w-16 h-12 rounded-lg object-cover border border-slate-200" />
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-800">{item.title}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.location}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.year}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 capitalize">{item.layout || 'regular'}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-2">
                        <button onClick={() => handleEdit(item)} className="inline-flex items-center justify-center gap-2 px-3 py-2 w-full sm:w-auto text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors border border-blue-200">
                          <Pencil size={16} /> Edit
                        </button>
                        <button onClick={() => handleDelete(item)} className="inline-flex items-center justify-center gap-2 px-3 py-2 w-full sm:w-auto text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors border border-rose-200">
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
