export interface Artist {
  id: string;
  name: string;
  role: string;
  specialization: string;
  yearsOfExperience: number;
  bio: string;
  fullBio: string;
  portraitUrl: string;
  actionPhotoUrl: string;
  instagram: string;
  favoriteMotifs: string[];
  hourlyRate: number;
  bookingStatus: "Booking Available" | "Waitlist Only" | "Guest Spots Open";
  recentWorks: {
    title: string;
    imageUrl: string;
    style: string;
    placement: string;
  }[];
}

export interface TattooStyle {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  idealPlacements: string[];
  painLevel: "Mild" | "Moderate" | "Intense";
  healingDuration: string;
  needleTechnique: string;
  imageUrl: string;
  accentIcon: string;
  featuredArtists: string[];
}

export interface PortfolioPiece {
  id: string;
  plate: string;
  title: string;
  artist: string;
  artistId: string;
  style: string;
  category: string;
  placement: string;
  isHealed: boolean;
  year: string;
  imageUrl: string;
  featured?: boolean;
  aspect?: "tall" | "wide" | "square";
}

export interface ClientReview {
  ticketNumber: string;
  rating: number;
  quote: string;
  client: string;
  tattoo: string;
  artist: string;
  date: string;
}

export interface StudioEvent {
  id: string;
  dateBadge: {
    month: string;
    day: string;
  };
  title: string;
  description: string;
  location: string;
  rsvpType: "Walk-in" | "Limited RSVP" | "Pre-booking Required";
}

export const STUDIO_INFO = {
  name: "STICH",
  tagline: "TATTOO STUDIO",
  slogan: "Custom tattoos by artists. For individuals.",
  heroHeadline: "INK YOUR STORY.",
  manifesto:
    "STICH is an independent studio built on one belief: a tattoo should be as unique as the person wearing it. Every piece starts with a conversation and ends with art you will carry for life. Our artists work in clean, private suites with the finest sterile equipment, so you can relax and focus on the story you want to tell.",
  address: "123 Iron Street, Downtown",
  neighborhood: "Arts District, Suite 4B",
  city: "Metropolis, NY 10012",
  phone: "+91 89596 90529",
  email: "hello@draftworks.in",
  hours: {
    weekday: "Mon–Sat 11am – 9pm",
    sunday: "Sun 12 – 6pm",
    consultations: "Walk-in consultations welcome daily 12pm – 4pm",
  },
  stats: [
    { value: "12+", label: "Years of Ink" },
    { value: "8", label: "Resident Artists" },
    { value: "5K+", label: "Pieces Completed" },
    { value: "4.9★", label: "Client Rating (300+)" },
  ],
  socials: {
    instagram: "@STICHtattoostudio",
    tiktok: "@STICHstudionyc",
    pinterest: "STICHtattoonyc",
  },
};

export const MARQUEE_STYLES = [
  "FINE LINE",
  "BLACK & GREY",
  "REALISM",
  "NEO TRADITIONAL",
  "BLACKWORK",
  "JAPANESE",
  "CUSTOM LETTERING",
  "ORNAMENTAL",
];

