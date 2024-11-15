import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Concept Chat App",
  description: "Concept Chat App | Designed & Built by Denis Tarasenko",
  robots: {
    index: false,
    follow: false,
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased w-screen max-w-screen overflow-x-hidden`}
      >
        <Navbar />
        {children}

        <a
          href="https://x.com/@lite_pal"
          style={{ filter: "drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.15))" }}
          className="fixed flex bottom-3 gap-1 text-sm z-[2] right-3 rounded-full bg-white px-6 py-2"
        >
          <span className="opacity-80">Designed and built with </span>{" "}
          <span className="text-[10px]">❤️</span>{" "}
          <span className="opacity-80">by </span>
          <span className="text-primary font-medium"> Denis</span>
        </a>
      </body>
    </html>
  );
}
