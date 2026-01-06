import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Formations() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const formations = [
        {
            id: 1,
            title: "Full Stack Web Development",
            institution: "YouCode School",
            period: "2024 - Present",
            type: "Certification & Self-Learning",
            description: "Comprehensive learning of modern web development technologies including React, Node.js, MongoDB, and Express. Built multiple projects to master the MERN stack.",
            skills: ["MERN Stack", "RESTful APIs", "Authentication", "Database Design", "Deployment"],
            status: "In Progress"
        },
        {
            id: 2,
            title: "Graphic Design & Visual Communication",
            institution: "Design School / Online Courses",
            period: "2020 - 2021",
            type: "Formal Education & Courses",
            description: "Studied principles of graphic design, typography, color theory, and visual communication. Gained expertise in Adobe Creative Suite and design thinking.",
            skills: ["Adobe Creative Suite", "Typography", "Color Theory", "Brand Identity", "Layout Design"],
            status: "Completed"
        }
    ];

    return (
        <section ref={sectionRef} id="formations" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                        Education & Training
                    </div> */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Formations & Education
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        My educational background and continuous learning journey
                    </p>
                </div>

                {/* Formations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {formations.map((formation) => (
                        <div
                            key={formation.id}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Status Badge */}
                            <div className="absolute top-6 right-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    formation.status === "Completed"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                }`}>
                                    {formation.status}
                                </span>
                            </div>

                            {/* Header */}
                            <div className="mb-6 pr-16">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    {formation.title}
                                </h3>
                                <p className="text-lg font-semibold text-purple-600 mb-2">
                                    {formation.institution}
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formation.period}
                                </div>
                                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                    {formation.type}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {formation.description}
                            </p>

                            {/* Skills */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    Skills Acquired
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {formation.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs font-medium border border-purple-100"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-700 font-medium">Always learning and improving my skills</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

