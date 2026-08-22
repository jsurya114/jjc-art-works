import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ImagePlus, Trash2, Loader2 } from 'lucide-react';

export default function ManageServices() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Upload States
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  
  // Metadata for uploads
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Fetch Materials
  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'services_materials'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMaterials(data);
    } catch (err) {
      console.error("Error fetching materials:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // Handle Image Upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title || !description) return;

    setUploading(true);
    setProgress(25);
    
    // 1. Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'jjc_unsigned');
    formData.append('folder', 'jjc_services_materials');

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/nq54fjxg/image/upload`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.secure_url) {
        setProgress(100);
        
        // 2. Save metadata to Firestore
        const metadata = {
          imageUrl: data.secure_url,
          cloudinaryId: data.public_id,
          title,
          description,
          createdAt: serverTimestamp()
        };

        await addDoc(collection(db, 'services_materials'), metadata);
        
        // Reset
        setFile(null);
        setTitle('');
        setDescription('');
        setProgress(0);
        setUploading(false);
        
        // Refresh list
        fetchMaterials();
      } else {
        throw new Error(data.error?.message || "Cloudinary upload failed");
      }
    } catch (err) {
      console.error("Upload failed", err);
      setUploading(false);
      setProgress(0);
      alert("Upload failed: " + err.message);
    }
  };

  // Handle Image Delete
  const handleDelete = async (item) => {
    if (!window.confirm("Are you sure you want to delete this material?")) return;

    try {
      // Delete from Firestore
      await deleteDoc(doc(db, 'services_materials', item.id));
      fetchMaterials();
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Error deleting item.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Manage Services</h1>
        <p className="text-slate-500">Manage the 'Our Materials' (Finest Wood) section on the Services page.</p>
      </div>

      {/* Upload Form */}
      <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Add New Material</h2>
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

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Wood / Material Name</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Golden Teak"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Rich golden tone and exceptional durability."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none h-20"
                required
              ></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={!file || uploading || !title || !description}
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 mt-2"
          >
            {uploading ? (
              <><Loader2 className="animate-spin w-4 h-4" /> Uploading {progress}%</>
            ) : (
              <><ImagePlus className="w-4 h-4" /> Add Material</>
            )}
          </button>
        </form>
      </div>

      {/* Gallery Grid */}
      <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-6">Current Materials</h2>
        
        {loading ? (
          <div className="flex justify-center p-8 text-slate-400"><Loader2 className="animate-spin w-8 h-8" /></div>
        ) : materials.length === 0 ? (
          <div className="text-center p-8 text-slate-500 bg-slate-50 rounded-lg">No materials added yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {materials.map(item => (
              <div key={item.id} className="flex flex-col border border-slate-200 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                <div className="relative h-48 bg-slate-100">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="mb-4">
                    <p className="text-slate-800 font-bold mb-1">{item.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  
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
    </div>
  );
}
