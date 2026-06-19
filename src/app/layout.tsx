import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Açaí Ña Kati Roga | Premium Delivery",
  description: "Pequeños momentos que refrescan tu día. Pedí el mejor Açaí en menos de 60 segundos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} antialiased selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen flex flex-col overflow-x-hidden`}
      >
        <main className="flex-1">{children}</main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
