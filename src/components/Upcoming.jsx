import { useState, useEffect, useRef } from 'react';
import { ArrowRightCircle } from 'lucide-react';

// Star Border Component with Tailwind
const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component className={`relative inline-block py-[1px] overflow-hidden rounded-[20px] ${className}`} {...rest}>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          animation: `star-movement-top ${speed} linear infinite alternate`,
        }}
      ></div>
      <div className="relative z-10 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default function UpcomingEventComponent() {
  const verticalSponsorRef = useRef(null);
  const horizontalSponsorRef = useRef(null);
  
  // Sample sponsor data - replace with your actual sponsors
  const sponsors = [
    { id: 1, name: 'CodeCrafter', logo: '/sponsors/codecrafter.png' },
    { id: 2, name: 'ByteWave', logo: '/api/placeholder/150/80' },
    { id: 3, name: 'NexGen', logo: '/api/placeholder/150/80' },
    { id: 4, name: 'Mindflare', logo: '/logo.png' },
    { id: 5, name: 'QuantumTech', logo: '/api/placeholder/150/80' },
    { id: 6, name: 'InfinityCode', logo: '/api/placeholder/150/80' },
  ];

  // Sample event data
  const event = {
    id: 1,
    title: 'Build Wars - Speed Dev Challenge',
    image: '/events/build-wars/poster.jpg',
    description: "Build Wars – Speed Dev Challenge is a high-intensity web development competition where participants must build a fully functional website within 3 hours. Participants are encouraged to leverage AI to the fullest—whether it's GitHub Copilot, ChatGPT, Claude or any other LLM-based tool—to speed up development, enhance creativity, and push boundaries in web development and automation.",
    date: 'March 27, 2025',
    location: 'Maharaja Agrasen Institute of Technology, Delhi',
    registerUrl: 'https://unstop.com/o/WxMgATw?lb=WLd4hthq&utm_medium=Share&utm_source=shortUrl'
  };

  // Vertical scroll animation for desktop sponsors
  useEffect(() => {
    const sponsorContainer = verticalSponsorRef.current;
    if (!sponsorContainer) return;

    const scrollAnimation = () => {
      if (sponsorContainer.scrollTop >= sponsorContainer.scrollHeight / 2) {
        sponsorContainer.scrollTop = 0;
      } else {
        sponsorContainer.scrollTop += 1;
      }
    };

    const animationInterval = setInterval(scrollAnimation, 30);
    return () => clearInterval(animationInterval);
  }, []);

  // Horizontal scroll animation for mobile sponsors
  useEffect(() => {
    const sponsorContainer = horizontalSponsorRef.current;
    if (!sponsorContainer) return;

    const scrollAnimation = () => {
      if (sponsorContainer.scrollLeft >= sponsorContainer.scrollWidth / 2) {
        sponsorContainer.scrollLeft = 0;
      } else {
        sponsorContainer.scrollLeft += 1;
      }
    };

    const animationInterval = setInterval(scrollAnimation, 30);
    return () => clearInterval(animationInterval);
  }, []);

  // Double the sponsors list to create seamless loops
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-black text-white font-sans">
      <style>
        {`
          @keyframes star-movement-bottom {
            0% { transform: translate(0%, 0%); opacity: 1; }
            100% { transform: translate(-100%, 0%); opacity: 0; }
          }
          
          @keyframes star-movement-top {
            0% { transform: translate(0%, 0%); opacity: 1; }
            100% { transform: translate(100%, 0%); opacity: 0; }
          }
        `}
      </style>

      {/* Left sidebar for sponsors - DESKTOP ONLY */}
      <div className="hidden md:block w-48 h-full bg-gradient-to-b from-black to-purple-950/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-black/20 z-10 pointer-events-none" />
        
        <div 
          ref={verticalSponsorRef}
          className="h-full overflow-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex flex-col items-center py-4 gap-16">
            {duplicatedSponsors.map((sponsor, index) => (
              <div 
                key={`${sponsor.id}-${index}`} 
                className="w-32 h-32 flex items-center justify-center p-2 transition-all duration-300 hover:opacity-100 opacity-80"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-w-full max-h-full filter drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 h-full overflow-hidden flex flex-col">
        {/* Event image */}
        <div className="w-full md:h-3/5 h-2/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Event title and details */}
        <div className="w-full md:h-2/5 h-2/5 bg-gradient-to-br from-black to-purple-900/20 p-4 md:p-6 flex flex-col">
          {/* Event title */}
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 pb-1 font-[system-ui] tracking-tight leading-tight">
            {event.title}
          </h2>
          
          <div className="flex gap-4 mt-1 mb-2 md:mb-4 text-xs md:text-sm text-purple-300">
            <span className="flex items-center">
              <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
              {event.date}
            </span>
            <span className="flex items-center">
              <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
              {event.location}
            </span>
          </div>
          
          {/* DESKTOP: Description and register button */}
          <div className="hidden md:flex flex-col md:flex-row gap-4 mt-1">
            <div className="md:w-3/4">
              <p className="text-md md:text-lg text-gray-300 leading-relaxed tracking-wide font-light mb-4">
                {event.description}
              </p>
            </div>
            
            <div className="md:w-1/4 flex items-start justify-center md:justify-end">
              {/* Star Border Register Button - desktop */}
              <StarBorder 
                as="a" 
                href={event.registerUrl}
                color="rgb(139, 92, 246)" /* Purple-500 */
                speed="5s"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="font-medium tracking-wide text-purple-100">REGISTER NOW</span>
                  <ArrowRightCircle className="w-5 h-5 text-purple-300" />
                </div>
              </StarBorder>
            </div>
          </div>
          
          {/* MOBILE: Condensed description and register button */}
          <div className="md:hidden flex flex-col gap-3">
            <div>
              <p className="text-sm text-gray-300 leading-relaxed tracking-wide font-light line-clamp-4 mb-3">
                {event.description}
              </p>
            </div>
            
            {/* Register Button - mobile */}
            <div className="flex justify-center mb-3">
              <StarBorder 
                as="a" 
                href={event.registerUrl}
                color="#9d4edd"
                speed="7s"
                className="transform scale-105 hover:scale-110 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="font-light tracking-widest text-base uppercase">Register</span>
                  <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </StarBorder>
            </div>
          </div>
        </div>
        
        {/* MOBILE ONLY: Horizontal sponsor list at bottom */}
        <div className="md:hidden h-1/5 bg-gradient-to-r from-black to-purple-950/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-black/20 z-10 pointer-events-none" />
          
          <div 
            ref={horizontalSponsorRef}
            className="w-full h-full overflow-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex flex-row items-center h-full py-2 px-4 gap-8">
              {duplicatedSponsors.map((sponsor, index) => (
                <div 
                  key={`${sponsor.id}-mobile-${index}`} 
                  className="flex-shrink-0 w-20 h-20 flex items-center justify-center p-2 transition-all duration-300 hover:opacity-100 opacity-80"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full filter drop-shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}