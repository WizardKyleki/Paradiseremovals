"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Helensvale",
    rating: 5,
    text: "Paradise Removals turned what could have been a stressful move into a smooth and easy experience! They moved our entire 4-bedroom home in just one day. Professional, careful, and so friendly. Could not recommend them more!",
  },
  {
    name: "Mark T.",
    location: "Southport",
    rating: 5,
    text: "Best value removalists on the Gold Coast. David and his crew handled everything with care, even assembled our furniture at the new place. Absolute legends! Will definitely use them again.",
  },
  {
    name: "Jessica L.",
    location: "Coomera",
    rating: 5,
    text: "Third time using Paradise Removals and they never disappoint. Always on time, always professional. The communication was excellent from start to finish. Makes moving stress-free!",
  },
  {
    name: "Ryan K.",
    location: "Arundel",
    rating: 5,
    text: "Moving our office was seamless. The team was efficient and nothing was damaged. Very impressed with their organisation and communication throughout the whole process. Fair pricing too!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
      id="testimonials"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(160deg, #070e4a 0%, #111FA2 40%, #0a1470 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="section-title-bar mx-auto" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the families and
            businesses we&apos;ve helped move.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`testimonial-card animate-on-scroll delay-${index + 1}`}
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-gold/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="text-white/75 leading-relaxed mb-6">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-white font-heading font-semibold">
                    {testimonial.name}
                  </span>
                  <span className="text-white/60 text-sm">
                    {testimonial.location}
                  </span>
                </div>
                <StarRating count={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
