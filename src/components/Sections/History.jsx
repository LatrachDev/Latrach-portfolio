import React from 'react';

export default function History() {
  return (
    <div className="mt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 
            className="font-playfair text-[#B5483A] text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            L'Histoire de SI K-Beauty
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex justify-center items-center p-6 sm:p-8 lg:p-12">
            <div className="max-w-lg">
              <p 
                className="text-lg sm:text-xl leading-relaxed text-justify mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                "SI K-Beauty est née d'un amour profond pour la Corée, ses traditions et sa science du soin. Nous avons créé un pont entre Séoul et le Maroc, pour vous offrir des produits authentiques, sélectionnés avec rigueur, dans un écrin de simplicité et d'élégance."
              </p>
              <a 
                href="#" 
                className="inline-block text-[#B5483A] hover:text-[#633F3B] transition-colors duration-300 font-medium underline decoration-2 underline-offset-4 hover:decoration-[#633F3B]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 flex justify-center items-center p-4 sm:p-6 lg:p-8">
            <div className="relative w-full max-w-md lg:max-w-lg">
          
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#B5483A]/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B5483A]/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-[#B5483A]"></div>
        </div>
      </div>
    </div>
  );
}
