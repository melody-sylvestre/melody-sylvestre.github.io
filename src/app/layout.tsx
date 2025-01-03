import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/modules/Navbar/Navbar";
import { ContactBar } from "@/modules/ContactBar/ContactBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melody Sylvestre",
  description: "Melody Sylvestre's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
