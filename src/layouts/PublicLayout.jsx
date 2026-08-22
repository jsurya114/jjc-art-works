import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#fff8f5]/95 backdrop-blur-md border-b border-[#d2c4bc]/60 font-sans">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-medium tracking-tight text-[#26170c]" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.05em' }}>
          JJC
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Gallery', to: '/gallery' },
            { label: 'Testimonials', to: '/testimonials' },
            { label: 'Contact us', to: '/contact' },
          ].map(link => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-[13px] font-semibold tracking-wider transition-colors text-[#4f453f] hover:text-[#26170c]`}
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Enquire Button */}
        <button
          className="bg-[#c9a84c] text-white text-[12px] font-bold px-6 py-3 rounded-full tracking-widest uppercase hover:bg-[#b59540] transition-all duration-200 shadow-sm"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          ENQUIRE
        </button>
      </div>
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
            {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map(l => (
              <li key={l}><a href="#" className="text-white/80 hover:text-[#c9a84c] transition-colors text-[15px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[2px] uppercase mb-6 opacity-70" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Our Services</h4>
          <ul className="space-y-3">
            {['Chapel Pews', 'Altar Furniture', 'Custom Woodwork', 'Interior Consultation', 'Church Seating', 'Pulpit Design'].map(l => (
              <li key={l}><a href="#" className="text-white/80 hover:text-[#c9a84c] transition-colors text-[15px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[2px] uppercase mb-6 opacity-70" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Get In Touch</h4>
          <ul className="space-y-4">
            {[
              { icon: '📞', text: '+91 XXXXX XXXXX' },
              { icon: '💬', text: 'WhatsApp Us' },
              { icon: '✉️', text: 'info@jjcinteriors.com' },
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
    <div className="min-h-screen flex flex-col font-sans bg-[#fff8f5] text-[#26170c]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
