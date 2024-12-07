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
          flex items-center space-x-2 
          px-4 py-2 
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm w-full max-w-full overflow-x-hidden"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center w-full max-w-full">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.svg" 
              alt="Question Paper App Logo" 
              className="w-10 h-10 rounded-full object-contain"
            />
            <span className="text-xl font-bold text-blue-800 hidden sm:block">
              Question Paper App
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
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaBell className="text-xl" />
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
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

          {/* Mobile Menu Toggle - Positioned to the right */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors ml-auto"
            >
              {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-md w-full max-w-full"
          >
            <nav className="px-4 py-4 space-y-2 w-full">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`
                    flex items-center space-x-3 
                    px-4 py-3 
                    rounded-xl 
                    transition-all 
                    duration-300
                    ${location.pathname === item.path 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'}
                    text-sm font-medium
                    w-full
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default CommonHeader;
