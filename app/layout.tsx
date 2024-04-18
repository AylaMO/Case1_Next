import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/Header/Organisms/NavBar";
import { FooterBar } from "./components/Footer/FooterBar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    default: 'Paw',
    template: '%s | Paw',
  },
  description: "Norske husdyr og dems raser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen bg-white text-black ${roboto.variable}`}>
        <NavBar/>
        <div className="flex-grow">{children}</div>
        <FooterBar/>
      </body>
    </html>
  );
}
