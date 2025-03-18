import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { PageBackground } from "@/components/layout/PageBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bodza Research",
  description: "Environmental science research and insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <PageBackground>
          <div className="pt-16">
            {children}
          </div>
        </PageBackground>
      </body>
    </html>
  );
}
