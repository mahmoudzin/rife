import type { Metadata } from "next";
import { AppBar } from "@/app/ui/components";

export const metadata: Metadata = {
  title: "RIFE User",
  description: "Remeber it for ever!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar />
      <div className="container mx-auto mt-16">{children}</div>
    </>
  );
}
