'use client';

import { useState } from 'react';

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
              <div className="relative flex justify-center items-center">
                {/* Decorative circle background */}
                <div className="absolute w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"></div>
                
                {/* Diagonal lines decoration */}
                <div className="absolute top-0 right-0 flex flex-col gap-2 opacity-80">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-16 h-0.5 bg-gray-900 rotate-45"></div>
                  ))}
                </div>

                {/* Profile circle */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <div className="text-white text-8xl font-bold">CVP</div>
                  </div>
                </div>

                {/* Bottom right star decoration */}
                <div className="absolute bottom-10 right-20 text-white text-6xl opacity-50 z-0">★</div>
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