"use client";

import React, { useState, useEffect } from "react";
import { useBookingModal } from "./BookingContext";
import { ARTISTS, TATTOO_STYLES, STUDIO_INFO } from "@/data/studio-data";
import {
  calculateTattooEstimate,
  validateBookingForm,
  generateTicketReference,
  BookingEstimate,
} from "@/lib/booking-utils";
import {
  X,
  CheckCircle2,
  Clock,
  DollarSign,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function BookingModal() {
  const { isOpen, closeBooking, preselectedArtist, preselectedStyle } =
    useBookingModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [style, setStyle] = useState("Fine Line");
  const [artist, setArtist] = useState("Any Resident Artist");
  const [size, setSize] = useState<
    "small" | "medium" | "large" | "half-sleeve" | "full-sleeve"
  >("medium");
  const [placement, setPlacement] = useState("");
  const [description, setDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [isCoverUp, setIsCoverUp] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedTicket, setConfirmedTicket] = useState<{
    reference: string;
    estimate: BookingEstimate;
  } | null>(null);

  const [prevArtist, setPrevArtist] = useState(preselectedArtist);
  const [prevStyle, setPrevStyle] = useState(preselectedStyle);

  if (preselectedArtist && preselectedArtist !== prevArtist) {
    setPrevArtist(preselectedArtist);
    setArtist(preselectedArtist);
  }
  if (preselectedStyle && preselectedStyle !== prevStyle) {
    setPrevStyle(preselectedStyle);
    setStyle(preselectedStyle);
  }

  // Reset form when closed
  const handleClose = () => {
    setConfirmedTicket(null);
    setErrors({});
    closeBooking();
  };

  // Calculate live estimate
  const liveEstimate = calculateTattooEstimate({
    size,
    style,
    isCoverUp,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookingForm({
      name,
      email,
      phone,
      style,
      size,
      placement,
      description,
      preferredDate,
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketRef = generateTicketReference(name + Date.now());
      setConfirmedTicket({
        reference: ticketRef,
        estimate: liveEstimate,
      });
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#121111] border border-[#262423] shadow-2xl p-6 sm:p-8 my-8 text-[#E8DFCC] corner-crosses">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="cursor-pointer absolute top-5 right-5 text-[#92908A] hover:text-[#E8DFCC] transition-colors p-2"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {!confirmedTicket ? (
          <div>
            <div className="mb-6 border-b border-[#262423] pb-4">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#C92820] font-semibold">
                APPOINTMENT ENQUIRY
              </span>
              <h2
                id="booking-modal-title"
                className="font-display text-3xl sm:text-4xl text-[#E8DFCC] tracking-wide mt-1"
              >
                BOOK YOUR SESSION
              </h2>
              <p className="text-xs text-[#92908A] mt-1">
                Tell us your vision. We will review anatomy, estimate time, and
                confirm your artist sitting.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Julian Vance"
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-[#C92820] mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="julian@example.com"
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#C92820] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Phone (for SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 89596 90529"
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-[#C92820] mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Target Date / Window
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Style */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Tattoo Style *
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
                  >
                    {TATTOO_STYLES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Artist */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Preferred Artist
                  </label>
                  <select
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
                  >
                    <option value="Any Resident Artist">
                      First Available Specialist
                    </option>
                    {ARTISTS.map((a) => (
                      <option key={a.id} value={a.name}>
                        {a.name} ({a.specialization})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Size */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Approximate Size *
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value as any)}
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
                  >
                    <option value="small">
                      Small (2 – 4 inches / Flash size)
                    </option>
                    <option value="medium">
                      Medium (4 – 7 inches / Forearm / Calf)
                    </option>
                    <option value="large">
                      Large (8 – 12 inches / Thigh / Ribs)
                    </option>
                    <option value="half-sleeve">
                      Half Sleeve / Large Panel
                    </option>
                    <option value="full-sleeve">
                      Full Sleeve / Full Back Piece
                    </option>
                  </select>
                </div>

                {/* Placement */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                    Placement on Body *
                  </label>
                  <input
                    type="text"
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                    placeholder="e.g. Right inner forearm, ribs, ankle"
                    className="w-full bg-[#181717] border border-[#2A2726] px-3.5 py-2.5 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                  />
                  {errors.placement && (
                    <p className="text-[11px] text-[#C92820] mt-1">
                      {errors.placement}
                    </p>
                  )}
                </div>
              </div>

              {/* Cover-up checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="coverup-modal-check"
                  checked={isCoverUp}
                  onChange={(e) => setIsCoverUp(e.target.checked)}
                  className="accent-[#C92820] w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor="coverup-modal-check"
                  className="text-xs text-[#92908A] cursor-pointer"
                >
                  This is a cover-up or rework of an existing tattoo
                </label>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1">
                  Idea / Motif Description *
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your concept, symbolic elements, or visual references you have in mind..."
                  className="w-full bg-[#181717] border border-[#2A2726] p-3 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                />
                {errors.description && (
                  <p className="text-[11px] text-[#C92820] mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Live Studio Estimate Box */}
              <div className="bg-[#181717] border border-[#262423] p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#C92820]" />
                  <div>
                    <span className="text-[#92908A] block">
                      Estimated Sitting
                    </span>
                    <span className="font-semibold text-[#E8DFCC]">
                      {liveEstimate.estimatedHoursMin} -{" "}
                      {liveEstimate.estimatedHoursMax} hrs (
                      {liveEstimate.sessionsCount} session
                      {liveEstimate.sessionsCount > 1 ? "s" : ""})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign size={15} className="text-[#C92820]" />
                  <div>
                    <span className="text-[#92908A] block">Price Guide</span>
                    <span className="font-semibold text-[#E8DFCC]">
                      ${liveEstimate.priceMin} - ${liveEstimate.priceMax}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#C92820]" />
                  <div>
                    <span className="text-[#92908A] block">Hold Deposit</span>
                    <span className="font-semibold text-[#E8DFCC]">
                      ${liveEstimate.depositRequired}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full bg-[#C92820] hover:bg-[#E0352B] disabled:opacity-50 text-white font-semibold py-3.5 px-6 uppercase tracking-[0.16em] text-xs flex items-center justify-center gap-2 transition-all mt-4"
              >
                <span>
                  {isSubmitting
                    ? "TRANSMITTING INQUIRY..."
                    : "CONFIRM APPOINTMENT REQUEST"}
                </span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        ) : (
          /* Success Ticket State */
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#C92820]/10 border border-[#C92820] text-[#C92820] flex items-center justify-center">
              <CheckCircle2 size={32} />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold">
              RESERVATION RECEIVED
            </span>
            <h3 className="font-display text-4xl text-[#E8DFCC] tracking-wider mt-1">
              YOU ARE IN THE QUEUE
            </h3>

            {/* Stylized Admit Ticket */}
            <div className="my-6 p-6 bg-[#161515] border border-[#2A2726] relative max-w-md mx-auto text-left">
              <div className="flex justify-between items-center border-b border-[#262423] pb-3 mb-3">
                <span className="text-[10px] uppercase tracking-widest text-[#92908A]">
                  STICH STUDIO PASS
                </span>
                <span className="font-mono text-xs font-semibold text-[#C92820]">
                  {confirmedTicket.reference}
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#92908A]">Client:</span>
                  <span className="font-semibold text-[#E8DFCC]">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#92908A]">Requested Style:</span>
                  <span className="text-[#E8DFCC]">{style}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#92908A]">Artist:</span>
                  <span className="text-[#E8DFCC]">{artist}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#92908A]">Estimated Duration:</span>
                  <span className="text-[#E8DFCC]">
                    {confirmedTicket.estimate.estimatedHoursMin} -{" "}
                    {confirmedTicket.estimate.estimatedHoursMax} hrs
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#92908A]">Estimated Range:</span>
                  <span className="text-[#E8DFCC]">
                    ${confirmedTicket.estimate.priceMin} - $
                    {confirmedTicket.estimate.priceMax}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#262423] text-[11px] text-[#92908A]">
                We sent a copy to{" "}
                <span className="text-[#E8DFCC]">{email}</span>. A studio
                concierge will text you within 2 business hours with final
                artist confirmation.
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleClose}
                className="cursor-pointer bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
