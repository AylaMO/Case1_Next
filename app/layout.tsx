import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/Header/Organisms/NavBar";
import { FooterBar } from "./components/Footer/FooterBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Paw',
    template: '%s | Paw'
  },
  description: "Husdyr og dems raser i Norge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <FooterBar/>
        </body>
    </html>
  );
}
