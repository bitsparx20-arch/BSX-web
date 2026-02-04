import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bitsparx - Custom Tech, Crafted for You",
  description: "At Bitsparx, we transform ideas into powerful digital solutions. From custom websites to scalable software, we design and build technology tailored to your business needs.",
  keywords: "custom software, web development, AI solutions, automation, technology, digital solutions",
  authors: [{ name: "Bitsparx Team" }],
  creator: "Bitsparx",
  publisher: "Bitsparx",
  robots: "index, follow",
  icons: {
    icon: "/logo1.ico",
  },
  openGraph: {
    title: "Bitsparx - Custom Tech, Crafted for You",
    description: "Transform ideas into powerful digital solutions with custom software and web development services.",
    url: "https://bitsparx.com",
    siteName: "Bitsparx",
    images: [
      {
        url: "/logo_black1.png",
        width: 1200,
        height: 630,
        alt: "Bitsparx Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitsparx - Custom Tech, Crafted for You",
    description: "Transform ideas into powerful digital solutions with custom software and web development services.",
    images: ["/logo_black1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
