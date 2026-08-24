import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Services() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const q = query(collection(db, 'services_materials'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMaterials(data);
      } catch (err) {
        console.error("Error fetching materials:", err);
      }
    };
    fetchMaterials();
  }, []);

  return (
    <div className="bg-[#fffcfaf0] text-[#1a110a] font-sans overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/service10.jpeg" alt="Chapel Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#26170c]/60"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto pt-[72px]">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[3px] uppercase mb-5" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            WHAT WE OFFER
          </p>
          <h1 className="text-[56px] md:text-[80px] text-[#fff8f5] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Crafted for Sacred<br />Spaces
          </h1>
          <p className="text-[#e8ddd8] text-[15px] max-w-2xl mx-auto tracking-wide" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Bespoke chapel interiors and furniture, designed and crafted around your space.
          </p>
        </div>
      </section>

      {/* ── BENTO GRID / FEATURED ── */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Top Left */}
          <div className="flex flex-col justify-center pr-10">
            <h2 className="text-[40px] md:text-[48px] leading-[1.1] mb-6 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Beautiful Work for Sacred Spaces
            </h2>
            <p className="text-[#4f453f] text-[16px] leading-relaxed border-l border-[#d2c4bc] pl-6 ml-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Our studio specializes in the design and fabrication of bespoke ecclesiastical furnishings. We approach every commission with a deep respect for historical precedent and architectural integrity.
            </p>
          </div>
          {/* Top Right Image */}
          <div className="rounded-xl overflow-hidden h-[400px]">
            <img src="/service1.jpeg" alt="Craftsman working" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Middle Left Image */}
          <div className="md:col-span-2 rounded-xl overflow-hidden h-[380px] relative group">
            <img src="/service11.jpeg" alt="Center of Liturgy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26170c]/90 via-[#26170c]/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <p className="text-[#e8ddd8] text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>01 / ALTARS & AMBOS</p>
              <h3 className="text-white text-[32px] font-medium" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>The Center of Liturgy</h3>
            </div>
          </div>
          
          {/* Middle Right Text */}
          <div className="bg-[#f5f0ed] rounded-xl p-10 flex flex-col justify-center h-[380px] relative">
            <p className="text-[#4f453f] text-[10px] font-bold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>02 / SEATING</p>
            <h3 className="text-[#1a110a] text-[28px] font-medium mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Custom Pews & Choir<br/>Stalls</h3>
            <p className="text-[#4f453f] text-[14px] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Ergonomically designed and structurally sound seating solutions built to endure generations of faithful congregants, utilizing premium hardwoods.
            </p>
            <div className="absolute bottom-8 right-8 text-[#4f453f]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bottom Left Dark */}
          <div className="bg-[#26170c] rounded-xl p-10 flex flex-col justify-center h-[380px]">
            <p className="text-[#c9a84c] text-[10px] font-bold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>03 / RESTORATION</p>
            <h3 className="text-white text-[28px] font-medium mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Historical Preservation</h3>
            <p className="text-[#e8ddd8] text-[14px] leading-relaxed mb-10" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Meticulous restoration of antique ecclesiastical furniture, honoring original techniques and materials to breathe new life into sacred heritage.
            </p>
            <div className="w-8 h-px bg-[#705a4c]"></div>
          </div>

          {/* Bottom Right Image */}
          <div className="md:col-span-2 rounded-xl overflow-hidden h-[380px] relative group">
            <img src="/service12.jpeg" alt="Architectural drafting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <p className="text-[#1a110a] text-[10px] font-bold tracking-[2px] uppercase mb-3" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>04 / DESIGN CONSULTATION</p>
              <h3 className="text-[#1a110a] text-[36px] font-medium max-w-lg leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Architectural Collaboration & Planning</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="py-24 px-6 bg-[#fffcfaf0]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[3px] uppercase mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            OUR EXPERTISE
          </p>
          <h2 className="text-[42px] md:text-[56px] text-[#1a110a] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Every Service, Rooted in<br />Craftsmanship
          </h2>
          <p className="text-[#4f453f] text-[16px] mx-auto mb-20 leading-relaxed max-w-2xl" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            For over a decade JJC has been the trusted name for chapel interior furniture across Kerala. We combine traditional woodworking techniques with modern precision to deliver pieces that stand for generations.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#d2c4bc]/40 border-y border-[#d2c4bc]/40 py-12">
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="text-[52px] font-medium text-[#c9a84c] leading-none mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>10</div>
              <div className="text-[#4f453f] text-[11px] font-medium tracking-wide uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Years of experience</div>
            </div>
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="text-[52px] font-medium text-[#c9a84c] leading-none mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>50</div>
              <div className="text-[#4f453f] text-[11px] font-medium tracking-wide uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Projects completed</div>
            </div>
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="text-[52px] font-medium text-[#c9a84c] leading-none mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6</div>
              <div className="text-[#4f453f] text-[11px] font-medium tracking-wide uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Core services offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES (ALTERNATING) ── */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto space-y-32">
        
        {/* Service 1: Pews */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>01 CHAPEL PEWS</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Custom Chapel<br />Seating</h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Bespoke pews and seating designed for comfort, durability, and the character of each chapel.
            </p>
            <ul className="space-y-4 mb-10 text-[14px] text-[#4f453f]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Custom dimensions to fit any chapel size</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Premium teak, mahogany, and walnut options</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Optional cushioning and kneeler attachments</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Traditional carved detailing available</li>
            </ul>
            <Link to="/contact#contact-form" className="inline-flex bg-[#cba85a] text-white text-[13px] font-medium px-8 py-3.5 rounded-full hover:bg-[#b59540] transition-colors items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Request Pew Quote <span>→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src="/service2.jpeg" alt="Church pews" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 2: Altars */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>02 ALTAR FURNITURE</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Altars and Pulpits</h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Handcrafted altar furniture, pulpits and lecterns designed to complement the sacred space.
            </p>
            <ul className="space-y-4 mb-10 text-[14px] text-[#4f453f]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Custom altar tables and reredos</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Hand-carved pulpits and lecterns</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Intricate brass and stone inlay options</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Traditional and contemporary styles</li>
            </ul>
            <Link to="/contact#contact-form" className="inline-flex bg-[#cba85a] text-white text-[13px] font-medium px-8 py-3.5 rounded-full hover:bg-[#b59540] transition-colors items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Request Altar Quote <span>→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src="/service9.jpeg" alt="Altar furniture" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 3: Bespoke */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>03 CUSTOM WOODWORK</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Bespoke Chapel<br />Furniture</h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Custom furniture created around your requirements, dimensions, materials and design.
            </p>
            <ul className="space-y-4 mb-10 text-[14px] text-[#4f453f]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Confessionals and baptismal fonts</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Choir stalls and organ cases</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Decorative carved wood panels</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Sacristy and vestry furniture</li>
            </ul>
            <Link to="/contact#contact-form" className="inline-flex bg-[#cba85a] text-white text-[13px] font-medium px-8 py-3.5 rounded-full hover:bg-[#b59540] transition-colors items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Discuss Your Project <span>→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src="/service3.jpeg" alt="Bespoke furniture craftsmanship" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 04: Interior Consultation */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>04 INTERIOR CONSULTATION</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Full Chapel Interior<br />Design Guidance</h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Not sure where to start? Our interior consultation service guides you through every decision — from floor plan layout to material selection, colour schemes, and furniture placement — ensuring your chapel achieves perfect architectural harmony and spiritual resonance.
            </p>
            <ul className="space-y-4 mb-10 text-[14px] text-[#4f453f]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Full chapel floor plan consultation</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Material and finish selection guidance</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> 3D visualisation of completed space</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Project management from start to finish</li>
            </ul>
            <Link to="/contact#contact-form" className="inline-flex bg-[#cba85a] text-white text-[13px] font-medium px-8 py-3.5 rounded-full hover:bg-[#b59540] transition-colors items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Book a Consultation <span>→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src="/service6.jpeg" alt="Interior design consultation" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 05: Church Seating */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>05 CHURCH SEATING</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Comfortable Seating for<br />Every Congregation</h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Beyond chapel pews JJC crafts a complete range of church seating — chairs for smaller chapels, stacking choir seats, presider chairs, and premium upholstered sanctuary seating. All designed for comfort during long services without compromising on sacred beauty.
            </p>
            <ul className="space-y-4 mb-10 text-[14px] text-[#4f453f]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Stackable and fixed congregation chairs</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Presider and celebrant chairs</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Premium upholstered choir seating</li>
              <li className="flex items-start gap-3"><span className="text-[#c9a84c] text-[18px] leading-none">✦</span> Custom cushion and fabric options</li>
            </ul>
            <Link to="/contact#contact-form" className="inline-flex bg-[#cba85a] text-white text-[13px] font-medium px-8 py-3.5 rounded-full hover:bg-[#b59540] transition-colors items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Request Seating Quote <span>→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src="/service7.jpeg" alt="Chapel chairs" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 06: Pulpits */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[2px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>06 PULPIT DESIGN</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Statement Pulpits That<br />Command Presence</h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              A pulpit is more than a piece of furniture — it is where the word is proclaimed. JJC designs and crafts pulpits that command presence and respect, featuring hand-carved panels, brass accents, built-in reading lights, and microphone integration for modern worship.
            </p>
            <ul className="space-y-4 mb-10 text-[14px] text-[#4f453f]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Hand-carved decorative panels
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Brass and metal accent options
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Built-in reading light integration
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Microphone and AV cable management
              </li>
            </ul>
            <Link to="/contact#contact-form" className="inline-flex bg-[#cba85a] text-white text-[13px] font-medium px-8 py-3.5 rounded-full hover:bg-[#b59540] transition-colors items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Design Your Pulpit <span>→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src="/service5.jpeg" alt="Ornate pulpit" className="w-full h-full object-cover" />
          </div>
        </div>

      </section>
      
      {/* ── HOW WE WORK ── */}
      <section className="relative text-center mt-12 pb-32">
        {/* Split Background */}
        <div className="absolute inset-0 z-0">
          <div className="h-1/2 bg-[#cba85a]"></div>
          <div className="h-1/2 bg-[#fffcfaf0]"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-24">
          <h2 className="text-[42px] md:text-[48px] text-[#1a110a] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            How We Work
          </h2>
          <p className="text-[#4f453f] text-[15px] max-w-2xl mx-auto mb-20" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            From your first call to final installation — a simple, transparent process.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>, title: 'Consultation', desc: 'We listen to your vision and understand your chapel space and budget requirements.' },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="6.5" y1="21" x2="10.5" y2="7.5"></line><line x1="17.5" y1="21" x2="13.5" y2="7.5"></line></svg>, title: 'Design', desc: 'Our team creates detailed drawings and presents material and finish options for your approval.' },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9.5 15.5l5-5"></path></svg>, title: 'Crafting', desc: 'Master craftsmen handcraft every piece using only premium selected hardwoods.' },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>, title: 'Installation', desc: 'We professionally deliver and install everything in your chapel — ready to use.' }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 flex flex-col items-center justify-start border border-[#d2c4bc]/30 shadow-lg relative pt-14">
                {/* Number Circle overlaying the top border */}
                <div className="absolute -top-6 w-12 h-12 bg-white rounded-full border-2 border-[#cba85a] text-[#cba85a] flex items-center justify-center text-[18px] font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {i + 1}
                </div>
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-[18px] font-bold text-[#1a110a] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{step.title}</h3>
                <p className="text-[#4f453f] text-[13px] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link to="/contact#contact-form" className="inline-block bg-[#cba85a] text-white text-[13px] font-medium px-10 py-4 rounded-full hover:bg-[#b59540] transition-colors shadow-md" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── ONLY THE FINEST WOOD ── */}
      <section className="bg-[#fffcfaf0] py-16 px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#c9a84c] text-[10px] font-semibold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            OUR MATERIALS
          </p>
          <h2 className="text-[44px] md:text-[56px] text-[#1a110a] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Only the Finest Wood
          </h2>
          <p className="text-[#4f453f] text-[16px] max-w-2xl mx-auto mb-16" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            We source premium hardwoods known for longevity and beauty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
            {materials.length > 0 ? (
              materials.map((mat) => (
                <div key={mat.id} className="text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d2c4bc]/30 group cursor-pointer hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-[240px] w-full shrink-0">
                    <img src={mat.imageUrl} alt={mat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-[#1a110a] font-bold text-[18px] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{mat.title}</h3>
                    <p className="text-[#4f453f] text-[13px] leading-relaxed mb-6 flex-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{mat.description}</p>
                    <div className="w-8 h-px bg-[#cba85a] mt-auto"></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="md:col-span-3 text-center text-slate-500 py-10" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                More materials coming soon.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="bg-[#cba85a] py-24 px-6 text-center text-[#1a110a]">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#1a110a] text-[10px] font-bold tracking-[3px] uppercase mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            READY TO BEGIN
          </p>
          <h2 className="text-[44px] md:text-[64px] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Let's Build Something Beautiful<br />Together
          </h2>
          <p className="text-[#1a110a]/80 text-[16px] mb-12" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Every great chapel space starts with a single conversation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact#contact-form" className="bg-[#1a110a] text-white text-[14px] font-medium px-10 py-4 rounded-full hover:bg-black transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Enquire
            </Link>
            <a href="https://wa.me/919188723168" target="_blank" rel="noopener noreferrer" className="border border-[#1a110a] text-[#1a110a] text-[14px] font-medium px-10 py-4 rounded-full hover:bg-[#1a110a]/10 transition-colors flex items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.524 5.855L.057 23.5l5.757-1.449A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.528-5.218-1.444l-.374-.222-3.418.861.878-3.307-.243-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
