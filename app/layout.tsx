import "./globals.css";
// We need to create and import the Toaster component
import { Toaster } from "../components/ui/sonner";

export const metadata = {
  title: "Aranjit Archita - Portfolio",
  description:
    "Full-Stack Developer specializing in Vue.js, Laravel, and Node.js for enterprise applications. Building robust, scalable solutions for complex business needs.",
  // ... (add the rest of your metadata from the source layout)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
