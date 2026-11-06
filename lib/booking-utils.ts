export interface BookingCalculationInput {
  size: 'small' | 'medium' | 'large' | 'half-sleeve' | 'full-sleeve';
  style: string;
  hasColor?: boolean;
  isCoverUp?: boolean;
}

export interface BookingEstimate {
  estimatedHoursMin: number;
  estimatedHoursMax: number;
  priceMin: number;
  priceMax: number;
  depositRequired: number;
  sessionsCount: number;
}

export interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  style: string;
  artist: string;
  size: string;
  placement: string;
  description: string;
  preferredDate?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Calculates estimated tattoo duration, price ranges and deposit required.
 */
export function calculateTattooEstimate(input: BookingCalculationInput): BookingEstimate {
  let baseHoursMin = 1;
  let baseHoursMax = 2;
  let hourlyRate = 180; // Standard resident artist hourly rate

  switch (input.size) {
    case 'small': // 2-4 inches
      baseHoursMin = 1;
      baseHoursMax = 2;
      break;
    case 'medium': // 4-7 inches
      baseHoursMin = 2.5;
      baseHoursMax = 4.5;
      break;
    case 'large': // 8-12 inches (thigh, chest, back piece portion)
      baseHoursMin = 5;
      baseHoursMax = 8;
      break;
    case 'half-sleeve':
      baseHoursMin = 10;
      baseHoursMax = 15;
      break;
    case 'full-sleeve':
      baseHoursMin = 20;
      baseHoursMax = 35;
      break;
    default:
      baseHoursMin = 1.5;
      baseHoursMax = 3;
  }

  // Realism, intricate fine line or Japanese bodysuit complexity multipliers
  const complexStyles = ['realism', 'japanese', 'fine-line', 'custom'];
  const isComplex = complexStyles.some((s) => input.style.toLowerCase().includes(s));
  if (isComplex) {
    baseHoursMin = Math.round(baseHoursMin * 1.25 * 10) / 10;
    baseHoursMax = Math.round(baseHoursMax * 1.35 * 10) / 10;
  }

  if (input.isCoverUp) {
    baseHoursMin = Math.round(baseHoursMin * 1.3 * 10) / 10;
    baseHoursMax = Math.round(baseHoursMax * 1.4 * 10) / 10;
  }

  const priceMin = Math.max(150, Math.round(baseHoursMin * hourlyRate));
  const priceMax = Math.max(250, Math.round(baseHoursMax * hourlyRate));

  // Minimum deposit is $100 or 25% of lower estimate
  const depositRequired = Math.max(100, Math.min(400, Math.round(priceMin * 0.25 / 10) * 10));
  
  // Calculate recommended sessions
  const sessionsCount = baseHoursMax > 7 ? Math.ceil(baseHoursMax / 5) : 1;

  return {
    estimatedHoursMin: baseHoursMin,
    estimatedHoursMax: baseHoursMax,
    priceMin,
    priceMax,
    depositRequired,
    sessionsCount,
  };
}

/**
 * Validates booking inquiry form inputs
 */
export function validateBookingForm(values: Partial<BookingFormValues>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Full name is required (minimum 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailRegex.test(values.email.trim())) {
    errors.email = 'Valid email address is required';
  }

  const phoneClean = (values.phone || '').replace(/[^0-9+]/g, '');
  if (!phoneClean || phoneClean.length < 7) {
    errors.phone = 'Valid phone number is required so we can confirm your time';
  }

  if (!values.style || values.style === '') {
    errors.style = 'Please select a tattoo style';
  }

  if (!values.size || values.size === '') {
    errors.size = 'Please select an approximate size';
  }

  if (!values.placement || values.placement.trim().length < 2) {
    errors.placement = 'Specify body placement (e.g. Forearm, Ribs, Thigh)';
  }

  if (!values.description || values.description.trim().length < 10) {
    errors.description = 'Please describe your tattoo idea in at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an editorial ticket confirmation reference like "INK-2026-X892"
 */
export function generateTicketReference(seed?: string): string {
  const dateYear = new Date().getFullYear();
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    const idx = seed ? (seed.charCodeAt(i % seed.length) + i) % chars.length : Math.floor(Math.random() * chars.length);
    rand += chars[idx];
  }
  return `INK-${dateYear}-${rand}`;
}
