import React from 'react';

export default function Experiences() {
    const experiences = [
        {
            id: 1,
            title: "Full Stack Developer - Freelance",
            company: "Self-Employed",
            period: "2022 - Present",
            location: "Remote",
            description: "Developed and delivered full-stack web applications for various clients using MERN stack. Managed projects from conception to deployment, ensuring high-quality code and client satisfaction.",
            achievements: [
                "Built 15+ web applications with modern technologies",
                "Maintained 95%+ client satisfaction rate",
                "Collaborated with international clients in French and English"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]
        },
        {
            id: 2,
            title: "Graphic Designer & Developer",
            company: "Marketing Agency",
            period: "7 months",
            location: "On-site",
            description: "Worked in a fast-paced marketing agency environment, handling multiple projects simultaneously. Combined graphic design skills with web development to create comprehensive digital solutions.",
            achievements: [
                "Delivered 20+ design projects under tight deadlines",
                "Improved project delivery time by 30%",
                "Collaborated effectively with cross-functional teams"
            ],
            technologies: ["Adobe Creative Suite", "React", "Figma", "WordPress"]
        },
        {
            id: 3,
            title: "UI/UX Designer - Freelance",
            company: "Various Clients",
            period: "2021 - 2022",
            location: "Remote",
            description: "Created user-centered designs for web and mobile applications. Focused on creating intuitive interfaces that enhance user experience and drive engagement.",
            achievements: [
                "Designed 10+ mobile and web applications",
                "Increased user engagement by 40% on redesigned platforms",
                "Established design systems for multiple brands"
            ],
            technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
        }
    ];

    return (
        <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-transparent">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                        Professional Journey
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Work Experience
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        My professional journey combining technical expertise with creative design
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-1/2"></div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                className={`relative flex items-start ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>

                                {/* Content Card */}
                                <div
                                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                    }`}
                                >
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                        {experience.title}
                                                    </h3>
                                                    <p className="text-lg font-semibold text-purple-600">
                                                        {experience.company}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                                                <span className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    {experience.period}
                                                </span>
                                                <span className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {experience.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {experience.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                                            <ul className="space-y-1">
                                                {experience.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-gray-600">
                                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                            {experience.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs font-medium border border-purple-100"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

