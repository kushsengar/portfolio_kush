"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { siteConfig } from "@/data/siteConfig";

const projectTypes = [
    "Full-time hire",
    "Freelance project",
    "Consulting",
    "Other",
];

const budgetRanges = [
    "Under $1,000",
    "$1,000 – $5,000",
    "$5,000 – $15,000",
    "$15,000+",
    "Not sure yet",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            projectType: formData.get("projectType") as string,
            budget: formData.get("budget") as string,
            message: formData.get("message") as string,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                const result = await res.json();
                setError(result.error || "Failed to send. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputClasses =
        "w-full px-5 py-3.5 bg-[rgba(15,15,35,0.5)] backdrop-blur-xl border border-white/[0.06] rounded-xl text-text-primary placeholder:text-text-secondary/40 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none transition-all duration-300 hover:border-white/[0.1]";

    return (
        <section className="relative min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[120px]" />
            </div>

            <div className="container-main relative z-10 pt-32 pb-20">
                <SectionHeading
                    label="Contact"
                    title="Let's build something together"
                    subtitle="Have a project in mind or want to discuss a role? Fill out the form and I'll get back within 24 hours."
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
                    {/* Form */}
                    <AnimateOnScroll className="lg:col-span-3">
                        {submitted ? (
                            <div className="glass rounded-2xl p-14 text-center animate-fade-in-up">
                                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary mb-3">
                                    Message sent!
                                </h3>
                                <p className="text-text-secondary mb-6">
                                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setError(""); }}
                                    className="text-accent hover:text-accent-hover text-sm transition-colors"
                                >
                                    Send another message →
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {error && (
                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-fade-in">
                                        {error}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2.5">
                                            Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className={inputClasses}
                                            placeholder="Kush Sengar"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2.5">
                                            Email <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className={inputClasses}
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="projectType" className="block text-sm font-medium text-text-primary mb-2.5">
                                            I&apos;m interested in
                                        </label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            className={`${inputClasses} appearance-none`}
                                        >
                                            <option value="">Select one</option>
                                            {projectTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2.5">
                                            Budget range
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            className={`${inputClasses} appearance-none`}
                                        >
                                            <option value="">Select range</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2.5">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className={`${inputClasses} resize-none`}
                                        placeholder="Tell me about your project or role..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative w-full px-8 py-4 text-sm font-medium rounded-xl overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:scale-[1.02]" />
                                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                                    <span className="relative text-white flex items-center justify-center gap-2">
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message →"
                                        )}
                                    </span>
                                </button>
                            </form>
                        )}
                    </AnimateOnScroll>

                    {/* Sidebar */}
                    <AnimateOnScroll className="lg:col-span-2" delay={150}>
                        <div className="space-y-5">
                            {/* Direct Contact */}
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-text-primary mb-5">
                                    Direct contact
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { href: `mailto:${siteConfig.email}`, icon: "✉️", label: siteConfig.email },
                                        { href: `tel:${siteConfig.phone}`, icon: "📞", label: siteConfig.phone },
                                        { href: siteConfig.social.linkedin, icon: "💼", label: "LinkedIn", external: true },
                                        { href: siteConfig.social.github, icon: "🐙", label: "GitHub", external: true },
                                    ].map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target={item.external ? "_blank" : undefined}
                                            rel={item.external ? "noopener noreferrer" : undefined}
                                            className="flex items-center gap-3 text-text-secondary hover:text-accent transition-all duration-300 group"
                                        >
                                            <span className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300 shrink-0">
                                                {item.icon}
                                            </span>
                                            <span className="text-sm">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="glass rounded-2xl p-6">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                                    </span>
                                    <h3 className="text-lg font-bold text-text-primary">Available now</h3>
                                </div>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Currently accepting new projects and open to full-time
                                    opportunities. Typical response time: <span className="text-accent">under 24 hours</span>.
                                </p>
                            </div>

                            {/* Location */}
                            <div className="glass rounded-2xl p-6 text-center">
                                <span className="text-3xl block mb-2">🇮🇳</span>
                                <span className="text-sm text-text-secondary">Based in India</span>
                                <span className="block text-xs text-text-secondary/60 mt-1">GMT+5:30</span>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
