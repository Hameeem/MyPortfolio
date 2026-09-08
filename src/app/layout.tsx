import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { DuotoneFilter } from "@/components/graphics/DuotoneFilter";
import { VectorPatternBg } from "@/components/graphics/VectorPatternBg";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.tagline,
  keywords: ["Creative Developer", "Frontend Engineer", "SVG Vector Animations", "Next.js Portfolio", "Interactive Web Apps"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          {/* Global SVG Duotone Filter Definition */}
          <DuotoneFilter />
          {/* Floating Vector Background Grid */}
          <VectorPatternBg />
          {/* Main App Container */}
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
