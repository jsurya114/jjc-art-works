import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    chapelName: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const text = `*New Enquiry from Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone || 'Not provided'}
*Chapel/Project Name:* ${formData.chapelName}
*Service Required:* ${formData.service || 'Not specified'}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919188723168?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Most projects take between 6 to 12 weeks from design approval to installation, depending on complexity and scope."
    },
    {
      q: "Do you work outside of Kerala?",
      a: "Yes — we have completed projects across South India and are happy to discuss projects anywhere in the country."
    },
    {
      q: "Is there a minimum order value?",
      a: "We work on projects of all sizes — from a single custom piece to a complete chapel interior transformation."
    },
    {
      q: "Can we visit your workshop?",
      a: "Absolutely — workshop visits are welcome by appointment. Call or WhatsApp us to schedule a visit."
    },
    {
      q: "Do you provide installation?",
      a: "Yes — all projects include professional delivery and installation by our own team at no extra charge."
    },
    {
      q: "Can you match an existing wood finish?",
      a: "Yes — we can match existing wood tones, stains, and finishes to ensure your new pieces blend seamlessly."
    }
  ];

  return (
    <div className="font-sans text-[#1a110a] bg-[#fffcfaf0] overflow-x-hidden">
      
      {/* ── COMMON QUESTIONS ── */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#cba85a] text-[10px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>COMMON QUESTIONS</p>
          <h1 className="text-[48px] md:text-[64px] text-[#1a110a] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Before You Reach Out</h1>
          <p className="text-[#4f453f] text-[15px]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Answers to the questions we hear most often.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#fcf8f2] border border-[#e8ddd8] p-8 md:p-10 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#1a110a] mb-4 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{faq.q}</h3>
              <p className="text-[#4f453f] text-[14px] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HERO DIVIDER ── */}
      <section className="relative py-32 px-6 text-center text-white">
        <div className="absolute inset-0 z-0">
          <img src="/portfolio_interior.jpg" alt="Chapel Exterior" className="w-full h-full object-cover filter brightness-[0.35]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-[44px] md:text-[64px] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Let's Start a<br/>Conversation</h2>
          <p className="text-[#d2c4bc] text-[15px] max-w-xl mx-auto" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            We respond to every architectural enquiry and consultation request within 24 hours.
          </p>
        </div>
      </section>

      {/* ── FORM & CONTACT CARDS ── */}
      <section id="contact-form" className="bg-[#f5f1ed] py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          
          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 md:p-16 mb-6 border border-[#e8ddd8]/50">
            <h3 className="text-[32px] text-[#1a110a] mb-12" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-3">FULL NAME</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Thomas Cromwell" className="w-full border-b border-[#d2c4bc] py-2 bg-transparent focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors placeholder:text-[#a48e83]" />
                </div>
                <div>
                  <label className="block text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-3">PHONE NUMBER</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(Optional)" className="w-full border-b border-[#d2c4bc] py-2 bg-transparent focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors placeholder:text-[#a48e83]" />
                </div>
              </div>

              <div>
                <label className="block text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-3">CHAPEL OR PROJECT NAME</label>
                <input type="text" name="chapelName" value={formData.chapelName} onChange={handleChange} placeholder="Name of location" className="w-full border-b border-[#d2c4bc] py-2 bg-transparent focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors placeholder:text-[#a48e83]" />
              </div>

              <div>
                <label className="block text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-3">SERVICE REQUIRED</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full border-b border-[#d2c4bc] py-2 bg-transparent focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors text-[#1a110a] appearance-none cursor-pointer">
                  <option value="" disabled>Select an area of focus</option>
                  <option value="Chapel Pews">Chapel Pews</option>
                  <option value="Altar Furniture">Altar Furniture</option>
                  <option value="Custom Woodwork">Custom Woodwork</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-3">YOUR ENQUIRY</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Please provide details about your vision..." rows="3" className="w-full border-b border-[#d2c4bc] py-2 bg-transparent focus:outline-none focus:border-[#cba85a] text-[15px] transition-colors placeholder:text-[#a48e83] resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#cba85a] text-white text-[12px] font-bold tracking-widest py-5 rounded-full hover:bg-[#b59540] transition-colors flex items-center justify-center gap-2 uppercase mt-4">
                SUBMIT COMMISSION ENQUIRY →
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e8ddd8]/50">
              <div className="w-12 h-12 rounded-full bg-[#fdf8ed] flex items-center justify-center text-[#cba85a] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <h4 className="text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-1">WHATSAPP</h4>
              <p className="text-[#4f453f] text-[14px]">+91 91887 23168</p>
            </div>
            <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e8ddd8]/50">
              <div className="w-12 h-12 rounded-full bg-[#fdf8ed] flex items-center justify-center text-[#cba85a] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h4 className="text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-1">CALL US</h4>
              <p className="text-[#4f453f] text-[14px]">+91 91887 23168</p>
            </div>
            <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e8ddd8]/50">
              <div className="w-12 h-12 rounded-full bg-[#fdf8ed] flex items-center justify-center text-[#cba85a] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h4 className="text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-1">EMAIL</h4>
              <p className="text-[#4f453f] text-[14px]">jjc.art.works@gmail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e8ddd8]/50">
              <div className="w-12 h-12 rounded-full bg-[#fdf8ed] flex items-center justify-center text-[#cba85a] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h4 className="text-[#1a110a] text-[10px] font-bold tracking-widest uppercase mb-1">LOCATION</h4>
              <p className="text-[#4f453f] text-[14px]">Kerala, Kottayam</p>
            </div>

            <div className="md:col-span-2 bg-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e8ddd8]/50">
              <h3 className="text-[24px] text-[#1a110a] mb-4 md:mb-0" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Follow Our Craft</h3>
              <div className="flex items-center gap-3 text-[#1a110a]">
                <div className="w-10 h-10 rounded-full border border-[#d2c4bc] flex items-center justify-center hover:border-[#cba85a] hover:text-[#cba85a] transition-colors cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#d2c4bc] flex items-center justify-center hover:border-[#cba85a] hover:text-[#cba85a] transition-colors cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#d2c4bc] flex items-center justify-center hover:border-[#cba85a] hover:text-[#cba85a] transition-colors cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
