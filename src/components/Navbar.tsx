"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/about", label: "About" },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#050510]/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <nav className="container-main flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-1 text-xl font-bold tracking-tight"
                >
                    <span className="text-text-primary group-hover:text-accent transition-colors duration-300">
                        {siteConfig.name.split(" ")[0]}
                    </span>
                    <span className="text-accent group-hover:scale-125 transition-transform duration-300 inline-block">
                        .
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 ${pathname === link.href
                                    ? "text-accent bg-accent/10"
                                    : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:scale-105" />
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                        <span className="relative text-white">Hire Me</span>
                        <span className="relative text-white/70 group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block w-4 h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-4 h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                                }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="glass border-t border-white/[0.04] px-6 py-6 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`px-4 py-3 rounded-xl text-base transition-all duration-300 ${pathname === link.href
                                    ? "text-accent bg-accent/10"
                                    : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-2 px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-violet-600 to-purple-600 text-white text-center"
                    >
                        Hire Me →
                    </Link>
                </div>
            </div>
        </header>
    );
}
