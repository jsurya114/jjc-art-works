import React, { useState } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filters = ['All Work', 'Chapel Pews', 'Altar Furniture', 'Custom Woodwork', 'Church Seating', 'Pulpits'];

  return (
    <div className="font-sans text-[#1a110a] bg-[#fffcfaf0] overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-[#868076] py-32 px-6 text-center text-white">
        <div className="max-w-[800px] mx-auto pt-10 pb-4">
          <p className="text-[#cba85a] text-[11px] font-bold tracking-[3px] uppercase mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            OUR GALLERY
          </p>
          <h1 className="text-[44px] md:text-[64px] leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Years of Sacred Work,<br />Captured in Detail
          </h1>
          <p className="text-white/80 text-[15px] font-medium tracking-wide" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Every photograph tells the story of a chapel transformed.
          </p>
        </div>
      </section>

      {/* ── RECENT RESTORATIONS ── */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto text-center">
        <h2 className="text-[36px] md:text-[42px] text-[#1a110a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Recent Restorations
        </h2>
        <div className="w-12 h-px bg-[#705a4c] mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden h-[500px]">
            <img src="/portfolio_interior.jpg" alt="Chapel Interior" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden h-[500px]">
            <img src="/services_wood_carving.jpg" alt="Wood Carving Detail" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden h-[500px]">
            <img src="/chapel_hero.jpg" alt="Modern Chapel" className="w-full h-full object-cover grayscale-[0.3]" />
          </div>
        </div>
      </section>

      {/* ── FILTER & MAIN GALLERY ── */}
      <section className="py-12 px-6 max-w-[1280px] mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 border-b border-[#e8ddd8] pb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider transition-colors border ${
                activeFilter === filter 
                  ? 'bg-[#705a4c] text-white border-[#705a4c]' 
                  : 'bg-transparent text-[#705a4c] border-[#d2c4bc] hover:border-[#705a4c]'
              }`}
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          
          {/* Large Left Column */}
          <div className="lg:col-span-1 rounded-2xl overflow-hidden relative group h-[600px] lg:h-[830px]">
            <img src="/portfolio_altar.jpg" alt="St. Jude's Altar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-[32px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>St. Jude's Altar</h3>
              <p className="text-white/80 text-[11px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>VIEW PROJECT</p>
            </div>
          </div>

          {/* Right Two Columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Top Wide */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[260px]">
              <img src="/portfolio_pews.jpg" alt="Cathedral Pew Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-[28px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Cathedral Pew Collection</h3>
                <p className="text-white/80 text-[11px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>VIEW PROJECT</p>
              </div>
            </div>

            {/* Middle Left */}
            <div className="rounded-2xl overflow-hidden relative group h-[260px]">
              <img src="/services_designer.jpg" alt="Modern Oratory" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-[24px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Modern Oratory</h3>
                <p className="text-white/80 text-[11px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>VIEW PROJECT</p>
              </div>
            </div>

            {/* Middle Right */}
            <div className="rounded-2xl overflow-hidden relative group h-[260px]">
              <img src="/craftsman_wood.jpg" alt="Sacristy Cabinetry" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-[24px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Sacristy Cabinetry</h3>
                <p className="text-white/80 text-[11px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>VIEW PROJECT</p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="rounded-2xl overflow-hidden relative group h-[260px]">
              <img src="/services_chairs.jpg" alt="Liturgical Seating" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-[24px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Liturgical Seating</h3>
                <p className="text-white/80 text-[11px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>VIEW PROJECT</p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="rounded-2xl overflow-hidden relative group h-[260px]">
              <img src="/services_pulpit.jpg" alt="Hand Carved Pulpit" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-[24px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Hand Carved Pulpit</h3>
                <p className="text-white/80 text-[11px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>VIEW PROJECT</p>
              </div>
            </div>
          </div>

          {/* Pagination Pill */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#1a110a]/80 backdrop-blur-md text-white px-6 py-3 rounded-full text-[12px] tracking-[2px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            <button className="hover:text-[#cba85a] transition-colors">{'<'}</button>
            <span>6 / 10</span>
            <button className="hover:text-[#cba85a] transition-colors">{'>'}</button>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="bg-[#2d1f15] py-32 px-6 text-center text-white mt-16">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[#cba85a] text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>BEHIND THE CRAFT</p>
          <h2 className="text-[44px] md:text-[56px] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Watch Our Craftsmen at Work</h2>
          <p className="text-[#a48e83] text-[15px] mb-16" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>A glimpse into the everyday where every piece begins.</p>
          
          <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl aspect-video mb-8 group cursor-pointer border border-white/10">
            <img src="/craftsman_wood.jpg" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#d2c4bc] text-[#2d1f15] rounded-full flex items-center justify-center group-hover:bg-[#cba85a] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg pl-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>

            {/* Video Controls Mockup */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-center gap-4 text-white">
              <div className="text-[12px] font-medium" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>0:15 / 4:32</div>
              <div className="flex-1 h-1 bg-white/30 rounded-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-[#cba85a] rounded-full"></div>
              </div>
            </div>
          </div>
          
          <p className="text-[#a48e83] text-[13px] italic" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            The Making of St. Joseph's Altar
          </p>
        </div>
      </section>

      {/* ── MORE FROM PORTFOLIO ── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#cba85a] text-[11px] font-bold tracking-[3px] uppercase mb-12" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>MORE FROM OUR PORTFOLIO</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden h-[300px]"><img src="/portfolio_interior.jpg" alt="Chapel Interior" className="w-full h-full object-cover" /></div>
            <div className="rounded-xl overflow-hidden h-[300px]"><img src="/services_designer.jpg" alt="Cabinetry" className="w-full h-full object-cover filter brightness-[0.7]" /></div>
            <div className="rounded-xl overflow-hidden h-[300px]"><img src="/wood_rose.jpg" alt="Cushion detail" className="w-full h-full object-cover" /></div>
            
            <div className="rounded-xl overflow-hidden h-[300px]"><img src="/chapel_hero.jpg" alt="Brick Chapel" className="w-full h-full object-cover" /></div>
            <div className="rounded-xl overflow-hidden h-[300px] bg-[#e8ddd8] p-4"><img src="/wood_teak.jpg" alt="Wood Samples" className="w-full h-full object-cover rounded-lg shadow-sm" /></div>
            <div className="rounded-xl overflow-hidden h-[300px]"><img src="/portfolio_pews.jpg" alt="Installing pews" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="bg-[#cba85a] py-16 px-6 text-center text-[#1a110a]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-[#1a110a]/20">
          <div className="flex-1 w-full py-8 md:py-0 flex flex-col items-center">
            <div className="text-[56px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>50</div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>CHAPEL PROJECTS</p>
          </div>
          <div className="flex-1 w-full py-8 md:py-0 flex flex-col items-center">
            <div className="text-[56px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>10</div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>YEARS OF CRAFT</p>
          </div>
          <div className="flex-1 w-full py-8 md:py-0 flex flex-col items-center">
            <div className="text-[56px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100%</div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>CUSTOM MADE</p>
          </div>
          <div className="flex-1 w-full py-8 md:py-0 flex flex-col items-center">
            <div className="text-[56px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>15</div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>MASTER CRAFTSMEN</p>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM / FOLLOW ── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#cba85a] text-[11px] font-bold tracking-[3px] uppercase mb-4 flex items-center justify-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            @JJC_CHAPELINTERIORS
          </p>
          <h2 className="text-[36px] md:text-[42px] mb-4 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Follow Our Journey</h2>
          <p className="text-[#4f453f] text-[14px] mb-12" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>See our process, find inspiration, and follow our latest projects on Instagram.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              "/portfolio_altar.jpg",
              "/services_chairs.jpg",
              "/portfolio_interior.jpg",
              "/services_drafting.jpg",
              "/craftsman_wood.jpg"
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border border-[#d2c4bc]/40 shadow-sm">
                <img src={img} alt="Instagram post" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          <button className="border border-[#d2c4bc] text-[#705a4c] text-[12px] font-bold px-8 py-3 rounded-full hover:border-[#cba85a] hover:text-[#cba85a] transition-colors uppercase tracking-[2px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Follow on Instagram
          </button>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1f1611] py-24 px-6 text-center text-white border-b border-white/10">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#cba85a] text-[10px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            READY TO START YOUR NEXT PROJECT?
          </p>
          <h2 className="text-[36px] md:text-[48px] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Let's Create Your Chapel's Story
          </h2>
          <p className="text-[#a48e83] text-[15px] mb-12" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            From concept to installation, we're with you every step of the way.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-[#cba85a] text-white text-[13px] font-bold px-8 py-3.5 rounded-sm hover:bg-[#b59540] transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Start Your Project
            </button>
            <button className="border border-[#cba85a] text-[#cba85a] text-[13px] font-bold px-8 py-3.5 rounded-sm hover:bg-[#cba85a]/10 transition-colors flex items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}
