import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pim Steijns - Data Engineer & IT Specialist",
  description: "Personal CV website of Pim Steijns - Data Engineer, IT Specialist, and Photographer with expertise in Python, SQL, Snowflake, and data architecture.",
  keywords: ["Pim Steijns", "Data Engineer", "IT Specialist", "Python", "SQL", "Snowflake", "BigQuery", "Photography"],
  authors: [{ name: "Pim Steijns" }],
  creator: "Pim Steijns",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Pim Steijns - Data Engineer & IT Specialist",
    description: "Personal CV website showcasing my experience in data engineering, IT consulting, and photography.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
