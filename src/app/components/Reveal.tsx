'use client'

import { useEffect } from "react"

export default function Reveal() {
    useEffect(() => {
        const deff = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).classList.add('rev');
                    deff.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        const showRev = document.querySelectorAll('.reveal');
        showRev.forEach((el) => deff.observe(el));

        return () => deff.disconnect();
    }, [])
}
