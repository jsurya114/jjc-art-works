import { Users, Eye, Image as ImageIcon, Briefcase } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const stats = [
    { title: 'Total Enquiries', value: '124', change: '+12%', isPositive: true },
    { title: 'Active Projects', value: '18', change: '+2', isPositive: true },
    { title: 'Completed Projects', value: '52', change: 'This Year', isPositive: null },
    { title: 'Total Portfolio Items', value: '45', change: '+5', isPositive: true },
  ];

  const recentEnquiries = [
    { id: 'ENQ-001', name: 'Fr. Thomas Joseph', project: "St. Mary's Renewal", date: 'Today, 10:42 AM', status: 'New' },
    { id: 'ENQ-002', name: 'Bishop Emmanuel', project: 'Cathedral Pews', date: 'Yesterday, 2:15 PM', status: 'In Progress' },
    { id: 'ENQ-003', name: 'Sr. Mary Grace', project: 'Holy Cross Altar', date: 'Oct 12, 9:00 AM', status: 'Closed' },
    { id: 'ENQ-004', name: 'Fr. John Varghese', project: 'Chapel Renovation', date: 'Oct 10, 4:30 PM', status: 'In Progress' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Dashboard Overview</h1>
          <p className="text-slate-500 text-sm" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Welcome back to the JJC Admin Panel.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/" className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
            View Live Site
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between h-32">
            <h3 className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2">{stat.title}</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
              {stat.isPositive !== null && (
                <span className={`text-xs font-medium px-2 py-1 rounded-md ${stat.isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                  {stat.change}
                </span>
              )}
              {stat.isPositive === null && (
                <span className="text-xs font-medium text-slate-400">
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Recent Enquiries Table */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Recent Enquiries</h2>
            <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Client Name</th>
                  <th className="px-6 py-4">Project</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentEnquiries.map((req, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{req.id}</td>
                    <td className="px-6 py-4">{req.name}</td>
                    <td className="px-6 py-4">{req.project}</td>
                    <td className="px-6 py-4 text-slate-500 text-xs">{req.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium
                        ${req.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                          req.status === 'In Progress' ? 'bg-amber-100 text-amber-700' : 
                          'bg-slate-100 text-slate-600'}`}>
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & System Status */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Quick Actions</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              <Link to="/admin/portfolio" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:border-slate-300 transition-colors text-center group">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <span className="text-xs font-semibold text-slate-700">Add Portfolio Item</span>
              </Link>
              <Link to="/admin/gallery" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:border-slate-300 transition-colors text-center group">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <span className="text-xs font-semibold text-slate-700">Upload to Gallery</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>System Status</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-slate-700">Website Status</span>
                </div>
                <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-slate-700">Database Connection</span>
                </div>
                <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-slate-700">Storage Usage</span>
                </div>
                <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">24% (12GB/50GB)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
