import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "./providers";
import cn from "@/utils/cn";
import "@/styles/globals.css";

const font = Montserrat({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Circles",
    description: "Smartre Circles",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(font.className, "antialiased text-black ")}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