export const ARTISTS: Artist[] = [
  {
    id: "marcus-reed",
    name: "Marcus Reed",
    role: "Co-Founder & Lead Artist",
    specialization: "Realism · Black & Grey",
    yearsOfExperience: 15,
    bio: "Fifteen years of photographic portraits and large-scale micro-contrast sleeves.",
    fullBio:
      "Marcus specializes in hyper-realistic human and animal portraits, sculptural Greek and Renaissance motifs, and high-contrast dark surrealism. Trained classically in figurative fine art before moving to the needle, his work is known for seamless gradient transitions that maintain clarity through decades of healing.",
    portraitUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    actionPhotoUrl:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
    instagram: "@marcusreed_ink",
    favoriteMotifs: [
      "Renaissance Statuary",
      "Wildcat Realism",
      "Anatomical Shading",
      "Cinematic Portraiture",
    ],
    hourlyRate: 220,
    bookingStatus: "Booking Available",
    recentWorks: [
      {
        title: "Serpent & Rose",
        imageUrl:
          "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80",
        style: "Black & Grey",
        placement: "Forearm & Wrist",
      },
      {
        title: "Marble Bust of Apollo",
        imageUrl:
          "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80",
        style: "Micro Realism",
        placement: "Bicep",
      },
    ],
  },
  {
    id: "lena-voss",
    name: "Lena Voss",
    role: "Resident Artist",
    specialization: "Fine Line · Botanical",
    yearsOfExperience: 8,
    bio: "Delicate single-needle work and floras with an editorial, architectural touch.",
    fullBio:
      "Lena graduated in botanical illustration in Berlin before pioneering ultra-delicate single needle tattooing. Her work feels weightless on the skin, honoring the body curves with subtle negative space, microscopic stippling, and organic wildflower arrangements that heal razor-sharp.",
    portraitUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    actionPhotoUrl:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1200&q=80",
    instagram: "@lenavoss_lines",
    favoriteMotifs: [
      "Wild Ferns & Orchids",
      "Micro Typographic Script",
      "Insect Wings",
      "Constellations",
    ],
    hourlyRate: 190,
    bookingStatus: "Booking Available",
    recentWorks: [
      {
        title: "Goddess Forearm",
        imageUrl:
          "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80",
        style: "Fine Line",
        placement: "Inner Forearm",
      },
      {
        title: "Botanical Stem & Moth",
        imageUrl:
          "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=900&q=80",
        style: "Fine Line Botanical",
        placement: "Sternum / Ribs",
      },
    ],
  },
  {
    id: "dante-cruz",
    name: "Dante Cruz",
    role: "Resident Artist",
    specialization: "Traditional · Custom",
    yearsOfExperience: 11,
    bio: "Bold lines, rich symbolism and timeless designs built to last a lifetime.",
    fullBio:
      "Dante honors the legacy of classic sailor and neo-traditional flash with heavy black outlines, deep saturated blackfills, and striking muted red highlights. Whether building a full sleeve from original flash sheets or creating custom daggers, eagles, and panthers, Dante builds ink that endures.",
    portraitUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    actionPhotoUrl:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
    instagram: "@dantecruz_traditional",
    favoriteMotifs: [
      "Daggers & Swallowed Swords",
      "Crying Hearts",
      "Panther Heads",
      "Nautical Nautical Stars",
    ],
    hourlyRate: 180,
    bookingStatus: "Booking Available",
    recentWorks: [
      {
        title: "Flash Sheet Pair",
        imageUrl:
          "https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=900&q=80",
        style: "Traditional",
        placement: "Thigh / Calves",
      },
      {
        title: "Reaper & Hourglass",
        imageUrl:
          "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80",
        style: "Neo-Traditional",
        placement: "Shoulder",
      },
    ],
  },
  {
    id: "kai-moreno",
    name: "Kai Moreno",
    role: "Resident Artist",
    specialization: "Blackwork · Geometric",
    yearsOfExperience: 9,
    bio: "Architectural sacred geometry, blackout gradient fades and heavy solid black ink.",
    fullBio:
      "Kai works at the boundary between modern architecture and ritualistic tattoo markings. With uncompromising precision in repeating mandalas, dotwork shading, and continuous arm cuffs, Kai structures every piece to naturally complement bone and tendon anatomy.",
    portraitUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    actionPhotoUrl:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
    instagram: "@kaimoreno_black",
    favoriteMotifs: [
      "Geometric Mandalas",
      "Blackout Cuffs",
      "Sacred Dotwork",
      "Negative Space Bands",
    ],
    hourlyRate: 200,
    bookingStatus: "Booking Available",
    recentWorks: [
      {
        title: "Behind the Ear Geometry",
        imageUrl:
          "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80",
        style: "Blackwork",
        placement: "Cervical / Behind Ear",
      },
    ],
  },
];

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: "black-and-grey",
    slug: "black-and-grey",
    name: "Black & Grey",
    tagline: "Timeless Shading & Dimensional Depth",
    summary:
      "Smooth gradients and deep contrast that age beautifully over decades.",
    description:
      "Black and Grey tattooing utilizes diluted black ink washes to produce subtle tonal gradients resembling classic charcoal illustrations and dark film photography. Without relying on bright pigments that shift over time, Black & Grey ink integrates organically into skin undertones and stays pristine through aging.",
    idealPlacements: ["Full Forearm", "Bicep & Shoulder", "Calf", "Full Back"],
    painLevel: "Moderate",
    healingDuration: "2 to 3 weeks",
    needleTechnique:
      "3RL to 7RL contours, 15M magnum needles for smooth water-drop washes",
    imageUrl:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
    accentIcon: "Crosshair",
    featuredArtists: ["Marcus Reed", "Kai Moreno"],
  },
  {
    id: "fine-line",
    slug: "fine-line",
    name: "Fine Line",
    tagline: "Precision, Weightlessness & Botanical Detail",
    summary: "Delicate single-needle work with crisp, microscopic lines.",
    description:
      "Fine Line tattooing uses single-needle (1RL) or tight 3-needle configurations to achieve the precision of an etching pen. Perfect for subtle wrist placements, botanical specimens, micro portraits, and elegant typographical mantras that whisper rather than shout.",
    idealPlacements: [
      "Inner Forearm",
      "Ribcage",
      "Collarbone",
      "Behind the Ear",
      "Ankle",
    ],
    painLevel: "Mild",
    healingDuration: "10 to 14 days",
    needleTechnique:
      "Bugpin 0.25mm 1RL / 3RL single needle with light-touch hand oscillation",
    imageUrl:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=600&q=80",
    accentIcon: "Feather",
    featuredArtists: ["Lena Voss"],
  },
  {
    id: "realism",
    slug: "realism",
    name: "Realism",
    tagline: "Art in Real Life & Micro Photographic Depth",
    summary:
      "Portraits, animal forms, and sculptures rendered with photographic depth.",
    description:
      "Realism demands total mastery of light, reflection, and anatomical rendering. By eliminating hard outlining in favor of pure tonal value shifts, our realism specialists render portraits, classical sculptures, and realistic textures with museum-grade precision.",
    idealPlacements: [
      "Outer Bicep",
      "Upper Back",
      "Chest Plate",
      "Outer Thigh",
    ],
    painLevel: "Moderate",
    healingDuration: "2 to 4 weeks",
    needleTechnique:
      "Curved magnums for zero-edge skin blending and soft edge feathering",
    imageUrl:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80",
    accentIcon: "Eye",
    featuredArtists: ["Marcus Reed"],
  },
  {
    id: "blackwork",
    slug: "blackwork",
    name: "Blackwork & Geometric",
    tagline: "High Impact Saturation & Sacred Symmetry",
    summary:
      "Bold geometric symmetry, dotwork stippling, and pure carbon black saturation.",
    description:
      "Blackwork celebrates the visceral purity of unyielding black carbon pigment. From intricate sacred geometry and Celtic knotwork to heavy blackout cuffs and stippled gradient fields, this style transforms the body into a striking living canvas.",
    idealPlacements: [
      "Full Sleeve",
      "Shin & Calf",
      "Chest Centerpiece",
      "Backpiece",
    ],
    painLevel: "Intense",
    healingDuration: "3 to 4 weeks",
    needleTechnique:
      "Round shaders for tight dotwork, large 27M magnums for saturated fields",
    imageUrl:
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=600&q=80",
    accentIcon: "Hexagon",
    featuredArtists: ["Kai Moreno", "Dante Cruz"],
  },
  {
    id: "traditional",
    slug: "traditional",
    name: "Neo-Traditional",
    tagline: "Iconic Symbolism & Bold Enduring Contours",
    summary:
      "Crisp bold lines, rich muted pigments, and timeless cultural motifs.",
    description:
      "Rooted in the golden era of tattoo heritage, traditional pieces prioritize longevity: heavy black lines that hold structure for decades, paired with rich burnt red, mustard, and deep emerald fills. Designed to be legible from twenty feet away.",
    idealPlacements: ["Forearm", "Thigh", "Shoulder Cap", "Hand & Knuckles"],
    painLevel: "Moderate",
    healingDuration: "2 weeks",
    needleTechnique: "8RL to 14RL bold liner needles, solid flat packing",
    imageUrl:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
    accentIcon: "Anchor",
    featuredArtists: ["Dante Cruz"],
  },
  {
    id: "custom-designs",
    slug: "custom-designs",
    name: "Custom Artwork & Sleeves",
    tagline: "Unique. Personal. You.",
    summary:
      "Fully original artwork drawn from scratch around your personal narrative.",
    description:
      "No two people have the same story, and no two clients leave STICH with duplicate flash. Our custom design journey pairs you one-on-one with an artist to craft an original motif molded precisely to your anatomy, personal aesthetic, and life milestones.",
    idealPlacements: [
      "Full Body Sleeve",
      "Torso Composition",
      "Custom Placement",
    ],
    painLevel: "Moderate",
    healingDuration: "Tailored per project",
    needleTechnique: "Hybrid tailored techniques according to composition",
    imageUrl:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80",
    accentIcon: "Sparkles",
    featuredArtists: ["Marcus Reed", "Lena Voss", "Dante Cruz", "Kai Moreno"],
  },
  {
    id: "cover-ups",
    slug: "cover-ups",
    name: "Cover-Up & Rework",
    tagline: "Second Life & Strategic Renewal",
    summary:
      "Transforming aged, faded or unwanted tattoos into cohesive new art.",
    description:
      "Covering an existing tattoo requires deep technical knowledge of optical ink physics, tone dispersion, and strategic line placement. We analyze existing pigment saturation, design high-contrast foreground motifs, and seamlessly bury old marks beneath new artwork you will be proud to show.",
    idealPlacements: ["Existing Tattoo Site"],
    painLevel: "Moderate",
    healingDuration: "3 to 4 weeks",
    needleTechnique: "Dense layering and optical saturation displacement",
    imageUrl:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
    accentIcon: "Layers",
    featuredArtists: ["Marcus Reed", "Dante Cruz"],
  },
];

