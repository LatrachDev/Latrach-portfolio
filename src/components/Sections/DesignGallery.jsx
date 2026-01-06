import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function DesignGallery() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const [selectedImage, setSelectedImage] = useState(null);

    const designs = [
        {
            id: 1,
            title: "Brand Identity Design",
            category: "branding",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
            description: "Complete brand identity for a tech startup"
        },
        {
            id: 2,
            title: "Mobile App UI",
            category: "ui",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
            description: "Modern mobile application interface design"
        },
        {
            id: 3,
            title: "Web Dashboard",
            category: "ui",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
            description: "Analytics dashboard with clean UI"
        },
        {
            id: 4,
            title: "Logo Design",
            category: "branding",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
            description: "Creative logo design for fashion brand"
        },
        {
            id: 5,
            title: "Poster Design",
            category: "print",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
            description: "Event poster with modern typography"
        },
        {
            id: 6,
            title: "Website Mockup",
            category: "ui",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
            description: "Responsive website design mockup"
        },
        {
            id: 7,
            title: "Packaging Design",
            category: "print",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
            description: "Product packaging with elegant design"
        },
        {
            id: 8,
            title: "Social Media Graphics",
            category: "digital",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
            description: "Engaging social media content design"
        },
        {
            id: 9,
            title: "Illustration",
            category: "digital",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
            description: "Custom digital illustration work"
        }
    ];

    const visibleDesigns = designs.slice(0, 3);

    return (
        <section ref={sectionRef} id="gallery" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* <div className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
                        Design Portfolio
                    </div> */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Design Gallery
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A showcase of my creative work in graphic design, UI/UX, and branding
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleDesigns.map((design) => (
                        <div
                            key={design.id}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            onClick={() => setSelectedImage(design)}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-xl font-bold mb-2">
                                        {design.title}
                                    </h3>
                                    <p className="text-white/90 text-sm">
                                        {design.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {designs.length > 3 && (
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/designer"
                            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            View more
                        </Link>
                    </div>
                )}
            </div>

            {/* Modal for Full Image View */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh]">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                        <div className="mt-4 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-300">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

