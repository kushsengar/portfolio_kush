import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Button } from "@/components/Button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return {};
    return { title: project.title, description: project.tagline };
}

export default function CaseStudyPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    const currentIndex = projects.findIndex((p) => p.slug === params.slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <article className="relative min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />
            </div>

            <div className="container-main relative z-10 max-w-4xl pt-32 pb-20">
                <AnimateOnScroll>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-300 mb-10 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                        Back to Work
                    </Link>

                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                            {project.category}
                        </span>
                        <span className="text-xs text-text-secondary">{project.role}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-5">
                        {project.title}
                    </h1>
                    <p className="text-xl text-text-secondary mb-10">{project.tagline}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-14">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="text-sm glass px-4 py-2 rounded-xl text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Hero Image Placeholder */}
                <AnimateOnScroll>
                    <div className="aspect-video glass rounded-2xl mb-16 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-purple-600/10" />
                        <div className="relative text-center">
                            <span className="text-5xl block mb-3">🖼️</span>
                            <span className="text-sm text-text-secondary">Project screenshot</span>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Problem */}
                <AnimateOnScroll>
                    <section className="mb-16">
                        <div className="glass rounded-2xl p-8 border-l-2 border-red-500/50">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                                    <span className="text-red-400 font-bold">!</span>
                                </div>
                                <h2 className="text-2xl font-bold text-text-primary">The Problem</h2>
                            </div>
                            <p className="text-text-secondary text-lg leading-relaxed pl-[52px]">
                                {project.problem}
                            </p>
                        </div>
                    </section>
                </AnimateOnScroll>

                {/* Solution */}
                <AnimateOnScroll>
                    <section className="mb-16">
                        <div className="glass rounded-2xl p-8 border-l-2 border-accent/50">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                    <span className="text-accent font-bold">✓</span>
                                </div>
                                <h2 className="text-2xl font-bold text-text-primary">The Solution</h2>
                            </div>
                            <p className="text-text-secondary text-lg leading-relaxed pl-[52px]">
                                {project.solution}
                            </p>
                        </div>
                    </section>
                </AnimateOnScroll>

                {/* Impact */}
                <AnimateOnScroll>
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <span className="text-emerald-400 font-bold">↑</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary">Impact</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-[52px]">
                            {project.impact.map((item, i) => (
                                <div
                                    key={i}
                                    className="glass glass-hover rounded-xl p-5 group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                                        <span className="text-emerald-400 text-xs font-bold">{i + 1}</span>
                                    </div>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </AnimateOnScroll>

                {/* Links */}
                <AnimateOnScroll>
                    <div className="flex flex-wrap gap-4 mb-16">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                            >
                                View Live ↗
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl glass text-text-primary hover:border-accent/30 hover:text-accent transition-all duration-300"
                            >
                                Source Code ↗
                            </a>
                        )}
                    </div>
                </AnimateOnScroll>

                {/* Prev / Next */}
                <div className="border-t border-white/[0.04] pt-10 flex justify-between">
                    {prevProject ? (
                        <Link href={`/work/${prevProject.slug}`} className="group">
                            <span className="text-xs text-text-secondary flex items-center gap-1">
                                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> Previous
                            </span>
                            <p className="text-text-primary group-hover:text-accent transition-colors duration-300 font-medium mt-1">
                                {prevProject.title}
                            </p>
                        </Link>
                    ) : <div />}
                    {nextProject ? (
                        <Link href={`/work/${nextProject.slug}`} className="group text-right">
                            <span className="text-xs text-text-secondary flex items-center justify-end gap-1">
                                Next <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                            <p className="text-text-primary group-hover:text-accent transition-colors duration-300 font-medium mt-1">
                                {nextProject.title}
                            </p>
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </article>
    );
}
