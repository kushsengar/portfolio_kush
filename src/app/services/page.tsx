import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { services, processSteps, faqs } from "@/data/services";

export const metadata: Metadata = {
    title: "Services",
    description: "Productized engineering services — MVP development, API architecture, performance audits, and consulting.",
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/20">
            <summary className="flex items-center justify-between cursor-pointer p-6 text-text-primary">
                <span className="font-medium pr-4">{question}</span>
                <span className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-text-secondary group-open:text-accent group-open:rotate-45 transition-all duration-300 shrink-0">
                    +
                </span>
            </summary>
            <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                {answer}
            </div>
        </details>
    );
}

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px]" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />
                </div>
                <div className="container-main relative z-10 text-center">
                    <AnimateOnScroll>
                        <SectionHeading
                            label="Services"
                            title="Engineering services, productized"
                            subtitle="Clear scope. Predictable delivery. No surprises. I help startups and teams build reliable software, fast."
                        />
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Service Cards */}
            <section className="pb-20">
                <div className="container-main">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <AnimateOnScroll key={service.title} delay={i * 100}>
                                <div className="glass glass-hover card-shine rounded-2xl p-8 h-full flex flex-col group transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-[11px] font-semibold text-text-primary mb-4 uppercase tracking-[0.15em]">
                                            Deliverables
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {service.deliverables.map((d) => (
                                                <li key={d} className="flex items-start gap-2.5 text-sm text-text-secondary">
                                                    <span className="w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                                        <span className="text-accent text-[10px]">✓</span>
                                                    </span>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-5 border-t border-white/[0.04]">
                                        <span className="text-[11px] text-accent font-semibold uppercase tracking-wider">
                                            Ideal for
                                        </span>
                                        <p className="text-sm text-text-secondary mt-1">{service.idealFor}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="container-main relative">
                    <SectionHeading label="Process" title="How we work together" subtitle="Straightforward. Transparent. Fast." />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {processSteps.map((step, i) => (
                            <AnimateOnScroll key={step.step} delay={i * 120}>
                                <div className="relative text-center md:text-left group">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-500/10 border border-accent/20 text-accent font-bold flex items-center justify-center mx-auto md:mx-0 mb-5 group-hover:scale-110 transition-transform duration-300">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                                    <p className="text-sm text-text-secondary">{step.description}</p>
                                    {i < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-6 left-[calc(100%_-_8px)] w-4 border-t border-dashed border-accent/20" />
                                    )}
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-main max-w-3xl">
                    <SectionHeading label="FAQ" title="Common questions" />
                    <div className="space-y-3">
                        {faqs.map((faq) => (
                            <AnimateOnScroll key={faq.question}>
                                <FAQItem question={faq.question} answer={faq.answer} />
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
                            Ready to start a <span className="text-gradient">project</span>?
                        </h2>
                        <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
                            Tell me about your project and I&apos;ll get back within 24 hours with a plan.
                        </p>
                        <Button href="/contact">Start a Project</Button>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
