import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
    title: "About",
    description: "About Kush Sengar — Software engineer, competitive programmer, and AI enthusiast.",
};

const stats = [
    { label: "CGPA", value: "9.32", color: "from-violet-400 to-purple-400" },
    { label: "Problems Solved", value: "900+", color: "from-blue-400 to-cyan-400" },
    { label: "Internships", value: "2", color: "from-amber-400 to-orange-400" },
    { label: "Certifications", value: "4", color: "from-emerald-400 to-teal-400" },
];

const techStack = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "OpenCV", icon: "👁️" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Git", icon: "📂" },
    { name: "Postman", icon: "📮" },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] animate-aurora" />
                    <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: "5s" }} />
                </div>

                <div className="container-main relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        {/* Photo */}
                        <AnimateOnScroll className="md:col-span-4">
                            <div className="aspect-square rounded-3xl overflow-hidden relative group">
                                {/* Gradient border effect */}
                                <div className="absolute -inset-[2px] bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                    <Image
                                        src="/kush-profile.jpg"
                                        alt="Kush Sengar"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent" />
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Intro */}
                        <AnimateOnScroll className="md:col-span-8" delay={100}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6">
                                About
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                I&apos;m {siteConfig.name}.{" "}
                                <span className="text-gradient">I build software that works.</span>
                            </h1>
                            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    B.Tech CSE student at IPS Academy, Indore with a{" "}
                                    <span className="text-text-primary font-medium">9.32 CGPA</span>. I&apos;ve
                                    interned at{" "}
                                    <span className="text-text-primary font-medium">Accenture</span> building
                                    Java-based REST APIs and microservice backends for financial systems, and at{" "}
                                    <span className="text-text-primary font-medium">Infosys SpringBoard</span>{" "}
                                    developing AI-powered document Q&A systems using RAG.
                                </p>
                                <p>
                                    I&apos;ve solved{" "}
                                    <span className="text-accent">900+ competitive coding problems</span> on
                                    LeetCode and Codeforces, ranked{" "}
                                    <span className="text-accent">1,111 out of 4.5 lakh</span> in TCS CodeVita S12,
                                    and I&apos;m Oracle OCI Generative AI certified.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16">
                <div className="container-main">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {stats.map((stat, i) => (
                            <AnimateOnScroll key={stat.label} delay={i * 80}>
                                <div className="glass glass-hover rounded-2xl p-6 text-center group">
                                    <div className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}>
                                        {stat.value}
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

            {/* Philosophy */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="container-main relative max-w-4xl">
                    <SectionHeading label="Philosophy" title="What drives me" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Build to Ship",
                                icon: "🚀",
                                desc: "Working software in production beats perfect code on a branch. I focus on delivering real value, fast.",
                            },
                            {
                                title: "Solve Hard Problems",
                                icon: "🧩",
                                desc: "900+ coding problems trained my instinct for clean, efficient solutions. I bring that rigor to every project.",
                            },
                            {
                                title: "Never Stop Learning",
                                icon: "📚",
                                desc: "From ML models to microservices — I actively pursue new technologies and push my boundaries.",
                            },
                        ].map((item) => (
                            <AnimateOnScroll key={item.title}>
                                <div className="glass glass-hover card-shine rounded-2xl p-7 h-full group">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-padding">
                <div className="container-main">
                    <SectionHeading label="Stack" title="Technologies I work with" />
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
                        {techStack.map((tech, i) => (
                            <AnimateOnScroll key={tech.name} delay={i * 40}>
                                <div className="glass glass-hover rounded-2xl flex flex-col items-center gap-3 p-5 group cursor-default">
                                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                                        {tech.icon}
                                    </span>
                                    <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
                <div className="container-main relative text-center">
                    <AnimateOnScroll>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-5">
                            Want to work <span className="text-gradient">together</span>?
                        </h2>
                        <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
                            I&apos;m open to full-time roles and freelance projects. Let&apos;s build something great.
                        </p>
                        <Button href="/contact">Get in Touch</Button>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
