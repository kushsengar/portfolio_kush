"use client";

import { Button } from "@/components/Button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Typewriter } from "@/components/Typewriter";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-aurora" />
                <div
                    className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] animate-aurora"
                    style={{ animationDelay: "5s" }}
                />
                <div
                    className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[140px] animate-aurora"
                    style={{ animationDelay: "10s" }}
                />
            </div>

            {/* Dot pattern overlay */}
            <div className="absolute inset-0 dot-pattern opacity-30" />

            <div className="container-main relative z-10 pt-32 pb-20">
                <AnimateOnScroll>
                    <div className="max-w-4xl">
                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/[0.06] mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            <span className="text-sm text-text-secondary">
                                Open to full-time roles & freelance projects
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                            I build{" "}
                            <Typewriter
                                words={["backends that scale", "APIs that perform", "AI that delivers", "software that ships"]}
                                className="text-gradient"
                                speed={80}
                                deleteSpeed={40}
                                pauseTime={2500}
                            />
                        </h1>

                        <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
                            Software engineer with experience at{" "}
                            <span className="text-text-primary font-medium">Accenture</span>{" "}
                            and{" "}
                            <span className="text-text-primary font-medium">Infosys</span>.
                            Specializing in Java, Spring Boot, REST APIs, and AI/ML.{" "}
                            <span className="text-accent/80">
                                900+ competitive coding problems solved.
                            </span>
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button href="/work">View My Work</Button>
                            <Button href="/contact" variant="secondary">
                                Start a Project →
                            </Button>
                        </div>

                        {/* Quick stats inline */}
                        <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
                            {[
                                { value: "9.32", label: "CGPA" },
                                { value: "900+", label: "Problems Solved" },
                                { value: "2", label: "Internships" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl md:text-3xl font-bold text-gradient">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent" />
        </section>
    );
}
