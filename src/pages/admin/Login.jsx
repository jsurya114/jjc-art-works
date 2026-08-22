import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock login: redirect to the admin dashboard
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f5] font-sans px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border border-[#e8ddd8]/50">
        
        <div className="text-center mb-10">
          <Link to="/" className="inline-block font-serif text-[40px] font-medium tracking-tight text-[#26170c] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.05em' }}>
            JJC
          </Link>
          <p className="text-[#a48e83] text-[12px] font-bold tracking-[3px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Admin Portal
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-2">EMAIL ADDRESS</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@jjcartworks.com" 
              className="w-full bg-[#fdfbf7] border border-[#d2c4bc] py-3 px-4 rounded-md focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors placeholder:text-[#a48e83]" 
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[#1a110a] text-[10px] font-bold tracking-widest uppercase">PASSWORD</label>
              <a href="#" className="text-[#cba85a] text-[10px] font-bold hover:underline" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-[#fdfbf7] border border-[#d2c4bc] py-3 px-4 rounded-md focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors placeholder:text-[#a48e83]" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#26170c] text-white text-[13px] font-bold tracking-widest py-4 mt-2 rounded-full hover:bg-[#3d2b1f] transition-colors uppercase"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            SIGN IN TO DASHBOARD →
          </button>
        </form>

      </div>
    </div>
  );
}
