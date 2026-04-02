import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          <div className="animate-fade-in">
            <span className="badge">Full-Service Healthcare</span>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-bold mt-4 mb-6 tracking-tight">Your Health,<br/><span className="text-primary">Our Expertise</span></h1>
            <p className="text-[1.1rem] text-muted max-w-[90%]">
              Experience world-class dental, skin, and medical care with our team of specialists dedicated to your overall well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
              <Link href="/services" className="btn btn-secondary">Explore Services</Link>
            </div>
            
            <div className="mt-8">
              <div className="flex mb-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-light flex items-center justify-center text-[0.8rem] -ml-2 first:ml-0 z-30 relative">🧑</div>
                <div className="w-8 h-8 rounded-full bg-white border-2 border-light flex items-center justify-center text-[0.8rem] -ml-2 z-20 relative">👩</div>
                <div className="w-8 h-8 rounded-full bg-white border-2 border-light flex items-center justify-center text-[0.8rem] -ml-2 z-10 relative">👨</div>
              </div>
              <p className="text-[0.85rem] text-muted"><strong>4.9/5</strong> from 3,500+ happy patients</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-primary/20">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Modern dental clinic room" className="w-full aspect-[4/3] object-cover block" />
              <div className="absolute -bottom-4 left-8 bg-white py-4 px-6 rounded-lg shadow-xl flex items-center gap-4 z-10 hover-card">
                <div>
                  <span className="block text-[0.75rem] text-primary font-bold uppercase">Next Available</span>
                  <strong>Today, 4:00 PM</strong>
                </div>
                <div className="text-xl">📅</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">15k+</h2>
              <p className="text-muted font-medium text-[0.95rem]">Patients Treated</p>
            </div>
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">20+</h2>
              <p className="text-muted font-medium text-[0.95rem]">Expert Specialists</p>
            </div>
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">Multiple</h2>
              <p className="text-muted font-medium text-[0.95rem]">Clinical Departments</p>
            </div>
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">24/7</h2>
              <p className="text-muted font-medium text-[0.95rem]">Patient Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="badge">Our Expertise</span>
              <h2 className="text-3xl font-bold">Multidisciplinary Care</h2>
            </div>
            <Link href="/services" className="font-semibold text-primary hover:underline">View all departments →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">🦷</div>
              <h3 className="font-bold text-lg mb-4">Dental & Braces</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Specialized orthodontic treatments and general dentistry for a perfect, healthy smile.</p>
              <Link href="/services/general" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">✨</div>
              <h3 className="font-bold text-lg mb-4">Skin Specialist</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Advanced dermatological care and aesthetic treatments for radiant, healthy skin.</p>
              <Link href="/services/skin-specialist" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">🩺</div>
              <h3 className="font-bold text-lg mb-4">General Physician</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Comprehensive medical checkups and family medicine for your ongoing health needs.</p>
              <Link href="/services/general-physician" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">🏃</div>
              <h3 className="font-bold text-lg mb-4">Physiotherapy</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Professional rehabilitation and physical therapy to restore movement and function.</p>
              <Link href="/services/physiotherapy" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate text-white py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="badge !bg-white/10 !text-white">Testimonials</span>
              <h2 className="text-3xl font-bold text-white">Trusted by Thousands</h2>
              <p className="mt-4 text-white/70">We pride ourselves on providing a professional experience across all our specialized medical departments.</p>
              <div className="flex gap-4 mt-8">
                <button className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center transition-all hover-card hover:bg-white/10">←</button>
                <button className="w-10 h-10 rounded-full bg-primary border border-primary text-white flex items-center justify-center transition-all hover-card">→</button>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover-card">
              <div className="text-sm mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-[1.1rem] italic mb-6 text-white/90">&quot;The best holistic care I&apos;ve experienced. From dental to skin treatments, every specialist was professional and the results were amazing.&quot;</p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[0.9rem] bg-primary">JS</div>
                <div>
                  <strong className="block text-[0.95rem] text-white">John Smith</strong>
                  <span className="text-[0.8rem] text-white/60">Patient since 2021</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover-card">
              <div className="text-sm mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-[1.1rem] italic mb-6 text-white/90">&quot;Fatima Clinic completely transformed my confidence. Their skin specialist and dental team work so well together.&quot;</p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[0.9rem] bg-secondary">SA</div>
                <div>
                  <strong className="block text-[0.95rem] text-white">Sarah Adams</strong>
                  <span className="text-[0.8rem] text-white/60">Marketing Executive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="bg-primary rounded-[24px] py-16 px-8 text-center text-white" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'}}>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">Ready for better,<br/>holistic health?</h2>
            <p className="text-white/90 max-w-[600px] mx-auto mt-4">
              Join over 15,000 satisfied patients. Book your consultation today and take the first step towards your complete well-being.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/contact" className="btn btn-secondary">Book Now</Link>
              <Link href="/contact" className="btn border border-white/30 text-white hover:bg-white/10">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
