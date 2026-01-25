'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
        {/* Geometric Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full opacity-60 blur-3xl" style={{ transform: 'translate(30%, -30%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-300 opacity-40" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-300 opacity-30" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-20 left-10 w-1 h-40 bg-white opacity-40 rotate-45"></div>
        <div className="absolute top-32 left-24 w-1 h-32 bg-white opacity-40 rotate-45"></div>
        <div className="absolute top-44 left-40 w-1 h-36 bg-white opacity-40 rotate-45"></div>
        <div className="absolute top-56 left-56 w-1 h-28 bg-white opacity-40 rotate-45"></div>
        <div className="absolute bottom-40 right-32 w-20 h-20 border-4 border-white opacity-30 rotate-12"></div>
      </div>

      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Header Navigation */}
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Carl Vincent G. Platil</h2>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                carlnibai@gmail.com
              </button>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-6 relative z-10">
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  UI/UX Designer
                  <br />
                  <span className="text-outline">& Front-End Developer</span>
                </h1>

                <p className="text-gray-600 text-lg">I’m a passionate UI/UX designer with a deep focus on creating intuitive, user-centered digital experiences. From wireframing and prototyping to high-fidelity UI design, I aim to blend form and function to deliver visually stunning, easy-to-use interfaces.</p>


                {/* Decorative stars */}
                <div className="absolute -left-4 top-1/2 text-orange-300 text-4xl opacity-60">★</div>
                <div className="absolute left-20 bottom-10 text-orange-300 text-3xl opacity-60">★</div>
              </div>

              {/* Right Content - Profile Image */}
              <div className="relative flex justify-center items-center h-96">
                {/* Decorative background rectangles */}
                <div className="absolute w-80 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl transform -rotate-3"></div>
                <div className="absolute w-80 h-96 bg-gradient-to-tl from-pink-400 to-orange-300 rounded-3xl transform rotate-3 opacity-50"></div>
                
                {/* Corner accent decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-4 border-orange-500 rounded-br-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-4 border-orange-500 rounded-tl-2xl"></div>

                {/* Profile Rectangle */}
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-10 transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/profile.jpg"
                    alt="Carl Vincent G. Platil"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-5 right-5 w-8 h-8 border-2 border-orange-500 rounded-full z-20"></div>
                <div className="absolute bottom-10 left-8 w-6 h-6 bg-orange-500 rounded-full z-20"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-12 bg-gradient-to-r from-orange-400 to-transparent rounded-full z-0"></div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .text-outline {
          color: transparent;
          -webkit-text-stroke: 2px #111827;
          text-stroke: 2px #111827;
        }
      `}</style>
    </>
  );
}