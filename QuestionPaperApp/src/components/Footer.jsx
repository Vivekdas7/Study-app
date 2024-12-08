import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub 
} from 'react-icons/fa';
import LogoIcon from '../assets/images/logo_designs/qpapp_logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      href: 'https://facebook.com/questionpaperapp', 
      color: 'text-blue-600 hover:text-blue-700' 
    },
    { 
      icon: <FaTwitter />, 
      href: 'https://twitter.com/questionpaperapp', 
      color: 'text-sky-500 hover:text-sky-600' 
    },
    { 
      icon: <FaLinkedin />, 
      href: 'https://linkedin.com/company/questionpaperapp', 
      color: 'text-blue-700 hover:text-blue-800' 
    },
    { 
      icon: <FaInstagram />, 
      href: 'https://instagram.com/questionpaperapp', 
      color: 'text-pink-600 hover:text-pink-700' 
    },
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/questionpaperapp', 
      color: 'text-gray-800 hover:text-black' 
    }
  ];

  const quickLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Question Papers', path: '/question-papers' },
    { name: 'Study Materials', path: '/study-materials' },
    { name: 'Mock Tests', path: '/mock-tests' },
    { name: 'Exam Preparation', path: '/exam-prep' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  return (
    <footer 
      className="
        w-full 
        bg-gray-50 
        border-t 
        border-gray-200 
        py-12 
        px-4 
        mt-auto
      "
    >
      <div className="
        container 
        mx-auto 
        max-w-6xl 
        grid 
        grid-cols-1 
        md:grid-cols-4 
        gap-8
      ">
        {/* Brand and Description */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src={LogoIcon} 
              alt="Question Paper App Logo" 
              className="w-12 h-12 rounded-full object-contain"
            />
            <h2 className="text-xl font-bold text-blue-800">
            codium
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Empowering GATE CSE aspirants with comprehensive study resources, 
            practice papers, and expert guidance.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  text-2xl 
                  ${social.color} 
                  hover:scale-110 
                  transition-transform
                `}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <nav className="space-y-2">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="
                  block 
                  text-sm 
                  text-gray-600 
                  hover:text-blue-600 
                  hover:translate-x-1 
                  transition-all
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal Links */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-gray-800 mb-4">
            Legal
          </h3>
          <nav className="space-y-2">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="
                  block 
                  text-sm 
                  text-gray-600 
                  hover:text-blue-600 
                  hover:translate-x-1 
                  transition-all
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>Email: dasvivek398@gmail.com</p>
            <p>Phone: +91 9366159066</p>
            <p>Address: kolkata,west bengal,india</p>
          </div>
        </div>
      </div>

      {/* Copyright and Additional Info */}
      <div className="
        w-full 
        bg-gray-100 
        mt-8 
        py-4 
        text-center
      ">
        <p className="text-sm text-gray-600">
          {currentYear} Question Paper App. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Designed with ❤️ for GATE CSE Aspirants
        </p>
      </div>
    </footer>
  );
};

export default Footer;
