interface SectionHeadingProps {
    label: string;
    title: string;
    subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
    return (
        <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-5">
                {label}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
