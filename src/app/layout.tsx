import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Web | Irwansyah",
  description: "Hello there, I'm Irwansyah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
