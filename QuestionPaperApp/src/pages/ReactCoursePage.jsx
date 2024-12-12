import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBook, FaVideo, FaCheckCircle, FaReact } from 'react-icons/fa';
import ReactLogo from '../assets/images/react-logo.svg';

const ReactCoursePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const courseModules = [
    {
      title: 'React Fundamentals',
      description: 'Learn core React concepts, components, and state management.',
      icon: <FaCode />,
      completed: true
    },
    {
      title: 'Advanced React',
      description: 'Master hooks, context API, and advanced state management techniques.',
      icon: <FaBook />,
      completed: false
    },
    {
      title: 'React Ecosystem',
      description: 'Explore routing, performance optimization, and modern React practices.',
      icon: <FaVideo />,
      completed: false
    }
  ];

  const reactTopics = [
    {
      id: 1,
      title: 'React Fundamentals',
      icon: <FaReact />,
      topics: [
        {
          subtitle: 'Components and Props',
          description: `React components are the building blocks of React applications:

1. Component Types:
- Functional Components (Modern)
- Class Components (Legacy)
- Pure Components
- Higher-Order Components (HOC)

2. Props:
- Read-only data passed to components
- Props destructuring
- Default props
- PropTypes for type checking

3. Component Composition:
- Parent-child relationships
- Component reusability
- Props.children
- Component organization`,
          code: `// Functional Component
import React from 'react';

// Basic Component with Props
function Welcome({ name, role = "User" }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Role: {role}</p>
    </div>
  );
}

// Component with PropTypes
import PropTypes from 'prop-types';

function UserCard({ user, onEdit }) {
  const { name, email, age } = user;
  
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <button onClick={() => onEdit(user)}>
        Edit User
      </button>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number
  }).isRequired,
  onEdit: PropTypes.func.isRequired
};

// Higher-Order Component
function withLogger(WrappedComponent) {
  return function WithLoggerComponent(props) {
    console.log(\`Component rendered with props:, \${props}\`);
    return <WrappedComponent {...props} />;
  }
}

// Usage
const LoggedUserCard = withLogger(UserCard);`
        },
        {
          subtitle: 'State and Lifecycle',
          description: `React state management and component lifecycle:

1. State:
- useState hook for local state
- State updates are asynchronous
- State immutability
- Lifting state up

2. Lifecycle Methods:
- Mount: Component creation
- Update: Props/state changes
- Unmount: Component removal

3. Effect Hook:
- Side effects management
- Dependency array
- Cleanup functions
- API calls and subscriptions`,
          code: `// State Management with Hooks
import React, { useState, useEffect } from 'react';

function Counter() {
  // State Declaration
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Effect Hook with Cleanup
  useEffect(() => {
    document.title = \`Count: \${count}\`;
    
    // Timer Example
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    // Cleanup Function
    return () => {
      clearInterval(timer);
    };
  }, [count, isActive]);

  // Event Handlers
  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

  const handleReset = () => {
    setCount(0);
    setIsActive(false);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleToggle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

// Class Component Lifecycle Example
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // API calls, subscriptions
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    // Cleanup
    this.unsubscribe();
  }

  render() {
    return <div>{/* Component JSX */}</div>;
  }
}`
        },
        {
          subtitle: 'Hooks in Depth',
          description: `React Hooks provide functional components with state and lifecycle features:

1. Basic Hooks:
- useState: Local state management
- useEffect: Side effects handling
- useContext: Context consumption

2. Additional Hooks:
- useReducer: Complex state logic
- useCallback: Memoized callbacks
- useMemo: Memoized values
- useRef: Mutable references

3. Custom Hooks:
- Reusable logic
- Composition
- State sharing
- Side effect management`,
          code: `// Basic Hooks Usage
import React, { 
  useState, 
  useEffect, 
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef 
} from 'react';

// useState with Object
function UserForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      {/* Other inputs */}
    </form>
  );
}

// useReducer for Complex State
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

// Custom Hook Example
function useLocalStorage(key, initialValue) {
  // State to store value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Function to update storage
  const setValue = value => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Usage of Custom Hook
function App() {
  const [name, setName] = useLocalStorage('name', 'Bob');
  return (
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}`
        },
        {
          subtitle: 'Forms and Events',
          description: `Handling forms and events in React:

1. Form Handling:
- Controlled components
- Uncontrolled components
- Form validation
- Form submission

2. Event Handling:
- Synthetic events
- Event binding
- Event delegation
- Event prevention

3. Best Practices:
- Form state management
- Input validation
- Error handling
- Accessibility`,
          code: `// Controlled Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // API call or form submission logic
        await submitForm(formData);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        setErrors({ submit: 'Failed to submit form' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <span id="name-error" className="error">
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span id="email-error" className="error">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className="error">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit">Submit</button>
      
      {errors.submit && (
        <div className="error">{errors.submit}</div>
      )}
    </form>
  );
}`
        }
      ]
    },
    {
      id: 2,
      title: 'Advanced React',
      icon: <FaReact />,
      topics: [
        {
          subtitle: 'Performance Optimization',
          description: `Optimizing React application performance:

1. Rendering Optimization:
- React.memo for component memoization
- useMemo for value memoization
- useCallback for function memoization
- Virtual DOM optimization

2. Code Splitting:
- React.lazy for component loading
- Suspense for loading states
- Route-based splitting
- Component-based splitting

3. Performance Monitoring:
- React DevTools
- Performance profiling
- Render tracking
- Bundle analysis`,
          code: `// Component Memoization
import React, { memo, useMemo, useCallback } from 'react';

// Memoized Component
const ExpensiveComponent = memo(function ExpensiveComponent({ data, onItemClick }) {
  console.log('ExpensiveComponent render');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id} onClick={() => onItemClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
});

// Parent Component with Optimizations
function ParentComponent() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  // Memoized value
  const sortedItems = useMemo(() => {
    console.log('Sorting items');
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  // Memoized callback
  const handleItemClick = useCallback((item) => {
    console.log('Item clicked:', item);
  }, []); // Empty deps array if callback doesn't depend on props/state

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      
      <ExpensiveComponent
        data={sortedItems}
        onItemClick={handleItemClick}
      />
    </div>
  );
}

// Code Splitting Example
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

// Route-based Code Splitting
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Contact = React.lazy(() => import('./routes/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}`
        }
      ]
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Comprehensive React Masterclass covering modern web development techniques. 
              Learn to build scalable, performant web applications using React's latest features 
              and best practices.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {courseModules.map((module, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`
                    bg-gray-50 
                    p-6 
                    rounded-xl 
                    border-l-4 
                    ${module.completed ? 'border-green-500' : 'border-blue-500'}
                  `}
                >
                  <div className="text-4xl mb-4 text-blue-600">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {module.description}
                  </p>
                  {module.completed && (
                    <div className="flex items-center text-green-600">
                      <FaCheckCircle className="mr-2" />
                      <span>Completed</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'curriculum':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Curriculum</h2>
            <div className="space-y-6">
              {reactTopics.map(topic => (
                <div key={topic.id} className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">{topic.title}</h3>
                  {topic.topics.map(subtopic => (
                    <div key={subtopic.subtitle} className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">{subtopic.subtitle}</h4>
                      <p className="text-gray-600 mb-4">{subtopic.description}</p>
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        <code className="text-gray-600">{subtopic.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'resources':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Learning Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Recommended Books</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React Design Patterns</li>
                  <li>• Pro React</li>
                  <li>• Fullstack React</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Online Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React Official Docs</li>
                  <li>• React Hooks Guide</li>
                  <li>• Frontend Masters</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <img 
            src={ReactLogo} 
            alt="React Logo" 
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl shadow-md object-contain"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700">
              React Masterclass
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
              Advanced React development with modern web technologies
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-6 space-x-2 sm:space-x-4">
          {['overview', 'curriculum', 'resources'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                px-3 py-2 sm:px-6 sm:py-3 
                rounded-full 
                capitalize 
                font-semibold 
                text-xs sm:text-base
                transition-all 
                ${activeSection === section 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="w-full">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default ReactCoursePage;
