"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ARTISTS,
  TATTOO_STYLES,
  STUDIO_INFO,
  STUDIO_FAQS,
} from "@/data/studio-data";
import {
  calculateTattooEstimate,
  validateBookingForm,
  generateTicketReference,
  BookingEstimate,
} from "@/lib/booking-utils";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Upload,
  Calendar,
  DollarSign,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Instagram,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [style, setStyle] = useState("Fine Line");
  const [artist, setArtist] = useState("Any Resident Artist");
  const [size, setSize] = useState<
    "small" | "medium" | "large" | "half-sleeve" | "full-sleeve"
  >("medium");
  const [placement, setPlacement] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [description, setDescription] = useState("");
  const [isCoverUp, setIsCoverUp] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    reference: string;
    estimate: BookingEstimate;
  } | null>(null);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Live estimate calculation
  const estimate = calculateTattooEstimate({
    size,
    style,
    isCoverUp,
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...fileNames]);
    }
  };

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

    setTimeout(() => {
      setIsSubmitting(false);
      const ref = generateTicketReference(name + Date.now());
      setSubmittedTicket({
        reference: ref,
        estimate,
      });
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 700);
  };

  return (
    <div className="bg-[#0A0909] text-[#E8DFCC] overflow-hidden">
      {/* ============================================================== */}
      {/* 1. HERO */}
      {/* ============================================================== */}
      <section className="relative min-h-[50vh] flex items-center border-b border-[#262423] py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=80"
            alt="Studio sitting atmosphere"
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
                APPOINTMENTS & VISITS
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-10xl text-[#E8DFCC] tracking-tight leading-[0.9] mb-6">
              LET&apos;S CREATE
              <br />
              <span className="text-white">SOMETHING PERSONAL.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#92908A] max-w-2xl leading-relaxed mb-6">
              Every project starts with a conversation. Fill out the appointment
              enquiry form below, call our studio concierge, or drop in during
              our daily walk-in consultation hours.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. FORM & STUDIO INFO GRID */}
      {/* ============================================================== */}
      <section className="py-20 border-b border-[#262423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Booking Form */}
            <div className="lg:col-span-7">
              {!submittedTicket ? (
                <div className="bg-[#121111] border border-[#262423] p-6 sm:p-10 corner-crosses">
                  <div className="border-b border-[#262423] pb-4 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C92820] font-semibold block mb-1">
                      DIRECT ARTIST BOOKING
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl text-[#E8DFCC] tracking-wide">
                      APPOINTMENT ENQUIRY
                    </h2>
                    <p className="text-xs text-[#92908A] mt-1">
                      Fill out your tattoo preferences. We will review your idea
                      and provide a precise time & price quotation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Julian Vance"
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-[#C92820] mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="julian@example.com"
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-[#C92820] mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Phone Number (SMS updates) *
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 89596 90529"
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-[#C92820] mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Preferred Sitting Date
                        </label>
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Style & Artist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Tattoo Style *
                        </label>
                        <select
                          value={style}
                          onChange={(e) => setStyle(e.target.value)}
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
                        >
                          {TATTOO_STYLES.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Preferred Artist
                        </label>
                        <select
                          value={artist}
                          onChange={(e) => setArtist(e.target.value)}
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
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

                    {/* Size & Placement */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Approximate Size *
                        </label>
                        <select
                          value={size}
                          onChange={(e) => setSize(e.target.value as any)}
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] focus:outline-none focus:border-[#C92820] transition-colors"
                        >
                          <option value="small">
                            Small (2 – 4 inches / Flash piece)
                          </option>
                          <option value="medium">
                            Medium (4 – 7 inches / Forearm / Calf)
                          </option>
                          <option value="large">
                            Large (8 – 12 inches / Thigh / Ribs)
                          </option>
                          <option value="half-sleeve">
                            Half Sleeve / Large Chest Panel
                          </option>
                          <option value="full-sleeve">
                            Full Sleeve / Bodysuit Piece
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                          Placement on Body *
                        </label>
                        <input
                          type="text"
                          value={placement}
                          onChange={(e) => setPlacement(e.target.value)}
                          placeholder="e.g. Right inner forearm, ribs, ankle"
                          className="w-full bg-[#181717] border border-[#2A2726] px-4 py-3 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                        />
                        {errors.placement && (
                          <p className="text-[11px] text-[#C92820] mt-1">
                            {errors.placement}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Cover-up Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="contact-coverup"
                        checked={isCoverUp}
                        onChange={(e) => setIsCoverUp(e.target.checked)}
                        className="accent-[#C92820] w-4 h-4 cursor-pointer"
                      />
                      <label
                        htmlFor="contact-coverup"
                        className="text-xs text-[#92908A] cursor-pointer"
                      >
                        This is a cover-up or rework of an existing tattoo
                      </label>
                    </div>

                    {/* Idea / Description */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                        Tattoo Concept & Meaning *
                      </label>
                      <textarea
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Share your visual motifs, references, symbolic details, and any questions you have for the artist..."
                        className="w-full bg-[#181717] border border-[#2A2726] p-4 text-sm text-[#E8DFCC] placeholder-[#62605C] focus:outline-none focus:border-[#C92820] transition-colors"
                      />
                      {errors.description && (
                        <p className="text-[11px] text-[#C92820] mt-1">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Reference Images Upload */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#92908A] mb-1.5">
                        Reference Photos / Sketches (Optional)
                      </label>
                      <label className="border border-dashed border-[#3A3735] hover:border-[#C92820] bg-[#181717] p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group">
                        <Upload
                          size={20}
                          className="text-[#92908A] group-hover:text-[#C92820] mb-2"
                        />
                        <span className="text-xs text-[#E8DFCC] font-medium">
                          Click to select photos or drop files
                        </span>
                        <span className="text-[10px] text-[#92908A] mt-1">
                          PNG, JPG, HEIC up to 15MB
                        </span>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      {uploadedFiles.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {uploadedFiles.map((file, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-[10px] bg-[#161515] border border-[#262423] text-[#E8DFCC] px-2.5 py-1 flex items-center gap-1"
                            >
                              <span>{file}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Live Estimate Breakdown Bar */}
                    <div className="bg-[#181717] border border-[#262423] p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-[#92908A] block text-[10px] uppercase">
                          Estimated Sitting
                        </span>
                        <span className="font-semibold text-[#E8DFCC] text-sm">
                          {estimate.estimatedHoursMin} -{" "}
                          {estimate.estimatedHoursMax} hrs
                        </span>
                      </div>
                      <div>
                        <span className="text-[#92908A] block text-[10px] uppercase">
                          Price Guide
                        </span>
                        <span className="font-semibold text-[#E8DFCC] text-sm">
                          ${estimate.priceMin} - ${estimate.priceMax}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#92908A] block text-[10px] uppercase">
                          Hold Deposit
                        </span>
                        <span className="font-semibold text-[#E8DFCC] text-sm">
                          ${estimate.depositRequired}
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer w-full bg-[#C92820] hover:bg-[#E0352B] disabled:opacity-50 text-white font-semibold py-4 px-6 uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <span>
                        {isSubmitting
                          ? "PROCESSING ENQUIRY..."
                          : "SUBMIT APPOINTMENT ENQUIRY"}
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              ) : (
                /* Ticket Confirmation */
                <div className="bg-[#121111] border border-[#262423] p-8 sm:p-12 corner-crosses text-center animate-in fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#C92820]/10 border border-[#C92820] text-[#C92820] flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold">
                    CONFIRMATION REGISTERED
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl text-[#E8DFCC] tracking-wider mt-1 mb-2">
                    YOU&apos;RE IN THE QUEUE
                  </h3>
                  <p className="text-xs text-[#92908A] max-w-md mx-auto mb-8">
                    We received your submission. A resident artist will review
                    your motifs and placement, then reach out to confirm your
                    sitting time.
                  </p>

                  {/* Stylized Ticket */}
                  <div className="bg-[#181717] border border-[#2A2726] p-6 max-w-md mx-auto text-left relative mb-8">
                    <div className="flex justify-between items-center border-b border-[#262423] pb-3 mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-[#92908A]">
                        STICH STUDIO PASS
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#C92820]">
                        {submittedTicket.reference}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#92908A]">Client:</span>
                        <span className="font-semibold text-[#E8DFCC]">
                          {name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#92908A]">Style:</span>
                        <span className="text-[#E8DFCC]">{style}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#92908A]">Artist:</span>
                        <span className="text-[#E8DFCC]">{artist}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#92908A]">
                          Estimated Sitting:
                        </span>
                        <span className="text-[#E8DFCC]">
                          {submittedTicket.estimate.estimatedHoursMin} -{" "}
                          {submittedTicket.estimate.estimatedHoursMax} hrs
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#92908A]">
                          Estimated Investment:
                        </span>
                        <span className="text-[#E8DFCC]">
                          ${submittedTicket.estimate.priceMin} - $
                          {submittedTicket.estimate.priceMax}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#92908A]">
                          Deposit to Secure:
                        </span>
                        <span className="text-[#C92820] font-semibold">
                          ${submittedTicket.estimate.depositRequired}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setPlacement("");
                      setDescription("");
                    }}
                    className="cursor-pointer border border-[#3A3735] hover:border-[#E8DFCC] text-[#E8DFCC] text-xs uppercase tracking-widest px-6 py-3 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Studio Contact & Location Card */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Info Card */}
              <div className="bg-[#121111] border border-[#262423] p-8 corner-crosses space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C92820] font-semibold mb-2">
                    <MapPin size={14} />
                    <span>LOCATION</span>
                  </div>
                  <p className="font-display text-3xl text-[#E8DFCC]">
                    123 IRON STREET, DOWNTOWN
                  </p>
                  <p className="text-xs text-[#92908A] mt-1">
                    Arts District, Suite 4B · Metropolis, NY 10012
                  </p>
                  <p className="text-[11px] text-[#92908A] mt-2">
                    Subway: A, C, E, L to 8th Ave / 14th St (3 min walk) · Valet
                    parking on Iron St.
                  </p>
                </div>

                <div className="border-t border-[#262423] pt-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C92820] font-semibold mb-2">
                    <Clock size={14} />
                    <span>STUDIO HOURS</span>
                  </div>
                  <p className="font-display text-xl text-[#E8DFCC]">
                    MON–SAT: 11:00 AM – 9:00 PM
                  </p>
                  <p className="font-display text-xl text-[#E8DFCC]">
                    SUNDAY: 12:00 PM – 6:00 PM
                  </p>
                  <p className="text-[11px] text-[#C92820] mt-2">
                    Daily walk-in consultations: 12:00 PM – 4:00 PM
                  </p>
                </div>

                <div className="border-t border-[#262423] pt-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C92820] font-semibold mb-2">
                    <Phone size={14} />
                    <span>PHONE & SMS</span>
                  </div>
                  <a
                    href="tel:+918959690529"
                    className="font-display text-2xl text-[#E8DFCC] hover:text-[#C92820] transition-colors block"
                  >
                    +91 89596 90529
                  </a>
                </div>

                <div className="border-t border-[#262423] pt-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C92820] font-semibold mb-2">
                    <Mail size={14} />
                    <span>EMAIL</span>
                  </div>
                  <a
                    href="mailto:hello@draftworks.in"
                    className="font-display text-xl text-[#E8DFCC] hover:text-[#C92820] transition-colors block"
                  >
                    HELLO@DRAFTWORKS.IN
                  </a>
                </div>
              </div>

              {/* Simple Clean Map Matching Theme */}
              <div className="relative aspect-[16/10] w-full bg-[#121111] border border-[#262423] overflow-hidden">
                <iframe
                  title="Studio Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.61754093959!2d-73.98513108459423!3d40.74881797932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0 filter invert contrast-125 brightness-75 hue-rotate-180"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section className="py-24 border-b border-[#262423] bg-[#0E0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block mb-2">
              NEED TO KNOW
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-[#E8DFCC] tracking-tight">
              FREQUENT QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-[#92908A] mt-2">
              Everything you need to know about preparation, deposits, pain
              management, and healing.
            </p>
          </div>

          <div className="divide-y divide-[#262423] border-y border-[#262423]">
            {STUDIO_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="cursor-pointer w-full flex items-center justify-between text-left text-base sm:text-lg font-semibold text-[#E8DFCC] hover:text-[#C92820] transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#C92820] transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-[#92908A] leading-relaxed pr-8 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. CLOSING BANNER */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#160B0B] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C92820] font-semibold block mb-2">
            STILL HAVE QUESTIONS?
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-[#E8DFCC] tracking-tight mb-4">
            CALL OUR CONCIERGE DIRECTLY
          </h2>
          <p className="text-sm text-[#92908A] max-w-xl mx-auto mb-8">
            Our front desk is staffed by experienced tattoo apprentices who can
            walk you through placement, artist portfolios, and scheduling.
          </p>
          <a
            href="tel:+918959690529"
            className="inline-flex items-center gap-2 bg-[#C92820] hover:bg-[#E0352B] text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors"
          >
            <Phone size={15} />
            <span>CALL +91 89596 90529</span>
          </a>
        </div>
      </section>
    </div>
  );
}
