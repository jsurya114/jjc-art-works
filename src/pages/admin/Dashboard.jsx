import { Users, Eye, Image as ImageIcon, Briefcase, Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([
    { title: 'Total Portfolio Items', value: '0', icon: <Briefcase size={24} className="text-indigo-500" /> },
    { title: 'Total Gallery Images', value: '0', icon: <ImageIcon size={24} className="text-emerald-500" /> },
    { title: 'Total Testimonials', value: '0', icon: <Users size={24} className="text-blue-500" /> },
    { title: 'Pending Reviews', value: '0', icon: <Eye size={24} className="text-amber-500" /> },
  ]);
  const [recentTestimonials, setRecentTestimonials] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch counts
        const portfolioSnap = await getDocs(collection(db, 'portfolio'));
        const portfolioCount = portfolioSnap.size;

        const galleryMainSnap = await getDocs(collection(db, 'gallery_main'));
        const galleryRestorationsSnap = await getDocs(collection(db, 'gallery_restorations'));
        const galleryCount = galleryMainSnap.size + galleryRestorationsSnap.size;

        const testimonialsSnap = await getDocs(collection(db, 'testimonials'));
        const testimonialsCount = testimonialsSnap.size;

        // Pending testimonials count
        const pendingQuery = query(collection(db, 'testimonials'), where('status', '==', 'pending'));
        const pendingSnap = await getDocs(pendingQuery);
        const pendingCount = pendingSnap.size;

        setStats([
          { title: 'Total Portfolio Items', value: portfolioCount.toString(), icon: <Briefcase size={24} className="text-indigo-500" /> },
          { title: 'Total Gallery Images', value: galleryCount.toString(), icon: <ImageIcon size={24} className="text-emerald-500" /> },
          { title: 'Total Testimonials', value: testimonialsCount.toString(), icon: <Users size={24} className="text-blue-500" /> },
          { title: 'Pending Reviews', value: pendingCount.toString(), icon: <Eye size={24} className="text-amber-500" /> },
        ]);

        // Fetch recent testimonials
        const recentQuery = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'), limit(5));
        const recentSnap = await getDocs(recentQuery);
        const recentData = recentSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecentTestimonials(recentData);

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-[#cba85a]" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Dashboard Overview</h1>
          <p className="text-slate-500 text-sm" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Welcome back Jills.</p>
        </div>

      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between h-32">
            <h3 className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2">{stat.title}</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Recent Testimonials Table */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Recent Testimonials</h2>
            <Link to="/admin/testimonials" className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Church</th>
                  <th className="px-6 py-4">Review</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentTestimonials.length > 0 ? recentTestimonials.map((test) => (
                  <tr key={test.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{test.author}</td>
                    <td className="px-6 py-4">{test.church}</td>
                    <td className="px-6 py-4 truncate max-w-[200px]" title={test.text}>{test.text}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium
                        ${test.status === 'approved' ? 'bg-green-100 text-green-700' : 
                          test.status === 'rejected' ? 'bg-rose-100 text-rose-700' : 
                          'bg-amber-100 text-amber-700'}`}>
                        {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-slate-500">No testimonials found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full">
            <div className="px-6 py-5 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Quick Actions</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              <Link to="/admin/portfolio" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:border-slate-300 transition-colors text-center group">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Briefcase size={20} />
                </div>
                <span className="text-xs font-semibold text-slate-700">Add Portfolio Item</span>
              </Link>
              <Link to="/admin/gallery" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:border-slate-300 transition-colors text-center group">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ImageIcon size={20} />
                </div>
                <span className="text-xs font-semibold text-slate-700">Upload to Gallery</span>
              </Link>
              <Link to="/admin/testimonials" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:border-slate-300 transition-colors text-center group col-span-2">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Eye size={20} />
                </div>
                <span className="text-xs font-semibold text-slate-700">Review Testimonials</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
