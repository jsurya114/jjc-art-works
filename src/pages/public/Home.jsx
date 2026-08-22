import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icon components matching the Figma design
const PewIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#705a4c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="20" height="4" rx="1"/>
    <path d="M4 13v4M20 13v4M4 17h16"/>
    <path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);
const AltarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#705a4c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v8M8 6h8"/>
    <rect x="4" y="10" width="16" height="3" rx="1"/>
    <path d="M6 13v6M18 13v6M6 19h12"/>
  </svg>
);
const WoodIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#705a4c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17l4-10 4 6 3-4 4 8"/>
    <path d="M2 20h20"/>
  </svg>
);
const InteriorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#705a4c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const services = [
  {
    icon: <PewIcon />,
    title: "Chapel Pews",
    desc: "Custom wooden pew seating designed for comfort and reverence. Crafted from solid walnut with traditional joinery.",
  },
  {
    icon: <AltarIcon />,
    title: "Altar Furniture",
    desc: "Handcrafted altars and pulpits that honour the sacred space, featuring intricate brass detailing and stone inlays.",
  },
  {
    icon: <WoodIcon />,
    title: "Custom Woodwork",
    desc: "Bespoke furniture pieces built to your exact specifications. From confessionals to intricately carved baptismal fonts.",
  },
  {
    icon: <InteriorIcon />,
    title: "Chapel Interiors",
    desc: "Full chapel interior design guidance from concept to completion, ensuring architectural harmony and spiritual resonance.",
  },
];

const works = [
  { img: "/portfolio_pews.jpg", tag: "Full Interior", title: "St. Jude's Basilica", location: "Oxford, UK" },
  { img: "/portfolio_interior.jpg", tag: "Pews", title: "Cathedral of Light", location: "Vienna, Austria" },
  { img: "/portfolio_altar.jpg", tag: "Altars", title: "Abbey of St. Michel", location: "Normandy, France" },
];