export const RECENT_WORK_PLATES: PortfolioPiece[] = [
  {
    id: "plate-01",
    plate: "PLATE 01",
    title: "Goddess Forearm",
    artist: "Lena Voss",
    artistId: "lena-voss",
    style: "Fine Line",
    category: "Fine Line",
    placement: "Inner Forearm",
    isHealed: true,
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80",
    featured: true,
    aspect: "tall",
  },
  {
    id: "plate-06",
    plate: "PLATE 06",
    title: "Flash Sheet Pair",
    artist: "Dante Cruz",
    artistId: "dante-cruz",
    style: "Traditional",
    category: "Traditional",
    placement: "Thighs",
    isHealed: true,
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
    featured: true,
    aspect: "wide",
  },
  {
    id: "plate-02",
    plate: "PLATE 02",
    title: "Script Armband",
    artist: "Lena Voss",
    artistId: "lena-voss",
    style: "Fine Line",
    category: "Fine Line",
    placement: "Wrist / Bicep",
    isHealed: true,
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=600&q=80",
    featured: true,
    aspect: "tall",
  },
  {
    id: "plate-03",
    plate: "PLATE 03",
    title: "Serpent & Rose",
    artist: "Marcus Reed",
    artistId: "marcus-reed",
    style: "Blackwork",
    category: "Black & Grey",
    placement: "Lower Arm",
    isHealed: true,
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
    featured: true,
    aspect: "tall",
  },
  {
    id: "plate-04",
    plate: "PLATE 04",
    title: "Behind the Ear",
    artist: "Kai Moreno",
    artistId: "kai-moreno",
    style: "Blackwork",
    category: "Blackwork",
    placement: "Behind the Ear",
    isHealed: true,
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80",
    featured: true,
    aspect: "square",
  },
  {
    id: "plate-05",
    plate: "PLATE 05",
    title: "Finger Heart & Rune",
    artist: "Lena Voss",
    artistId: "lena-voss",
    style: "Fine Line",
    category: "Fine Line",
    placement: "Finger & Knuckle",
    isHealed: true,
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1556684677-e985bfe42aa7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    featured: true,
    aspect: "tall",
  },
  {
    id: "plate-07",
    plate: "PLATE 07",
    title: "Anatomical Ribcage Heart",
    artist: "Marcus Reed",
    artistId: "marcus-reed",
    style: "Realism",
    category: "Realism",
    placement: "Ribs",
    isHealed: false,
    year: "2026",
    imageUrl:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80",
    aspect: "tall",
  },
  {
    id: "plate-08",
    plate: "PLATE 08",
    title: "Geometric Mandala Spine",
    artist: "Kai Moreno",
    artistId: "kai-moreno",
    style: "Blackwork",
    category: "Blackwork",
    placement: "Spine & Nape",
    isHealed: true,
    year: "2026",
    imageUrl:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80",
    aspect: "tall",
  },
  {
    id: "plate-09",
    plate: "PLATE 09",
    title: "Panther & Dagger Relic",
    artist: "Dante Cruz",
    artistId: "dante-cruz",
    style: "Traditional",
    category: "Traditional",
    placement: "Calf",
    isHealed: true,
    year: "2026",
    imageUrl:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
    aspect: "wide",
  },
  {
    id: "plate-10",
    plate: "PLATE 10",
    title: "Classical Marcus Aurelius",
    artist: "Marcus Reed",
    artistId: "marcus-reed",
    style: "Realism",
    category: "Realism",
    placement: "Outer Shoulder",
    isHealed: true,
    year: "2026",
    imageUrl:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80",
    aspect: "tall",
  },
  {
    id: "plate-11",
    plate: "PLATE 11",
    title: "Botanical Fern Sprig",
    artist: "Lena Voss",
    artistId: "lena-voss",
    style: "Fine Line",
    category: "Fine Line",
    placement: "Collarbone",
    isHealed: true,
    year: "2026",
    imageUrl:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80",
    aspect: "square",
  },
  {
    id: "plate-12",
    plate: "PLATE 12",
    title: "Koi & Current Body Suit Piece",
    artist: "Marcus Reed",
    artistId: "marcus-reed",
    style: "Japanese",
    category: "Custom",
    placement: "Back & Ribs",
    isHealed: true,
    year: "2026",
    imageUrl:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=600&q=80",
    aspect: "tall",
  },
];

