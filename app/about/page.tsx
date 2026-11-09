"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "@/components/BookingContext";
import { STUDIO_INFO, ARTISTS } from "@/data/studio-data";
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  Sparkles,
  Clock,
  CheckCircle2,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const { openBooking } = useBookingModal();

  return (
    <div className="bg-[#0A0909] text-[#E8DFCC] overflow-hidden">
      {/* ============================================================== */}
      {/* 1. HERO */}
      {/* ============================================================== */}
      <section className="relative min-h-[60vh] flex items-center border-b border-[#262423] py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=80"
            alt="Studio lounge and artist workstation"
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
                ABOUT STICH STUDIO
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E8DFCC] tracking-tight leading-[0.9] mb-6">
              MORE THAN INK.
              <br />
              <span className="text-white">IT&apos;S YOUR STORY.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#92908A] max-w-2xl leading-relaxed mb-8">
              Founded in 2012, STICH was created as an antidote to intimidating
              street shops and cookie-cutter flash walls. We provide an
              uncompromising, hospital-grade private studio where skin art is
              treated as fine art.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openBooking()}
                className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3.5 transition-colors"
              >
                BOOK A VISIT
              </button>
              <Link
                href="/artists"
                className="border border-[#3A3735] hover:border-[#E8DFCC] text-[#E8DFCC] text-xs uppercase tracking-[0.2em] px-6 py-3.5 transition-colors"
              >
                MEET THE RESIDENTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OUR STORY & FOUNDATION */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C92820] font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C92820]" />
                ORIGIN & HERITAGE
              </div>

              <h2 className="font-display text-5xl sm:text-6xl text-[#E8DFCC] tracking-tight mb-6 leading-[0.95]">
                BORN FROM OBSESSION WITH THE CRAFT
              </h2>

              <div className="space-y-4 text-sm text-[#92908A] leading-relaxed">
                <p>
                  In the early 2010s, tattoo culture was rapidly evolving into a
                  respected fine art form, yet most physical studios remained
                  loud, cramped, and impersonal. Marcus Reed and a circle of
                  classical figurative artists founded STICH in Downtown
                  Metropolis with one clear mandate: treat each client like a
                  patron of a private gallery.
                </p>
                <p>
                  Over the past twelve years, we have built a sanctuary for both
                  artist and client. We replaced walk-in chaos with dedicated
                  consultation hours, open-plan noise with serene acoustic
                  private suites, and commercial pigments with REACH-certified
                  vegan carbon washes that do not fade to blue-green over time.
                </p>
                <p>
                  Today, STICH is home to eight permanent resident artists and
                  regular European guest masters, all united by an
                  uncompromising dedication to custom draughtsmanship and
                  anatomical flow.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t border-[#262423]">
                {STUDIO_INFO.stats.map((s, idx) => (
                  <div key={idx}>
                    <div className="font-display text-4xl text-[#E8DFCC]">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#92908A] mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full border border-[#262423] bg-[#161515] overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1699270066374-fc81f0119bff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Studio interior and private suite"
                  fill
                  className="object-cover contrast-110 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A0909]/90 border border-[#262423]">
                  <p className="font-display text-xl text-[#E8DFCC]">
                    IRON STREET RESIDENCE
                  </p>
                  <p className="text-[11px] text-[#92908A]">
                    123 Iron St, Arts District · 3,500 sq ft Studio Space
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. OUR FIVE PILLARS OF PHILOSOPHY */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0E0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block mb-2">
              OUR CODE
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-[#E8DFCC] tracking-tight">
              THE FIVE PILLARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Pillar 1 */}
            <div className="bg-[#121111] border border-[#262423] p-6 flex flex-col justify-between corner-crosses">
              <div>
                <span className="font-outline text-4xl block text-[#C92820] mb-3">
                  01
                </span>
                <h3 className="font-display text-2xl text-[#E8DFCC] mb-2">
                  INDIVIDUAL EXPRESSION
                </h3>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  Every human being carries a distinct history. We never
                  duplicate artwork or force generic trends onto your body.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#121111] border border-[#262423] p-6 flex flex-col justify-between corner-crosses">
              <div>
                <span className="font-outline text-4xl block text-[#C92820] mb-3">
                  02
                </span>
                <h3 className="font-display text-2xl text-[#E8DFCC] mb-2">
                  ARTISTIC INTEGRITY
                </h3>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  Our artists will speak honestly about size, placement, and
                  skin physics. If an idea will not age well, we redesign it
                  with you.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#121111] border border-[#262423] p-6 flex flex-col justify-between corner-crosses">
              <div>
                <span className="font-outline text-4xl block text-[#C92820] mb-3">
                  03
                </span>
                <h3 className="font-display text-2xl text-[#E8DFCC] mb-2">
                  SURGICAL HYGIENE
                </h3>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  Hospital-grade autoclaves, single-use sterilized membrane
                  cartridges, and clean barrier setups ensure 100% peace of
                  mind.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#121111] border border-[#262423] p-6 flex flex-col justify-between corner-crosses">
              <div>
                <span className="font-outline text-4xl block text-[#C92820] mb-3">
                  04
                </span>
                <h3 className="font-display text-2xl text-[#E8DFCC] mb-2">
                  PATIENT CARE
                </h3>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  We demystify the sitting experience. Private suites, gentle
                  pacing, and open communication make nervous first-timers feel
                  completely at ease.
                </p>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-[#121111] border border-[#262423] p-6 flex flex-col justify-between corner-crosses">
              <div>
                <span className="font-outline text-4xl block text-[#C92820] mb-3">
                  05
                </span>
                <h3 className="font-display text-2xl text-[#E8DFCC] mb-2">
                  LIFELONG PERMANENCE
                </h3>
                <p className="text-xs text-[#92908A] leading-relaxed">
                  From needle depth consistency to high-density pigments and our
                  written healing regimen, our pieces are built to hold
                  crispness for 40+ years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. OUR WORKSPACE ATMOSPHERE */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0A0909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-2">
                INSIDE THE SUITES
              </span>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#E8DFCC] tracking-tight">
                OUR WORKSPACE
              </h2>
            </div>
            <p className="text-xs text-[#92908A] max-w-md">
              A bespoke environment designed for comfort, acoustic privacy, and
              surgical sterile discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#121111] border border-[#262423] p-3">
              <div className="relative aspect-[4/3] w-full bg-black overflow-hidden mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=800&q=80"
                  alt="Private tattooing station"
                  fill
                  className="object-cover contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-display text-xl text-[#E8DFCC]">
                PRIVATE TREATMENT SUITES
              </h4>
              <p className="text-xs text-[#92908A] mt-1">
                Acoustic dampening, ergonomic chairs, and customizable lighting.
              </p>
            </div>

            <div className="bg-[#121111] border border-[#262423] p-3">
              <div className="relative aspect-[4/3] w-full bg-black overflow-hidden mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80"
                  alt="Sterile preparation station"
                  fill
                  className="object-cover contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-display text-xl text-[#E8DFCC]">
                STERILIZATION LAB
              </h4>
              <p className="text-xs text-[#92908A] mt-1">
                Class-B medical autoclave and hospital barrier preparation
                protocols.
              </p>
            </div>

            <div className="bg-[#121111] border border-[#262423] p-3">
              <div className="relative aspect-[4/3] w-full bg-black overflow-hidden mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1585745422697-1b42b98aac14?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Client consultation lounge"
                  fill
                  className="object-cover contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-display text-xl text-[#E8DFCC]">
                CLIENT LOUNGE & ARCHIVE
              </h4>
              <p className="text-xs text-[#92908A] mt-1">
                Curated art books, espresso bar, and relaxing pre-session space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. ABOUT CLOSING CTA */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#160B0B] border-t border-[#3E1616] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block mb-2">
            VISIT IN PERSON
          </span>
          <h2 className="font-display text-6xl sm:text-7xl text-[#E8DFCC] tracking-tight mb-4">
            COME MEET THE TEAM
          </h2>
          <p className="text-sm text-[#92908A] max-w-xl mx-auto mb-8">
            Walk-in consultations are welcome every afternoon between 12pm and
            4pm. Drop by to tour our suites and talk ideas over coffee.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => openBooking()}
              className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors"
            >
              SCHEDULE A STUDIO VISIT
            </button>
            <Link
              href="/contact"
              className="border border-[#3A3735] hover:border-[#E8DFCC] text-[#E8DFCC] text-xs uppercase tracking-[0.2em] px-7 py-4 transition-colors"
            >
              FIND LOCATION & HOURS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
