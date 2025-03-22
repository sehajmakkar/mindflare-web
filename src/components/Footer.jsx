import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Map Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-purple-400">Our Location</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9946538933814!2d77.06351547550398!3d28.719705775617193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068dbf44ecd7%3A0xc4ce5551f8ac8360!2sMaharaja%20Agrasen%20Institute%20Of%20Technology(MAIT)!5e0!3m2!1sen!2sin!4v1742638359898!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MAIT Location"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-400" />
                <span>
                  <span className="font-semibold">President:</span> 4ankush@gmail.com
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-400" />
                <span>
                  <span className="font-semibold">Tech Head:</span> sehajmakkar007@gmail.com
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-purple-400" />
                <span>+91 8920838070</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="" className="hover:text-purple-400 transition-colors">Home</a></li>
              {/* <li><a href="#projects" className="hover:text-purple-400 transition-colors">Events</a></li> */}
              <li><a href="#team" className="hover:text-purple-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Facebook size={20} />
              </a> */}
              {/* <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/mindflare_mait" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center target:_blank hover:bg-purple-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/mindflare2/posts/?feedView=all" className="h-10 w-10 rounded-full bg-gray-800 flex items-center target:_blank justify-center hover:bg-purple-700 transition-colors">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-700 transition-colors">
                <GitHub size={20} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Mindflare - Maharaja Agrasen Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;