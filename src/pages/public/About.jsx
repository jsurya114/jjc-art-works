import React from 'react';

export default function About() {
  return (
    <div className="bg-[#fffcfaf0] text-[#1a110a] font-sans overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="/craftsman_wood.jpg" alt="Craftsman working in workshop" className="w-full h-full object-cover filter brightness-[0.4]" />
          <div className="absolute inset-0 bg-[#26170c]/50"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto pt-[72px]">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[3px] uppercase mb-5" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            OUR STORY
          </p>
          <h1 className="text-[56px] md:text-[80px] text-[#fff8f5] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Built with Faith.<br />Crafted with Hands.
          </h1>
          <p className="text-[#e8ddd8] text-[15px] max-w-2xl mx-auto tracking-wide leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            A decade of sacred craftsmanship — creating timeless chapel interiors and furniture for clients across Kerala and around the world
          </p>
        </div>
      </section>

      {/* ── LEGACY SECTION ── */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-12">
            <p className="text-[#1a110a] text-[11px] font-bold tracking-[3px] uppercase mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              WHO WE ARE
            </p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-8 text-[#1a110a]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              A Family Legacy<br />of Sacred<br />Craftsmanship
            </h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              For over three generations, our family has dedicated itself to sacred woodworking. We craft timeless religious interiors with care, precision, and purpose. Every detail, joint, and grain matters, creating spaces made for reverence.
            </p>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-10" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Our approach blends traditional craftsmanship with modern, elegant design. We shape every piece with care to create harmony in sacred spaces. From raw timber to the final detail, every creation is built to last.
            </p>
            
            <div className="border-l-2 border-[#c9a84c] pl-8 mb-12">
              <p className="text-[28px] text-[#1a110a] italic leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                "We build each piece as if it were for our own place of worship."
              </p>
            </div>

            <button className="text-[#1a110a] text-[13px] font-bold tracking-widest uppercase border-b-2 border-[#1a110a] pb-1 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              View Our Work →
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden h-[600px] shadow-lg">
              <img src="/services_wood_carving.jpg" alt="Master craftsman" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="bg-[#3d2b1f] text-white py-24 px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            WHAT WE STAND FOR
          </p>
          <h2 className="text-[44px] md:text-[56px] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Our Values
          </h2>
          <p className="text-[#dec1af] text-[15px] mb-16" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            The principles that guide every piece we build.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
                title: "Faith First",
                desc: "Every piece we create is an act of devotion — built to honour sacred spaces."
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                title: "Uncompromising Quality",
                desc: "We use only premium hardwoods and traditional techniques that stand the test of time."
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
                title: "Client Partnership",
                desc: "We listen deeply and work closely with every client from first sketch to final installation."
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>,
                title: "Responsible Craft",
                desc: "We source wood responsibly and build pieces designed to last for generations."
              }
            ].map((val, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-10 flex flex-col items-center bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-full border border-[#c9a84c]/30 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-[20px] font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{val.title}</h3>
                <p className="text-[#dec1af] text-[13px] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY / TIMELINE ── */}
      <section className="py-24 px-6 bg-[#fffcfaf0] text-center overflow-hidden">
        <div className="max-w-[1000px] mx-auto relative">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            OUR JOURNEY
          </p>
          <h2 className="text-[44px] md:text-[56px] text-[#1a110a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            A Decade of Sacred Craft
          </h2>
          <p className="text-[#4f453f] text-[15px] mb-20" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Key milestones in our story.
          </p>

          <div className="hidden md:flex flex-col relative w-full mt-10">
            {/* ROW 1: Top Content */}
            <div className="grid grid-cols-5 w-full">
              {/* 2014 */}
              <div className="flex flex-col items-center justify-end pb-6">
                <div className="text-[#c9a84c] text-[28px] font-medium mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2014</div>
                <h4 className="font-bold text-[#1a110a] text-[14px] mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Founded</h4>
                <p className="text-[#4f453f] text-[12px] leading-relaxed max-w-[160px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  JJC opens its first workshop in Kerala with 3 craftsmen and a vision.
                </p>
              </div>
              <div></div>
              {/* 2018 */}
              <div className="flex flex-col items-center justify-end pb-6">
                <div className="text-[#c9a84c] text-[28px] font-medium mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2018</div>
                <h4 className="font-bold text-[#1a110a] text-[14px] mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Team Grows</h4>
                <p className="text-[#4f453f] text-[12px] leading-relaxed max-w-[160px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Workshop expands to 15 master craftsmen and a design team.
                </p>
              </div>
              <div></div>
              {/* 2026 */}
              <div className="flex flex-col items-center justify-end pb-6">
                <div className="text-[#c9a84c] text-[28px] font-medium mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2026</div>
                <h4 className="font-bold text-[#1a110a] text-[14px] mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Going Digital</h4>
                <p className="text-[#4f453f] text-[12px] leading-relaxed max-w-[160px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Launching our website to serve chapels across all of India and beyond.
                </p>
              </div>
            </div>

            {/* ROW 2: The Line and Dots */}
            <div className="relative w-full h-8 flex items-center">
              <div className="absolute left-[10%] right-[10%] h-px bg-[#d2c4bc] z-0"></div>
              <div className="grid grid-cols-5 w-full relative z-10">
                <div className="flex justify-center"><div className="w-5 h-5 rounded-full bg-[#cba85a] border-4 border-[#9dbfe0]"></div></div>
                <div className="flex justify-center"><div className="w-5 h-5 rounded-full bg-[#cba85a] border-4 border-[#9dbfe0]"></div></div>
                <div className="flex justify-center"><div className="w-5 h-5 rounded-full bg-[#cba85a] border-4 border-[#9dbfe0]"></div></div>
                <div className="flex justify-center"><div className="w-5 h-5 rounded-full bg-[#cba85a] border-4 border-[#9dbfe0]"></div></div>
                <div className="flex justify-center"><div className="w-5 h-5 rounded-full bg-[#cba85a] border-4 border-[#9dbfe0]"></div></div>
              </div>
            </div>

            {/* ROW 3: Bottom Content */}
            <div className="grid grid-cols-5 w-full">
              <div></div>
              {/* 2016 */}
              <div className="flex flex-col items-center justify-start pt-6">
                <div className="text-[#c9a84c] text-[28px] font-medium mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2016</div>
                <h4 className="font-bold text-[#1a110a] text-[14px] mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>First Major Chapel</h4>
                <p className="text-[#4f453f] text-[12px] leading-relaxed max-w-[160px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Completed our first full chapel interior — pews, altar, and pulpit.
                </p>
              </div>
              <div></div>
              {/* 2021 */}
              <div className="flex flex-col items-center justify-start pt-6">
                <div className="text-[#c9a84c] text-[28px] font-medium mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2021</div>
                <h4 className="font-bold text-[#1a110a] text-[14px] mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>50th Project</h4>
                <p className="text-[#4f453f] text-[12px] leading-relaxed max-w-[160px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Celebrated completing 50 chapel projects across South India.
                </p>
              </div>
              <div></div>
            </div>
          </div>

          {/* Mobile Fallback Layout (Vertical) */}
          <div className="md:hidden flex flex-col gap-12 mt-10 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d2c4bc] -translate-x-1/2 z-0"></div>
            {[
              { year: "2014", title: "Founded", desc: "JJC opens its first workshop in Kerala with 3 craftsmen and a vision." },
              { year: "2016", title: "First Major Chapel", desc: "Completed our first full chapel interior — pews, altar, and pulpit." },
              { year: "2018", title: "Team Grows", desc: "Workshop expands to 15 master craftsmen and a design team." },
              { year: "2021", title: "50th Project", desc: "Celebrated completing 50 chapel projects across South India." },
              { year: "2026", title: "Going Digital", desc: "Launching our website to serve chapels across all of India and beyond." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center relative z-10 bg-[#fffcfaf0] py-2">
                <div className="w-5 h-5 rounded-full bg-[#cba85a] border-4 border-[#9dbfe0] mb-4"></div>
                <div className="text-[#c9a84c] text-[28px] font-medium mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item.year}</div>
                <h4 className="font-bold text-[#1a110a] text-[14px] mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{item.title}</h4>
                <p className="text-[#4f453f] text-[12px] leading-relaxed max-w-[200px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── OUR MASTER CRAFTSMEN ── */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#a48e83] text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            THE PEOPLE BEHIND JJC
          </p>
          <h2 className="text-[44px] md:text-[56px] text-[#1a110a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Our Master Craftsmen
          </h2>
          <p className="text-[#4f453f] text-[16px] mb-16" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Decades of combined experience, one shared passion.
          </p>
          <div className="w-12 h-px bg-[#d2c4bc] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                img: "/craftsman_wood.jpg",
                name: "James Joseph",
                role: "Founder & Master Craftsman",
                desc: "With over 20 years of woodworking experience James founded JJC with a vision to bring world-class craftsmanship to sacred spaces.",
                badge: "20+ Years Experience"
              },
              {
                img: "/services_designer.jpg",
                name: "Joseph Cherian",
                role: "Lead Designer",
                desc: "Joseph brings architectural precision to every project — translating client visions into detailed technical drawings."
              },
              {
                img: "/services_wood_carving.jpg",
                name: "Cyriac Thomas",
                role: "Senior Craftsman",
                desc: "Cyriac specialises in hand-carved detailing and intricate wood inlay work that defines JJC's signature style."
              }
            ].map((person, i) => (
              <div key={i} className="bg-[#f8f5f3] rounded-2xl overflow-hidden border border-[#e8ddd8] flex flex-col">
                <div className="h-[320px] w-full relative">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-[28px] font-medium text-[#1a110a] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{person.name}</h3>
                  <p className="text-[#c9a84c] text-[10px] font-bold tracking-[2px] uppercase mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{person.role}</p>
                  <p className="text-[#4f453f] text-[14px] leading-relaxed mb-8 flex-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{person.desc}</p>
                  
                  {person.badge && (
                    <div className="inline-block bg-[#f0dfd1] text-[#705a4c] text-[10px] font-bold px-4 py-2 rounded-full w-max mt-auto" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                      {person.badge}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE THE MAGIC HAPPENS ── */}
      <section className="bg-[#211a14] py-24 px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            INSIDE OUR WORKSHOP
          </p>
          <h2 className="text-[44px] md:text-[56px] text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Where the Magic Happens
          </h2>
          <p className="text-[#a48e83] text-[15px] mb-16" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Every piece begins here — in our workshop in Kerala.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top wide image spanning 2 columns */}
            <div className="md:col-span-2 rounded-xl overflow-hidden h-[400px]">
              <img src="/craftsman_wood.jpg" alt="Workshop overview" className="w-full h-full object-cover filter brightness-[0.8]" />
            </div>
            {/* Top right image */}
            <div className="col-span-1 rounded-xl overflow-hidden h-[400px]">
              <img src="/services_wood_carving.jpg" alt="Wood carving close up" className="w-full h-full object-cover filter brightness-[0.8]" />
            </div>
            
            {/* Bottom 3 images */}
            <div className="col-span-1 rounded-xl overflow-hidden h-[280px]">
              <img src="/wood_teak.jpg" alt="Wood storage" className="w-full h-full object-cover filter brightness-[0.8]" />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden h-[280px]">
              <img src="/portfolio_pews.jpg" alt="Finishing" className="w-full h-full object-cover filter brightness-[0.8]" />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden h-[280px]">
              <img src="/services_drafting.jpg" alt="Tools" className="w-full h-full object-cover filter brightness-[0.8]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── A DECADE OF RESULTS ── */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            BY THE NUMBERS
          </p>
          <h2 className="text-[44px] md:text-[56px] text-[#1a110a] mb-16" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            A Decade of Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { num: "50", text: "Chapel Projects Completed" },
              { num: "10", text: "Years of Experience" },
              { num: "6", text: "Core Services Offered" },
              { num: "100%", text: "Custom Made to Order" },
              { num: "15", text: "Master Craftsmen" },
              { num: "3", text: "States Served Across India" }
            ].map((stat, i) => (
              <div key={i} className="border border-[#e8ddd8] rounded-2xl py-12 px-6 flex flex-col items-center shadow-sm">
                <div className="text-[56px] font-medium text-[#c9a84c] mb-2 leading-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{stat.num}</div>
                <div className="text-[#4f453f] text-[13px] font-medium tracking-wide">{stat.text}</div>
                <div className="w-6 h-px bg-[#c9a84c] mt-6"></div>
              </div>
            ))}
          </div>

          <p className="text-[22px] text-[#705a4c] italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            "Trusted by churches, chapels, and cathedrals across South India."
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-[#2d1f15] py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#594435] text-[72px] font-serif leading-none h-10 select-none">“</div>
          <p className="text-[26px] md:text-[36px] font-medium italic leading-relaxed mb-12 text-[#f3ecea]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            "JJC did not just build furniture for our chapel. They built something that will serve our congregation for the next hundred years. The craftsmanship, attention to detail, and genuine care they brought to our project was beyond anything we expected. We could not recommend them more highly."
          </p>
          <div className="w-12 h-px bg-[#705a4c] mx-auto mb-8"></div>
          <h4 className="font-bold text-[16px] text-white mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Bishop Thomas Varghese</h4>
          <p className="text-[#a48e83] text-[11px] font-medium tracking-widest uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>St. Peter's Cathedral, Thrissur</p>
          <div className="flex items-center justify-center gap-1 text-[#c9a84c] text-sm">
            ★★★★★
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="bg-[#fdfbf7] py-24 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="w-full md:w-[45%]">
            <p className="text-[#c9a84c] text-[11px] font-bold tracking-[2px] uppercase mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>GET IN TOUCH</p>
            <h2 className="text-[44px] md:text-[56px] leading-[1.1] text-[#1a110a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Have a Project in<br/>Mind?</h2>
            <p className="text-[#4f453f] text-[15px] leading-relaxed mb-12 max-w-sm" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Tell us a little about your chapel and what you need. We will get back to you within 24 hours with ideas and a free quote.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f3ecea] text-[#705a4c] rounded-full flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>PHONE</p>
                  <p className="text-[#4f453f] text-[15px]">+91 91887 23168</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f3ecea] text-[#705a4c] rounded-full flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div>
                  <p className="text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>WHATSAPP</p>
                  <p className="text-[#4f453f] text-[15px]">+91 91887 23168</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f3ecea] text-[#705a4c] rounded-full flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <p className="text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>EMAIL</p>
                  <p className="text-[#4f453f] text-[15px]">inquiries@jjc-chapels.com</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-[#d2c4bc]/50 mb-6"></div>
            <p className="text-[#705a4c] text-[13px] italic" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>We typically respond within 24 hours.</p>
          </div>

          <div className="w-full md:w-[55%]">
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-12 border border-[#e8ddd8]/50">
              <h3 className="text-[32px] text-[#1a110a] font-medium mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Send Us a Message</h3>
              <p className="text-[#4f453f] text-[14px] mb-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Please fill out the form below to initiate your enquiry.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-2">Name</label>
                    <input type="text" placeholder="Your full name" className="w-full border-b border-[#d2c4bc] py-3 bg-transparent focus:outline-none focus:border-[#c9a84c] text-[15px] transition-colors placeholder:text-[#a48e83]" />
                  </div>
                  <div>
                    <label className="block text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-2">Phone</label>
                    <input type="tel" placeholder="Your contact number" className="w-full border-b border-[#d2c4bc] py-3 bg-transparent focus:outline-none focus:border-[#c9a84c] text-[15px] transition-colors placeholder:text-[#a48e83]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-2">Chapel Name</label>
                    <input type="text" placeholder="Name of your chapel" className="w-full border-b border-[#d2c4bc] py-3 bg-transparent focus:outline-none focus:border-[#c9a84c] text-[15px] transition-colors placeholder:text-[#a48e83]" />
                  </div>
                  <div>
                    <label className="block text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-2">Location</label>
                    <input type="text" placeholder="City or Region" className="w-full border-b border-[#d2c4bc] py-3 bg-transparent focus:outline-none focus:border-[#c9a84c] text-[15px] transition-colors placeholder:text-[#a48e83]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-2">Service Required</label>
                  <select className="w-full border-b border-[#d2c4bc] py-3 bg-transparent focus:outline-none focus:border-[#c9a84c] text-[15px] transition-colors text-[#1a110a] appearance-none cursor-pointer pb-4">
                    <option value="" disabled selected>Select a primary service</option>
                    <option value="pews">Chapel Pews</option>
                    <option value="altar">Altar Furniture</option>
                    <option value="bespoke">Bespoke Furniture</option>
                    <option value="consultation">Design Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1a110a] text-[11px] font-bold tracking-widest uppercase mb-2">Message</label>
                  <textarea placeholder="Describe your project vision or specific needs..." rows="3" className="w-full border-b border-[#d2c4bc] py-3 bg-transparent focus:outline-none focus:border-[#c9a84c] text-[15px] transition-colors placeholder:text-[#a48e83] resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full bg-[#cba85a] text-white text-[14px] font-bold tracking-wider py-4 rounded-md hover:bg-[#b59540] transition-colors flex items-center justify-center gap-2 uppercase">
                    Send Enquiry →
                  </button>
                  <p className="text-center text-[#a48e83] text-[11px] mt-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="bg-[#cba85a] py-20 px-6 text-center text-[#1a110a]">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#1a110a] text-[10px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            READY TO BEGIN
          </p>
          <h2 className="text-[36px] md:text-[48px] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Let's Create Something Sacred<br />Together
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-[#1a110a] text-white text-[13px] font-bold px-8 py-3.5 rounded-sm hover:bg-black transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Enquire Now
            </button>
            <button className="border border-[#1a110a] text-[#1a110a] text-[13px] font-bold px-8 py-3.5 rounded-sm hover:bg-[#1a110a]/10 transition-colors flex items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.524 5.855L.057 23.5l5.757-1.449A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.528-5.218-1.444l-.374-.222-3.418.861.878-3.307-.243-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
