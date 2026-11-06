"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBookingModal } from "./BookingContext";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "ARTISTS", href: "/artists" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { openBooking } = useBookingModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0A0909]/95 backdrop-blur-md border-[#262423] py-3.5 shadow-2xl"
            : "bg-[#0A0909]/80 backdrop-blur-sm border-[#1F1D1D] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C92820]"
          >
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-[#E8DFCC] group-hover:text-white transition-colors">
              STICH Studio
            </span>
          </Link>

          {/* Navigation - Hidden on tablet & mobile, shown on lg screens */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#C92820] ${
                    isActive
                      ? "text-[#E8DFCC] font-semibold"
                      : "text-[#92908A] hover:text-[#E8DFCC]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C92820]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+918959690529"
              className="hidden xl:flex items-center gap-2 text-xs text-[#92908A] hover:text-[#E8DFCC] transition-colors"
              title="Call studio"
            >
              <Phone size={13} className="text-[#C92820]" />
              <span>+91 89596 90529</span>
            </a>

            <button
              onClick={() => openBooking()}
              className="hidden sm:inline-flex items-center gap-2 bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.16em] font-semibold px-4 sm:px-5 py-2.5 transition-all duration-200 hover:shadow-[0_0_15px_rgba(201,40,32,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C92820] focus-visible:ring-offset-[#0A0909] cursor-pointer "
            >
              <span>BOOK SESSION</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile & Tablet Hamburger Button (lg:hidden) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer lg:hidden text-[#E8DFCC] p-2 hover:text-[#C92820] transition-colors focus-visible:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Fullscreen Editorial Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A0909]/98 backdrop-blur-2xl flex flex-col justify-between pt-16 md::pt-24 pb-6 sm:pb-8 px-6 lg:hidden animate-in fade-in duration-200 overflow-y-auto">
          <div className="max-w-5xl w-full mx-auto flex flex-col justify-between min-h-[calc(100vh-8rem)]">
            <div className="flex flex-col">
              {/* Navigation list: 1 column on mobile, 2 columns on tablet with large punchy typography */}
              <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:gap-y-6 md:gap-y-8 pt-6 sm:pt-8 md:pt-10">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      prefetch={true}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-2 sm:py-3 border-b border-[#1F1D1D] focus-visible:outline-none"
                    >
                      <div className="flex items-baseline gap-3 sm:gap-5">
                        <span className="font-mono text-xs sm:text-sm text-[#92908A]/60 group-hover:text-[#C92820] transition-colors">
                          0{idx + 1}
                        </span>
                        <div className="flex flex-col">
                          <span
                            className={`font-display text-2xl md:text-6xl tracking-wider transition-colors ${
                              isActive
                                ? "text-[#C92820]"
                                : "text-[#E8DFCC] group-hover:text-white group-hover:translate-x-2 transition-transform"
                            }`}
                          >
                            {link.name}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={22}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-[#C92820] opacity-100"
                            : "text-[#92908A] opacity-30 group-hover:opacity-100 group-hover:text-[#C92820] -translate-x-1 group-hover:translate-x-0"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom info section */}
            <div className=" py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="text-sm text-[#92908A]">
                <span className="block uppercase tracking-widest text-[#92908A]/60 mb-0.5">
                  DIRECT LINE
                </span>
                <a
                  href="tel:+918959690529"
                  className="text-[#E8DFCC] hover:text-[#C92820] transition-colors font-mono"
                >
                  +91 89596 90529
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white font-semibold py-3.5 sm:py-4 px-8 flex items-center justify-center gap-3 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-[0_0_20px_rgba(201,40,32,0.4)]"
              >
                <span>BOOK YOUR SESSION</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
