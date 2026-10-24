'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  { src: '/assets/images/cathy-mu-UWFjqxYWAmA-unsplash.jpg' },
  { src: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg' },
  { src: '/assets/images/joshua-hoehne-0F4duBPWlCw-unsplash.jpg' },
];

const logo = '/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png';

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-carousel relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images[currentImageIndex].src}
          alt={`Strength Training ${currentImageIndex + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
          key={currentImageIndex} // Force re-render on change
        />
      </div>

      {/* Overlay Content - Always on top */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4"
        style={{ background: 'linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(0,0,0,0.85) 100%)' }}
      >
        
        {/* Logo - Shows FIRST on mobile, SECOND on desktop */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center order-1 md:order-2 mb-4 md:mb-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={logo}
              alt="Chi-Rho Power and Strength Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* Content - Shows SECOND on mobile, FIRST on desktop */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left order-2 md:order-1">
          <div className="tracking-tighter text-white">
            <h1 className="font-bold text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
              Get Stronger.<br />
              <span className="text-yellow-400">Stop Overthinking.</span>
            </h1>
            <p className="mt-2 md:mt-3 text-lg sm:text-xl md:text-2xl text-left text-gray-200">
              Strength coaching from the author of <em>&quot;Shut Up and Lift&quot;</em>
            </p>
            <p className="py-4 md:py-8 text-left text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300">
              Cut through the fitness industry BS. Get expert programming that actually works for real people with real schedules.
            </p>
            
            {/* Credentials Badges */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-yellow-400">
                ✓ 10+ Years Training
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-yellow-400">
                ✓ Published Author
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-yellow-400">
                ✓ Working Professional
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link 
                href="/coaching"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform text-center text-sm md:text-base"
              >
                View Coaching Options
              </Link>
              <Link
                href="/apply?service=discovery-call"
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-lg transition duration-200 text-center text-sm md:text-base"
              >
                Free Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;