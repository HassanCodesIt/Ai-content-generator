"use client";

import { useEffect, useRef } from 'react';

const ParallaxScroll = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      
      parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
};

export default ParallaxScroll; 