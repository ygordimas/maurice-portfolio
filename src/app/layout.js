import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const bebasNeue = localFont({
  src: "../../public/localfonts/BebasNeue-Regular.ttf",
  variable: "--font-bebasNeue",
});

const highman = localFont({
  src: "../../public/localfonts/Highman Trial.otf",
  variable: "--font-highman",
});

const aileron = localFont({
  src: "../../public/localfonts/Aileron-Thin.otf",
  variable: "--font-aileron",
});

export const metadata = {
  title: "Maurice Quandus",
  description: "Maurice Quandus' Art Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${highman.variable} ${aileron.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
