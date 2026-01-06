import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/Header/SideBar';
import Footer from '../../components/Footer/Footer';

export default function DesignerPage() {
    const navigate = useNavigate();
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const touchStartXRef = useRef(null);

    const designs = [
        {
            id: 1,
            title: 'Business Conference Poster',
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
            images: [
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600',
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Poster design for a business conference'
        },
        {
            id: 2,
            title: 'Hiring Campaign',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
            images: [
                'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600',
                'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Social media hiring banner'
        },
        {
            id: 3,
            title: 'You Lost the Context',
            image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800',
            images: [
                'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1600',
                'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Creative typography & composition'
        },
        {
            id: 4,
            title: 'Interview Announcement',
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
            images: [
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600',
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Interview-style social post'
        },
        {
            id: 5,
            title: 'Bank App Promo',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
            images: [
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600',
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Mobile app marketing design'
        },
        {
            id: 6,
            title: 'SEO Strategy',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
            images: [
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Landing-style creative banner'
        },
        {
            id: 7,
            title: 'Creative Decisions',
            image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800',
            images: [
                'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600',
                'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Minimal poster with strong contrast'
        },
        {
            id: 8,
            title: 'Productivity UI',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
            images: [
                'https://images.unsplash.com/photo-1557821552-17105176677c?w=1600',
                'https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'UI/UX card with dashboard preview'
        },
        {
            id: 9,
            title: 'Mood Today',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
            images: [
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600',
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Editorial layout with photos'
        },
        {
            id: 10,
            title: 'Designer Promo',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
            images: [
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600',
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Bold typography and gradient background'
        },
        {
            id: 11,
            title: 'We are Hiring',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800',
            images: [
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1600',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Recruiting visual with clean layout'
        },
        {
            id: 12,
            title: 'Website Layout',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
            images: [
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600',
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Multi-section website preview'
        },
        {
            id: 13,
            title: 'Event Poster',
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800',
            images: [
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600',
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Modern poster composition'
        },
        {
            id: 14,
            title: 'Branding Mock',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
            images: [
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600',
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Brand identity showcase'
        },
        {
            id: 15,
            title: 'Social Media Set',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
            images: [
                'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600',
                'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop&q=80'
            ],
            description: 'Digital graphics for socials'
        }
    ];

    const slides = useMemo(() => {
        if (!selectedDesign) return [];
        if (selectedDesign?.images?.length) return selectedDesign.images;
        return [selectedDesign.image];
    }, [selectedDesign]);

    const closeModal = useCallback(() => {
        setSelectedDesign(null);
        setActiveSlide(0);
    }, []);

    const goPrev = useCallback(() => {
        if (!slides.length) return;
        setActiveSlide((i) => (i - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goNext = useCallback(() => {
        if (!slides.length) return;
        setActiveSlide((i) => (i + 1) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (!selectedDesign) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [selectedDesign, closeModal, goPrev, goNext]);

    return (
        <div>
            <SideBar />
            <div className="px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Design Gallery</h1>
                            <p className="text-gray-600 mt-2">A Pinterest-style grid of my design projects</p>
                        </div>

                        <button
                            type="button"
                            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
                            onClick={() => navigate('/')}
                        >
                            Back to Home
                        </button>
                    </div>

                    <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
                        {designs.map((design) => (
                            <button
                                key={design.id}
                                type="button"
                                onClick={() => {
                                    setSelectedDesign(design);
                                    setActiveSlide(0);
                                }}
                                className="group relative mb-5 w-full break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 text-left"
                            >
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />

                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-4">
                                        <h3 className="text-white font-semibold">{design.title}</h3>
                                        <p className="text-white/90 text-sm mt-1">{design.description}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {selectedDesign && (
                <div
                    className="fixed inset-0 pt-10  z-50 flex items-center justify-center bg-black/90 p-4 overflow-hidden"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute cursor-pointer -top-10 z-60 right-0 text-white hover:text-gray-300 text-2xl font-bold"
                        >
                            ✕
                        </button>

                        <div
                            className="rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl"
                        >
                            <div
                                className="relative flex items-center justify-center w-full h-[70vh] sm:h-[75vh] bg-black"
                                onTouchStart={(e) => {
                                    touchStartXRef.current = e.touches?.[0]?.clientX ?? null;
                                }}
                                onTouchEnd={(e) => {
                                    const startX = touchStartXRef.current;
                                    const endX = e.changedTouches?.[0]?.clientX ?? null;
                                    touchStartXRef.current = null;
                                    if (startX == null || endX == null) return;
                                    const delta = endX - startX;
                                    if (Math.abs(delta) < 50) return;
                                    if (delta > 0) goPrev();
                                    else goNext();
                                }}
                            >
                                <img
                                    src={slides[activeSlide]}
                                    alt={selectedDesign.title}
                                    className="max-w-full max-h-full object-contain"
                                />

                                {slides.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={goPrev}
                                            className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 text-4xl rounded-full bg-black/60 text-white hover:bg-black/70 transition flex items-center justify-center"
                                            aria-label="Previous image"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            type="button"
                                            onClick={goNext}
                                            className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 text-4xl rounded-full bg-black/60 text-white hover:bg-black/70 transition flex items-center justify-center"
                                            aria-label="Next image"
                                        >
                                            ›
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="px-5 py-4 text-center">
                                <h3 className="text-white text-xl sm:text-2xl font-bold">{selectedDesign.title}</h3>
                                <p className="text-gray-300 text-sm sm:text-base mt-1">{selectedDesign.description}</p>

                                {slides.length > 1 && (
                                    <div className="mt-4 flex items-center justify-center gap-2">
                                        {slides.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setActiveSlide(i)}
                                                className={`h-2.5 w-2.5 rounded-full transition ${
                                                    i === activeSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                                                }`}
                                                aria-label={`Go to image ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}