import { Quicksand } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "shopping-secret",
  description: "Iraq, Kirkuk wholesaler for retail",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={quicksand.className}>
        <SessionProvider>
          <div className="relative overflow-x-hidden">
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
