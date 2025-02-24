import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import Particles from './Particles';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#aaaaaa']}
          particleCount={555}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          sizeRandomness={0.5}
          moveParticlesOnHover={true}
          particleHoverFactor={10}
          alphaParticles={true}
          cameraDistance={20}
          disableRotation={false}
          className="bg-black"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Welcome to Mindflare!
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Fostering a culture of learning, coding, and problem solving at MAIT.
          </p>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 
                         rounded-full backdrop-blur-sm border border-white/10 
                         transition-all duration-300"
            >
              <Instagram size={20} className="text-white" />
              <span className="text-white">Follow on Instagram</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 
                         rounded-full backdrop-blur-sm border border-white/10 
                         transition-all duration-300"
            >
              <Linkedin size={20} className="text-white" />
              <span className="text-white">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;