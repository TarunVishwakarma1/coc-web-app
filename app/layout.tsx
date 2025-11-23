import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/layouts/nav-bar";

const clashFont = localFont({
  src: [
    {
      path: "../public/font/Clash_Regular.otf",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata: Metadata = {
  // 1. Basic SEO Tags
  title: {
    default: "Clash Stats | Real-Time Clash of Clans Player & Clan Statistics",
    template: "%s | Clash Stats",
  },
  description: "Get real-time statistics, war logs, and analytical data for any Clash of Clans player or clan. Your ultimate tool for CoC performance analysis and tracking.",
  
  // 2. Canonical URL (Important for avoiding duplicate content penalties)
  metadataBase: new URL("https://www.cocstat.fun"), // **Change this to your actual domain**
  alternates: {
    canonical: '/',
  },

  // 3. Keywords (Help crawlers understand the topics, though less critical than before)
  keywords: [
    "Clash of Clans stats",
    "CoC statistics",
    "Clash Stats",
    "CoC war log",
    "Clash of Clans analytics",
    "player stats",
    "clan stats",
  ],

  // 4. Open Graph (OG) Tags for Social Media (Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    title: "Clash Stats | Real-Time Clash of Clans Statistics",
    description: "Your ultimate tool for CoC performance analysis and tracking. Get real-time stats for any player or clan.",
    url: "https://www.cocstat.fun", // **Change this**
    siteName: "Clash Stats",
    images: [
      {
        url: "/images/og-image.png", // **Ensure you create an attractive OG image in /public/images/**
        width: 1200,
        height: 630,
        alt: "Clash Stats Logo and Analytics Dashboard Preview",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 5. Twitter Card Tags (For Twitter/X)
  twitter: {
    card: 'summary_large_image', // Best type for high visibility
    title: 'Clash Stats | Real-Time CoC Analytics',
    description: 'Get deep analytics and war logs for Clash of Clans. The best statistics tool for players.',
    creator: '@Assassingod05', // **Change this to your Twitter handle**
    images: ['/images/og-image.png'], // Can be the same as OG image
  },

  // 6. Robots Tag (Crucial for crawler instructions)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${clashFont.variable} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
          <NavBar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
