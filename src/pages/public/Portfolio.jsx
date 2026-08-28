import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Full Interiors', 'Altars', 'Seating', 'Restoration'];

  // Fallback data in case Firestore is empty
  const fallbackProjects = [
    {
      id: 'fb1',
      title: "St. Jude's Basilica",
      category: "Full Interiors",
      location: "Thrissur, Kerala",
      year: "2023",
      imageUrl: "/portfolio_pews.jpg",
      span: "col-span-1 md:col-span-2 row-span-2",
      height: "h-[400px] md:h-[600px]"
    },
    {
      id: 'fb2',
      title: "Grace Fellowship Church",
      category: "Seating",
      location: "Kochi, Kerala",
      year: "2022",
      imageUrl: "/services_chairs_1787384262537.jpg",
      span: "col-span-1",
      height: "h-[400px]"
    },
    {
      id: 'fb3',
      title: "Holy Redeemer Chapel",
      category: "Altars",
      location: "Palakkad, Kerala",
      year: "2021",
      imageUrl: "/portfolio_altar.jpg",
      span: "col-span-1",
      height: "h-[400px]"
    },
    {
      id: 'fb4',
      title: "Sacred Heart Cathedral",
      category: "Full Interiors",
      location: "Kottayam, Kerala",
      year: "2023",
      imageUrl: "/portfolio_interior.jpg",
      span: "col-span-1",
      height: "h-[400px]"
    },
    {
      id: 'fb5',
      title: "St. Peter's Parish",
      category: "Restoration",
      location: "Kannur, Kerala",
      year: "2020",
      imageUrl: "/services_wood_carving_1787384193672.jpg",
      span: "col-span-1 md:col-span-2",
      height: "h-[400px]"
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'portfolio_items'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        setProjects(data.length > 0 ? data : fallbackProjects);
      } catch (err) {
        console.error("Error fetching portfolio:", err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="font-sans text-[#1a110a] bg-[#fffcfaf0] overflow-x-hidden pb-32">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[1000px] mx-auto">
        <p className="text-[#cba85a] text-[11px] font-bold tracking-[3px] uppercase mb-6" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
          OUR PORTFOLIO
        </p>
        <h1 className="text-[36px] sm:text-[48px] md:text-[72px] text-[#1a110a] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Masterpieces of Faith
        </h1>
        <p className="text-[#4f453f] text-[16px] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
          Explore our selected commissions. Each project represents our dedication to architectural harmony, spiritual reverence, and uncompromised craftsmanship.
        </p>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="px-6 mb-16">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#1a110a] text-white'
                  : 'bg-white text-[#4f453f] border border-[#e8ddd8] hover:border-[#1a110a] hover:text-[#1a110a]'
              }`}
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ── BENTO GRID GALLERY ── */}
      <section className="px-6">
        <div className="max-w-[1280px] mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-24">
              <div className="w-8 h-8 border-2 border-[#cba85a] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-24 text-[#4f453f]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              No projects found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
              {filteredProjects.map(project => (
                <div 
                  key={project.id} 
                  className={`${activeCategory === 'All' ? (project.span || 'col-span-1') : 'col-span-1'} ${activeCategory === 'All' ? (project.height || 'h-[400px]') : 'h-[400px]'} relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500`}
                >
                  <img src={project.imageUrl || project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/90 via-[#1a110a]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Meta */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-white/30">
                      {project.category}
                    </span>
                    <span className="text-white/80 text-[12px] font-medium tracking-wider bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-10 h-px bg-[#cba85a] mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-200"></div>
                    <h3 className="text-[28px] md:text-[32px] text-white font-medium mb-1 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-[#e8ddd8] text-[12px] font-medium tracking-widest uppercase mb-6 flex items-center gap-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {project.location}
                    </p>
                    
                    <Link to="/contact#contact-form" className="inline-flex items-center gap-2 text-[#cba85a] text-[11px] font-bold tracking-[2px] uppercase group/btn opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      Discuss a Similar Project
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover/btn:translate-x-2 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-32 max-w-[1000px] mx-auto px-6 text-center">
        <div className="bg-[#26170c] rounded-3xl p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src="/craftsman_wood.jpg" alt="Background" className="w-full h-full object-cover filter brightness-[0.2]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-[40px] md:text-[56px] text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Envisioning Your Space
            </h2>
            <p className="text-[#a48e83] text-[16px] max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Our design team is ready to help you visualise how custom woodwork can transform your chapel.
            </p>
            <Link to="/contact#contact-form" className="inline-block bg-[#cba85a] text-[#1a110a] text-[13px] font-bold px-10 py-4 rounded-full tracking-widest uppercase hover:bg-white transition-colors duration-300">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
