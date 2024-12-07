import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone 
} from 'react-icons/fa';
import LogoIcon from '../assets/images/logo_designs/qpapp_logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      Icon: FaGithub, 
      href: "https://github.com/questionpaperapp", 
      color: "text-gray-400 hover:text-white" 
    },
    { 
      Icon: FaLinkedin, 
      href: "https://linkedin.com/company/questionpaperapp", 
      color: "text-blue-500 hover:text-blue-300" 
    },
    { 
      Icon: FaTwitter, 
      href: "https://twitter.com/questionpaperapp", 
      color: "text-sky-500 hover:text-sky-300" 
    },
    { 
      Icon: FaInstagram, 
      href: "https://instagram.com/questionpaperapp", 
      color: "text-pink-500 hover:text-pink-300" 
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Study Materials", path: "/study-materials" },
    { name: "Question Papers", path: "/question-papers" },
    { name: "About Us", path: "/about" }
  ];

  const contactInfo = [
    { 
      Icon: FaEnvelope, 
      text: "support@questionpaperapp.com", 
      href: "mailto:support@questionpaperapp.com" 
    },
    { 
      Icon: FaPhone, 
      text: "+91 123 456 7890", 
      href: "tel:+911234567890" 
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-4 md:px-12">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src={LogoIcon} 
              alt="Question Paper App Logo" 
              className="w-10 h-10 rounded-full object-contain"
            />
            <h2 className="text-xl font-bold text-white">
              Question Paper App
            </h2>
          </div>
          
          <p className="text-sm text-gray-300 text-center md:text-left max-w-xs mx-auto md:mx-0">
            Empowering engineering students with comprehensive GATE CSE preparation resources.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-2">
            {socialLinks.map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`${color} text-xl transition-all duration-300`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold border-b border-blue-700 pb-2 w-full text-center md:text-left">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-2 text-center md:text-left">
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
                    text-sm 
                    transition-colors
                    block
                    py-1
                  "
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold border-b border-blue-700 pb-2 w-full text-center md:text-left">
            Contact Us
          </h3>
          <div className="space-y-2 text-center md:text-left">
            {contactInfo.map(({ Icon, text, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.05 }}
                className="
                  flex 
                  items-center 
                  justify-center 
                  md:justify-start
                  text-gray-300 
                  hover:text-white 
                  text-sm 
                  transition-colors
                  space-x-2
                "
              >
                <Icon className="text-blue-400" />
                <span>{text}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 pt-4 border-t border-gray-700 text-center">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-xs text-gray-400">
            {currentYear} Question Paper App. All Rights Reserved. Version 1.0.0
          </p>
          
          <div className="flex space-x-4">
            <Link 
              to="/privacy" 
              className="
                text-xs 
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
