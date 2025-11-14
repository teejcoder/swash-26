import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swash | Brisbane Live Music Booking Agency",
  description: "Swash is a Brisbane-based booking agency run by local musicians. We book local and interstate bands in Fortitude Valley, offering artist management, touring, entertainment consultancy, PA equipment hire, and event staffing",
  keywords: [
    // Core Services
    "live music", "booking agency", "booking agency brisbane", "music booking agency", "band booking agency", "artist booking", "talent booking", "event booking", "gig booking", "show booking", "entertainment booking", "music agency", "talent agency", "artist management", "band management", "tour management", "touring", "tour booking", "concert booking", "venue booking",
    
    // Location-Based
    "Brisbane", "Fortitude Valley", "Brisbane live music", "Fortitude Valley venues", "Brisbane music scene", "Queensland booking agency", "Brisbane entertainment", "Valley music", "Brisbane bands", "Queensland live music", "Brisbane concerts", "Brisbane nightlife", "Brisbane music venues", "Southeast Queensland", "SEQ music", "Brisbane CBD", "inner city Brisbane",
    
    // Event Types
    "concerts", "gigs", "live shows", "music events", "live performances", "band nights", "music festivals", "corporate events", "private events", "weddings", "functions", "parties", "pub gigs", "club shows", "venue shows", "acoustic shows", "live entertainment",
    
    // Music Genres & Styles
    "rock bands", "indie bands", "punk bands", "alternative music", "indie rock", "punk rock", "garage rock", "psychedelic rock", "post-punk", "folk music", "acoustic music", "electronic music", "DJ booking", "hip hop", "rap", "metal bands", "hardcore", "punk shows", "indie shows", "rock shows",
    
    // Artist & Band Services
    "bands", "local bands", "interstate bands", "touring bands", "original bands", "cover bands", "musicians", "local musicians", "emerging artists", "independent artists", "unsigned artists", "grassroots music", "DIY music", "underground music", "music community",
    
    // Professional Services
    "event management", "entertainment consultancy", "music consultancy", "event coordination", "event planning", "production management", "stage management", "artist liaison", "booking services", "promotional services", "music promotion", "gig promotion", "event promotion",
    
    // Technical Services
    "PA equipment hire", "sound system hire", "PA hire Brisbane", "audio equipment", "sound hire", "event equipment", "stage equipment", "lighting hire", "backline hire", "equipment rental", "sound reinforcement", "audio hire",
    
    // Staffing & Support
    "event staffing", "venue staffing", "security staff", "bar staff", "event crew", "stage crew", "production crew", "event support", "venue support",
    
    // Industry Terms
    "music industry", "live music industry", "entertainment industry", "booking agent", "talent buyer", "promoter", "music promoter", "venue operator", "artist development", "career development", "music business", "gigging", "live circuit",
    
    // Local Scene Keywords
    "local music", "Brisbane music community", "Valley scene", "Brisbane indie scene", "Brisbane rock scene", "Queensland music", "Australian music", "aussie bands", "local talent", "homegrown music", "grassroots booking", "community events", "music culture", "alternative scene",
    
    // Venue Related
    "music venues Brisbane", "live music venues", "concert venues", "performance venues", "nightclubs", "bars", "pubs", "clubs", "entertainment venues", "small venues", "medium venues", "large venues", "outdoor venues", "indoor venues",
    
    // Booking Process
    "book a band", "hire a band", "book musicians", "hire entertainment", "book live music", "find bands", "get gigs", "venue booking", "festival booking", "event entertainment", "live acts", "performance booking",
    
    // Reputation & Quality
    "professional booking", "experienced agency", "trusted booking agency", "reliable booking", "quality entertainment", "curated lineup", "best bands Brisbane", "top booking agency", "established agency", "reputable agency", "musician-run", "artist-friendly", "industry professionals"
  ],
  openGraph: {
    title: "Swash | Brisbane Live Music Booking Agency",
    url: "https://swashagency.vercel.app/",
    description: "Brisbane's creative booking agency for live music, artist management, and touring.",
    siteName: "Swash Agency | Brisbane Live Music Booking Agency",
    type: "website",
    images: [
      {
        url: 'https://swashagency.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Swash - Brisbane Live Music Booking Agency',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Swash | Brisbane Live Music Booking Agency",
    description: "Brisbane's creative booking agency for live music, artist management, and touring.",
    images: ['/og-image.png'],
    site: '@swashagency',
    creator: '@denimagency',
  }
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
        <Analytics />
      </body>
    </html>
  );
}
