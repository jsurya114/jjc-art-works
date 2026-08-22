import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Image, Settings, LogOut, ArrowLeft } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Manage Portfolio', path: '/admin/portfolio', icon: Briefcase },
    { name: 'Manage Gallery', path: '/admin/gallery', icon: Image },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-xl font-bold tracking-tight">Admin<span className="text-purple-400">Panel</span></h2>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Site</span>
        </Link>
        <Link to="/admin/login" className="w-full flex items-center space-x-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