const reviews = [
  { quote: "JJC completely transformed our chapel. The pews are beautifully crafted and built to last for generations to come.", name: "Fr. Thomas Joseph", org: "St. Mary's Chapel, Thrissur" },
  { quote: "The altar they built for us is absolutely stunning. Every detail was crafted with such care and precision.", name: "Pastor David Emmanuel", org: "Grace Fellowship Church, Kochi" },
  { quote: "Professional, skilled, and truly understand the sacred nature of the work they do. Highly recommended.", name: "Fr. Sebastian Mathew", org: "Sacred Heart Chapel, Palakkad" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-[#fff8f5] text-[#26170c]">


      {/* ── HERO ── */}
      <section className="max-w-[1280px] mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-72px)]">
        {/* Left */}
        <div className="w-full lg:w-[55%] bg-[#fff8f5] flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 lg:py-24">
          <h1 className="text-[56px] md:text-[68px] lg:text-[76px] leading-[1.05] mb-8 text-[#26170c]" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.02em' }}>
            Crafting Sacred<br />Spaces,<br />
            <em>One Piece at a<br />Time.</em>
          </h1>
          <p className="text-[#4f453f] text-[17px] leading-relaxed mb-10 max-w-[480px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Bespoke chapel interiors and furniture, crafted with precision, purpose, and timeless craftsmanship.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button className="bg-[#26170c] text-[#fff8f5] text-[13px] font-semibold px-8 py-4 rounded-full tracking-wide hover:bg-[#3d2b1f] transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              View Our Work
            </button>
            <button className="border border-[#26170c] text-[#26170c] text-[13px] font-semibold px-8 py-4 rounded-full tracking-wide hover:bg-[#26170c]/5 transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Start Enquiry
            </button>
          </div>
          <div className="border-t border-[#d2c4bc] pt-8 flex flex-wrap items-center gap-5 text-[11px] font-medium text-[#4f453f] uppercase tracking-widest" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            <span>25+ Years Experience</span>
            <span className="text-[#c9a84c]">✦</span>
            <span>60+ Chapels Served</span>
            <span className="text-[#c9a84c]">✦</span>
            <span>100% Custom Designs</span>
          </div>
        </div>

        {/* Right – image */}
        <div className="w-full lg:w-[45%] relative min-h-[480px] lg:min-h-0">
          <img
            src="/chapel_hero.jpg"
            alt="Beautiful chapel interior crafted by JJC"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── OUR CRAFT ── */}
      <section className="bg-[#fff8f5] py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#705a4c] mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              WHAT WE DO
            </p>
            <h2 className="text-[64px] md:text-[80px] text-[#26170c] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.02em', lineHeight: 1 }}>
              Our Craft
            </h2>
            <p className="text-[#4f453f] text-[17px] max-w-[600px] mx-auto leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Every piece handcrafted for sacred spaces. We blend ancient techniques with modern precision to create enduring testaments of faith.
            </p>
            <div className="w-16 h-px bg-[#d2c4bc] mx-auto mt-10"></div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8ddd8] p-8 flex flex-col hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                <div className="w-14 h-14 bg-[#f3ecea] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ecddd9] transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-[22px] font-medium text-[#26170c] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {s.title}
                </h3>
                <p className="text-[#4f453f] text-[15px] leading-relaxed flex-1 mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {s.desc}
                </p>
                <a href="#" className="flex items-center gap-2 text-[#705a4c] text-[12px] font-semibold tracking-wider uppercase hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Learn more <span className="text-base">→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="border border-[#705a4c] text-[#26170c] text-[12px] font-semibold px-10 py-4 tracking-[2px] uppercase hover:bg-[#705a4c] hover:text-white transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section className="bg-[#fff8f5] py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[64px] md:text-[80px] text-[#26170c] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '-0.03em', lineHeight: 1 }}>
              Our Work
            </h2>
            <div className="w-16 h-[2px] bg-[#26170c]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {works.map((w, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer h-[380px]">
                <img
                  src={w.img}
                  alt={w.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f06]/85 via-[#1a0f06]/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-5 right-5">
                  <span className="bg-[#1a0f06]/40 backdrop-blur-sm border border-white/30 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full tracking-wider" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    {w.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-8 h-px bg-[#dec1af] mb-4"></div>
                  <h3 className="text-[24px] font-medium text-white mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {w.title}
                  </h3>
                  <p className="text-[#dec1af] text-[11px] font-semibold uppercase tracking-widest" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    {w.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="border border-[#705a4c] text-[#26170c] text-[12px] font-semibold px-10 py-4 tracking-[2px] uppercase hover:bg-[#705a4c] hover:text-white transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              View All Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-[#fff8f5] py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-stretch">
          {/* Image */}
          <div className="w-full lg:w-[45%] relative min-h-[420px]">
            <img
              src="/craftsman_wood.jpg"
              alt="JJC craftsman at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Right fade */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fff8f5] to-transparent"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16">
            <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#c9a84c] mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              WHO WE ARE
            </p>
            <h2 className="text-[42px] md:text-[52px] text-[#26170c] leading-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Built with faith, crafted<br />with hands
            </h2>
            <p className="text-[#4f453f] text-[17px] leading-relaxed mb-10 max-w-[500px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              JJC has been serving chapels and churches for over a decade. Every piece we create is built to honour the sacred space it will inhabit — from the first sketch to the final polish.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-0 mb-10">
              <div className="pr-8 border-r border-[#d2c4bc]">
                <div className="text-[36px] font-medium text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>25+</div>
                <div className="text-[#4f453f] text-[14px] mt-1 leading-tight" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Years of<br />craft</div>
              </div>
              <div className="px-8 border-r border-[#d2c4bc]">
                <div className="text-[36px] font-medium text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>60+</div>
                <div className="text-[#4f453f] text-[14px] mt-1 leading-tight" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Projects<br />completed</div>
              </div>
              <div className="pl-8">
                <div className="text-[36px] font-medium text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100%</div>
                <div className="text-[#4f453f] text-[14px] mt-1 leading-tight" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Custom<br />made</div>
              </div>
            </div>

            <a href="#" className="flex items-center gap-2 text-[#c9a84c] text-[12px] font-semibold tracking-[2px] uppercase hover:text-[#b59540] transition-colors" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              READ OUR STORY <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="bg-[#3d2b1f] py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#dec1af] mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              CLIENT REVIEWS
            </p>
            <h2 className="text-[42px] md:text-[52px] text-[#fff8f5] font-medium" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#fff8f5] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[240px]">
                {/* Big quote */}
                <span className="absolute top-3 left-5 text-[80px] leading-none text-[#dec1af] opacity-50 font-serif select-none">"</span>
                <p className="text-[#1d1b1a] text-[16px] italic leading-relaxed relative z-10 pt-8 mb-8" style={{ fontFamily: "Georgia, serif" }}>
                  {r.quote}
                </p>
                <div>
                  <div className="text-[#c9a84c] tracking-widest text-[14px] mb-2">★★★★★</div>
                  <h4 className="font-bold text-[#1d1b1a] text-[16px]" style={{ fontFamily: "Georgia, serif" }}>{r.name}</h4>
                  <p className="text-[#705a4c] text-[11px] font-medium uppercase tracking-[2px] mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{r.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#c9a84c] py-24 px-6 flex items-center justify-center">
        <div className="text-center max-w-[600px]">
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#1c1610] mb-5" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            START YOUR PROJECT
          </p>
          <h2 className="text-[44px] md:text-[52px] text-[#1c1610] mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Let's Create Something Meaningful
          </h2>
          <p className="text-[#4a3728] text-[17px] mb-10" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Tell us about your space and we will create something truly beautiful.
          </p>
          <button className="border-2 border-[#1c1610] text-[#1c1610] text-[15px] font-bold px-10 py-4 rounded-2xl flex items-center gap-3 mx-auto hover:bg-[#1c1610] hover:text-[#c9a84c] transition-all duration-200" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.524 5.855L.057 23.5l5.757-1.449A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.528-5.218-1.444l-.374-.222-3.418.861.878-3.307-.243-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            WhatsApp Us Now
          </button>
        </div>
      </section>


    </div>
  );
}
