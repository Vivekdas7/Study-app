import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialIcon = ({ Icon, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 360 }}
    whileTap={{ scale: 0.9 }}
    className={`text-2xl ${color} transition-all duration-300 hover:opacity-80`}
  >
    <Icon />
  </motion.a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Question Papers', path: '/question-papers' },
    { name: 'Study Materials', path: '/study-materials' },
    { name: 'Mock Tests', path: '/mock-tests' },
    { name: 'Career Guidance', path: '/career-guidance' }
  ];

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      text: 'support@questionpaperapp.com',
      href: 'mailto:support@questionpaperapp.com'
    },
    { 
      icon: FaPhone, 
      text: '+91 9876543210',
      href: 'tel:+919876543210'
    },
    { 
      icon: FaMapMarkerAlt, 
      text: 'Silicon Valley, California',
      href: 'https://maps.google.com/?q=Silicon+Valley,+California'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* App Description */}
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white flex items-center"
          >
            Question Paper App
            <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Beta</span>
          </motion.h2>
          <p className="text-gray-300 leading-relaxed">
            Empowering engineering students with comprehensive study resources, 
            question papers, and learning tools to excel in their academic journey.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <SocialIcon 
              Icon={FaGithub} 
              href="https://github.com/yourusername" 
              color="text-white" 
            />
            <SocialIcon 
              Icon={FaLinkedin} 
              href="https://linkedin.com/company/questionpaperapp" 
              color="text-blue-400" 
            />
            <SocialIcon 
              Icon={FaTwitter} 
              href="https://twitter.com/questionpaperapp" 
              color="text-blue-500" 
            />
            <SocialIcon 
              Icon={FaInstagram} 
              href="https://instagram.com/questionpaperapp" 
              color="text-pink-500" 
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-blue-700 pb-2">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ translateX: 5 }}
                className="group"
              >
                <Link 
                  to={link.path} 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-blue-700 pb-2">
            Contact Us
          </h3>
          <div className="space-y-3">
            {contactInfo.map(({ icon: Icon, text, href }) => (
              <motion.a
                key={text}
                href={href}
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Icon className="mr-3 text-blue-400" />
                {text}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Newsletter */}
      <div className="mt-12 pt-6 border-t border-blue-800 text-center">
        <div className="max-w-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">
            {currentYear} Question Paper App. All Rights Reserved. Version 1.0.0
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center bg-white/10 rounded-full px-4 py-2"
          >
            <input 
              type="email" 
              placeholder="Subscribe to our newsletter" 
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white px-4 py-2 rounded-full ml-2"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
