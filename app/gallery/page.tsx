"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "@/components/BookingContext";
import { RECENT_WORK_PLATES, PortfolioPiece } from "@/data/studio-data";
import { ArrowRight, X, ZoomIn, Check, Sparkles } from "lucide-react";

const CATEGORIES = [
  "All Work",
  "Fine Line",
  "Black & Grey",
  "Realism",
  "Blackwork",
  "Traditional",
  "Custom",
];

export default function GalleryPage() {
  const { openBooking } = useBookingModal();
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedPiece, setSelectedPiece] = useState<PortfolioPiece | null>(
    null,
  );

  const filteredPieces =
    activeCategory === "All Work"
      ? RECENT_WORK_PLATES
      : RECENT_WORK_PLATES.filter(
          (p) =>
            p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            p.style.toLowerCase().includes(activeCategory.toLowerCase()),
        );

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-[#0A0909] text-[#E8DFCC] overflow-hidden">
      {/* ============================================================== */}
      {/* 1. GALLERY HERO */}
      {/* ============================================================== */}
      <section className="relative min-h-[50vh] flex items-center border-b border-[#262423] py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=2000&q=80"
            alt="Tattoo piece detail"
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
                ARCHIVE & PORTFOLIO
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E8DFCC] tracking-tight leading-[0.9] mb-6">
              STICH TO
              <br />
              <span className="text-white">PERFECTION.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#92908A] max-w-2xl leading-relaxed mb-6">
              Every photograph below represents a piece designed and tattooed
              in-house at STICH. All works shown are either fully healed or
              captured immediately post-sitting under surgical studio lighting.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. DRAWER FILTER BAR & ASYMMETRICAL GRID */}
      {/* ============================================================== */}
      <section className="py-16 border-b border-[#262423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar with Drawer Trigger */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#262423]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDrawerOpen(true)}
                className="cursor-pointer inline-flex items-center gap-2.5 bg-[#121111] hover:bg-[#1a1818] border border-[#3A3735] hover:border-[#C92820] text-[#E8DFCC] text-xs uppercase tracking-[0.2em] px-5 py-3 font-semibold transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C92820]"
                aria-label="Open filter drawer"
              >
                <span className="w-2 h-2 rounded-full bg-[#C92820] group-hover:scale-125 transition-transform" />
                <span>FILTER PORTFOLIO</span>
                <span className="ml-1 text-[10px] font-mono text-[#92908A] bg-[#1c1a1a] px-2 py-0.5 border border-[#262423]">
                  {activeCategory}
                </span>
              </button>

              {activeCategory !== "All Work" && (
                <button
                  onClick={() => setActiveCategory("All Work")}
                  className="cursor-pointer text-xs uppercase tracking-wider text-[#92908A] hover:text-[#C92820] underline transition-colors"
                >
                  Reset Filter
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#92908A]">
              <span className="font-mono text-[#C92820]">
                {filteredPieces.length}
              </span>
              <span className="uppercase tracking-widest text-[11px]">
                Pieces Displayed
              </span>
            </div>
          </div>

          {/* Slide-out Drawer Filter Overlay */}
          {drawerOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
              onClick={() => setDrawerOpen(false)}
            >
              <div
                className="w-full max-w-md bg-[#0F0E0E] border-l border-[#262423] h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl animate-in slide-in-from-right duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#262423] mb-8">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block">
                        ARCHIVE INDEX
                      </span>
                      <h3 className="font-display text-3xl text-[#E8DFCC] tracking-wider mt-1">
                        FILTER BY STYLE
                      </h3>
                    </div>
                    <button
                      onClick={() => setDrawerOpen(false)}
                      className="cursor-pointer p-2 text-[#92908A] hover:text-[#E8DFCC] transition-colors focus-visible:outline-none"
                      aria-label="Close filter drawer"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <p className="text-xs text-[#92908A] leading-relaxed mb-6">
                    Select a tattoo discipline below to filter through verified
                    healed works and fresh needle pieces.
                  </p>

                  <div className="flex flex-col gap-2.5">
                    {CATEGORIES.map((cat, idx) => {
                      const isActive = activeCategory === cat;
                      const count =
                        cat === "All Work"
                          ? RECENT_WORK_PLATES.length
                          : RECENT_WORK_PLATES.filter(
                              (p) =>
                                p.category
                                  .toLowerCase()
                                  .includes(cat.toLowerCase()) ||
                                p.style
                                  .toLowerCase()
                                  .includes(cat.toLowerCase()),
                            ).length;

                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setDrawerOpen(false);
                          }}
                          className={`cursor-pointer w-full flex items-center justify-between px-4 py-3.5 border transition-all text-left group cursor-pointer ${
                            isActive
                              ? "bg-[#1C1111] border-[#C92820] text-white"
                              : "bg-[#141313] border-[#242221] text-[#92908A] hover:text-[#E8DFCC] hover:border-[#383533]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[#92908A]/60">
                              0{idx + 1}
                            </span>
                            <span
                              className={`font-display text-xl tracking-wider uppercase transition-colors ${
                                isActive
                                  ? "text-[#C92820]"
                                  : "group-hover:text-white"
                              }`}
                            >
                              {cat}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0A0909] border border-[#242221] text-[#92908A]">
                              {count}
                            </span>
                            {isActive && (
                              <Check size={16} className="text-[#C92820]" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-[#262423] pt-6 flex gap-3">
                  <button
                    onClick={() => {
                      setActiveCategory("All Work");
                      setDrawerOpen(false);
                    }}
                    className="cursor-pointer flex-1 py-3 text-xs uppercase tracking-wider text-[#92908A] border border-[#262423] hover:text-[#E8DFCC] transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="cursor-pointer flex-1 py-3 bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    View Results ({filteredPieces.length})
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Asymmetrical Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPieces.map((piece, index) => {
              const isTall = piece.aspect === "tall" || index % 3 === 0;
              return (
                <div
                  key={piece.id}
                  onClick={() => setSelectedPiece(piece)}
                  className="group relative bg-[#121111] border border-[#262423] p-3 cursor-pointer hover:border-[#C92820]/70 transition-all flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#92908A] mb-2 px-1">
                    <span className="font-mono text-[#C92820]">
                      {piece.plate}
                    </span>
                    <span>{piece.style}</span>
                  </div>

                  <div className="relative w-full h-[380px] sm:h-[420px] overflow-hidden bg-[#181717] border border-[#1F1D1D]">
                    <Image
                      src={piece.imageUrl}
                      alt={piece.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <ZoomIn size={14} />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left z-10 pointer-events-none">
                      <h3 className="font-display text-2xl text-[#E8DFCC] tracking-wide">
                        {piece.title}
                      </h3>
                      <p className="text-[11px] text-[#C92820] font-medium">
                        Tattooed by {piece.artist}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-[#92908A] mt-2.5 px-1">
                    <span>{piece.placement}</span>
                    <span className="text-[#C92820] font-mono">
                      {piece.isHealed ? "HEALED" : "FRESH"} · {piece.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPieces.length === 0 && (
            <div className="text-center py-20 text-[#92908A]">
              <p className="font-display text-3xl text-[#E8DFCC]">
                NO PIECES MATCH THIS FILTER
              </p>
              <button
                onClick={() => setActiveCategory("All Work")}
                className="cursor-pointer mt-4 text-xs uppercase tracking-widest text-[#C92820] underline"
              >
                View all pieces
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. LIGHTBOX MODAL */}
      {/* ============================================================== */}
      {selectedPiece && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPiece(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121111] border border-[#262423] p-6 sm:p-8 corner-crosses text-[#E8DFCC]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPiece(null)}
              className="cursor-pointer absolute top-4 right-4 text-[#92908A] hover:text-[#E8DFCC] p-2"
              aria-label="Close image lightbox"
            >
              <X size={22} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/4] w-full bg-black border border-[#262423] overflow-hidden">
                <Image
                  src={selectedPiece.imageUrl}
                  alt={selectedPiece.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C92820] font-mono mb-2">
                  <span>{selectedPiece.plate}</span>
                  <span>·</span>
                  <span>{selectedPiece.year}</span>
                </div>

                <h3 className="font-display text-4xl text-[#E8DFCC] tracking-wide mb-2">
                  {selectedPiece.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#92908A] mb-4">
                  Artist:{" "}
                  <strong className="text-[#E8DFCC]">
                    {selectedPiece.artist}
                  </strong>
                </p>

                <div className="space-y-2 py-4 border-y border-[#262423] text-xs mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#92908A]">Style Category:</span>
                    <span className="text-[#E8DFCC]">
                      {selectedPiece.style}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#92908A]">
                      Anatomical Placement:
                    </span>
                    <span className="text-[#E8DFCC]">
                      {selectedPiece.placement}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#92908A]">Skin State:</span>
                    <span className="text-[#C92820] font-mono">
                      {selectedPiece.isHealed
                        ? "Fully Healed (6+ months)"
                        : "Fresh Sitting"}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#92908A] leading-relaxed mb-6">
                  Every custom piece is designed to harmonize with your muscle
                  landmarks and natural skin undertones. Interested in a similar
                  piece with this artist?
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      const artist = selectedPiece.artist;
                      const style = selectedPiece.style;
                      setSelectedPiece(null);
                      openBooking({ artist, style });
                    }}
                    className="cursor-pointer flex-1 bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-wider font-semibold py-3 px-4 text-center transition-colors"
                  >
                    Inquire About This Style
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. GALLERY CLOSING CTA */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#160B0B] border-t border-[#3E1616] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block mb-2">
            JOIN OUR ARCHIVE
          </span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl text-[#E8DFCC] tracking-tight mb-4">
            YOUR IDEA COULD BE NEXT.
          </h2>
          <p className="text-sm text-[#92908A] max-w-xl mx-auto mb-8">
            Every masterpiece on this page began as a simple thought or sketch.
            Share your concept with us today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors"
          >
            START YOUR APPOINTMENT ENQUIRY
          </Link>
        </div>
      </section>
    </div>
  );
}
