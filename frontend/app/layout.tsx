import "@/styles/globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { geistSans } from "@/styles/font";
import { MyRuntimeProvider } from "./MyRuntimeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyRuntimeProvider>
      <html lang="en">
        <body className={cn(geistSans.className, "h-dvh")}>
          <TooltipProvider>{children}</TooltipProvider>
        </body>
      </html>
    </MyRuntimeProvider>
  );
}
