import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juliane Mariano | IT & Operations",
  description:
    "Juliane Karl A. Mariano — Information Technology, e-commerce operations, and customer support.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
