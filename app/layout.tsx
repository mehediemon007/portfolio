import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const sync = Syne({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-sync"
});

export const metadata: Metadata = {
    title: "MH Emon's Portfolio",
    description: "Mehedi Hasan Emon a full-stack next js developer, react js developer, familier with node js backend using nest js and express js.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en" className="no-touch">
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/bold/style.css"
                />
            </head>
            <body className={`${sync.variable} antialiased`}>
                <Header />
                <Sidebar/>
                <main className="main__content">
                    {children}
                </main>
            </body>
        </html>
    );
}
