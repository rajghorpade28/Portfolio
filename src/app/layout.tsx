import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajghorpade.dev"),
  title: "Raj Ghorpade | Portfolio",
  description: "Portfolio of Raj Ghorpade — Information Technology student at SIES GST, building software, AI-powered applications, and automation solutions.",
  openGraph: {
    title: "Raj Ghorpade | Portfolio",
    description: "Portfolio of Raj Ghorpade — Information Technology student at SIES GST, building software, AI-powered applications, and automation solutions.",
    url: "https://rajghorpade.dev",
    siteName: "Raj Ghorpade Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Ghorpade | Portfolio",
    description: "Portfolio of Raj Ghorpade — Information Technology student at SIES GST, building software, AI-powered applications, and automation solutions.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
