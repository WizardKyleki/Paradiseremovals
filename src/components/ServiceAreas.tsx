"use client";

import { useEffect, useRef } from "react";

const areas = [
  {
    name: "Arundel",
    description: "Serving Arundel and surrounding areas with reliable local removals.",
  },
  {
    name: "Southport",
    description: "Fast, efficient moves across Southport's apartments and homes.",
  },
  {
    name: "Helensvale",
    description: "Trusted removalists for families and businesses in Helensvale.",
  },
  {
    name: "Coomera",
    description: "Professional furniture removals throughout the Coomera region.",
  },
  {
    name: "Labrador",
    description: "Your local Labrador moving experts — affordable and dependable.",
  },
  {
    name: "Parkwood",
    description: "Comprehensive removals service covering all of Parkwood.",
  },
];

export default function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-sand-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-title-bar mx-auto" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Proudly Serving the Gold Coast
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            We cover all major Gold Coast suburbs with fast, professional
            removals.
          </p>
        </div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.name}
              className={`area-card flex items-start gap-4 animate-on-scroll delay-${index + 1}`}
            >
              <div className="icon-circle bg-gradient-to-br from-gold/15 to-cyan/10 text-navy shrink-0 !w-12 !h-12 !min-w-[48px]">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy mb-1">
                  {area.name}
                </h3>
                <p className="text-navy/55 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map-style CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-navy/50 text-sm mb-4">
            Don&apos;t see your suburb? We likely cover it too!
          </p>
          <a href="#quote" className="btn-gold inline-block text-sm">
            Check Your Area
          </a>
        </div>
      </div>
    </section>
  );
}
