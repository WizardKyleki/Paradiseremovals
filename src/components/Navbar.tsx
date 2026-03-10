"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const locationLinks = [
  { label: "Arundel", href: "/removals/arundel" },
  { label: "Southport", href: "/removals/southport" },
  { label: "Helensvale", href: "/removals/helensvale" },
  { label: "Coomera", href: "/removals/coomera" },
  { label: "Labrador", href: "/removals/labrador" },
  { label: "Parkwood", href: "/removals/parkwood" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Local Moves", href: "/#areas", hasDropdown: true },
  { label: "Packing", href: "/services/packing" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

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

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

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
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Paradise Removals Logo"
              width={200}
              height={183}
              className="w-[100px] sm:w-[140px] h-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={link.href}
                    className="nav-link flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-navy-deep/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 min-w-[200px]">
                      {locationLinks.map((loc) => (
                        <Link
                          key={loc.href}
                          href={loc.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-gold hover:bg-white/5 transition-all text-sm font-medium"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-gold/50"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                          </svg>
                          {loc.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              )
            )}
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
        } overflow-y-auto`}
      >
        <div className="p-6 pt-20 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  className="w-full flex items-center justify-between text-white/80 hover:text-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-all font-medium"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 flex flex-col gap-0.5 pb-2">
                    {locationLinks.map((loc) => (
                      <Link
                        key={loc.href}
                        href={loc.href}
                        className="flex items-center gap-2.5 text-white/60 hover:text-gold py-2.5 px-4 rounded-lg hover:bg-white/5 transition-all text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <svg
                          className="w-3 h-3 text-gold/40"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                        </svg>
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-all font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
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
