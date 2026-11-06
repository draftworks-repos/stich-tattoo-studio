'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isOpen: boolean;
  preselectedArtist: string;
  preselectedStyle: string;
  openBooking: (options?: { artist?: string; style?: string }) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedArtist, setPreselectedArtist] = useState('');
  const [preselectedStyle, setPreselectedStyle] = useState('');

  const openBooking = (options?: { artist?: string; style?: string }) => {
    if (options?.artist) setPreselectedArtist(options.artist);
    if (options?.style) setPreselectedStyle(options.style);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        preselectedArtist,
        preselectedStyle,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingProvider');
  }
  return context;
}
