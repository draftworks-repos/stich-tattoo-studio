import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingContext";
import { NavigationTransitionProvider } from "@/components/NavigationTransitionContext";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import InitialLoader from "@/components/InitialLoader";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STICH Tattoo Studio | Custom Tattoos by Artists",
  description:
    "Independent editorial tattoo studio specializing in Realism, Fine Line, Black & Grey, Neo-Traditional, and Blackwork. Private sterile suites in Downtown Arts District.",
  openGraph: {
    title: "STICH Tattoo Studio | Custom Tattoos by Artists",
    description:
      "Independent editorial tattoo studio specializing in Realism, Fine Line, Black & Grey, Neo-Traditional, and Blackwork.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STICH Tattoo Studio",
    description:
      "Independent editorial tattoo studio specializing in Realism, Fine Line, Black & Grey, Neo-Traditional, and Blackwork.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${bebasNeue.variable} ${plusJakartaSans.variable}`}
    >
      <body className="bg-[#0A0909] text-[#E8DFCC] antialiased selection:bg-[#C92820] selection:text-white min-h-screen flex flex-col font-sans">
        <NavigationTransitionProvider>
          <BookingProvider>
            <InitialLoader />
            <Header />
            <main className="flex-1 pt-16">
              <PageTransitionWrapper>{children}</PageTransitionWrapper>
            </main>
            <BookingModal />
            <Footer />
          </BookingProvider>
        </NavigationTransitionProvider>
      </body>
    </html>
  );
}
