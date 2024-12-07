import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaBook, 
  FaClipboardList, 
  FaChalkboardTeacher, 
  FaQuestionCircle, 
  FaFilePdf, 
  FaCalculator, 
  FaLaptopCode,
  FaRocket,
  FaBrain,
  FaGraduationCap,
  FaChartLine,
  FaUserGraduate,
  FaCode,
  FaLightbulb,
  FaTrophy,
  FaChalkboard,
  FaProjectDiagram,
  FaJava,
  FaReact,
  FaBookOpen,
  FaClock,
  FaStar,
  FaUnlock 
} from 'react-icons/fa';

// Import logos
import JavascriptLogo from '../assets/images/javascript-logo.svg';
import JavaLogo from '../assets/images/java-logo.svg';
import ReactLogo from '../assets/images/react-logo.svg';

// Animated Notification Component
const Notification = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 
                  type === 'warning' ? 'bg-yellow-500' : 
                  'bg-blue-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-4 right-4 ${bgColor} text-white p-4 rounded-lg shadow-lg z-50 max-w-sm`}
    >
      {message}
    </motion.div>
  );
};

// Dashboard Card Component
const DashboardCard = ({ title, icon, link, description, color, stats }) => (
  <motion.div
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    whileTap={{ scale: 0.95 }}
    className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border-l-4 border-${color}-500 hover:border-${color}-600 transition-all relative overflow-hidden space-y-4`}
  >
    <div className="flex justify-between items-center">
      <div className={`text-4xl text-${color}-600`}>{icon}</div>
      <Link 
        to={link} 
        className={`text-sm text-${color}-600 hover:text-${color}-800 transition-colors flex items-center font-semibold`}
      >
        Explore
        <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {stats && (
        <div className="flex justify-between items-center text-sm">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`text-xl text-${color}-500`}>{stat.icon}</span>
              <span className="text-gray-700 font-medium">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

// Quick Action Button
const QuickActionButton = ({ icon, title }) => (
  <motion.button
    whileHover={{ 
      scale: 1.1, 
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }}
    whileTap={{ scale: 0.9 }}
    className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:bg-blue-50 transition-all space-y-2 border border-gray-100"
  >
    <div className="text-3xl text-blue-600 mb-2">{icon}</div>
    <span className="text-sm text-gray-700 font-medium">{title}</span>
  </motion.button>
);

// Course Card Component
const CourseCard = ({ 
  title, 
  description, 
  logo, 
  bgColor, 
  textColor, 
  level, 
  duration, 
  rating,
  skills,
  courseRoute
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        relative 
        bg-white 
        rounded-3xl 
        shadow-xl 
        overflow-hidden 
        transition-all 
        duration-300 
        hover:shadow-2xl 
        group
        border 
        border-gray-100 
        hover:border-blue-200
        transform 
        hover:-translate-y-2
        flex 
        flex-col
      `}
    >
      {/* Course Header */}
      <div className={`
        p-5 
        pb-4 
        flex 
        flex-col 
        sm:flex-row 
        items-center 
        justify-between 
        ${bgColor} 
        bg-opacity-10
        border-b 
        border-gray-100
      `}>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full">
          <img 
            src={logo} 
            alt={`${title} Logo`} 
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl object-contain shadow-md"
          />
          <div className="text-center sm:text-left w-full">
            <h3 className={`
              text-2xl 
              sm:text-3xl 
              font-bold 
              ${textColor} 
              tracking-tight
              mb-2
              text-center sm:text-left
            `}>
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-3">
              <span className="
                text-sm 
                font-medium 
                bg-gray-100 
                text-gray-700 
                px-3 
                py-1 
                rounded-full
              ">
                {level}
              </span>
              <div className="flex items-center text-yellow-500">
                <FaStar className="mr-2" />
                <span className="text-sm font-semibold text-gray-700">
                  {rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5 pt-4 flex flex-col flex-grow">
        {/* Description */}
        <p className="
          text-gray-700 
          mb-6 
          text-base 
          leading-relaxed 
          min-h-[4.5rem] 
          line-clamp-3
          text-center sm:text-left
        ">
          {description}
        </p>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="
            text-base 
            font-semibold 
            text-gray-800 
            mb-3
            text-center sm:text-left
          ">
            Key Skills:
          </h4>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="
                  bg-blue-50 
                  text-blue-700 
                  text-xs 
                  px-3 
                  py-1.5 
                  rounded-full
                  font-medium
                  tracking-tight
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="
            bg-gray-50 
            p-4 
            rounded-lg 
            text-center 
            hover:bg-blue-50 
            transition-colors
          ">
            <FaClock className="
              mx-auto 
              mb-2 
              text-green-500 
              text-2xl
            " />
            <span className="
              text-sm 
              font-medium 
              text-gray-700 
              block
            ">
              {duration}
            </span>
          </div>
          <div className="
            bg-gray-50 
            p-4 
            rounded-lg 
            text-center 
            hover:bg-purple-50 
            transition-colors
          ">
            <FaUnlock className="
              mx-auto 
              mb-2 
              text-purple-500 
              text-2xl
            " />
            <span className="
              text-sm 
              font-medium 
              text-gray-700 
              block
            ">
              Free Access
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <Link 
          to={courseRoute} 
          className={`
            w-full 
            block 
            text-center 
            py-4 
            rounded-full 
            font-bold 
            text-white 
            transition-all 
            duration-300 
            ${bgColor} 
            hover:opacity-90
            text-lg
            shadow-md
            group-hover:shadow-lg
            active:scale-95
            mt-auto
          `}
        >
          Start Learning
        </Link>
      </div>
    </motion.div>
  );
};

