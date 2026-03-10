"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteWizard from "@/components/QuoteWizard";

const values = [
  {
    title: "Care & Respect",
    description:
      "Every item we move matters to someone. From family heirlooms to everyday essentials, we treat your belongings as if they were our own.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "When we say we'll be there at 7am, we mean it. Punctuality and dependability are non-negotiable — your time is as valuable as ours.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprise charges. We provide clear, upfront pricing so you know exactly what to expect before moving day arrives.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Community First",
    description:
      "We're locals helping locals. As a Gold Coast business, we're invested in building lasting relationships with every family and business we serve.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const whySections = [
  {
    title: "Fully Insured & Licensed",
    description:
      "Every move is backed by comprehensive transit insurance and public liability coverage. Your belongings are protected from the moment we pick them up until they're safely placed in your new home.",
  },
  {
    title: "Competitive Gold Coast Rates",
    description:
      "Premium service doesn't have to come with a premium price tag. We keep our rates fair and competitive, delivering outstanding value without cutting corners on quality or care.",
  },
  {
    title: "Experienced Local Crew",
    description:
      "Our team knows the Gold Coast inside out — every suburb, every shortcut, every tight driveway. That local expertise translates into faster, smoother moves and fewer headaches for you.",
  },
  {
    title: "End-to-End Service",
    description:
      "From packing and wrapping to furniture disassembly, transport, reassembly, and unpacking — we handle every step of your move so you can focus on settling into your new space.",
  },
];

export default function AboutContent() {
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

  return (
    <div ref={pageRef}>
      {/* Hero Header */}
      <section
        className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden"
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
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 hero-badge-shimmer">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                Gold Coast&apos;s Trusted Removalists
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-white leading-[0.95] mb-6 tracking-[-0.03em] text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem]">
              <span className="block">The Gold Coast&apos;s</span>
              <span className="block"><span className="gradient-text">Best Local</span></span>
              <span className="block">Removalists</span>
            </h1>

            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              We&apos;re not just movers — we&apos;re your neighbours. Built on the Gold Coast, for the Gold Coast, Paradise Removals delivers the kind of service that only a truly local team can provide.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
      </section>

      <QuoteWizard />

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="section-title-bar" />
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                  Story
                </span>
              </h2>
              <p className="text-navy/65 text-lg leading-relaxed mb-6">
                Paradise Removals was born from a straightforward idea: moving house shouldn&apos;t be one of life&apos;s most stressful events. What started as a single truck and a small, determined crew has grown into one of the Gold Coast&apos;s most reliable removals services.
              </p>
              <p className="text-navy/65 text-lg leading-relaxed mb-6">
                Every member of our team lives and works on the Gold Coast. We know the suburbs, the backstreets, the tricky driveways, and the buildings that need special access. That local knowledge is something you can&apos;t replicate with a GPS.
              </p>
              <p className="text-navy/65 text-lg leading-relaxed">
                Over the years, we&apos;ve completed thousands of moves — from studio apartments in Southport to five-bedroom family homes in Helensvale. Each one has reinforced our commitment to careful handling, honest pricing, and genuine customer care.
              </p>
            </div>

            <div className="animate-on-scroll delay-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team.jpeg"
                  alt="Paradise Removals team"
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

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              What We Stand For
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              The principles that guide every move we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`service-card animate-on-scroll delay-${index + 1}`}
              >
                <div className="icon-circle bg-gradient-to-br from-gold/15 to-cyan/10 text-navy mb-5">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-navy/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're the Best */}
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
              Why Gold Coast Locals Choose Paradise
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We go above and beyond to make every move smooth, safe, and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whySections.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-4 p-6 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-300 animate-on-scroll delay-${index + 1}`}
              >
                <div className="icon-circle bg-cyan/15 text-cyan shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(160deg, #070e4a 0%, #111FA2 40%, #0a1470 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience the Paradise Difference?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. Our friendly team is standing by to make your next move the easiest one yet.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-lg">
              Get a Free Quote
            </Link>
            <a href="tel:+61434428785" className="btn-outline text-lg">
              Call 0434 428 785
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
