import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function HomePage() {
    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <>
            {/* Hero with typing animation */}
            <HeroSection />

            {/* Experience Bar */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent" />
                <div className="container-main relative">
                    <AnimateOnScroll>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            <span className="text-xs text-text-secondary uppercase tracking-[0.2em]">
                                Experience at
                            </span>
                            {["Accenture", "Infosys SpringBoard", "Oracle Certified"].map(
                                (name) => (
                                    <span
                                        key={name}
                                        className="text-text-secondary/40 font-bold text-xl tracking-wide hover:text-text-secondary/70 transition-colors duration-500"
                                    >
                                        {name}
                                    </span>
                                )
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Featured Work */}
            <section className="section-padding relative">
                <div className="container-main">
                    <SectionHeading
                        label="Featured Work"
                        title="Projects that shipped"
                        subtitle="Real problems, engineered solutions, measurable outcomes."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, i) => (
                            <AnimateOnScroll key={project.slug} delay={i * 100}>
                                <ProjectCard project={project} />
                            </AnimateOnScroll>
                        ))}
                    </div>
                    <div className="mt-14 text-center">
                        <Button href="/work" variant="secondary">
                            View All Projects →
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/[0.05] rounded-full blur-[150px]" />
                <div className="container-main relative">
                    <SectionHeading
                        label="Services"
                        title="How I can help"
                        subtitle="Productized engineering services. Clear scope. Predictable delivery."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((service, i) => (
                            <AnimateOnScroll key={service.title} delay={i * 80}>
                                <div className="glass glass-hover card-shine p-6 rounded-2xl h-full transition-all duration-500 group">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {service.description.slice(0, 90)}…
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                    <div className="mt-14 text-center">
                        <Button href="/services" variant="secondary">
                            View All Services →
                        </Button>
                    </div>
                </div>
            </section>

            {/* Animated Stats */}
            <StatsSection />

            {/* CTA */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
                <div className="container-main relative text-center">
                    <AnimateOnScroll>
                        <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                            Let&apos;s work <span className="text-gradient">together</span>
                        </h2>
                        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
                            Whether you&apos;re hiring for a team or need an engineer for your
                            next project, I&apos;d love to hear from you.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button href="/contact">Get in Touch</Button>
                            <Button href="/resume" variant="secondary">
                                View Resume
                            </Button>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
