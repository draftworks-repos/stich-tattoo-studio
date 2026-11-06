"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "@/components/BookingContext";
import { TATTOO_STYLES, STEPS_TO_FOREVER } from "@/data/studio-data";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Clock,
  Activity,
} from "lucide-react";

export default function ServicesPage() {
  const { openBooking } = useBookingModal();

  return (
    <div className="bg-[#0A0909] text-[#E8DFCC] overflow-hidden">
      {/* ============================================================== */}
      {/* 1. SERVICES HERO */}
      {/* ============================================================== */}
      <section className="relative min-h-[60vh] flex items-center border-b border-[#262423] py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=2000&q=80"
            alt="Intricate tattoo work on skin"
            fill
            priority
            className="object-cover object-center filter brightness-[0.7] contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0909] via-[#0A0909]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#C92820] text-sm">✦</span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#C92820] font-semibold">
                WHAT WE DO
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E8DFCC] tracking-tight leading-[0.9] mb-6">
              ART THAT LIVES
              <br />
              <span className="text-white">ON YOUR SKIN.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#92908A] max-w-2xl leading-relaxed mb-8">
              We specialize in permanent, custom tattoos executed with surgical
              hygiene, anatomical precision, and museum-grade artistry. Explore
              our core styles below.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openBooking()}
                className="bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3.5 transition-colors"
              >
                REQUEST A CONSULTATION
              </button>
              <a
                href="#all-styles"
                className="border border-[#3A3735] hover:border-[#E8DFCC] text-[#E8DFCC] text-xs uppercase tracking-[0.2em] px-6 py-3.5 transition-colors"
              >
                EXPLORE STYLES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. DETAILED TATTOO STYLES (ALTERNATING LAYOUTS) */}
      {/* ============================================================== */}
      <section id="all-styles" className="py-24 border-b border-[#262423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-16 text-xs uppercase tracking-[0.25em]">
            <span className="text-[#C92820] font-semibold">
              STYLES DIRECTORY
            </span>
            <span className="text-[#92908A]">
              {TATTOO_STYLES.length} SPECIALIZED DISCIPLINES
            </span>
          </div>

          <div className="space-y-32">
            {TATTOO_STYLES.map((style, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={style.id}
                  id={style.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-24"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full border border-[#262423] bg-[#161515] overflow-hidden group">
                      <Image
                        src={style.imageUrl}
                        alt={style.name}
                        fill
                        className="object-cover contrast-110 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      <div className="absolute top-4 left-4 bg-[#0A0909]/90 border border-[#2A2726] px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#C92820] font-mono">
                        STYLE - 0{idx + 1}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs">
                        <span className="text-[#92908A] bg-[#0A0909]/80 px-2 py-1">
                          Pain Level:{" "}
                          <strong className="text-[#E8DFCC]">
                            {style.painLevel}
                          </strong>
                        </span>
                        <span className="text-[#92908A] bg-[#0A0909]/80 px-2 py-1">
                          Heal:{" "}
                          <strong className="text-[#E8DFCC]">
                            {style.healingDuration}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-2">
                      {style.tagline}
                    </span>

                    <h2 className="font-display text-5xl sm:text-6xl text-[#E8DFCC] tracking-wide mb-4">
                      {style.name}
                    </h2>

                    <p className="text-[#E8DFCC] text-sm leading-relaxed mb-4 font-medium">
                      {style.summary}
                    </p>

                    <p className="text-[#92908A] text-xs sm:text-sm leading-relaxed mb-6">
                      {style.description}
                    </p>

                    {/* Metadata specs */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#262423] text-xs mb-6">
                      <div>
                        <span className="text-[#92908A] block text-[10px] uppercase tracking-wider mb-1">
                          Recommended Placements
                        </span>
                        <p className="text-[#E8DFCC]">
                          {style.idealPlacements.join(", ")}
                        </p>
                      </div>
                      <div>
                        <span className="text-[#92908A] block text-[10px] uppercase tracking-wider mb-1">
                          Needle Technique
                        </span>
                        <p className="text-[#E8DFCC]">
                          {style.needleTechnique}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <button
                        onClick={() => openBooking({ style: style.name })}
                        className="bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 transition-colors flex items-center gap-2"
                      >
                        <span>Book {style.name} Sitting</span>
                        <ArrowRight size={14} />
                      </button>

                      <div className="text-[11px] text-[#92908A]">
                        Artists:{" "}
                        <span className="text-[#E8DFCC] font-medium">
                          {style.featuredArtists.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CUSTOM DESIGN & COVER-UP SPECIALTY BREAKDOWN */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0E0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Box 1: Custom Artwork */}
            <div className="bg-[#121111] border border-[#262423] p-8 sm:p-10 corner-crosses">
              <div className="w-12 h-12 border border-[#C92820]/60 text-[#C92820] flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-2">
                ORIGINAL COMMISSIONS
              </span>
              <h3 className="font-display text-4xl sm:text-5xl text-[#E8DFCC] tracking-wide mb-4">
                CUSTOM DESIGN PROCESS
              </h3>
              <p className="text-sm text-[#92908A] leading-relaxed mb-6">
                Never settle for a design someone else already wears. We build
                every composition from raw concept sketches, matching the flow
                of your muscles and bone landmarks.
              </p>
              <ul className="space-y-3 text-xs text-[#E8DFCC] border-t border-[#262423] pt-6 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-[#C92820] font-mono">01</span>
                  <span>
                    Free initial concept consultation (in-person or virtual)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C92820] font-mono">02</span>
                  <span>Anatomical blueprint sketching & scale sizing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C92820] font-mono">03</span>
                  <span>
                    Stencil placement rehearsal before needle touches skin
                  </span>
                </li>
              </ul>
              <button
                onClick={() =>
                  openBooking({ style: "Custom Artwork & Sleeves" })
                }
                className="w-full bg-[#181717] hover:bg-[#C92820] text-[#E8DFCC] hover:text-white border border-[#2A2726] hover:border-[#C92820] py-3 text-xs uppercase tracking-widest font-semibold transition-all"
              >
                Start Custom Concept
              </button>
            </div>

            {/* Box 2: Cover-up and Rework */}
            <div className="bg-[#121111] border border-[#262423] p-8 sm:p-10 corner-crosses">
              <div className="w-12 h-12 border border-[#C92820]/60 text-[#C92820] flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-2">
                RECLAMATION & RESTORATION
              </span>
              <h3 className="font-display text-4xl sm:text-5xl text-[#E8DFCC] tracking-wide mb-4">
                COVER-UP & REWORK
              </h3>
              <p className="text-sm text-[#92908A] leading-relaxed mb-6">
                Give old, faded, or regretful ink a powerful second life. Using
                light physics and strategic pigment density, we conceal unwanted
                marks beneath breathtaking art.
              </p>
              <ul className="space-y-3 text-xs text-[#E8DFCC] border-t border-[#262423] pt-6 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-[#C92820] font-mono">01</span>
                  <span>
                    Old pigment saturation audit & laser lightening review
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C92820] font-mono">02</span>
                  <span>High-contrast dark foreground illusion designs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C92820] font-mono">03</span>
                  <span>Guaranteed total concealment with lasting clarity</span>
                </li>
              </ul>
              <button
                onClick={() => openBooking({ style: "Cover-Up & Rework" })}
                className="w-full bg-[#181717] hover:bg-[#C92820] text-[#E8DFCC] hover:text-white border border-[#2A2726] hover:border-[#C92820] py-3 text-xs uppercase tracking-widest font-semibold transition-all"
              >
                Book Cover-Up Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PROCESS RECAP */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#262423] bg-[#0A0909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block mb-2">
              HOW WE WORK
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-[#E8DFCC] tracking-tight">
              THE FOUR-STEP JOURNEY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS_TO_FOREVER.map((s) => (
              <div
                key={s.number}
                className="bg-[#121111] border border-[#262423] p-6"
              >
                <span className="font-outline text-5xl text-[#C92820] block mb-2">
                  {s.number}
                </span>
                <h4 className="font-display text-2xl text-[#E8DFCC] mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-[#92908A]">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SERVICES CLOSING CTA */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#121111] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block mb-2">
            START YOUR JOURNEY
          </span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight mb-4">
            LET&apos;S DISCUSS YOUR PIECE
          </h2>
          <p className="text-sm text-[#92908A] max-w-xl mx-auto mb-8">
            Whether you want a discreet fine line keepsake or an ambitious full
            back piece, our artists are ready to translate your idea into
            permanent art.
          </p>
          <button
            onClick={() => openBooking()}
            className="bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors"
          >
            BOOK AN ARTIST CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
}
