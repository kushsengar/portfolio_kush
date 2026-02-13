import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://kushsengar.dev"),
    title: {
        default: `${siteConfig.name} — ${siteConfig.title}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    openGraph: {
        title: `${siteConfig.name} — ${siteConfig.title}`,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} — ${siteConfig.title}`,
        description: siteConfig.description,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} font-sans bg-bg-primary text-text-primary`}>
                <ParticleBackground />
                <div className="relative z-10">
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
