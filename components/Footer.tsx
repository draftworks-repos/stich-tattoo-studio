"use client";

import React from "react";
import Link from "next/link";
import { useBookingModal } from "./BookingContext";
import { STUDIO_INFO } from "@/data/studio-data";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { openBooking } = useBookingModal();

  return (
    <footer className="bg-[#0A0909] border-t border-[#262423] pt-20 pb-12 text-[#92908A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Brand Wordmark */}
        <div className="border-b border-[#262423] pb-12 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-display text-7xl sm:text-9xl md:text-[11rem] leading-none text-[#E8DFCC] tracking-tight select-none">
                STICH
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C92820] font-semibold -mt-2">
                TATTOO STUDIO · EST. 2012
              </p>
            </div>
            <div className="max-w-sm mb-4">
              <p className="text-sm text-[#E8DFCC] leading-relaxed">
                Custom tattoos by artists, for individuals. Walk-ins welcome,
                appointments recommended.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs">
                <span className="text-[#C92820] font-mono">●</span>
                <span>Hospital-Grade Sterilization</span>
                <span className="text-[#C92820] font-mono">●</span>
                <span>Private Suites</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Column Editorial Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16 border-b border-[#262423]/60">
          {/* Col 1: Explore */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#E8DFCC] font-semibold">
              EXPLORE
            </span>
            <ul className="flex flex-col gap-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Services & Styles
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  About Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/artists"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Resident Artists
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Portfolio Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Styles */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#E8DFCC] font-semibold">
              STYLES
            </span>
            <ul className="flex flex-col gap-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link
                  href="/services#fine-line"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Fine Line
                </Link>
              </li>
              <li>
                <Link
                  href="/services#black-and-grey"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Black & Grey
                </Link>
              </li>
              <li>
                <Link
                  href="/services#realism"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Realism
                </Link>
              </li>
              <li>
                <Link
                  href="/services#traditional"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Neo Traditional
                </Link>
              </li>
              <li>
                <Link
                  href="/services#blackwork"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Blackwork & Geometric
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cover-ups"
                  className="hover:text-[#E8DFCC] transition-colors"
                >
                  Cover-up & Rework
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#E8DFCC] font-semibold">
              VISIT
            </span>
            <p className="text-xs text-[#E8DFCC] leading-relaxed">
              {STUDIO_INFO.address}
              <br />
              {STUDIO_INFO.neighborhood}
              <br />
              {STUDIO_INFO.city}
            </p>
            <div className="text-xs mt-2 space-y-1">
              <p className="text-[#E8DFCC]">{STUDIO_INFO.hours.weekday}</p>
              <p>{STUDIO_INFO.hours.sunday}</p>
            </div>
          </div>

          {/* Col 4: Talk to us */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#E8DFCC] font-semibold">
              TALK TO US
            </span>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="text-xs text-[#E8DFCC] hover:text-white transition-colors"
            >
              {STUDIO_INFO.phone}
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="text-xs text-[#E8DFCC] hover:text-white transition-colors"
            >
              {STUDIO_INFO.email}
            </a>
            <div className="pt-2">
              <button
                onClick={() => openBooking()}
                className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-[#C92820] hover:text-[#E0352B] uppercase tracking-wider font-semibold group"
              >
                <span>BOOK A SESSION</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} STICH TATTOO STUDIO. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#E8DFCC] transition-colors cursor-pointer">
              Drsign & Developed by{" "}
              <a
                href="https://draftworks.in/"
                className="hover:text-[#C92820] transition-colors"
              >
                draftworks.in
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
