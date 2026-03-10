"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteWizard from "@/components/QuoteWizard";

const packingServices = [
  {
    title: "Full Home Packing",
    description:
      "Our team packs your entire home from top to bottom — kitchen, bedrooms, living areas, garage. We bring all materials and systematically label every box so unpacking is a breeze.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Partial Packing",
    description:
      "Handle the easy stuff yourself and leave the tricky items to us. We specialise in packing fragile, awkward, or valuable items that need expert attention.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Fragile & Specialty Items",
    description:
      "Fine china, artwork, mirrors, antiques, and electronics receive custom wrapping with specialist materials. Each piece is individually protected and secured for transit.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Unpacking Service",
    description:
      "Arrive at your new home to find everything placed, unwrapped, and ready to go. We unpack boxes, set up furniture, and remove all packing waste so you can settle in straight away.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Office & Commercial Packing",
    description:
      "IT equipment, filing cabinets, sensitive documents, and office furniture — we pack commercial spaces methodically to minimise downtime and ensure nothing is misplaced.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Packing Materials Supply",
    description:
      "Need boxes and supplies for DIY packing? We supply premium-grade boxes, bubble wrap, tape, markers, and protective padding — delivered to your door if needed.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We assess your home and belongings to recommend the right packing plan and provide an accurate, no-obligation quote.",
  },
  {
    step: "02",
    title: "Materials & Preparation",
    description: "Our team arrives with all necessary packing materials — boxes, wrap, tape, labels, and specialty items — ready to go.",
  },
  {
    step: "03",
    title: "Expert Packing",
    description: "Room by room, we carefully wrap, pad, and box every item. Each box is clearly labelled with contents and destination room.",
  },
  {
    step: "04",
    title: "Transport & Unpack",
    description: "Packed items are loaded, transported safely, and optionally unpacked at your new home. All waste materials are removed.",
  },
];

const faqItems = [
  {
    question: "What packing materials do you use?",
    answer: "We use premium packing materials including double-walled cardboard boxes, acid-free tissue paper, bubble wrap, foam padding, wardrobe boxes with hanging rails, and heavy-duty packing tape. Fragile items receive additional custom protection.",
  },
  {
    question: "Can you pack just fragile or valuable items?",
    answer: "Absolutely. Our partial packing service lets you handle the straightforward items while our specialists take care of glassware, artwork, antiques, electronics, and other delicate belongings that need professional handling.",
  },
  {
    question: "How far in advance should I book packing services?",
    answer: "We recommend booking at least one week ahead, especially for full-home packing. However, we accommodate shorter notice requests when availability allows. End-of-month periods are busiest, so earlier is always better.",
  },
  {
    question: "Do you also unpack at the destination?",
    answer: "Yes. Our unpacking service includes placing items in designated rooms, unwrapping furniture and fragile items, setting up beds and key furniture, and removing all packing materials so you can settle in immediately.",
  },
];

export default function PackingContent() {
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
      {/* Hero */}
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
            <span className="text-white/70">Packing Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 hero-badge-shimmer">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                Professional Packing Experts
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-white leading-[0.95] mb-6 tracking-[-0.03em] text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem]">
              Expert{" "}
              <span className="gradient-text">Packing</span>{" "}
              Services
            </h1>

            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              Take the stress out of packing with our professional team. We carefully wrap, protect, and organise every item in your home using premium materials — so everything arrives in perfect condition.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold text-base group">
                <span className="flex items-center gap-2">
                  Get a Packing Quote
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <a href="tel:+61434428785" className="btn-outline text-base group">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 0434 428 785
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-[60px] right-0 pointer-events-none">
          <Image
            src="/images/truck.png"
            alt="Paradise Removals truck"
            width={550}
            height={300}
            className="w-[350px] h-auto object-contain opacity-10 translate-x-[60px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
      </section>

      <QuoteWizard />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Our Packing Services
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              From a single fragile vase to an entire five-bedroom home — we have a packing solution for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packingServices.map((service, index) => (
              <div
                key={service.title}
                className={`service-card animate-on-scroll delay-${index + 1}`}
              >
                <div className="icon-circle bg-gradient-to-br from-cyan/15 to-blue/10 text-blue mb-5">
                  {service.icon}
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

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              How Our Packing Process Works
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              A straightforward, organised approach from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`text-center animate-on-scroll delay-${index + 1}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading font-extrabold text-navy text-xl">{item.step}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-navy/65 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packing */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: "linear-gradient(160deg, #070e4a 0%, #111FA2 40%, #0a1470 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="section-title-bar" />
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Trust Us With Your{" "}
                <span className="gradient-text">Packing</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Premium Materials Only", desc: "Double-walled boxes, acid-free tissue, heavy-duty bubble wrap — we never cut corners on protection." },
                  { title: "Trained Packing Specialists", desc: "Our packers are trained in specialist techniques for fragile, oversized, and high-value items." },
                  { title: "Fully Insured", desc: "Every item we pack is covered by our comprehensive transit insurance for complete peace of mind." },
                  { title: "Systematic Labelling", desc: "Every box is clearly labelled with contents and destination room, making unpacking organised and efficient." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll delay-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/consultation.jpeg"
                  alt="Paradise Removals professional packing service"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="section-title-bar mx-auto" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Packing Services FAQ
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Common questions about our packing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
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

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(160deg, #070e4a 0%, #111FA2 40%, #0a1470 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let Us Handle the Packing
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Save time, reduce stress, and protect your belongings with our professional packing service. Get a free quote today.
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
