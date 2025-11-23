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
  title: "Clash Stats",
  description: "Statistics for clash of clans",
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
