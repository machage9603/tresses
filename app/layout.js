// layout.js
import { Babylonica } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

const babylonica = Babylonica({
  weight: '400',
  subsets: ['latin'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${babylonica.className}`}>
        {children}
      </body>
    </html>
  );
}