const HomeScreen = () => {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (user) {
      setNotification({
        message: `Welcome back, ${user.firstName || 'Student'}! Your learning journey continues today.`,
        type: 'success'
      });
    }
  }, [user]);

  const dashboardItems = [
    { 
      title: 'Question Papers', 
      icon: <FaFilePdf />, 
      link: '/question-papers',
      description: 'Comprehensive collection of previous year exam papers',
      color: 'blue',
      stats: [
        { icon: <FaTrophy />, value: '150+ Papers' },
        { icon: <FaChartLine />, value: 'All Branches' }
      ]
    },
    { 
      title: 'Study Materials', 
      icon: <FaBook />, 
      link: '/study-materials',
      description: 'Curated learning resources for holistic preparation',
      color: 'green',
      stats: [
        { icon: <FaChalkboard />, value: '200+ Resources' },
        { icon: <FaBrain />, value: 'Smart Learning' }
      ]
    },
    { 
      title: 'Exam Preparation', 
      icon: <FaClipboardList />, 
      link: '/exam-prep',
      description: 'Strategic preparation techniques and guidance',
      color: 'purple',
      stats: [
        { icon: <FaRocket />, value: 'Strategic Prep' },
        { icon: <FaLightbulb />, value: 'Smart Tips' }
      ]
    },
    { 
      title: 'Mock Tests', 
      icon: <FaChalkboardTeacher />, 
      link: '/mock-tests',
      description: 'Simulate exam experience with comprehensive tests',
      color: 'red',
      stats: [
        { icon: <FaProjectDiagram />, value: '50+ Tests' },
        { icon: <FaUserGraduate />, value: 'All Subjects' }
      ]
    }
  ];

  const quickActions = [
    { 
      icon: <FaCalculator />, 
      title: 'Problem Solving',
      link: '/problem-solving'
    },
    { 
      icon: <FaLaptopCode />, 
      title: 'Coding Practice',
      link: '/coding-practice'
    },
    { 
      icon: <FaQuestionCircle />, 
      title: 'Doubt AI Solver',
      link: '/doubt-solver'
    },
    
  ];

  const courses = [
    {
      title: 'Learn JavaScript',
      description: 'Master modern JavaScript from beginner to advanced. Build interactive web applications with cutting-edge techniques.',
      logo: JavascriptLogo,
      bgColor: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
      textColor: 'text-yellow-900',
      level: 'Beginner to Pro',
      duration: '40 Hours',
      rating: '4.8/5',
      skills: ['ES6+', 'DOM', 'Async', 'Promises'],
      courseRoute: '/course/javascript'
    },
    {
      title: 'Learn Java',
      description: 'Comprehensive Java programming course covering core concepts, object-oriented programming, and enterprise development.',
      logo: JavaLogo,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
      textColor: 'text-blue-900',
      level: 'All Levels',
      duration: '60 Hours',
      rating: '4.7/5',
      skills: ['OOP', 'Collections', 'Generics', 'Multithreading'],
      courseRoute: '/course/java'
    },
    {
      title: 'React Masterclass',
      description: 'Deep dive into React ecosystem. Learn modern web development with React, hooks, state management, and advanced patterns.',
      logo: ReactLogo,
      bgColor: 'bg-gradient-to-br from-teal-500 to-teal-700',
      textColor: 'text-teal-900',
      level: 'Intermediate',
      duration: '50 Hours',
      rating: '4.9/5',
      skills: ['Hooks', 'Redux', 'Routing', 'Context'],
      courseRoute: '/course/react'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 lg:px-16 xl:px-24">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
        />
      )}

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 lg:mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl lg:text-5xl font-bold text-gray-800 flex items-center"
            >
              Dashboard
              <span className="ml-4 bg-blue-100 text-blue-800 text-base px-3 py-1 rounded-full">
                {user?.firstName || 'Student'}
              </span>
            </motion.h1>
            <p className="text-gray-600 mt-3 text-lg lg:text-xl">
              Your personalized learning companion
            </p>
          </div>
          <UserButton afterSignOutUrl="/login" />
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 lg:mb-12"
        >
          <div className="relative max-w-3xl mx-auto">
            <input 
              type="text" 
              placeholder="Search resources, papers, materials..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 bg-white border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-md text-lg"
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 lg:mb-12 flex justify-center space-x-6 lg:space-x-8"
        >
          {quickActions.map((action, index) => (
            <Link 
              key={index} 
              to={action.link} 
              className="contents"
            >
              <QuickActionButton 
                icon={action.icon}
                title={action.title}
              />
            </Link>
          ))}
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {dashboardItems.map((item) => (
            <DashboardCard 
              key={item.title} 
              title={item.title} 
              icon={item.icon} 
              link={item.link} 
              description={item.description}
              color={item.color}
              stats={item.stats}
            />
          ))}
        </motion.div>

        {/* Free Courses Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="py-12 bg-gray-50"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Free Coding Courses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kickstart your coding journey with our comprehensive, free online courses designed for aspiring developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard 
                  key={index}
                  title={course.title}
                  description={course.description}
                  logo={course.logo}
                  bgColor={course.bgColor}
                  textColor={course.textColor}
                  level={course.level}
                  duration={course.duration}
                  rating={course.rating}
                  skills={course.skills}
                  courseRoute={course.courseRoute}
                />
              ))}
            </div>
          </div>
        </motion.section>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              Our courses are designed to provide practical, real-world skills 
              that employers are looking for in today's competitive tech landscape.
            </p>
            <Link 
              to="/courses" 
              className="
                inline-block 
                px-8 py-3 
                bg-blue-600 
                text-white 
                font-semibold 
                rounded-full 
                hover:bg-blue-700 
                transition-colors 
                shadow-md 
                hover:shadow-lg
                text-base sm:text-lg
              "
            >
              Explore All Courses
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
