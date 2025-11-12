import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swash | Brisbane Live Music Booking Agency",
  description: "Swash is a Brisbane-based booking agency run by local musicians. We book local and interstate bands in Fortitude Valley, offering artist management, touring, entertainment consultancy, PA equipment hire, and event staffing",
  keywords: ["live music", "booking agency", "event management", "Brisbane", "Fortitude Valley", "bands", "concerts", "touring", "artist management"],
  openGraph: {
    title: "Swash | Brisbane Live Music Booking Agency",
    description: "Brisbane's creative booking agency for live music, artist management, and touring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#000000', colorScheme: 'dark' }}>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
