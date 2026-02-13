import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
    experience,
    education,
    skills,
    certifications,
    achievements,
} from "@/data/resume";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
    title: "Resume",
    description: "Kush Sengar — Software engineer resume. Accenture, Infosys, B.Tech CSE, 9.32 CGPA.",
};

export default function ResumePage() {
    return (
        <section className="relative min-h-screen">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-40 -right-40 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-main relative z-10 max-w-4xl pt-32 pb-20">
                {/* Header */}
                <AnimateOnScroll>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                                {siteConfig.name}
                            </h1>
                            <p className="text-text-secondary mt-2 text-lg">
                                {siteConfig.title} ·{" "}
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="text-accent hover:text-accent-hover transition-colors"
                                >
                                    {siteConfig.email}
                                </a>
                            </p>
                        </div>
                        <Button href="/resume.pdf" variant="secondary">
                            Download PDF ↓
                        </Button>
                    </div>
                </AnimateOnScroll>

                {/* Experience */}
                <AnimateOnScroll>
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-8">
                            Professional Experience
                        </div>
                        <div className="space-y-8">
                            {experience.map((exp) => (
                                <div
                                    key={`${exp.company}-${exp.period}`}
                                    className="glass glass-hover rounded-2xl p-7 transition-all duration-500 group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <p className="text-accent/70 font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-text-secondary bg-white/[0.03] px-3 py-1 rounded-lg shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                                                <span className="w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="text-accent text-[10px]">▸</span>
                                                </span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Education */}
                <AnimateOnScroll>
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-[0.15em] mb-8">
                            Education
                        </div>
                        {education.map((ed) => (
                            <div key={ed.degree} className="glass rounded-2xl p-7">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary">{ed.degree}</h3>
                                        <p className="text-text-secondary">{ed.university}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                                        <span className="text-sm text-text-secondary">{ed.year}</span>
                                        {ed.cgpa && (
                                            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                                                CGPA: {ed.cgpa}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {ed.coursework && (
                                    <div className="pt-4 border-t border-white/[0.04]">
                                        <span className="text-[11px] text-text-secondary uppercase tracking-[0.15em] font-semibold">
                                            Relevant Coursework
                                        </span>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {ed.coursework.map((course) => (
                                                <span
                                                    key={course}
                                                    className="text-xs text-text-secondary bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-lg"
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Skills */}
                <AnimateOnScroll>
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-[0.15em] mb-8">
                            Skills & Expertise
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.map((category) => (
                                <div key={category.category} className="glass rounded-2xl p-6">
                                    <h3 className="text-sm font-bold text-text-primary mb-4">
                                        {category.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-2 text-sm text-text-secondary bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-accent/30 hover:text-accent transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Certifications & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.length > 0 && (
                        <AnimateOnScroll>
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-[0.15em] mb-6">
                                    Certifications
                                </div>
                                <div className="space-y-3">
                                    {certifications.map((cert) => (
                                        <div key={cert} className="glass rounded-xl p-5 flex items-start gap-3">
                                            <span className="text-amber-400 text-lg">🏆</span>
                                            <span className="text-sm text-text-secondary leading-relaxed">{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    )}
                    {achievements.length > 0 && (
                        <AnimateOnScroll delay={100}>
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-[0.15em] mb-6">
                                    Achievements
                                </div>
                                <div className="space-y-3">
                                    {achievements.map((ach) => (
                                        <div key={ach} className="glass rounded-xl p-5 flex items-start gap-3">
                                            <span className="text-emerald-400 text-lg">⭐</span>
                                            <span className="text-sm text-text-secondary leading-relaxed">{ach}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    )}
                </div>
            </div>
        </section>
    );
}
