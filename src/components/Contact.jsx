import React, { useState } from 'react';
import { Send, Building2, Users, Mail, Trophy, UserCheck, Calendar, Globe } from 'lucide-react';

const SponsorContact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 2000);
    }, 1000);
  };

  const achievements = [
    {
      icon: <Trophy className="text-purple-400" size={24} />,
      number: "50+",
      label: "Events Organized",
      description: "Successfully conducted technical workshops and conferences"
    },
    {
      icon: <UserCheck className="text-purple-400" size={24} />,
      number: "10,000+",
      label: "Student Reach",
      description: "Impacted students across multiple universities"
    },
    {
      icon: <Calendar className="text-purple-400" size={24} />,
      number: "25+",
      label: "Partner Companies",
      description: "Collaborated with leading tech companies"
    },
    {
      icon: <Globe className="text-purple-400" size={24} />,
      number: "30+",
      label: "Global Speakers",
      description: "Featured industry experts and thought leaders"
    }
  ];

  const previousEvents = [
    {
      name: "TechCon 2024",
      metrics: [
        "2000+ attendees",
        "15 workshops",
        "95% positive feedback"
      ]
    },
    {
      name: "Hackathon Series",
      metrics: [
        "500+ participants",
        "48-hour challenges",
        "₹5L+ in prizes"
      ]
    },
    {
      name: "Industry Connect",
      metrics: [
        "100+ placement offers",
        "20 company visits",
        "Career mentorship"
      ]
    }
  ];

  return (
    <section id='contact' className=" w-full min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white/90 mb-4">
              Partner With Us
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Join us in shaping the future of technology education and innovation. 
              Together, we can create meaningful impact in the tech community.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 text-center hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{achievement.number}</h3>
                <h4 className="text-purple-400 font-semibold mb-2">{achievement.label}</h4>
                <p className="text-white/60 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Previous Events Showcase */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-white/90 mb-8 text-center">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {previousEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-purple-500/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">{event.name}</h4>
                  <ul className="space-y-2">
                    {event.metrics.map((metric, idx) => (
                      <li key={idx} className="text-white/70 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-white/5 rounded-xl p-8 space-y-6 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white/90 mb-6 text-center">Get In Touch</h3>
            
            {/* Company Name */}
            <div>
              <label className="flex items-center text-white/90 mb-2">
                <Building2 size={18} className="mr-2" />
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white/90 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>

            {/* Contact Person */}
            <div>
              <label className="flex items-center text-white/90 mb-2">
                <Users size={18} className="mr-2" />
                Contact Person
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white/90 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-white/90 mb-2">
                <Mail size={18} className="mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white/90 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center text-white/90 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your interests in sponsorship..."
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white/90 focus:outline-none focus:border-purple-500/50 transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300
                ${isSubmitting 
                  ? 'bg-purple-600/50 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="text-center text-green-400">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SponsorContact;