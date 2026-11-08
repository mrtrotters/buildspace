import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ui } from '@clerk/ui'


const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Buildspace",
  description: "Learning with achievements",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider ui={ui}>
      <html
        suppressHydrationWarning
        lang="en"
      >
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>

  );
}
