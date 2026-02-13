"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section className="relative min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-main relative z-10 pt-32 pb-20">
                <SectionHeading
                    label="Work"
                    title="Selected projects"
                    subtitle="Each project tells a story: problem → solution → impact. Click to read the full case study."
                />

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 text-sm rounded-xl transition-all duration-300 ${activeCategory === cat
                                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/20"
                                    : "glass text-text-secondary hover:text-text-primary hover:border-accent/30"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <AnimateOnScroll key={project.slug} delay={i * 80}>
                            <ProjectCard project={project} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
