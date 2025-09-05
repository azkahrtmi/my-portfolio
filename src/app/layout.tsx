import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azka's portfolio",
  description: "portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-mono bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
