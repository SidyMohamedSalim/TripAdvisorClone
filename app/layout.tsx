import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@/src/theme/font";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/layout/Providers";
import Header from "@/components/layout/header";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: siteConfig.nameSite,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={rubik.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
