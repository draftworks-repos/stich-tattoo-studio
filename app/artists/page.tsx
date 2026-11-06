"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "@/components/BookingContext";
import { ARTISTS, Artist } from "@/data/studio-data";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ArtistsPage() {
  const { openBooking } = useBookingModal();
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <div className="bg-[#0A0909] text-[#E8DFCC] overflow-hidden">
      {/* ============================================================== */}
      {/* 1. ARTISTS HERO */}
      {/* ============================================================== */}
      <section className="relative min-h-[55vh] flex items-center border-b border-[#262423] py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80"
            alt="Portrait of tattoo master"
            fill
            priority
            className="object-cover object-center filter brightness-[0.7] contrast-130"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0909] via-[#0A0909]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#C92820] text-sm">✦</span>
              <span className="text-xs uppercase tracking-[0.28em] text-[#C92820] font-semibold">
                RESIDENT ARTISTS
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E8DFCC] tracking-tight leading-[0.9] mb-6">
              THE HANDS
              <br />
              <span className="text-white">BEHIND THE ART.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#92908A] max-w-2xl leading-relaxed mb-8">
              Every artist at STICH is a master of their discipline with a
              distinct visual signature. From single-needle micro-botanicals to
              monumental Greek realism sleeves, discover our resident creators.
            </p>

            <button
              onClick={() => openBooking()}
              className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3.5 transition-colors"
            >
              BOOK WITH AN ARTIST
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. ARTIST PROFILES (EDITORIAL GRID) */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-[#262423] pb-3 mb-16 text-xs uppercase tracking-[0.25em]">
            <span className="text-[#C92820] font-semibold">
              ROSTER & RESIDENCY
            </span>
            <span className="text-[#92908A]">AVAILABLE FOR CONSULTATIONS</span>
          </div>

          <div className="space-y-28">
            {ARTISTS.map((artist, idx) => (
              <div
                key={artist.id}
                id={artist.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start scroll-mt-24"
              >
                {/* Left: Big Portrait */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[3/4] w-full bg-[#161515] border border-[#262423] overflow-hidden group">
                    <Image
                      src={artist.portraitUrl}
                      alt={artist.name}
                      fill
                      className="object-cover contrast-110 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 bg-[#0A0909]/90 border border-[#2A2726] px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#C92820] font-mono">
                      {artist.bookingStatus}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs">
                      <span className="text-[#E8DFCC] font-mono">
                        {artist.instagram}
                      </span>
                      <span className="text-[#92908A]">
                        {artist.yearsOfExperience} yrs exp
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Artist Biography, Motifs & Recent Works */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#262423] pb-2 mb-4 text-xs">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold">
                        {artist.role}
                      </span>
                      <span className="text-[#92908A]">
                        ${artist.hourlyRate} / inch
                      </span>
                    </div>

                    <h2 className="font-display text-5xl sm:text-6xl text-[#E8DFCC] tracking-wide mb-2">
                      {artist.name}
                    </h2>

                    <p className="text-sm uppercase tracking-wider text-[#C92820] font-semibold mb-6">
                      {artist.specialization}
                    </p>

                    <p className="text-sm text-[#E8DFCC] leading-relaxed mb-4 font-medium">
                      {artist.bio}
                    </p>

                    <p className="text-xs sm:text-sm text-[#92908A] leading-relaxed mb-6">
                      {artist.fullBio}
                    </p>

                    {/* Favorite Motifs */}
                    <div className="mb-8">
                      <span className="text-[10px] uppercase tracking-widest text-[#92908A] block mb-2 font-semibold">
                        SIGNATURE MOTIFS
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {artist.favoriteMotifs.map((motif, mIdx) => (
                          <span
                            key={mIdx}
                            className="text-xs bg-[#161515] border border-[#262423] px-3 py-1 text-[#E8DFCC]"
                          >
                            {motif}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Selected Recent Works Gallery */}
                    <div className="border-t border-[#262423] pt-6 mb-8">
                      <span className="text-[10px] uppercase tracking-widest text-[#92908A] block mb-3 font-semibold">
                        SELECTED RECENT TATTOOS
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        {artist.recentWorks.map((work, wIdx) => (
                          <div
                            key={wIdx}
                            className="bg-[#121111] border border-[#262423] p-2 group"
                          >
                            <div className="relative aspect-square w-full overflow-hidden bg-black mb-2">
                              <Image
                                src={work.imageUrl}
                                alt={work.title}
                                fill
                                className="object-cover contrast-110 group-hover:scale-105 transition-all duration-500"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <h4 className="font-display text-lg text-[#E8DFCC]">
                              {work.title}
                            </h4>
                            <div className="flex justify-between text-[10px] text-[#92908A]">
                              <span>{work.style}</span>
                              <span>{work.placement}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#262423]">
                    <button
                      onClick={() => openBooking({ artist: artist.name })}
                      className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.18em] font-semibold px-6 py-3 transition-colors flex items-center gap-2"
                    >
                      <span>Book with {artist.name.split(" ")[0]}</span>
                      <ArrowRight size={14} />
                    </button>

                    <Link
                      href="/gallery"
                      className="border border-[#3A3735] hover:border-[#E8DFCC] text-[#E8DFCC] text-xs uppercase tracking-wider px-5 py-3 transition-colors"
                    >
                      Full Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. GUEST ARTIST PROGRAM */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#121111] border-b border-[#262423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161515] border border-[#262423] p-8 sm:p-12 corner-crosses">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-2">
                  INTERNATIONAL RESIDENCIES
                </span>
                <h3 className="font-display text-4xl sm:text-5xl text-[#E8DFCC] tracking-wide mb-3">
                  VISITING GUEST ARTISTS
                </h3>
                <p className="text-xs sm:text-sm text-[#92908A] leading-relaxed max-w-xl">
                  Every season, STICH hosts celebrated international tattooists
                  from Berlin, Tokyo, London and Seoul for exclusive 3-day to
                  2-week guest residencies. Follow our events page or join the
                  studio waitlist for priority guest booking.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => openBooking()}
                  className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3.5 transition-colors"
                >
                  JOIN GUEST WAITLIST
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
