"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import type { QuoteWizardData, ApiResponse } from "@/lib/types";

const steps = [
  { number: 1, label: "Move Details" },
  { number: 2, label: "Property Info" },
  { number: 3, label: "Your Details" },
];

export default function QuoteWizard({ standalone = false }: { standalone?: boolean }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<Omit<QuoteWizardData, "formType">>({
    from: "",
    to: "",
    date: "",
    bedrooms: "",
    furnishing: "",
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => {
    if (currentStep < 3) setCurrentStep((s) => s + 1);
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "quote-wizard", ...formData }),
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
    <div className={standalone ? "relative z-30 py-20 lg:py-28 bg-white" : "relative z-30 -mt-12 sm:-mt-16 lg:-mt-20 pb-8"}>
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* David behind the card - desktop only, home page only */}
        {!standalone && (
        <div className="hidden lg:block absolute -top-[690px] right-[-100px] z-10 pointer-events-none">
          <div className="relative">
            {/* Glow behind David */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(83,203,243,0.5), rgba(84,120,255,0.3), transparent 70%)" }}
            />
            <Image
              src="/images/david-cutout.png"
              alt="David - Paradise Removals crew leader"
              width={700}
              height={840}
              className="relative w-auto h-[700px] object-contain drop-shadow-2xl"
              priority
            />
            {/* Floating badge - Available Today - left side */}
            <div className="absolute top-[220px] right-[30px] glass-card px-4 py-3 hero-floating-badge pointer-events-auto" style={{ animationDelay: "0s" }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-semibold">Available Today</span>
              </div>
            </div>
            {/* Floating badge - Breeze quote - over his chest/name tag */}
            <div className="absolute top-[410px] left-[-40px] glass-card px-5 py-3 hero-floating-badge pointer-events-auto" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <span className="text-gold text-lg">💬</span>
                <span className="text-white text-sm font-semibold italic">&quot;I will make your move a breeze&quot;</span>
              </div>
            </div>
            {/* Floating badge - Rating - right side in hero */}
            <div className="absolute top-[560px] -right-16 glass-card px-4 py-3 hero-floating-badge pointer-events-auto" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-white text-sm font-bold ml-1">4.9</span>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* The form card - sits on top of David */}
        <div className="quote-wizard-card relative z-20">

          {submitted ? (
            <div className="py-10 text-center wizard-step-enter">
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-50 to-cyan/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                Quote Request Sent!
              </h3>
              <p className="text-navy/65 max-w-md mx-auto">
                We&apos;ll get back to you within 24 hours with your personalised quote.
              </p>
            </div>
          ) : (
            <>
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-10 px-2 sm:px-8">
                {steps.map((step, i) => (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center relative">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-500 ${
                          currentStep > step.number
                            ? "bg-navy text-white scale-100"
                            : currentStep === step.number
                            ? "bg-navy text-white scale-110 shadow-[0_0_20px_rgba(17,31,162,0.3)]"
                            : "bg-sand text-navy/50 border-2 border-navy/10"
                        }`}
                      >
                        {currentStep > step.number ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          step.number
                        )}
                      </div>
                      <span
                        className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${
                          currentStep >= step.number ? "text-navy" : "text-navy/50"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="flex-1 h-[3px] mx-3 rounded-full bg-navy/[0.06] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-navy to-blue rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: currentStep > step.number ? "100%" : "0%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Form Steps */}
              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden mt-12">
                  {/* Step 1: Move Details */}
                  <div
                    className={`wizard-step ${currentStep === 1 ? "wizard-step-active" : ""}`}
                    style={{ display: currentStep === 1 ? "block" : "none" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      <div>
                        <label htmlFor="quote-from" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          Moving From *
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <input
                            id="quote-from"
                            type="text"
                            required
                            placeholder="Current suburb or address"
                            className="wizard-input pl-14"
                            value={formData.from}
                            onChange={(e) => updateField("from", e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="quote-to" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          Moving To *
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <input
                            id="quote-to"
                            type="text"
                            required
                            placeholder="New suburb or address"
                            className="wizard-input pl-14"
                            value={formData.to}
                            onChange={(e) => updateField("to", e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="quote-date" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          Moving Date *
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <input
                            id="quote-date"
                            type="date"
                            required
                            className="wizard-input pl-14"
                            value={formData.date}
                            onChange={(e) => updateField("date", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Property Info */}
                  <div
                    className={`wizard-step ${currentStep === 2 ? "wizard-step-active" : ""}`}
                    style={{ display: currentStep === 2 ? "block" : "none" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="quote-bedrooms" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          How Many Bedrooms? *
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
                          </svg>
                          <select id="quote-bedrooms" required className="wizard-input pl-14 appearance-none" value={formData.bedrooms} onChange={(e) => updateField("bedrooms", e.target.value)}>
                            <option value="" disabled>Select bedrooms</option>
                            <option>Studio / 1 Bedroom</option>
                            <option>2 Bedrooms</option>
                            <option>3 Bedrooms</option>
                            <option>4 Bedrooms</option>
                            <option>5+ Bedrooms</option>
                            <option>Office / Commercial</option>
                          </select>
                          <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="quote-furnishing" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          How Heavily Furnished? *
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                          <select id="quote-furnishing" required className="wizard-input pl-14 appearance-none" value={formData.furnishing} onChange={(e) => updateField("furnishing", e.target.value)}>
                            <option value="" disabled>Select furnishing level</option>
                            <option>Lightly Furnished</option>
                            <option>Average Furnishing</option>
                            <option>Heavily Furnished</option>
                            <option>Very Heavily Furnished</option>
                          </select>
                          <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Your Details */}
                  <div
                    className={`wizard-step ${currentStep === 3 ? "wizard-step-active" : ""}`}
                    style={{ display: currentStep === 3 ? "block" : "none" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label htmlFor="quote-name" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          Full Name *
                        </label>
                        <input
                          id="quote-name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="wizard-input"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-email" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          Email *
                        </label>
                        <input
                          id="quote-email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="wizard-input"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-phone" className="block text-navy/70 text-sm font-semibold mb-2.5">
                          Phone *
                        </label>
                        <input
                          id="quote-phone"
                          type="tel"
                          required
                          placeholder="04XX XXX XXX"
                          className="wizard-input"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <label htmlFor="quote-details" className="block text-navy/70 text-sm font-semibold mb-2.5">
                        Additional Details
                      </label>
                      <textarea
                        id="quote-details"
                        rows={3}
                        placeholder="Special requirements, large items, stairs, access issues..."
                        className="wizard-input resize-none"
                        value={formData.details}
                        onChange={(e) => updateField("details", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Error Banner */}
                {error && (
                  <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center">
                    {error}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy/[0.06]">
                  <div>
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={goBack}
                        className="flex items-center gap-2 text-navy/60 hover:text-navy transition-colors text-sm font-semibold"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-navy/50 text-sm hidden sm:block">
                      Step {currentStep} of 3
                    </span>
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="btn-gold !py-3 !px-8 text-sm flex items-center gap-2"
                      >
                        Next Step
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-gold !py-3 !px-8 text-sm flex items-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
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
                          <>
                            Get My Free Quote
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
