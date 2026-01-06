
import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function DevelopmentTools() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    return (
        <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                        Development Tools
                    </h2>
                </div>
            </div>
        </section>
    );
}

