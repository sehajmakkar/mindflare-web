import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('Executive');

  const tabs = [
    'Executive',
    'Technical',
    'PR',
    'Event Management',
    'Coordination'
  ];

  // Complete team data with separate members for each category
  const teamData = {
    Executive: [
      {
        name: "Ankush",
        role: "President",
        image: "src/assets/team/Ankush.jpg",
        linkedin: "https://www.linkedin.com/in/ankush-prasad-990a86259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        // github: "https://github.com"
      },
      {
        name: "Karan",
        role: "Vice President",
        image: "src/assets/team/karan.jpg",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com"
      },
      {
        name: "Piyush",
        role: "Secretary",
        image: "src/assets/team/piyush.jpg",
        linkedin: "https://www.linkedin.com/in/piyush-jha-93b94222b/",
        // github: "https://github.com"
      }
    ],
    Technical: [
      {
        name: "Sehaj Preet",
        role: "Technical Head",
        image: `src/assets/team/sehaj.png`,
        linkedin: "https://www.linkedin.com/in/sehajmakkar/",
        github: "https://github.com/sehajmakkar"
      },
      {
        name: "Dhruv",
        role: "Creative Head",
        image: "src/assets/team/dhruv.jpg",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com"
      }
    ],
    PR: [
      {
        name: "Udita",
        role: "PR Officer",
        image: "src/assets/team/udita.jpg",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com"
      },
      {
        name: "Aditya",
        role: "Marketing Head",
        image: "src/assets/team/aditya.jpg",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com"
      },

    ],
    "Event Management": [
      {
        name: "Chirag",
        role: "Event Coordinator",
        image: "src/assets/team/chirag.jpg",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com"
      },
      {
        name: "Abhay",
        role: "Photography Head",
        image: "src/assets/team/abhay.jpg",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com"
      },
    ],
    Coordination: [
      {
        name: "Archisha Sharma",
        role: "Coordinator",
        image: "src/assets/team/archisha.jpg",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com"
      },
    ]
  };

  return (
    <section id='team' className="w-full min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white/90 mb-16 text-center">
          Our Team
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-zinc-900/50 text-white/70 hover:bg-zinc-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamData[activeTab].map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MemberCard = ({ member }) => {
  return (
    <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5 group hover:border-purple-500/20 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-white/70 text-sm mb-4">
          {member.role}
        </p>

        {/* Social Links */}
        <div className="flex gap-3">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-purple-400 transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-purple-400 transition-all duration-300"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;