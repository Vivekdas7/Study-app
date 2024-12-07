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
import LogoIcon from '../assets/images/react-logo.svg'; // Using React logo as default

const SocialIcon = ({ Icon, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className={`${color} text-2xl hover:opacity-80 transition-all`}
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
      text: 'dasvivek398@gmail.com',
      href: 'mailto:dasvivek398@gmail.com'
    },
    { 
      icon: FaPhone, 
      text: '+91 9366159066',
      href: 'tel:+919366159066'
    },
    { 
      icon: FaMapMarkerAlt, 
      text: 'Kolkata, West Bengal, India',
      href: 'https://maps.google.com/?q=Kolkata, West Bengal, India'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 px-0 w-screen min-w-full overflow-hidden relative left-0 right-0">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-full">
        {/* App Description */}
        <div className="space-y-6 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4"
          >
            <img 
              src={LogoIcon} 
              alt="Question Paper App Logo" 
              className="w-10 h-10 rounded-full object-contain"
            />
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Question Paper App
              </h2>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded mt-2 md:ml-2">
                Beta
              </span>
            </div>
          </motion.div>
          
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-4 md:px-0">
            Empowering engineering students with comprehensive study resources, 
            question papers, and learning tools to excel in their academic journey.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {[
              { Icon: FaGithub, href: "https://github.com/yourusername", color: "text-white" },
              { Icon: FaLinkedin, href: "https://linkedin.com/company/questionpaperapp", color: "text-blue-400" },
              { Icon: FaTwitter, href: "https://twitter.com/questionpaperapp", color: "text-blue-500" },
              { Icon: FaInstagram, href: "https://instagram.com/questionpaperapp", color: "text-pink-500" }
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`${color} text-2xl hover:opacity-80 transition-all`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 border-b border-blue-700 pb-2">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-3 px-4 md:px-0">
            {quickLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ translateX: 5 }}
                className="group"
              >
                <Link 
                  to={link.path} 
                  className="
                    text-gray-300 
                    hover:text-white 
                    transition-colors 
                    flex 
                    items-center 
                    justify-center md:justify-start
                    text-sm 
                    sm:text-base
                  "
                >
                  <span className="mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">
                    →
                  </span>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 border-b border-blue-700 pb-2">
            Contact Us
          </h3>
          <div className="space-y-3 px-4 md:px-0">
            {contactInfo.map(({ icon: Icon, text, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.05 }}
                className="
                  flex 
                  items-center 
                  justify-center md:justify-start
                  text-gray-300 
                  hover:text-white 
                  transition-colors 
                  text-sm 
                  sm:text-base
                "
              >
                <Icon className="mr-3 text-blue-400 text-lg" />
                {text}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Newsletter */}
      <div className="mt-12 pt-6 border-t border-blue-800 text-center w-screen min-w-full">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs sm:text-sm text-gray-400">
            {currentYear} Question Paper App. All Rights Reserved. Version 1.0.0
          </p>
          
          <div className="flex space-x-4">
            <Link 
              to="/privacy" 
              className="
                text-xs 
                sm:text-sm 
                text-gray-300 
                hover:text-white 
                transition-colors
              "
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="
                text-xs 
                sm:text-sm 
                text-gray-300 
                hover:text-white 
                transition-colors
              "
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
