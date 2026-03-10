"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import BackToTop from "@/components/BackToTop";
import QuoteWizard from "@/components/QuoteWizard";
import { LocationData, locations } from "@/data/locations";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function LocationPage({ location }: { location: LocationData }) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = pageRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <main id="main-content" ref={pageRef}>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #070e4a 0%, #111FA2 35%, #1a2db8 55%, #0a1470 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(83, 203, 243, 0.15), transparent), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(84, 120, 255, 0.12), transparent)",
          }}
        />
        <div className="sun-glow" />
        <div
          className="hero-blob absolute top-[10%] right-[8%] w-[500px] h-[500px] opacity-[0.07]"
          style={{ background: "linear-gradient(135deg, #FFDE42, #53CBF3)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 pb-28 w-full">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="hero-fade-up flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">{location.name} Removalists</span>
            </nav>

            <div className="hero-fade-up inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 hero-badge-shimmer">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                {location.heroTagline}
              </span>
            </div>

            <h1 className="hero-fade-up-delay-1 font-heading font-extrabold text-white leading-[0.95] mb-5 tracking-[-0.03em]">
              <span className="block text-[3rem] sm:text-[4.2rem] lg:text-[5rem]">
                {location.heroHeadingLine1}{" "}
                <span className="gradient-text">{location.heroHeadingHighlight1}</span>
              </span>
              <span className="block text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem]">
                {location.heroHeadingLine2}{" "}
                <span className="gradient-text">{location.heroHeadingHighlight2}</span>
              </span>
            </h1>

            <div className="hero-fade-up-delay-2 mb-7 relative inline-block">
              <p className="text-2xl sm:text-3xl text-gold font-heading font-bold tracking-tight">
                {location.heroSubtitle}
              </p>
              <div className="hero-underline-sweep mt-1.5" />
            </div>

            <p className="hero-fade-up-delay-2 text-white/60 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
              {location.heroDescription}
            </p>

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

        <div className="hidden lg:block absolute bottom-[80px] right-0 pointer-events-none">
          <Image
            src="/images/truck.png"
            alt={`Paradise Removals truck serving ${location.name}`}
            width={550}
            height={300}
            className="w-[400px] h-auto object-contain opacity-10 translate-x-[60px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
      </section>

      <QuoteWizard />

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Our {location.name} Services
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Comprehensive removal solutions tailored for {location.name} residents and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card animate-on-scroll delay-${index + 1}`}
              >
                <div className="icon-circle bg-gradient-to-br from-cyan/15 to-blue/10 text-blue mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h1m7 0h1M3 11l1-6h4l1 3h10l1 3H3zm0 0v5a1 1 0 001 1h1m14-6v5a1 1 0 01-1 1h-1m-8 0h4" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-navy/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#111FA2" bgColor="white" variant="wave2" />

      {/* Why Choose Us Section */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: "linear-gradient(160deg, #070e4a 0%, #111FA2 40%, #0a1470 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why {location.name} Locals Choose Us
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Local knowledge, professional service, and genuine care for your belongings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.whyChooseUs.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex gap-4 p-6 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-300 animate-on-scroll delay-${index + 1}`}
              >
                <div className="icon-circle bg-cyan/15 text-cyan shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="white" bgColor="#0a1470" variant="wave3" />

      {/* About / Local Knowledge Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="section-title-bar" />
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Your Local{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                  {location.name}
                </span>{" "}
                Experts
              </h2>
              <p className="text-navy/65 text-lg leading-relaxed mb-6">
                {location.aboutParagraph1}
              </p>
              <p className="text-navy/65 text-lg leading-relaxed mb-8">
                {location.aboutParagraph2}
              </p>

              <a href="/contact" className="btn-gold inline-block">Get a Free Quote</a>
            </div>

            <div className="animate-on-scroll delay-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team.jpeg"
                  alt={`Paradise Removals team serving ${location.name}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gold to-cyan rounded-2xl p-5 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-deep flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-navy font-heading font-bold text-sm">4.9 Star Rating</span>
                    <span className="text-navy/70 text-xs">Based on 200+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#070e4a" bgColor="white" variant="wave2" />

      {/* Testimonial Section */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: "linear-gradient(160deg, #070e4a 0%, #111FA2 40%, #0a1470 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What {location.name} Residents Say
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real feedback from families and businesses we&apos;ve helped move in {location.name}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="testimonial-card animate-on-scroll">
              <svg className="w-8 h-8 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="text-white/75 leading-relaxed mb-6 text-lg">
                {location.testimonial.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-white font-heading font-semibold">{location.testimonial.name}</span>
                  <span className="text-white/60 text-sm">{location.name}</span>
                </div>
                <StarRating count={location.testimonial.rating} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="white" bgColor="#0a1470" variant="wave3" />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              {location.name} Removals FAQ
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Common questions about moving in and around {location.name}.
            </p>
          </div>

          <div className="space-y-4">
            {location.faqItems.map((faq, index) => (
              <details
                key={index}
                className="group bg-sand-light rounded-xl border border-navy/5 animate-on-scroll"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-heading font-bold text-navy text-lg hover:text-gold transition-colors">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-navy/40 shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-navy/70 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Suburbs / Other Locations */}
      <section className="py-16 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-3">
              Also Serving Nearby Suburbs
            </h2>
            <p className="text-navy/60 text-base">
              We cover {location.name} and the wider Gold Coast area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 animate-on-scroll">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/removals/${loc.slug}`}
                className="area-card flex items-center gap-3 !p-4 hover:!border-gold/30 group"
              >
                <div className="icon-circle bg-gradient-to-br from-gold/15 to-cyan/10 text-navy shrink-0 !w-10 !h-10 !min-w-[40px]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <span className="font-heading font-bold text-navy text-sm group-hover:text-gold transition-colors">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <p className="text-navy/60 text-sm mb-3">
              Don&apos;t see your suburb? We likely cover it too!
            </p>
            <a href="/contact" className="btn-gold inline-block text-sm">
              Check Your Area
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(160deg, #070e4a 0%, #111FA2 40%, #0a1470 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Move in {location.name}?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your {location.name} move today. Our friendly team is standing by to help make your move a breeze.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-gold text-lg">
              Get a Free Quote
            </a>
            <a href="tel:+61434428785" className="btn-outline text-lg">
              Call 0434 428 785
            </a>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#050a30" bgColor="#0a1470" variant="wave2" />
      <Footer />
      <BackToTop />
    </main>
  );
}
