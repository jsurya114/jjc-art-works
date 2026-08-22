import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Image, Settings, LogOut, ArrowLeft, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Manage Portfolio', path: '/admin/portfolio', icon: Briefcase },
    { name: 'Manage Gallery', path: '/admin/gallery', icon: Image },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-full md:w-64 bg-slate-900 text-white min-h-fit md:min-h-screen flex flex-col transition-all">
      <div className="p-4 md:p-6 border-b border-slate-800 flex justify-between items-center">
        <h2 className="text-xl font-bold tracking-tight">Admin<span className="text-purple-400">Panel</span></h2>
        <button 
          className="md:hidden text-slate-400 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col flex-1`}>
        <nav className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
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
        <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
        </div>
      </div>
    </aside>
  );
};

export default function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 font-sans">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
