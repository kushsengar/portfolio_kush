import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/work/${project.slug}`}
            className="group block glass card-shine rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5"
        >
            {/* Thumbnail */}
            <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-fuchsia-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.05] backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-3xl">
                            {project.category === "Full-Stack"
                                ? "⚡"
                                : project.category === "Backend"
                                    ? "⚙️"
                                    : project.category === "AI/ML"
                                        ? "🧠"
                                        : project.category === "Mobile"
                                            ? "📱"
                                            : project.category === "SaaS"
                                                ? "🚀"
                                                : "🛠️"}
                        </span>
                    </div>
                </div>
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6 relative">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                        {project.category}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-[11px] text-text-secondary/70 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-[11px] text-accent/60 px-2 py-0.5">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-accent text-xs">→</span>
                </div>
            </div>
        </Link>
    );
}
