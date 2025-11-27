import React from 'react';
import myImage from '../../../public/Images/MyProfile.jpg'

export default function AboutMe() {
    const handleContactClick = () => {
        // Scroll to contact section or open contact modal
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid mx-auto grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className='w-full'>
                    <div className="flex items-center mx-auto justify-center rounded-full overflow-hidden w-[80%] lg:justify-start">
                        <img src={myImage} alt="This is just my photo :)" />
                    </div>
                    </div>

                    {/* Right Side - Description Text */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold w-fit">
                            Entrepreneur
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            About Me
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Entrepreneur and full stack MERN developer with over 2 years of freelance experience and a background in graphic design. During 7 months at a marketing agency, gained strong skills in managing projects under pressure, effective collaboration with teams, and excellent time management. Freelance experience enhanced my ability to communicate confidently with clients in both French and English, combining technical and UX/UI expertise to deliver impactful web and mobile applications.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                MERN Stack
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                UX/UI Design
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                Graphic Design
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                                Freelance
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}