import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaBook, 
  FaFilePdf, 
  FaChalkboardTeacher, 
  FaCalculator, 
  FaLaptopCode, 
  FaQuestionCircle,
  FaBars,
  FaTimes,
  FaBell,
  FaClipboardList
} from 'react-icons/fa';

const NavItem = ({ icon, name, path, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <Link 
        to={path}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300
          ${isActive 
            ? 'bg-blue-100 text-blue-700 shadow-md' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}
        `}
      >
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium hidden md:inline truncate">{name}</span>
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
   
  ];

  // Simulated notifications (you can replace with real logic)
  useEffect(() => {
    const mockNotifications = [
      { id: 1, message: 'New study material added', type: 'info' },
      { id: 2, message: 'Upcoming exam preparation', type: 'warning' }
    ];
    setNotifications(mockNotifications);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md w-full"
    >
      <div className="max-w-full px-4 py-3 flex justify-between items-center overflow-x-hidden">
        {/* Logo and Brand */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center space-x-2 sm:space-x-4"
        >
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/images/logo.svg" 
              alt="Question Paper App Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl transform transition-transform hover:rotate-6"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">Question Paper App</h1>
              <p className="text-xs text-gray-500 hidden md:block">Your Academic Companion</p>
            </div>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-1 items-center overflow-x-auto">
          {navItems.map((item) => (
            <NavItem 
              key={item.path}
              {...item}
              isActive={location.pathname === item.path}
            />
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notifications */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <button className="text-gray-600 hover:text-blue-600 relative">
              <FaBell className="text-lg sm:text-xl" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
          </motion.div>

          {/* User Profile */}
          <UserButton 
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-8 h-8 sm:w-10 sm:h-10 border-2 border-blue-100 hover:border-blue-300 transition-all rounded-full'
              }
            }}
            afterSignOutUrl="/login" 
          />

          {/* Mobile Menu Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-blue-600"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-md w-full"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
                    ${location.pathname === item.path 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'text-gray-600 hover:bg-gray-100'}
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default CommonHeader;