export const STEPS_TO_FOREVER = [
  {
    number: "01",
    title: "SKETCH TALK",
    subtitle: "Consultation & Concept",
    description:
      "Tell us the idea, the placement and the mood. We listen first and draw second. Bring reference images, napkin scribbles, or just a feeling.",
  },
  {
    number: "02",
    title: "STENCIL",
    subtitle: "Anatomical Placement",
    description:
      "Your design becomes a precision stencil. We place it on you, check body posture in motion, and adjust until it sits perfectly with your anatomy.",
  },
  {
    number: "03",
    title: "THE SITTING",
    subtitle: "Private Sterile Suite",
    description:
      "Needle meets skin in a calm, private suite with museum-grade sterilization, organic numbing options, and breaks whenever you need them.",
  },
  {
    number: "04",
    title: "HEALING",
    subtitle: "Lifelong Permanence",
    description:
      "From breathable second-skin dressings to a written aftercare protocol and complimentary touch-up review, we keep your ink crisp for years.",
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    ticketNumber: "N° 0001",
    rating: 5,
    quote:
      "The attention to detail was incredible. My piece is exactly what I imagined, and more.",
    client: "Emily J.",
    tattoo: "Single-needle Botanical Forearm",
    artist: "Lena Voss",
    date: "February 2026",
  },
  {
    ticketNumber: "N° 0002",
    rating: 5,
    quote:
      "Talented artists, spotless studio, zero pressure. I felt at ease from the first minute.",
    client: "David S.",
    tattoo: "Sculptural Greek Statue Sleeve",
    artist: "Marcus Reed",
    date: "January 2026",
  },
  {
    ticketNumber: "N° 0003",
    rating: 5,
    quote:
      "From consultation to aftercare, the whole experience was exceptional.",
    client: "Amy C.",
    tattoo: "Custom Script & Blackwork Band",
    artist: "Kai Moreno",
    date: "March 2026",
  },
  {
    ticketNumber: "N° 0004",
    rating: 5,
    quote:
      "Dante turned my chaotic reference sketches into a masterpiece. Healed like a dream.",
    client: "Liam K.",
    tattoo: "Neo-Traditional Panther & Dagger",
    artist: "Dante Cruz",
    date: "March 2026",
  },
];

