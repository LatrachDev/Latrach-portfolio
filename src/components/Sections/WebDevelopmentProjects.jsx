import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function WebDevelopmentProjects() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack MERN application with payment integration, user authentication, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
            link: "#",
            github: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates and team collaboration features.",
            technologies: ["React", "Socket.io", "MongoDB", "Node.js"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
            link: "#",
            github: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website with smooth animations and interactive elements.",
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
            link: "#",
            github: "#"
        },
        {
            id: 4,
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media metrics with data visualization and reporting.",
            technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            link: "#",
            github: "#"
        },
        {
            id: 5,
            title: "Restaurant Booking System",
            description: "Online reservation system with table management and customer notifications.",
            technologies: ["React", "Node.js", "MongoDB", "Twilio"],
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
            link: "#",
            github: "#"
        },
        {
            id: 6,
            title: "Learning Management System",
            description: "Educational platform with course management, video streaming, and progress tracking.",
            technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
            link: "#",
            github: "#"
        }
    ];

    const visibleProjects = projects.slice(0, 3);

    return (
        <section ref={sectionRef} id="projects" className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                        Web Development
                    </div> */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        My Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A collection of web applications built with modern technologies and best practices
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Overlay on Hover */}
                                {hoveredProject === project.id && (
                                    <div className="absolute inset-0 flex items-center justify-center gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transform scale-0 group-hover:scale-100 transition-all duration-300"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {projects.length > 3 && (
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/developer"
                            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            View more
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

