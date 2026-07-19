import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jed Nikko San Agustin — Full-Stack Developer",
  description:
    "Portfolio of Jed Nikko San Agustin. Full-stack developer building end-to-end solutions across mobile, web, and cloud infrastructure.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0F0F0F",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
