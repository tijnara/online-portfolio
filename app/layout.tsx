import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";

export const metadata: Metadata = {
  title: "Portfolio - Your Name",
  description: "A professional portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
