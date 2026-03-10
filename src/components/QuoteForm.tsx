"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { QuoteFormData, ApiResponse } from "@/lib/types";

export default function QuoteForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<Omit<QuoteFormData, "formType">>({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    date: "",
    size: "",
    details: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact-form", ...formData }),
      });

      const data: ApiResponse = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="quote"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-sand-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="section-title-bar" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-navy/70 text-lg mb-8">
              Tell us about your move and we&apos;ll get back to you with a
              no-obligation quote within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  Quote Request Sent!
                </h3>
                <p className="text-navy/60">
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours with your personalised quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-navy/80 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-navy/80 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="04XX XXX XXX"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-navy/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-from" className="block text-navy/80 text-sm font-medium mb-2">
                      Moving From *
                    </label>
                    <input
                      id="contact-from"
                      type="text"
                      required
                      placeholder="Current address or suburb"
                      className="form-input"
                      value={formData.from}
                      onChange={(e) => updateField("from", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-to" className="block text-navy/80 text-sm font-medium mb-2">
                      Moving To *
                    </label>
                    <input
                      id="contact-to"
                      type="text"
                      required
                      placeholder="New address or suburb"
                      className="form-input"
                      value={formData.to}
                      onChange={(e) => updateField("to", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-date" className="block text-navy/80 text-sm font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input id="contact-date" type="date" required className="form-input" value={formData.date} onChange={(e) => updateField("date", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="contact-size" className="block text-navy/80 text-sm font-medium mb-2">
                      Property Size *
                    </label>
                    <select id="contact-size" required className="form-input" value={formData.size} onChange={(e) => updateField("size", e.target.value)}>
                      <option value="" disabled>
                        Select property size
                      </option>
                      <option>Studio / 1 Bedroom</option>
                      <option>2 Bedroom</option>
                      <option>3 Bedroom</option>
                      <option>4+ Bedroom</option>
                      <option>Office / Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-details" className="block text-navy/80 text-sm font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    placeholder="Tell us about any special requirements, large items, stairs, access issues, etc."
                    className="form-input resize-none"
                    value={formData.details}
                    onChange={(e) => updateField("details", e.target.value)}
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold text-base w-full sm:w-auto disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    </>
                  ) : (
                    "Request Free Quote"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 animate-on-scroll delay-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy/5 sticky top-28">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">
                Why Get a Quote?
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 min-w-[40px] rounded-full bg-cyan/10 flex items-center justify-center text-cyan">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-navy text-sm">
                      100% Free, No Obligation
                    </span>
                    <span className="text-navy/60 text-sm">
                      Get your quote with zero pressure or commitment.
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 min-w-[40px] rounded-full bg-cyan/10 flex items-center justify-center text-cyan">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-navy text-sm">
                      Response Within 24 Hours
                    </span>
                    <span className="text-navy/60 text-sm">
                      We respond fast so you can plan your move with confidence.
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 min-w-[40px] rounded-full bg-cyan/10 flex items-center justify-center text-cyan">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-navy text-sm">
                      Transparent Pricing
                    </span>
                    <span className="text-navy/60 text-sm">
                      No hidden fees. The price you see is the price you pay.
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-6 border-navy/10" />

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-navy text-sm">
                  Prefer to Call?
                </h4>
                <a
                  href="tel:+61434428785"
                  className="flex items-center gap-3 text-gold font-bold text-lg hover:text-gold-dark transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0434 428 785
                </a>
                <div className="flex items-center gap-3 text-navy/60 text-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@paradiseremovals.com.au
                </div>
                <div className="flex items-center gap-3 text-navy/60 text-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Gold Coast, Queensland
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
