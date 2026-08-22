import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      initial: 'S',
      church: "St. Mary's Forane Church",
      location: 'Thrissur',
      service: 'Chapel Pews',
      text: '"The pews JJC crafted for our church are absolutely magnificent. They perfectly blend with the heritage architecture of our century-old parish."',
      author: 'Fr. Sebastian Mathew',
      title: 'Parish Priest',
      year: '2023'
    },
    {
      initial: 'G',
      church: 'Grace Fellowship Church',
      location: 'Kochi',
      service: 'Full Interior',
      text: '"From the first consultation to the final installation JJC was professional, respectful, and delivered exceptional quality woodwork."',
      author: 'Pastor David Emmanuel',
      title: 'Senior Pastor',
      year: '2022'
    },
    {
      initial: 'S',
      church: "St. Joseph's Cathedral",
      location: 'Kozhikode',
      service: 'Altar Furniture',
      text: '"The altar JJC built for us is the centrepiece of our cathedral. The intricate carving detail is a testament to their devotion to the craft."',
      author: 'Fr. Joseph Kurien',
      title: 'Cathedral Rector',
      year: '2023'
    },
    {
      initial: 'H',
      church: 'Holy Redeemer Chapel',
      location: 'Palakkad',
      service: 'Pulpit Design',
      text: '"Our new pulpit is a masterpiece. The hand-carved panels tell a story, and the finish is exquisite."',
      author: 'Sr. Theresa George',
      title: 'Chapel Administrator',
      year: '2021'
    },
    {
      initial: 'S',
      church: "St. Peter's Church",
      location: 'Kannur',
      service: 'Church Seating',
      text: '"We replaced all our old chairs with JJC custom seating. The congregation immediately noticed the superior comfort and beautiful aesthetics."',
      author: 'Deacon Philip Varghese',
      title: 'Church Administrator',
      year: '2022'
    },
    {
      initial: 'C',
      church: 'Christ Church',
      location: 'Trivandrum',
      service: 'Custom Woodwork',
      text: '"JJC built our confessional and sacristy cabinets. The attention to detail and reverence for the sacred space was deeply appreciated."',
      author: 'Fr. Anthony Fernandez',
      title: 'Parish Priest',
      year: '2023'
    }
  ];

  const features = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      title: 'Decade of Trust',
      desc: 'Over 10 years serving chapels and churches across South India.'
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
      title: '4.9 Star Rating',
      desc: 'Consistently rated 5 stars by every client we have served.'
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
      title: 'Personal Service',
      desc: 'Every client works directly with our founder — no middlemen, ever.'
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cba85a" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      title: 'On Time, Every Time',
      desc: 'We have never missed a project deadline in over a decade.'
    }
  ];

  return (
    <div className="font-sans text-[#1a110a] bg-[#fffcfaf0] overflow-x-hidden">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[56px] md:text-[72px] text-[#1a110a] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Testimonials
          </h1>
          <p className="text-[#4f453f] text-[16px] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Echoes of reverence from spaces transformed. Discover the impact of our craftsmanship through the voices of those who dwell within.
          </p>
        </div>
      </section>

      {/* ── STATS BANNER (RATING SECTION) ── */}
      <section className="bg-[#cba85a] py-16 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between relative">
          
          <div className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 text-[#1a110a] relative w-full">
            <div className="text-[72px] font-normal leading-none mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>4.9</div>
            <div className="flex gap-1.5 mb-3 text-[#1a110a]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#1a110a]/80" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>OVERALL RATING</p>
          </div>

          <div className="hidden md:block w-px h-20 bg-[#1a110a]/15"></div>
          <div className="md:hidden w-full h-px bg-[#1a110a]/15 my-4"></div>

          <div className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 text-[#1a110a] relative w-full">
            <div className="relative mb-4">
              <div className="text-[72px] font-normal leading-none tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>47</div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-6 h-px bg-[#1a110a]/40"></div>
            </div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#1a110a]/80" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>HAPPY CLIENTS</p>
          </div>

          <div className="hidden md:block w-px h-20 bg-[#1a110a]/15"></div>
          <div className="md:hidden w-full h-px bg-[#1a110a]/15 my-4"></div>

          <div className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 text-[#1a110a] relative w-full">
            <div className="text-[72px] font-normal leading-none mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100%</div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#1a110a]/80" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>WOULD RECOMMEND US</p>
          </div>

          <div className="hidden md:block w-px h-20 bg-[#1a110a]/15"></div>
          <div className="md:hidden w-full h-px bg-[#1a110a]/15 my-4"></div>

          <div className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 text-[#1a110a] relative w-full">
            <div className="relative mb-4">
              <div className="text-[72px] font-normal leading-none tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>10</div>
              <div className="absolute top-1/2 -translate-y-[60%] -right-8 text-3xl font-light text-[#1a110a]/40">+</div>
            </div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#1a110a]/80" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>YEARS TRUSTED</p>
          </div>

        </div>
      </section>

      {/* ── FEATURED TESTIMONIAL ── */}
      <section className="bg-[#221812] py-24 px-6 text-white">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-[45%] h-[400px] lg:h-[600px] rounded-2xl overflow-hidden relative shadow-2xl">
            <img src="/portfolio_interior.jpg" alt="Chapel Interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="w-full lg:w-[55%] lg:pl-12">
            <div className="text-[#594435] text-[72px] font-serif leading-none h-12 select-none">“</div>
            <p className="text-[24px] md:text-[32px] font-medium italic leading-relaxed mb-10 text-[#f3ecea]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              "JJC did not simply build furniture for our cathedral. They built something that our congregation will treasure for the next hundred years. The craftsmanship, the attention to detail, and the genuine reverence they brought to our space was extraordinary. I would recommend them without hesitation to any church or chapel in India."
            </p>
            
            <div className="w-12 h-px bg-[#705a4c] mb-8"></div>
            
            <h4 className="font-bold text-[16px] text-white mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>His Excellency Bishop Thomas Varghese</h4>
            <p className="text-[#cba85a] text-[12px] font-medium mb-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Sacred Heart Cathedral, Thrissur</p>
            <p className="text-[#a48e83] text-[11px] mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Project completed 2022</p>
            
            <div className="flex gap-1 text-[#cba85a]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── TESTIMONIAL GRID ── */}
      <section className="bg-[#fdfbf7] py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-[#cba85a] text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>WHAT OUR CLIENTS SAY</p>
            <h2 className="text-[40px] md:text-[56px] text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Trusted by Chapels Across South India</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#e8ddd8]/50 flex flex-col h-full">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#fdf8ed] text-[#cba85a] font-serif text-xl flex items-center justify-center border border-[#cba85a]/20">
                      {test.initial}
                    </div>
                    <div>
                      <h4 className="text-[#1a110a] text-[14px] font-bold" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{test.church}</h4>
                      <p className="text-[#a48e83] text-[12px] mt-0.5" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{test.location}</p>
                    </div>
                  </div>
                  <div className="text-[#e8ddd8] font-serif text-4xl leading-none">”</div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="bg-[#fdf8ed] text-[#b59540] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    {test.service}
                  </div>
                  <div className="flex gap-0.5 text-[#cba85a]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                </div>

                <p className="text-[#4f453f] text-[14px] italic leading-relaxed flex-1 mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {test.text}
                </p>

                <div className="flex justify-between items-end mt-auto pt-6 border-t border-[#f3ecea]">
                  <div>
                    <h5 className="text-[#1a110a] text-[13px] font-bold mb-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{test.author}</h5>
                    <p className="text-[#a48e83] text-[11px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{test.title}</p>
                  </div>
                  <div className="bg-[#f3ecea] text-[#705a4c] text-[11px] font-medium px-3 py-1 rounded-full">
                    {test.year}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHAPELS TRUST JJC ── */}
      <section className="bg-[#fdfbf7] pb-24 px-6 border-b border-[#e8ddd8]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[40px] md:text-[56px] text-[#1a110a] text-center mb-16" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why Chapels Trust JJC</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-sm border border-[#e8ddd8]/50">
                <div className="w-14 h-14 rounded-full bg-[#fdf8ed] flex items-center justify-center border border-[#cba85a]/30 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[22px] text-[#1a110a] font-medium mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{feature.title}</h3>
                <p className="text-[#705a4c] text-[14px] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK REVIEW FORM ── */}
      <section className="bg-[#2a2118] py-24 px-6 text-white relative">
        <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#362a1f] hidden lg:block z-0"></div>
        
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 lg:pr-12 pt-8">
            <p className="text-[#cba85a] text-[11px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>SHARE YOUR EXPERIENCE</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Worked With Us Before?</h2>
            <p className="text-[#a48e83] text-[15px] leading-relaxed mb-12 max-w-md" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Your review helps other chapels and churches find the craftsmanship they deserve. Share your JJC experience and help us serve more sacred spaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#cba85a] text-white text-[12px] font-bold px-8 py-4 rounded-md tracking-widest uppercase hover:bg-[#b59540] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>
                LEAVE A GOOGLE REVIEW
              </button>
              <button className="border border-[#705a4c] text-[#d2c4bc] text-[12px] font-bold px-8 py-4 rounded-md tracking-widest uppercase hover:bg-white/5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>
                SHARE ON FACEBOOK
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#3b2f23] rounded-2xl p-10 lg:p-12 border border-white/5 shadow-2xl relative z-10">
              <h3 className="text-[28px] text-white font-medium mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Quick Review Form</h3>
              <p className="text-[#a48e83] text-[13px] mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Takes less than 2 minutes.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-[#a48e83] text-[10px] font-bold tracking-widest uppercase mb-3">YOUR RATING</label>
                  <div className="flex gap-2 text-[#cba85a] cursor-pointer">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#a48e83] text-[10px] font-bold tracking-widest uppercase mb-2">NAME</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#46382a] border border-[#594435] rounded-md py-4 px-4 text-[15px] text-white placeholder:text-[#8a7668] focus:outline-none focus:border-[#cba85a] transition-colors" />
                </div>

                <div>
                  <label className="block text-[#a48e83] text-[10px] font-bold tracking-widest uppercase mb-2">CHURCH NAME</label>
                  <input type="text" placeholder="St. Mary's Cathedral" className="w-full bg-[#46382a] border border-[#594435] rounded-md py-4 px-4 text-[15px] text-white placeholder:text-[#8a7668] focus:outline-none focus:border-[#cba85a] transition-colors" />
                </div>

                <div>
                  <label className="block text-[#a48e83] text-[10px] font-bold tracking-widest uppercase mb-2">REVIEW</label>
                  <textarea placeholder="Tell us about your experience..." rows="4" className="w-full bg-[#46382a] border border-[#594435] rounded-md py-4 px-4 text-[15px] text-white placeholder:text-[#8a7668] focus:outline-none focus:border-[#cba85a] transition-colors resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-[#cba85a] text-[#1a110a] text-[13px] font-bold tracking-widest py-4 mt-2 rounded-md hover:bg-[#b59540] transition-colors uppercase">
                  SUBMIT REVIEW →
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
