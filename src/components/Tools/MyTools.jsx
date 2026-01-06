
import React, { useMemo, useRef, useState } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

function CodeIcon({ className = '' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 18 3 12l6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13 5 11 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ToolBadge({ short, label, logoSrc }) {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <div className="flex items-center gap-3">
            <div
                className="w-14 h-14 rounded-2xl bg-transparent flex items-center justify-center"
            >
                {!imgFailed && logoSrc ? (
                    <img
                        src={logoSrc}
                        alt={label}
                        className="w-11 h-11 object-contain"
                        loading="lazy"
                        onError={() => setImgFailed(true)}
                    />
                ) : (
                    <span className="text-gray-900 font-extrabold text-xl tracking-tight">{short}</span>
                )}
            </div>
            <div className="text-left">
                <div className="text-gray-900 font-semibold leading-tight text-lg">{label}</div>
            </div>
        </div>
    );
}

function PowerCircle({
    title,
    subtitle,
    centerLabel,
    centerIcon,
    items,
    radius = 200
}) {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const floatSeeds = useMemo(() => {
        const rand = (min, max) => Math.random() * (max - min) + min;
        const seedById = new Map();

        items.forEach((t) => {
            seedById.set(t.id, {
                dx1: rand(-10, 10),
                dy1: rand(-10, 10),
                dx2: rand(-12, 12),
                dy2: rand(-12, 12),
                duration: rand(9, 14),
                delay: rand(-5, 0)
            });
        });

        return seedById;
    }, [items]);

    const positions = useMemo(() => {
        const count = items.length;
        const startAngle = -90;

        return items.map((item, idx) => {
            const angle = (startAngle + (360 / count) * idx) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return { id: item.id, x, y };
        });
    }, [items, radius]);

    const getItemTransform = (id) => {
        const pos = positions.find((p) => p.id === id);
        if (!pos) return 'translate(-50%, -50%) scale(0.7)';
        if (!open) return 'translate(-50%, -50%) translate(0px, 0px) scale(0.6)';
        return `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(1)`;
    };

    const isDimmed = (id) => Boolean(activeId && activeId !== id);

    return (
        <div className="w-full">
            {title || subtitle ? (
                <div className="text-center">
                    {title ? (
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">{title}</h3>
                    ) : null}
                    {subtitle ? <p className="mt-2 text-gray-600">{subtitle}</p> : null}
                </div>
            ) : null}

            <div className={`${title || subtitle ? 'mt-8' : 'mt-0'} flex items-center justify-center`}
            >
                <div
                    className="relative w-[420px] h-[420px] sm:w-[580px] sm:h-[580px]"
                    onMouseLeave={() => {
                        setOpen(false);
                        setActiveId(null);
                    }}
                >
                    <div
                        className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            open ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-cyan-500/10" />
                        <div className="absolute inset-0 rounded-full blur-2xl bg-purple-500/10" />
                        <div className="absolute inset-6 rounded-full border border-dashed border-gray-300/70" />
                        <div className="absolute inset-16 rounded-full border border-dashed border-gray-300/50" />
                    </div>

                    {items.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={`absolute left-1/2 top-1/2 select-none rounded-2xl transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 ${
                                open ? 'pointer-events-auto' : 'pointer-events-none'
                            }`}
                            style={{
                                transform: getItemTransform(item.id),
                                opacity: open ? (isDimmed(item.id) ? 0.25 : 1) : 0,
                                filter: open ? 'none' : 'blur(2px)'
                            }}
                            onMouseEnter={() => setActiveId(item.id)}
                            onMouseLeave={() => setActiveId(null)}
                            onFocus={() => {
                                setOpen(true);
                                setActiveId(item.id);
                            }}
                            onBlur={() => setActiveId(null)}
                            aria-label={item.label}
                        >
                            <div
                                className={`rounded-2xl bg-transparent shadow-none ring-0 px-2 py-2 transition-transform duration-300 ${
                                    activeId === item.id ? 'scale-[1.03]' : 'scale-100'
                                }`}
                            >
                                <div
                                    className={open ? 'dt-float' : ''}
                                    style={
                                        open
                                            ? {
                                                  '--dx1': `${floatSeeds.get(item.id)?.dx1 ?? 0}px`,
                                                  '--dy1': `${floatSeeds.get(item.id)?.dy1 ?? 0}px`,
                                                  '--dx2': `${floatSeeds.get(item.id)?.dx2 ?? 0}px`,
                                                  '--dy2': `${floatSeeds.get(item.id)?.dy2 ?? 0}px`,
                                                  '--dur': `${floatSeeds.get(item.id)?.duration ?? 12}s`,
                                                  '--delay': `${floatSeeds.get(item.id)?.delay ?? 0}s`
                                              }
                                            : undefined
                                    }
                                >
                                    <ToolBadge short={item.short} label={item.label} logoSrc={item.logoSrc} />
                                </div>
                            </div>
                        </button>
                    ))}

                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            type="button"
                            className="group cursor-pointer relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-xl ring-1 ring-gray-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70"
                            onClick={() => setOpen((v) => !v)}
                            onMouseEnter={() => setOpen(true)}
                            onFocus={() => setOpen(true)}
                            aria-label={centerLabel}
                            aria-expanded={open}
                        >
                            <div
                                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                                    open ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                }`}
                                aria-hidden="true"
                            >
                                <div className="absolute -inset-10 rounded-full bg-purple-500/15 blur-2xl" />
                                <div className="absolute -inset-6 rounded-full border border-purple-500/25" />
                                <div className="absolute -inset-3 rounded-full border border-purple-500/15" />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-1">
                                {centerIcon}
                                <div className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-gray-900 pl-[0.25em]">
                                    {centerLabel}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MyTools() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const designItems = useMemo(
        () => [
            { id: 'photoshop', short: 'Ps', label: 'Photoshop', logoSrc: '/Images/tools/photoshop.png' },
            { id: 'illustrator', short: 'Ai', label: 'Illustrator', logoSrc: '/Images/tools/illustrator.png' },
            { id: 'figma', short: 'Fg', label: 'Figma', logoSrc: '/Images/tools/figma.png' },
            { id: 'canva', short: 'Cv', label: 'Canva', logoSrc: '/Images/tools/canva.png' },
            { id: 'after-effects', short: 'Ae', label: 'After Effects', logoSrc: '/Images/tools/after-effects.png' },
            { id: 'lightroom', short: 'Lr', label: 'Lightroom', logoSrc: '/Images/tools/lightroom.png' }
        ],
        []
    );

    const devItems = useMemo(
        () => [
            { id: 'react', short: 'R', label: 'React', logoSrc: '/Images/tech/react.png' },
            { id: 'node', short: 'N', label: 'Node.js', logoSrc: '/Images/tech/node.png' },
            { id: 'express', short: 'Ex', label: 'Express', logoSrc: '/Images/tech/express.png' },
            { id: 'mongo', short: 'M', label: 'MongoDB', logoSrc: '/Images/tech/mongodb.png' },
            { id: 'tailwind', short: 'Tw', label: 'Tailwind', logoSrc: '/Images/tech/tailwind.png' },
            { id: 'git', short: 'Git', label: 'Git', logoSrc: '/Images/tech/git.png' }
        ],
        []
    );

    return (
        <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <style>
                    {`
                        @keyframes dtFloat {
                            0% { transform: translate(0px, 0px); }
                            25% { transform: translate(var(--dx1), var(--dy1)); }
                            55% { transform: translate(var(--dx2), var(--dy2)); }
                            80% { transform: translate(calc(var(--dx1) * -1), calc(var(--dy1) * -1)); }
                            100% { transform: translate(0px, 0px); }
                        }

                        .dt-float {
                            animation-name: dtFloat;
                            animation-duration: var(--dur);
                            animation-timing-function: ease-in-out;
                            animation-iteration-count: infinite;
                            animation-delay: var(--delay);
                        }

                        @media (prefers-reduced-motion: reduce) {
                            .dt-float { animation: none !important; }
                        }
                    `}
                </style>

                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">MY SUPERPOWERS</h2>
                    <p className="mt-2 text-gray-600 text-base sm:text-lg">Design + Development technologies I use.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <PowerCircle
                        centerLabel="DESIGN"
                        centerIcon={<img src="/pen-tool.svg" alt="Design" className="w-10 h-10 sm:w-12 sm:h-12" />}
                        items={designItems}
                    />

                    <PowerCircle
                        centerLabel="DEV"
                        centerIcon={<CodeIcon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900" />}
                        items={devItems}
                    />
                </div>
            </div>
        </section>
    );
}

