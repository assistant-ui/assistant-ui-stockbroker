import "./globals.css";

import { Montserrat } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MyRuntimeProvider } from "./MyRuntimeProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyRuntimeProvider>
      <html lang="en">
        <body className={cn(montserrat.className, "h-dvh")}>
          <TooltipProvider>{children}</TooltipProvider>
        </body>
      </html>
    </MyRuntimeProvider>
  );
}
