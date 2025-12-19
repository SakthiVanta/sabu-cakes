import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/GlobalModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sabu Cakes - Homemade Fresh Cakes in Coimbatore by Sabarika",
  description: "Order fresh homemade cakes in Coimbatore. Brownies, Black Forest, Rasmalai, Truffle, Tiramisu & 15+ varieties. Baked by Sabarika in Ondipudur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <ModalProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
        </ModalProvider>
      </body>
    </html>
  );
}
