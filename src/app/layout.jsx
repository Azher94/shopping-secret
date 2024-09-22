import { Quicksand } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

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
            {children}
            <Toaster />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
