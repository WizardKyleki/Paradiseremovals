"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Local Removals",
    description:
      "Door-to-door furniture removals across the Gold Coast. We know every suburb and the fastest routes to your new home.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h1m7 0h1M3 11l1-6h4l1 3h10l1 3H3zm0 0v5a1 1 0 001 1h1m14-6v5a1 1 0 01-1 1h-1m-8 0h4" />
      </svg>
    ),
  },
  {
    title: "Interstate Removals",
    description:
      "Moving beyond Queensland? We provide safe, reliable interstate removals with real-time tracking and full insurance coverage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Office Relocations",
    description:
      "Minimise downtime with our efficient commercial moving service. We work around your schedule to keep your business running.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Packing Services",
    description:
      "Let our expert team pack your belongings with premium materials. Fragile items? We specialise in careful, protective packing.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Furniture Assembly",
    description:
      "No time to disassemble or rebuild furniture? Our crew handles it all — beds, desks, wardrobes, shelving units, and more.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.71-3.29a.75.75 0 01-.29-.98l.87-1.5a.75.75 0 01.98-.3l5.71 3.3m-1.56 2.77l5.71 3.29a.75.75 0 00.98-.3l.87-1.5a.75.75 0 00-.29-.97l-5.71-3.3m-1.56 2.78l1.56-2.78m-1.56 2.78l-2.2 3.81m3.76-6.59l2.2-3.81M7 4v2m5-2v2m5-2v2" />
      </svg>
    ),
  },
  {
    title: "Storage Solutions",
    description:
      "Need temporary storage between moves? Our secure, climate-monitored facilities keep your belongings safe until you're ready.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 10l2-6h16l2 6M2 10h20M2 10v8a2 2 0 002 2h16a2 2 0 002-2v-8m-10 4h.01M12 14a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-title-bar mx-auto" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            Everything you need for a smooth, stress-free move — all under one
            roof.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
              <p className="text-navy/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
