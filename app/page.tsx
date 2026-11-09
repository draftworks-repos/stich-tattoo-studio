"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useBookingModal } from "@/components/BookingContext";
import {
  STUDIO_INFO,
  MARQUEE_STYLES,
  ARTISTS,
  RECENT_WORK_PLATES,
  STEPS_TO_FOREVER,
  CLIENT_REVIEWS,
} from "@/data/studio-data";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Feather,
  Eye,
  Crosshair,
  Star,
} from "lucide-react";

export default function HomePage() {
  const { openBooking } = useBookingModal();

  return (
    <div className="bg-[#0A0909] text-[#E8DFCC] overflow-hidden">
      {/* ============================================================== */}
      {/* 1. HERO SECTION */}
      {/* ============================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center border-b border-[#262423]">
        {/* Background Image with Dark Cinematic Editorial Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=85"
            alt="Tattoo artist inking client in dark studio"
            fill
            priority
            className="object-cover object-center filter brightness-[0.7] contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0909] via-[#0A0909]/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0909] via-[#0A0909]/10 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl">
            {/* Small red uppercase eyebrow label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#C92820] text-sm">✦</span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#C92820] font-semibold sm:hidden">
                CUSTOM TATTOOS ONLY
              </span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#C92820] font-semibold hidden sm:inline">
                CUSTOM TATTOOS BY ARTISTS. FOR INDIVIDUALS.
              </span>
            </div>

            {/* Massive condensed headline */}
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-[#E8DFCC] tracking-tight leading-[0.88] mb-6 select-none">
              INK YOUR
              <br />
              <span className="text-white">STORY.</span>
            </h1>

            {/* Style tags banner */}
            <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#92908A] mb-8 font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>FINE LINE</span>
              <span className="text-[#C92820]">|</span>
              <span>BLACK & GREY</span>
              <span className="text-[#C92820]">|</span>
              <span>REALISM</span>
              <span className="text-[#C92820]">|</span>
              <span>TRADITIONAL</span>
              <span className="text-[#C92820]">|</span>
              <span>BLACKWORK</span>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking()}
                className="cursor-pointer inline-flex items-center gap-3 bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-4 transition-all duration-200 hover:shadow-[0_0_25px_rgba(201,40,32,0.45)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C92820]"
              >
                <span>BOOK SESSION</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border border-[#3A3735] hover:border-[#E8DFCC] bg-[#121111]/70 backdrop-blur-sm text-[#E8DFCC] text-xs uppercase tracking-[0.18em] px-6 py-4 transition-colors"
              >
                <span>VIEW RECENT WORK</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. TATTOO STYLES MARQUEE */}
      {/* ============================================================== */}
      <section className="bg-[#121111] border-b border-[#262423] py-5 overflow-hidden select-none">
        <div className="animate-marquee items-center gap-10">
          {[...MARQUEE_STYLES, ...MARQUEE_STYLES, ...MARQUEE_STYLES].map(
            (style, idx) => (
              <div key={idx} className="flex items-center gap-10 shrink-0">
                <span className="font-display text-4xl sm:text-5xl tracking-widest text-[#E8DFCC] hover:text-white transition-colors">
                  {style}
                </span>
                <span className="text-[#C92820] text-xl font-bold font-mono">
                  ✦
                </span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. STUDIO INTRODUCTION (PLATE 02 / 09) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0A0909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Monochrome Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full border border-[#262423] overflow-hidden bg-[#161515] group">
                <Image
                  src="https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Tattoo artist focusing on needle ink work"
                  fill
                  className="object-cover contrast-110 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-[11px] uppercase tracking-widest text-[#92908A] bg-black/60 px-3 py-1 border border-[#2A2726]">
                  RESIDENT STUDIO SUITE 01
                </div>
              </div>
            </div>

            {/* Right: Copy & Statistics */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-6 text-xs uppercase tracking-[0.25em]">
                <span className="text-[#C92820] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C92820]" />
                  OUR STORY
                </span>
                <span className="text-[#92908A]">PLATE 02 / 09</span>
              </div>

              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#E8DFCC] tracking-tight leading-[0.92] mb-6">
                CRAFT. PASSION.
                <br />
                PERMANENCE.
              </h2>

              <p className="text-[#92908A] text-base sm:text-lg leading-relaxed mb-6">
                STICH is an independent studio built on one belief: a tattoo
                should be as unique as the person wearing it. Every piece starts
                with a conversation and ends with art you will carry for life.
              </p>

              <p className="text-[#92908A] text-sm leading-relaxed mb-10">
                Our artists work in clean, private suites with the finest
                sterile equipment, so you can relax and focus on the story you
                want to tell.
              </p>

              {/* 3 Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#262423]">
                <div>
                  <div className="font-display text-4xl sm:text-5xl text-[#E8DFCC]">
                    12+
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#92908A] mt-1">
                    YEARS OF INK
                  </div>
                </div>

                <div>
                  <div className="font-display text-4xl sm:text-5xl text-[#E8DFCC]">
                    8
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#92908A] mt-1">
                    RESIDENT ARTISTS
                  </div>
                </div>

                <div>
                  <div className="font-display text-4xl sm:text-5xl text-[#E8DFCC]">
                    5K+
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#92908A] mt-1">
                    PIECES COMPLETED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. RECENT WORK (PLATE 05 / 09) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0E0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-4 text-xs uppercase tracking-[0.25em]">
            <span className="text-[#C92820] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C92820]" />
              PORTFOLIO
            </span>
            <span className="text-[#92908A]">PLATE 05 / 09</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight">
                RECENT WORK
              </h2>
              <p className="text-sm text-[#92908A] max-w-xl mt-2">
                A glimpse of the pieces our artists are proudest of. 500+ custom
                pieces · healed & photographed in-house · tattooing since 2012.
              </p>
            </div>

            <Link
              href="/gallery"
              className="text-nowrap inline-flex items-center gap-2 border border-[#3A3735] hover:border-[#E8DFCC] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#E8DFCC] transition-colors self-start md:self-auto"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECENT_WORK_PLATES.slice(0, 6).map((plate) => (
              <div
                key={plate.id}
                className="relative bg-[#161515] border border-[#262423] p-3 flex flex-col justify-between group hover:border-[#C92820]/60 transition-all duration-300"
              >
                {/* Plate Tag */}
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#92908A] mb-2 px-1">
                  <span className="font-mono text-[#C92820]">
                    {plate.plate}
                  </span>
                  <span>{plate.style}</span>
                </div>

                {/* Photo */}
                <div className="relative w-full aspect-square overflow-hidden bg-black border border-[#201E1D]">
                  <Image
                    src={plate.imageUrl}
                    alt={plate.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Overlay text */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h3 className="font-display text-2xl text-[#E8DFCC] tracking-wide">
                      {plate.title}
                    </h3>
                    <p className="text-[11px] text-[#C92820] font-medium">
                      Tattooed by {plate.artist}
                    </p>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#92908A] mt-2 px-1">
                  <span>{plate.placement}</span>
                  <span className="text-[#C92820] font-mono">HEALED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. STYLES WE MASTER (PLATE 03 / 09) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0A0909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-6 text-xs uppercase tracking-[0.25em]">
            <span className="text-[#C92820] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C92820]" />
              WHAT WE DO
            </span>
            <span className="text-[#92908A]">PLATE 03 / 09</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight">
              STYLES WE MASTER
            </h2>
            <Link
              href="/services"
              className="text-nowrap text-xs uppercase tracking-widest text-[#C92820] hover:text-[#E0352B] inline-flex items-center gap-1 group font-semibold"
            >
              <span>EXPLORE ALL 8 STYLES</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* 4-column editorial grid with corner plus markers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Custom Designs */}
            <div className="bg-[#121111] border border-[#262423] p-7 corner-crosses flex flex-col justify-between hover:border-[#C92820] transition-colors group">
              <div>
                <div className="w-10 h-10 border border-[#3A3735] flex items-center justify-center text-[#C92820] mb-6 group-hover:border-[#C92820]">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-display text-3xl text-[#E8DFCC] mb-1 tracking-wide">
                  CUSTOM DESIGNS
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C92820] mb-3 font-semibold">
                  UNIQUE. PERSONAL. YOU.
                </p>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  Fully original artwork drawn from scratch around your idea,
                  fitted organically to your anatomy.
                </p>
              </div>
              <Link
                href="/services#custom-designs"
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#E8DFCC] hover:text-[#C92820] mt-8 pt-4 border-t border-[#262423] font-medium"
              >
                <span>Learn More</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* 2. Fine Line */}
            <div className="bg-[#121111] border border-[#262423] p-7 corner-crosses flex flex-col justify-between hover:border-[#C92820] transition-colors group">
              <div>
                <div className="w-10 h-10 border border-[#3A3735] flex items-center justify-center text-[#C92820] mb-6 group-hover:border-[#C92820]">
                  <Feather size={20} />
                </div>
                <h3 className="font-display text-3xl text-[#E8DFCC] mb-1 tracking-wide">
                  FINE LINE
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C92820] mb-3 font-semibold">
                  PRECISION & DETAIL.
                </p>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  Delicate single-needle work with crisp, microscopic lines that
                  heal clean and age with graceful softness.
                </p>
              </div>
              <Link
                href="/services#fine-line"
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#E8DFCC] hover:text-[#C92820] mt-8 pt-4 border-t border-[#262423] font-medium"
              >
                <span>Learn More</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* 3. Black & Grey */}
            <div className="bg-[#121111] border border-[#262423] p-7 corner-crosses flex flex-col justify-between hover:border-[#C92820] transition-colors group">
              <div>
                <div className="w-10 h-10 border border-[#3A3735] flex items-center justify-center text-[#C92820] mb-6 group-hover:border-[#C92820]">
                  <Crosshair size={20} />
                </div>
                <h3 className="font-display text-3xl text-[#E8DFCC] mb-1 tracking-wide">
                  BLACK & GREY
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C92820] mb-3 font-semibold">
                  TIMELESS SHADING.
                </p>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  Smooth gradients and deep contrast that age beautifully,
                  creating soft sculptural volume.
                </p>
              </div>
              <Link
                href="/services#black-and-grey"
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#E8DFCC] hover:text-[#C92820] mt-8 pt-4 border-t border-[#262423] font-medium"
              >
                <span>Learn More</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* 4. Realism */}
            <div className="bg-[#121111] border border-[#262423] p-7 corner-crosses flex flex-col justify-between hover:border-[#C92820] transition-colors group">
              <div>
                <div className="w-10 h-10 border border-[#3A3735] flex items-center justify-center text-[#C92820] mb-6 group-hover:border-[#C92820]">
                  <Eye size={20} />
                </div>
                <h3 className="font-display text-3xl text-[#E8DFCC] mb-1 tracking-wide">
                  REALISM
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C92820] mb-3 font-semibold">
                  ART IN REAL LIFE.
                </p>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  Portraits and scenes rendered with photographic depth, tonal
                  nuance, and zero-contour blending.
                </p>
              </div>
              <Link
                href="/services#realism"
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#E8DFCC] hover:text-[#C92820] mt-8 pt-4 border-t border-[#262423] font-medium"
              >
                <span>Learn More</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. MEET THE ARTISTS (PLATE 04 / 09) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0E0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-6 text-xs uppercase tracking-[0.25em]">
            <span className="text-[#C92820] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C92820]" />
              THE TEAM
            </span>
            <span className="text-[#92908A]">PLATE 04 / 09</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight">
                MEET THE ARTISTS
              </h2>
              <p className="text-sm text-[#92908A] max-w-xl mt-2">
                Every artist at STICH has a signature style. Find the one whose
                work speaks to you.
              </p>
            </div>
            <Link
              href="/artists"
              className="text-nowrap inline-flex items-center gap-2 border border-[#3A3735] hover:border-[#E8DFCC] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#E8DFCC] transition-colors mr-auto md:mr-0"
            >
              <span>VIEW ALL ARTISTS</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Three large monochrome artist portraits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTISTS.slice(0, 3).map((artist) => (
              <div key={artist.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] w-full bg-[#181717] border border-[#262423] overflow-hidden mb-5">
                  <Image
                    src={artist.portraitUrl}
                    alt={artist.name}
                    fill
                    className="object-cover contrast-110 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  <button
                    onClick={() => openBooking({ artist: artist.name })}
                    className="cursor-pointer absolute bottom-4 right-4 bg-[#C92820] text-white text-[11px] uppercase tracking-wider font-semibold px-3 py-2 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Book with {artist.name.split(" ")[0]}
                  </button>
                </div>

                <h3 className="font-display text-4xl text-[#E8DFCC] tracking-wide group-hover:text-white transition-colors">
                  {artist.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C92820] font-semibold mt-1 mb-2">
                  {artist.specialization}
                </p>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  {artist.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FEATURED VISUAL SHOWCASE ("TIMELESS") */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0A0909] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border border-[#262423] bg-[#121111] p-6 sm:p-12 lg:p-16 overflow-hidden">
            {/* Background tall panels collage */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 opacity-75">
              <div className="relative h-80 sm:h-96 md:h-[460px] rounded-full overflow-hidden border border-[#2A2726]">
                <Image
                  src="https://images.unsplash.com/photo-1752695360271-b7980b0efbc5?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Tattoo piece 1"
                  fill
                  className="object-cover contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-80 sm:h-96 md:h-[460px] rounded-full overflow-hidden border border-[#2A2726] mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1645384816340-917b3040eb99?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Tattoo piece 2"
                  fill
                  className="object-cover contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-80 sm:h-96 md:h-[460px] rounded-full overflow-hidden border border-[#2A2726]">
                <Image
                  src="https://images.unsplash.com/photo-1522687533888-1078974f88ec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Tattoo piece 3"
                  fill
                  className="object-cover contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-80 sm:h-96 md:h-[460px] rounded-full overflow-hidden border border-[#2A2726] mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1704999638827-cd0a7fed5c1c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Tattoo piece 4"
                  fill
                  className="object-cover contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Massive overlaid title: "TIMELESS" */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 md:top-auto md:bottom-4 md:translate-y-0 text-center pointer-events-none">
              <span className="font-display text-8xl md:text-[13rem] lg:text-[16rem] leading-none text-[#E8DFCC] tracking-widest opacity-90 drop-shadow-2xl">
                TIMELESS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FOUR STEPS TO FOREVER (PLATE 06 / 09) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0E0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-6 text-xs uppercase tracking-[0.25em]">
            <span className="text-[#C92820] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C92820]" />
              THE PROCESS
            </span>
            <span className="text-[#92908A]">PLATE 06 / 09</span>
          </div>

          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight mb-14">
            FOUR STEPS TO FOREVER
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS_TO_FOREVER.map((step) => (
              <div
                key={step.number}
                className="group border-t border-[#262423] pt-6 flex flex-col justify-between"
              >
                <div>
                  <div className="font-outline text-7xl sm:text-8xl mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-display text-3xl text-[#E8DFCC] mb-1 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#C92820] mb-3 font-semibold">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#92908A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Book Sketch Talk CTA Button */}
          <div className="mt-14 pt-8 border-t border-[#262423] flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={() => openBooking()}
              className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3.5 transition-colors"
            >
              BOOK A SKETCH TALK
            </button>
            <span className="text-xs text-[#92908A]">
              Free 20-minute design consultations held daily 12pm – 4pm.
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. CLIENT REVIEWS (PLATE 07 / 09) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0A0909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-6 text-xs uppercase tracking-[0.25em]">
            <span className="text-[#C92820] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C92820]" />
              CLIENT WORDS
            </span>
            <span className="text-[#92908A]">PLATE 07 / 09</span>
          </div>

          <div className="mb-12">
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight">
              WORN WITH PRIDE
            </h2>
            <p className="text-sm text-[#92908A] max-w-xl mt-2">
              Verified client reviews from our studio sessions.
            </p>
          </div>

          {/* Reviews Grid - 1 Col on mobile and tablet, 3 Col on desktop (lg:grid-cols-3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.ticketNumber}
                className="bg-[#121111] border border-[#262423] p-6 relative flex flex-col justify-between hover:border-[#3A3735] transition-colors"
              >
                <div>
                  {/* Stars Row */}
                  <div className="flex text-[#C92820] gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#C92820" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#E8DFCC] leading-relaxed mb-6 italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Name & Google Icon */}
                <div className="pt-4 border-t border-[#262423]/60 flex justify-between items-center">
                  <h3 className="font-display text-2xl text-[#E8DFCC] tracking-wide">
                    {review.client}
                  </h3>
                  <div
                    className="flex items-center gap-1.5 text-xs text-[#92908A]"
                    title="Verified Google Review"
                  >
                    <svg
                      className="w-4 h-4 fill-current text-[#E8DFCC]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    <span className="text-[10px] tracking-wider uppercase text-[#92908A]">
                      Google
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. BOOKING CTA & CONTACT PREVIEW (PLATE 08 / 08) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0A0909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-6 text-xs uppercase tracking-[0.25em]">
                <span className="text-[#C92820] font-semibold">BOOK NOW</span>
                <span className="text-[#92908A]">PLATE 08 / 08</span>
              </div>

              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight leading-none mb-6">
                READY TO GET STICH?
              </h2>

              <p className="text-[#92908A] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Tell us about your idea and we will match you with the right
                artist. Walk-ins are welcome, appointments are recommended.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openBooking()}
                  className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-4 transition-colors"
                >
                  BOOK YOUR SESSION
                </button>

                <a
                  href="tel:+918959690529"
                  className="border border-[#3A3735] hover:border-[#E8DFCC] text-[#E8DFCC] text-xs uppercase tracking-[0.2em] px-6 py-4 transition-colors"
                >
                  CALL THE STUDIO
                </a>
              </div>
            </div>

            {/* Right: Studio Card with Corner Crosses (Address, Phone, Email only) */}
            <div className="lg:col-span-5">
              <div className="bg-[#121111] border border-[#262423] p-8 corner-crosses space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-1">
                    ADDRESS
                  </span>
                  <p className="font-display text-2xl text-[#E8DFCC]">
                    123 IRON STREET, DOWNTOWN
                  </p>
                  <p className="text-xs text-[#92908A]">{STUDIO_INFO.city}</p>
                </div>

                <div className="border-t border-[#262423] pt-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-1">
                    PHONE
                  </span>
                  <a
                    href="tel:+918959690529"
                    className="font-display text-2xl text-[#E8DFCC] hover:text-[#C92820] transition-colors"
                  >
                    +91 89596 90529
                  </a>
                </div>

                <div className="border-t border-[#262423] pt-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-1">
                    EMAIL
                  </span>
                  <a
                    href="mailto:hello@draftworks.in"
                    className="font-display text-xl text-[#E8DFCC] hover:text-[#C92820] transition-colors"
                  >
                    HELLO@DRAFTWORKS.IN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 12. FINAL CTA BANNER (BURGUNDY CONTAINER) */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#0A0909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#1A0A0A] border border-[#3E1616] p-8 sm:p-14 lg:p-16 corner-crosses overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E8DFCC] tracking-tight leading-[0.92] mb-4">
                  BRING THE SKETCH.
                  <br />
                  WE BRING THE NEEDLE.
                </h2>
                <p className="text-sm sm:text-base text-[#92908A] max-w-xl mb-8">
                  Napkin doodle, moodboard or a half-remembered dream: send it
                  over and our artists will turn it into skin-ready art.
                </p>
                <button
                  onClick={() => openBooking()}
                  className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors"
                >
                  START YOUR DESIGN
                </button>
              </div>

              {/* Minimal Tattoo Needle / Dagger Line Illustration */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-48 h-48 sm:w-56 sm:h-56 relative text-[#E8DFCC]/30 hover:text-[#C92820]/60 transition-colors">
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-full h-full"
                  >
                    {/* Central Dagger / Needle */}
                    <path d="M100 15 L106 75 L100 160 L94 75 Z" />
                    <line x1="100" y1="160" x2="100" y2="185" />
                    {/* Guard */}
                    <line x1="70" y1="75" x2="130" y2="75" strokeWidth="2.5" />
                    <circle cx="70" cy="75" r="4" fill="currentColor" />
                    <circle cx="130" cy="75" r="4" fill="currentColor" />
                    {/* Radiating needles / rays */}
                    <line
                      x1="100"
                      y1="15"
                      x2="60"
                      y2="40"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="100"
                      y1="15"
                      x2="140"
                      y2="40"
                      strokeDasharray="3 3"
                    />
                    <line x1="60" y1="100" x2="40" y2="100" />
                    <line x1="140" y1="100" x2="160" y2="100" />
                    <line x1="75" y1="130" x2="55" y2="140" />
                    <line x1="125" y1="130" x2="145" y2="140" />
                    {/* Moon crescent */}
                    <path d="M100 45 A 25 25 0 0 1 125 70" strokeWidth="1" />
                    <path d="M100 45 A 25 25 0 0 0 75 70" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
