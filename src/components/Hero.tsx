"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #070e4a 0%, #111FA2 35%, #1a2db8 55%, #0a1470 100%)",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(83, 203, 243, 0.15), transparent), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(84, 120, 255, 0.12), transparent)",
        }}
      />

      {/* Sun Glow */}
      <div className="sun-glow" />

      {/* Floating blobs */}
      <div
        className="hero-blob absolute top-[10%] right-[8%] w-[500px] h-[500px] opacity-[0.07]"
        style={{ background: "linear-gradient(135deg, #FFDE42, #53CBF3)" }}
      />
      <div
        className="hero-blob absolute bottom-[15%] left-[3%] w-[300px] h-[300px] opacity-[0.05]"
        style={{
          background: "linear-gradient(135deg, #5478FF, #53CBF3)",
          animationDelay: "-4s",
        }}
      />

      {/* Decorative floating rings */}
      <div
        className="absolute top-[20%] right-[12%] w-80 h-80 rounded-full border border-cyan/10"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[22%] right-[14%] w-64 h-64 rounded-full border border-gold/10"
        style={{ animation: "float 8s ease-in-out infinite 1.5s" }}
      />
      <div
        className="absolute bottom-[25%] left-[8%] w-24 h-24 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(255,222,66,0.1), rgba(83,203,243,0.1))",
          animation: "floatSlow 10s ease-in-out infinite",
        }}
      />

      {/* Animated accent line - diagonal */}
      <div
        className="absolute top-0 left-[40%] w-[1px] h-[200%] opacity-[0.06] origin-top"
        style={{
          background: "linear-gradient(180deg, transparent, var(--color-gold), var(--color-cyan), transparent)",
          transform: "rotate(25deg)",
          animation: "shimmer 6s linear infinite",
        }}
      />
      <div
        className="absolute top-0 left-[55%] w-[1px] h-[200%] opacity-[0.04] origin-top"
        style={{
          background: "linear-gradient(180deg, transparent, var(--color-cyan), var(--color-blue), transparent)",
          transform: "rotate(25deg)",
          animation: "shimmer 8s linear infinite 2s",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 pb-36 w-full">
        <div className="max-w-2xl">
          {/* Pill badge with shimmer */}
          <div className="hero-fade-up inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 hero-badge-shimmer">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              Gold Coast&apos;s Trusted Removalists
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-fade-up-delay-1 font-heading font-extrabold text-white leading-[0.95] mb-5 tracking-[-0.03em]">
            <span className="block text-[3.5rem] sm:text-[4.8rem] lg:text-[5.8rem]">Moving <span className="gradient-text">Can</span></span>
            <span className="block text-[3.1rem] sm:text-[4.2rem] lg:text-[5.2rem]">Be a <span className="gradient-text">Paradise</span></span>
          </h1>

          {/* Tagline with animated underline accent */}
          <div className="hero-fade-up-delay-2 mb-7 relative inline-block">
            <p className="text-2xl sm:text-3xl text-gold font-heading font-bold tracking-tight">
              Make Your Move A Breeze With Us
            </p>
            <div className="hero-underline-sweep mt-1.5" />
          </div>

          <p className="hero-fade-up-delay-2 text-white/60 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
            Professional, affordable, and stress-free furniture removals
            across the Gold Coast. From packing to unpacking, we handle
            everything with care.
          </p>

          {/* CTAs */}
          <div className="hero-fade-up-delay-3 flex flex-wrap gap-4">
            <a href="/contact" className="btn-gold text-base group">
              <span className="flex items-center gap-2">
                Get a Free Quote
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a href="tel:+61434428785" className="btn-outline text-base group">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 0434 428 785
              </span>
            </a>
          </div>

          {/* Stats - glass cards */}
          <div className="hero-fade-up-delay-4 mt-12 grid grid-cols-3 gap-3 max-w-md">
            <div className="hero-stat-card">
              <span className="text-2xl sm:text-3xl font-heading font-extrabold text-gold leading-none">2,500+</span>
              <span className="text-white/60 text-[0.7rem] font-semibold uppercase tracking-widest mt-1.5">Moves Done</span>
            </div>
            <div className="hero-stat-card">
              <span className="text-2xl sm:text-3xl font-heading font-extrabold text-cyan leading-none flex items-baseline gap-1">
                4.9
                <svg className="w-4 h-4 text-gold inline -mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              <span className="text-white/60 text-[0.7rem] font-semibold uppercase tracking-widest mt-1.5">Rating</span>
            </div>
            <div className="hero-stat-card">
              <span className="text-2xl sm:text-3xl font-heading font-extrabold text-blue-light leading-none">100%</span>
              <span className="text-white/60 text-[0.7rem] font-semibold uppercase tracking-widest mt-1.5">Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Truck in bottom-right corner */}
      <div className="hidden lg:block absolute bottom-[80px] right-0 pointer-events-none">
        <Image
          src="/images/truck.png"
          alt=""
          width={550}
          height={300}
          className="w-[400px] h-auto object-contain opacity-10 translate-x-[60px]"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* Straight bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
    </section>
  );
}
