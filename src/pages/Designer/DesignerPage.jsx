import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

export default function DesignerPage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-2xl font-bold text-[#B5483A]'>Designer Page</h1>
                <p className='text-gray-500 mb-4'>Welcome to my designs section</p>
                <div className="space-y-4">
                    <button 
                        className='bg-[#B5483A] text-white px-6 py-2 rounded-md hover:bg-[#633F3B] transition-colors duration-300'
                        onClick={() => navigate('/professional/products')}
                    >
                        Manage Products
                    </button>
                    <button 
                        className='bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 ml-4'
                        onClick={() => navigate('/')}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}