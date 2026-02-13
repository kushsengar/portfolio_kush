"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    words: string[];
    className?: string;
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
}

export function Typewriter({
    words,
    className = "",
    speed = 100,
    deleteSpeed = 60,
    pauseTime = 2000,
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                    if (currentText === currentWord) {
                        setTimeout(() => setIsDeleting(true), pauseTime);
                    }
                } else {
                    setCurrentText(currentWord.slice(0, currentText.length - 1));
                    if (currentText === "") {
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime]);

    return (
        <span className={className}>
            {currentText}
            <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 animate-pulse align-middle" />
        </span>
    );
}