export const UPCOMING_EVENTS: StudioEvent[] = [
  {
    id: "flash-day-halloween",
    dateBadge: { month: "NOV", day: "14" },
    title: "FLASH DAY: HALLOWEEN LEFTOVERS",
    description:
      "Discounted flash designs · Walk-ins welcome · First come, first STICH.",
    location: "Main Floor Suites, STICH Studio",
    rsvpType: "Walk-in",
  },
  {
    id: "guest-artist-takeover",
    dateBadge: { month: "DEC", day: "06" },
    title: "GUEST ARTIST TAKEOVER",
    description:
      "Two days with visiting European realism specialist Soren Holm.",
    location: "Suite 2, STICH Studio",
    rsvpType: "Pre-booking Required",
  },
  {
    id: "year-end-open-house",
    dateBadge: { month: "DEC", day: "20" },
    title: "YEAR-END OPEN HOUSE",
    description:
      "Meet the team, live painting, flash preview, music and studio tours.",
    location: "Lounge & Rooftop Terrace",
    rsvpType: "Limited RSVP",
  },
];

export const STUDIO_FAQS = [
  {
    question: "How do I book a consultation or appointment?",
    answer:
      "You can submit an inquiry through our Book an Appointment form online, or drop by our studio between 12pm and 4pm daily for a walk-in consultation. Once we review your reference and placement, we will pair you with the best resident artist and confirm your date.",
  },
  {
    question: "What are your rates and deposit requirements?",
    answer:
      "Our resident artists charge between $180 and $220 per hour depending on complexity, with a studio minimum of $150. A non-refundable deposit of $100 to $200 (credited directly towards the final session cost) is required to secure your booking date.",
  },
  {
    question: "How should I prepare for my tattoo session?",
    answer:
      "Get a full night of sleep, eat a hearty meal 1-2 hours prior, and stay well hydrated. Avoid alcohol and aspirin for 24 hours before your session. Wear comfortable, dark, loose-fitting clothing that allows easy access to the tattoo placement area.",
  },
  {
    question: "What is your sterilization and safety protocol?",
    answer:
      "Safety and hygiene are non-negotiable. We operate hospital-grade autoclaves, use 100% single-use disposable needles and cartridges, medical-grade barrier film on all surfaces, and vegan non-toxic carbon pigments conforming to EU REACH standards.",
  },
  {
    question: "What is your healing and aftercare process?",
    answer:
      "We apply medical breathable film (Second Skin) at the end of your session, which you wear for 3 to 4 days. After removal, clean gently with mild fragrance-free soap, pat dry, and apply a thin layer of specialized unscented tattoo ointment for 10-14 days. We provide a printed aftercare booklet and offer free touch-up checkups.",
  },
  {
    question: "Do you take walk-ins?",
    answer:
      "Yes! We keep select afternoon slots open daily for smaller flash pieces and consultations. For large custom pieces, full sleeves, and specific artist requests, pre-booking is recommended.",
  },
];
