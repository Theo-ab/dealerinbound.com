import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DealerInbound | AI-Powered Call Handling for Dealerships",
  description:
    "Never miss another customer call. DealerInbound answers inbound calls 24/7, qualifies customers, and books appointments automatically for automotive dealerships.",
  keywords: [
    "automotive",
    "dealership",
    "AI",
    "call handling",
    "appointment booking",
    "inbound calls",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#000000', margin: 0, padding: 0 }}
      >
        <div style={{ margin: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="sticky z-50 rounded-[18px] overflow-hidden bg-white" style={{ top: '8px' }}>
            <TopBanner />
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
