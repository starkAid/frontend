import type { Metadata } from "next";
import "@/styles/globals.css"
import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { StarknetProvider } from "@/provider/starknet-provider";
import { Toaster } from "sonner";


const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "StarkAid",
  description: "A decentralized crowdfunding application on StarkNet tailored specifically for disaster relief and scientific research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen w-full font-sans antialiased bg-white",
        fontSans.variable
      )}>
        <StarknetProvider>
          <Toaster richColors />
          {children}
        </StarknetProvider>
      </body>
    </html>
  );
}
