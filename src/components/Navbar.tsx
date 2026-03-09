"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Areas", href: "#areas" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#quote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled py-2" : "py-3"
        }`}
        style={
          !scrolled
            ? {
                background:
                  "linear-gradient(180deg, rgba(26, 45, 184, 0.6) 0%, rgba(17, 31, 162, 0.3) 60%, transparent 100%)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Paradise Removals Logo"
              width={200}
              height={183}
              className="w-[100px] sm:w-[140px] h-auto object-contain transition-all duration-300"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+61434428785"
              className="hidden md:flex items-center gap-2 btn-gold text-sm !py-2.5 !px-5"
            >
              <svg
                className="w-4 h-4"
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

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 mobile-overlay ${
          mobileOpen ? "open" : ""
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-navy-deep z-50 mobile-menu ${
          mobileOpen ? "open" : ""
        }`}
      >
        <div className="p-6 pt-20 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-all font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+61434428785"
            className="btn-gold text-center mt-4 text-sm"
          >
            Call 0434 428 785
          </a>
        </div>
      </div>
    </>
  );
}
