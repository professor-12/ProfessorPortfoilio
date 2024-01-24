import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "My Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={` bg-bgColor`}>{children}</body>
        </html>
    );
}
