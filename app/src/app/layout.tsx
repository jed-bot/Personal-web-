import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font",
});

export const metadata: Metadata = {
  title: "Jed Nikko San Agustin — Full-Stack Developer",
  description:
    "Portfolio of Jed Nikko San Agustin. Full-stack developer building end-to-end solutions across mobile, web, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
