"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Counter } from "@/components/Counter";

const stats = [
    { end: 9, suffix: ".32", label: "CGPA", color: "from-violet-500 to-purple-500" },
    { end: 900, suffix: "+", label: "Problems Solved", color: "from-blue-500 to-cyan-500" },
    { end: 1111, suffix: "", label: "CodeVita Rank", color: "from-amber-500 to-orange-500" },
    { end: 4, suffix: "", label: "Certifications", color: "from-emerald-500 to-teal-500" },
];

export function StatsSection() {
    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="container-main relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {stats.map((stat, i) => (
                        <AnimateOnScroll key={stat.label} delay={i * 80}>
                            <div className="glass glass-hover rounded-2xl p-6 text-center group">
                                <div
                                    className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}
                                >
                                    <Counter
                                        end={stat.end}
                                        suffix={stat.suffix}
                                        duration={2000}
                                    />
                                </div>
                                <div className="text-xs text-text-secondary uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
