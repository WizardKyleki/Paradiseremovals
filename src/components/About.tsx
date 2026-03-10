"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-on-scroll">
            <div className="section-title-bar" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Meet Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                Moving Team
              </span>
            </h2>
            <p className="text-navy/65 text-lg leading-relaxed mb-6">
              Paradise Removals started with a simple belief: moving house
              shouldn&apos;t be stressful. What began with one truck and a
              dedicated crew has grown into one of the Gold Coast&apos;s most
              trusted removals companies.
            </p>
            <p className="text-navy/65 text-lg leading-relaxed mb-8">
              Our team handles every step with care, efficiency, and
              professionalism — from carefully wrapping and transporting your
              belongings to ensuring they arrive safely at your new home. We
              treat every item like it&apos;s our own.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <span className="block font-heading text-3xl font-extrabold text-gold">
                  10+
                </span>
                <span className="text-navy/60 text-sm">Years Experience</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-extrabold text-gold">
                  15+
                </span>
                <span className="text-navy/60 text-sm">Team Members</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-extrabold text-gold">
                  6+
                </span>
                <span className="text-navy/60 text-sm">Trucks &amp; Vans</span>
              </div>
            </div>

            <a href="/contact" className="btn-gold inline-block">
              Get in Touch
            </a>
          </div>

          {/* Image */}
          <div className="animate-on-scroll delay-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team.jpeg"
                alt="Paradise Removals team members standing in front of moving truck"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gold to-cyan rounded-2xl p-5 shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-deep flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-navy font-heading font-bold text-sm">
                    4.9 Star Rating
                  </span>
                  <span className="text-navy/70 text-xs">
                    Based on 200+ reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
