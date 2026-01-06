import React from 'react';
import SideBar from '../../components/Header/SideBar';
import Footer from '../../components/Footer/Footer';

export default function DeveloperPage() {
    return (
        <div>
            <SideBar />
            <div className="px-4 sm:px-6 lg:px-8 pt-28 pb-16">
                <h1>Developer Page</h1>
                <p>Welcome to my developer section</p>
                <div className="space-y-4">
                    <button className="bg-[#B5483A] text-white px-6 py-2 rounded-md hover:bg-[#633F3B] transition-colors duration-300">
                        Manage Products
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}