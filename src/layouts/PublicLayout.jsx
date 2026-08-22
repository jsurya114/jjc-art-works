import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact us', to: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#fff8f5]/95 backdrop-blur-md border-b border-[#d2c4bc]/60 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-medium tracking-tight text-[#26170c]" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.05em' }}>
          JJC
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[13px] font-semibold tracking-wider transition-all text-[#4f453f] hover:text-[#26170c] relative py-2`}
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {link.label}
                {/* Hover / Active Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#c9a84c] transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} hover:scale-x-100 origin-left`}></span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {/* Enquire Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-[#c9a84c] text-white text-[12px] font-bold px-6 py-3 rounded-full tracking-widest uppercase hover:bg-[#b59540] transition-all duration-200 shadow-sm"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            ENQUIRE
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#26170c]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fff8f5] border-t border-[#d2c4bc]/60 absolute top-[72px] left-0 w-full shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map(link => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[15px] font-semibold tracking-wider transition-colors ${isActive ? 'text-[#c9a84c]' : 'text-[#4f453f]'}`}
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#c9a84c] text-white text-[12px] font-bold px-6 py-3 rounded-full tracking-widest uppercase text-center mt-2"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              ENQUIRE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#3d2b1f] py-20 px-6 font-sans">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="text-white font-medium text-xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>JJC</div>
          <p className="text-white/60 text-[12px] tracking-widest uppercase mb-3" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Chapel Interiors</p>
          <p className="text-white/80 text-[15px] leading-relaxed mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Crafting sacred spaces since 2014.</p>
          <div className="flex gap-3">
            {['f', 'in', '▷'].map((s, i) => (
              <div key={i} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 cursor-pointer transition-colors text-[12px]">{s}</div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[2px] uppercase mb-6 opacity-70" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'About Us', to: '/about' },
              { label: 'Contact', to: '/contact' }
            ].map(l => (
              <li key={l.label}>
                <Link to={l.to} className="text-white/80 hover:text-[#c9a84c] transition-colors text-[15px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[2px] uppercase mb-6 opacity-70" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Our Services</h4>
          <ul className="space-y-3">
            {['Chapel Pews', 'Altar Furniture', 'Custom Woodwork', 'Interior Consultation', 'Church Seating', 'Pulpit Design'].map(l => (
              <li key={l}><Link to="/services" className="text-white/80 hover:text-[#c9a84c] transition-colors text-[15px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[2px] uppercase mb-6 opacity-70" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Get In Touch</h4>
          <ul className="space-y-4">
            {[
              { icon: '📞', text: '+91 91887 23168' },
              { icon: '💬', text: 'WhatsApp Us' },
              { icon: '✉️', text: 'jjc.art.works@gmail.com' },
              { icon: '📍', text: 'Kerala, India' },
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80 text-[15px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                <span className="text-base">{c.icon}</span> {c.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-[13px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
        © 2024 JJC Chapel Interiors. All rights reserved.
      </div>
    </footer>
  );
};

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fff8f5] text-[#26170c] relative">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919188723168" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
