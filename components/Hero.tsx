'use client';

import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentType, setContentType] = useState('All Content Types');
  const [timeFilter, setTimeFilter] = useState('All Time');
  const [sourceFilter, setSourceFilter] = useState('All Sources');

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative w-full h-96 md:h-screen flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&h=900&fit=crop)',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-6">
          

          {/* Profile Circle */}
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/80 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center text-white text-5xl font-bold">
                CVP
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Carl Vincent G. Platil
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            I am  Trustworthy, Loyal, Helpful, Friendly, Courteous, Kind, Obedient, Cheerful, Thrifty, Brave, Clean and a Reverent Developer.
            <span className="font-semibold ml-2 cursor-pointer hover:underline">Fliptop Mag ingay</span>
          </p>


        </div>
      </section>
    </>
  );
}
