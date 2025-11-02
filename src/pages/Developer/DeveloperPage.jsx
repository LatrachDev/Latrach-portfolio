import React from 'react';
import Navbar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Footer';

export default function DeveloperPage() {
    return (
        <div>
            <Navbar />
            <h1>Developer Page</h1>
            <p>Welcome to my developer section</p>
            <div className="space-y-4">
                <button className="bg-[#B5483A] text-white px-6 py-2 rounded-md hover:bg-[#633F3B] transition-colors duration-300">
                    Manage Products
                </button>
            </div>
            <Footer />
        </div>
    );
}