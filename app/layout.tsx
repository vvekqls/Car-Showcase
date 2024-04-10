import type { Metadata } from "next";
import { NavBar, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Find, book or rent a car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
