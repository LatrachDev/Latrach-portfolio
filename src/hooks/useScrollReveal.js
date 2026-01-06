import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function useScrollReveal(ref, options = {}) {
    const {
        y = 32,
        duration = 0.8,
        delay = 0,
        ease = 'power3.out',
        once = true,
        threshold = 0.2
    } = options;

    useLayoutEffect(() => {
        const el = ref?.current;
        if (!el) return;

        const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
        if (prefersReducedMotion) return;

        gsap.set(el, { autoAlpha: 0, y });

        const animateIn = () => {
            gsap.to(el, { autoAlpha: 1, y: 0, duration, delay, ease, overwrite: 'auto' });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;
                if (entry.isIntersecting) {
                    animateIn();
                    if (once) observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            gsap.killTweensOf(el);
            gsap.set(el, { clearProps: 'opacity,visibility,transform' });
        };
    }, [ref, y, duration, delay, ease, once, threshold]);
}
