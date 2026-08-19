import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "DSLR World | Buy, Sell & Exchange Cameras in Ranchi",
  description: "Never start a business just to make money. Start a business to make a difference. Buy, sell, and exchange cameras and photography equipment at DSLR World in Ranchi.",
  openGraph: {
    title: "DSLR World | Ranchi's Trusted Camera Store",
    description: "Buy, sell, and exchange new & used DSLR and mirrorless cameras. Visit us at Church Road, RR Plaza, Ranchi.",
    url: "https://dslrworldranchi.com",
    siteName: "DSLR World",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
