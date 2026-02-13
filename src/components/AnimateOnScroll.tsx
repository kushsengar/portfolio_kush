"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function AnimateOnScroll({
    children,
    className = "",
    delay = 0,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`motion-safe:transition-all motion-safe:duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
