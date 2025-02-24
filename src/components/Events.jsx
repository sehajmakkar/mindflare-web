import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "DSAxTREME BATTLE 1.O",
      description: "An intensive workshop on emerging technologies and their applications in modern software development.",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    },
    {
      id: 2,
      title: "Introduction",
      description: "24-hour coding challenge where teams competed to build innovative solutions for real-world problems.",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-black py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white/90 mb-16 text-center animate-fade-in">
          Recent Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {events.map((event, index) => (
            <div key={event.id} 
                 className="animate-slide-up"
                 style={{
                   animationDelay: `${index * 200}ms`
                 }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// EventCard component remains the same
const EventCard = ({ event }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % event.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + event.images.length) % event.images.length);
  };

  return (
    <div 
      className="bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5 transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-purple-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/2]">
        <div className="relative w-full h-full">
          <img
            src={event.images[currentImage]}
            alt={`${event.title}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out"
          />
          
          <div className={`absolute inset-0 flex items-center justify-between p-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors transform hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors transform hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {event.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? 'bg-white w-6'
                    : 'bg-white/50 w-1.5 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-purple-400">
          {event.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default EventsSection;