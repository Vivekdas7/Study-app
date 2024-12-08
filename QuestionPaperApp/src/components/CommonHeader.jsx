import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaBook, 
  FaFilePdf, 
  FaChalkboardTeacher, 
  FaBars,
  FaTimes,
  FaBell,
  FaClipboardList,
  FaRocket,
  FaUser,
  FaCog
} from 'react-icons/fa';
import LogoIcon from '../assets/images/logo_designs/qpapp_logo.svg';

const NavItem = ({ icon, name, path, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <Link 
        to={path}
        onClick={onClick}
        className={`
          flex items-center space-x-2 
          px-3 py-2 
          rounded-xl 
          transition-all 
          duration-300
          ${isActive 
            ? 'bg-blue-100 text-blue-700 shadow-md' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}
          text-sm font-medium
        `}
      >
        <span className="text-lg">{icon}</span>
        <span className="hidden md:inline truncate">{name}</span>
      </Link>
      {isActive && (
        <motion.div 
          layoutId="active-nav"
          className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
        />
      )}
    </motion.div>
  );
};

const CommonHeader = () => {
  const { user } = useUser();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const navItems = [
    { 
      icon: <FaHome />, 
      name: 'Dashboard', 
      path: '/',
    },
    { 
      icon: <FaFilePdf />, 
      name: 'Papers', 
      path: '/question-papers',
    },
    { 
      icon: <FaBook />, 
      name: 'Materials', 
      path: '/study-materials',
    },
    { 
      icon: <FaChalkboardTeacher />, 
      name: 'Exam Prep', 
      path: '/exam-prep',
    },
    { 
      icon: <FaClipboardList />, 
      name: 'Mock Tests', 
      path: '/mock-tests',
    },
    { 
      icon: <FaRocket />, 
      name: 'Pro', 
      path: '/pro',
      highlight: true
    }
  ];

  // Simulated notifications (you can replace with real logic)
  useEffect(() => {
    const mockNotifications = [
      { id: 1, message: 'New study material added', type: 'info' },
      { id: 2, message: 'Upcoming exam preparation', type: 'warning' }
    ];
    setNotifications(mockNotifications);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100 w-full"
      >
        {/* Header content remains the same */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-6xl">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={LogoIcon} 
                alt="Question Paper App Logo" 
                className="w-10 h-10 rounded-full object-contain"
              />
              <span className="text-xl font-bold text-blue-800 tracking-tight antialiased hidden sm:block">
              codium
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 items-center">
            {navItems.map((item, index) => (
              <NavItem 
                key={index}
                icon={item.icon}
                name={item.name}
                path={item.path}
                isActive={location.pathname === item.path}
              />
            ))}
          </nav>

          {/* User and Notifications Area */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative hidden md:block">
              <button className="text-gray-600 hover:text-blue-600 transition-colors group">
                <FaBell className="text-xl group-hover:rotate-12 transition-transform" />
                {notifications.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    {notifications.length}
                  </span>
                )}
              </button>
            </div>

            {/* User Authentication */}
            {user ? (
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-9 h-9 border-2 border-blue-100 hover:border-blue-300 transition-all rounded-full'
                  }
                }}
                afterSignOutUrl="/" 
              />
            ) : (
              <Link 
                to="/sign-in"
                className="
                  bg-blue-600 
                  text-white 
                  px-4 
                  py-2 
                  rounded-full 
                  text-sm 
                  font-medium 
                  hover:bg-blue-700 
                  transition-colors
                  shadow-md
                  hover:shadow-lg
                  hidden md:block
                "
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="
                  text-gray-600 
                  hover:text-blue-600 
                  transition-colors 
                  flex 
                  items-center 
                  space-x-2
                  bg-gray-100 
                  px-3 
                  py-2 
                  rounded-lg
                "
              >
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                <span className="text-sm font-medium">
                  {isMobileMenuOpen ? 'Close' : 'Menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 relative min-h-screen">
              {/* Close Button */}
              <button 
                onClick={toggleMobileMenu}
                className="
                  absolute 
                  top-4 
                  right-4 
                  text-gray-600 
                  hover:text-blue-600 
                  transition-colors 
                  flex 
                  items-center 
                  space-x-2
                  bg-gray-100 
                  px-3 
                  py-2 
                  rounded-lg
                "
              >
                <FaTimes className="text-xl" />
                <span className="text-sm font-medium">Close</span>
              </button>

              {/* User Profile Section */}
              <div className="flex items-center space-x-4 mb-8 border-b pb-4 border-gray-200">
                {user ? (
                  <div className="flex items-center space-x-4 w-full">
                    <UserButton 
                      appearance={{
                        elements: {
                          userButtonAvatarBox: 'w-12 h-12 border-2 border-blue-100'
                        }
                      }}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{user.fullName || 'User'}</p>
                      <p className="text-sm text-gray-500">{user.primaryEmailAddress?.emailAddress}</p>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to="/sign-in"
                    onClick={toggleMobileMenu}
                    className="
                      w-full 
                      text-center
                      bg-blue-600 
                      text-white 
                      px-4 
                      py-3 
                      rounded-xl 
                      text-sm 
                      font-medium 
                      hover:bg-blue-700 
                      transition-colors
                      shadow-md
                      flex 
                      items-center 
                      justify-center 
                      space-x-2
                    "
                  >
                    <FaUser className="text-lg" />
                    <span>Sign In / Register</span>
                  </Link>
                )}
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
                  Navigation
                </h3>
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path}
                      onClick={toggleMobileMenu}
                      className={`
                        flex 
                        items-center 
                        space-x-3 
                        px-4 
                        py-3 
                        rounded-xl 
                        transition-all 
                        duration-300
                        ${location.pathname === item.path 
                          ? 'bg-blue-100 text-blue-700 shadow-md' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}
                        text-sm 
                        font-medium
                        w-full
                      `}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                      {item.highlight && (
                        <span className="
                          ml-auto 
                          bg-green-500 
                          text-white 
                          text-xs 
                          px-2 
                          py-1 
                          rounded-full
                        ">
                          New
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Additional Actions */}
              <div className="mt-8 border-t pt-4 border-gray-200 space-y-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/notifications"
                    onClick={toggleMobileMenu}
                    className="
                      bg-gray-100 
                      text-gray-700 
                      px-3 
                      py-2 
                      rounded-lg 
                      flex 
                      items-center 
                      justify-center 
                      space-x-2 
                      text-sm 
                      hover:bg-gray-200 
                      transition-colors
                    "
                  >
                    <FaBell />
                    <span>Notifications</span>
                  </Link>
                  <Link
                    to="/settings"
                    onClick={toggleMobileMenu}
                    className="
                      bg-gray-100 
                      text-gray-700 
                      px-3 
                      py-2 
                      rounded-lg 
                      flex 
                      items-center 
                      justify-center 
                      space-x-2 
                      text-sm 
                      hover:bg-gray-200 
                      transition-colors
                    "
                  >
                    <FaCog />
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommonHeader;
