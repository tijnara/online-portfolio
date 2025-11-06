import "./globals.css";
import { Toaster } from "../components/ui/sonner";

export const metadata = {
  title: "Aranjit Archita - Full-Stack Developer", // Updated title
  description:
    "Full-Stack Developer specializing in Vue.js, Laravel, and Node.js for enterprise applications. Building robust, scalable solutions for complex business needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add className="dark" to force the dark theme
    <html lang="en" className="dark">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
