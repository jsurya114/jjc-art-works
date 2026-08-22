import { Users, Eye, Image as ImageIcon, Briefcase } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Total Views', value: '12,450', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-100' },
    { name: 'Portfolio Items', value: '34', icon: Briefcase, color: 'text-purple-500', bg: 'bg-purple-100' },
    { name: 'Gallery Images', value: '128', icon: ImageIcon, color: 'text-pink-500', bg: 'bg-pink-100' },
    { name: 'New Inquiries', value: '12', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-4">
              <div className={`p-4 rounded-xl ${stat.bg}`}>
                <Icon size={24} className={stat.color} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.name}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 min-h-[300px] flex items-center justify-center text-slate-400">
        <p>Recent Activity Chart / Table Placeholder</p>
      </div>
    </div>
  );
}
