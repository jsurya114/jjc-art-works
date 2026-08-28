import React, { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/user-not-found') {
        setError('No admin account found with that email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Email/Password sign-in is not enabled in Firebase console.');
      } else {
        setError('Error: ' + err.message);
      }
    }
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
          {error && (
            <div className="bg-rose-50 text-rose-600 p-3 rounded-md text-xs font-semibold text-center border border-rose-100">
              {error}
            </div>
          )}
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
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-[#fdfbf7] border border-[#d2c4bc] py-3 pl-4 pr-12 rounded-md focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors placeholder:text-[#a48e83]" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#a48e83] hover:text-[#1a110a] transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>
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
