import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://company.chumcred.com"),
  title: {
    default: "Chumcred Limited | African Innovation and Intelligence Group",
    template: "%s | Chumcred Limited"
  },
  description:
    "Chumcred Limited builds intelligent platforms, workforce ecosystems, financial intelligence systems, executive learning, and transformation solutions for Africa's future.",
  openGraph: {
    title: "Chumcred Limited",
    description:
      "Building Africa's Intelligence Economy through technology, talent, finance, research, education, and enterprise transformation.",
    url: "https://company.chumcred.com",
    siteName: "Chumcred Limited",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chumcred Limited",
    description: "Building Africa's Intelligence Economy."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
