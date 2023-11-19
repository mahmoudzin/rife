import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import ThemeProvider from "@/app/ui/theme";
import "./globals.scss";
import LayoutProvider from "@/app/ui/Layout";
import { AppBar } from "@/app/ui/components";

export const metadata: Metadata = {
  title: "RIFE",
  description: "Remeber it for ever!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <LayoutProvider>
          <body className={inter.className}>{children}</body>
        </LayoutProvider>
      </ThemeProvider>
    </html>
  );
}
