import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, query, orderBy, getDocs, updateDoc, doc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { Loader2, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function ManageTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(data);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'testimonials', id), { status: newStatus });
      fetchTestimonials(); // Refresh
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await deleteDoc(doc(db, 'testimonials', id));
        fetchTestimonials();
      } catch (err) {
        console.error("Error deleting testimonial:", err);
        alert("Failed to delete.");
      }
    }
  };

  const handleSeedData = async () => {
    const dummyData = [
      { initial: 'S', church: "St. Mary's Forane Church", location: 'Thrissur', service: 'Chapel Pews', text: '"The pews JJC crafted for our church are absolutely magnificent."', author: 'Fr. Sebastian Mathew', title: 'Parish Priest', year: '2023', rating: 5, status: 'approved' },
      { initial: 'G', church: 'Grace Fellowship Church', location: 'Kochi', service: 'Full Interior', text: '"From the first consultation to the final installation JJC was professional."', author: 'Pastor David Emmanuel', title: 'Senior Pastor', year: '2022', rating: 5, status: 'approved' },
      { initial: 'S', church: "St. Joseph's Cathedral", location: 'Kozhikode', service: 'Altar Furniture', text: '"The altar JJC built for us is the centrepiece of our cathedral. The intricate carving detail is a testament to their devotion to the craft."', author: 'Fr. Joseph Kurien', title: 'Cathedral Rector', year: '2023', rating: 5, status: 'approved' },
      { initial: 'H', church: 'Holy Redeemer Chapel', location: 'Palakkad', service: 'Pulpit Design', text: '"Our new pulpit is a masterpiece. The hand-carved panels tell a story, and the finish is exquisite."', author: 'Sr. Theresa George', title: 'Chapel Administrator', year: '2021', rating: 5, status: 'approved' },
      { initial: 'S', church: "St. Peter's Church", location: 'Kannur', service: 'Church Seating', text: '"We replaced all our old chairs with JJC custom seating. The congregation immediately noticed the superior comfort and beautiful aesthetics."', author: 'Deacon Philip Varghese', title: 'Church Administrator', year: '2022', rating: 5, status: 'approved' },
      { initial: 'C', church: 'Christ Church', location: 'Trivandrum', service: 'Custom Woodwork', text: '"JJC built our confessional and sacristy cabinets. The attention to detail and reverence for the sacred space was deeply appreciated."', author: 'Fr. Anthony Fernandez', title: 'Parish Priest', year: '2023', rating: 5, status: 'approved' }
    ];
    try {
      for (const t of dummyData) {
        await addDoc(collection(db, 'testimonials'), { ...t, createdAt: serverTimestamp() });
      }
      fetchTestimonials();
    } catch (err) {
      console.error("Error seeding", err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Manage Testimonials</h2>
          <p className="text-sm text-slate-500 mt-1">Approve, reject, or delete user reviews.</p>
        </div>
        {testimonials.length === 0 && !loading && (
          <button onClick={handleSeedData} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 text-sm font-medium transition-colors">
            Seed Original Data
          </button>
        )}
      </div>

      <div className="p-0">
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            No testimonials found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                  <th className="px-6 py-4 font-medium">Author</th>
                  <th className="px-6 py-4 font-medium">Church</th>
                  <th className="px-6 py-4 font-medium">Review</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {testimonials.map((test) => (
                  <tr key={test.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">{test.author}</div>
                      <div className="text-xs text-slate-500">{test.title || 'Client'}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {test.church}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate" title={test.text}>
                      {test.text}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        test.status === 'approved' ? 'bg-green-100 text-green-700' :
                        test.status === 'rejected' ? 'bg-rose-100 text-rose-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      {test.status !== 'approved' && (
                        <button onClick={() => handleUpdateStatus(test.id, 'approved')} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                          <CheckCircle size={18} />
                        </button>
                      )}
                      {test.status !== 'rejected' && (
                        <button onClick={() => handleUpdateStatus(test.id, 'rejected')} className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="Reject">
                          <XCircle size={18} />
                        </button>
                      )}
                      <button onClick={() => handleDelete(test.id)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                        <Trash2 size={18} />
                      </button>
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
