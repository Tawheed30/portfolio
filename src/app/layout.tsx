import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohammed Tawheed | SOC Analyst & Cybersecurity Analyst",
  description:
    "Portfolio of Mohammed Tawheed, a Dubai-based SOC Analyst and Cybersecurity Analyst specializing in Splunk, QRadar, Python, and MITRE ATT&CK-mapped detection.",
  keywords: [
    "Mohammed Tawheed",
    "SOC Analyst",
    "Cybersecurity Analyst",
    "SIEM Analyst",
    "Splunk",
    "QRadar",
    "MITRE ATT&CK",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohammed Tawheed | SOC Analyst & Cybersecurity Analyst",
    description:
      "SIEM monitoring, alert triage, and incident response. Splunk • QRadar • Python • MITRE ATT&CK",
    type: "website",
    url: siteUrl,
    siteName: "Mohammed Tawheed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="afterInteractive">
          {`try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light')?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}`}
        </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
