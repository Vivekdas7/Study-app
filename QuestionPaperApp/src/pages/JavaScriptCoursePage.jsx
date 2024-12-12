import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBook, FaVideo, FaCheckCircle, FaCheck } from 'react-icons/fa';
import JavascriptLogo from '../assets/images/javascript-logo.svg';

const JavaScriptCoursePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const courseModules = [
    {
      title: 'JavaScript Fundamentals',
      description: 'Learn core JavaScript syntax, variables, data types, and basic operations.',
      icon: <FaCode />,
      completed: true
    },
    {
      title: 'DOM Manipulation',
      description: 'Master interacting with HTML and creating dynamic web pages.',
      icon: <FaBook />,
      completed: false
    },
    {
      title: 'Async Programming',
      description: 'Understand Promises, async/await, and handling asynchronous operations.',
      icon: <FaVideo />,
      completed: false
    }
  ];

  const javaScriptTopics = [
    {
      id: 1,
      title: 'JavaScript Basics',
      icon: <FaCode />,
      topics: [
        {
          subtitle: 'Variables and Data Types',
          description: `JavaScript has several data types and variable declarations:

1. Variable Declarations:
- var: Function-scoped or globally-scoped
- let: Block-scoped, can be reassigned
- const: Block-scoped, cannot be reassigned

2. Primitive Data Types:
- number: Both integers and floating-point
- string: Text data
- boolean: true/false values
- null: Intentional absence of value
- undefined: Unassigned value
- symbol: Unique identifiers

3. Complex Data Types:
- object: Collections of key-value pairs
- array: Ordered lists of values
- function: Reusable code blocks`,
          code: `// Variable Declarations
let age = 25;              // Number
const name = "John";       // String
var isStudent = true;      // Boolean

// Numbers
let integer = 42;
let decimal = 3.14;
let negative = -17;

// Strings
let singleQuotes = 'Hello';
let doubleQuotes = "World";
let template = \`Hello \${name}\`; // Template literal

// Boolean, Null, Undefined
let isActive = true;
let noValue = null;
let notAssigned;          // undefined

// Objects and Arrays
const person = {
  name: "Alice",
  age: 30
};

const colors = ["red", "green", "blue"];

// Symbol
const uniqueKey = Symbol("description");`
        },
        {
          subtitle: 'Control Flow',
          description: `JavaScript offers various control flow structures:

1. Conditional Statements:
- if/else: Basic conditional execution
- switch: Multiple condition handling
- ternary operator: Compact if/else

2. Loops:
- for: Traditional counting loop
- while: Condition-based loop
- do...while: Executes at least once
- for...of: Iterates over values
- for...in: Iterates over properties

3. Error Handling:
- try/catch: Handle potential errors
- throw: Custom error creation`,
          code: `// If-Else Statement
let age = 18;
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

// Switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    default:
        console.log("Regular day");
}

// Ternary Operator
let status = age >= 18 ? "Adult" : "Minor";

// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// While Loop
let count = 0;
while (count < 3) {
    console.log(count);  // 0, 1, 2
    count++;
}

// For...of Loop (Arrays)
const numbers = [1, 2, 3];
for (const num of numbers) {
    console.log(num);  // 1, 2, 3
}

// For...in Loop (Objects)
const person = { name: "John", age: 30 };
for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Try-Catch
try {
    // Potential error-causing code
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
}`
        },
        {
          subtitle: 'Functions',
          description: `JavaScript supports various function types:

1. Function Declarations:
- Named functions
- Hoisted to top of scope
- Traditional function syntax

2. Function Expressions:
- Anonymous functions
- Arrow functions
- Not hoisted

3. Advanced Concepts:
- Closures: Access outer scope
- Callbacks: Functions as arguments
- Higher-order functions
- Default parameters
- Rest parameters
- Generator functions`,
          code: `// Function Declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Default Parameters
function welcome(name = "Guest") {
    return \`Welcome, \${name}!\`;
}

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Closure Example
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

// Callback Function
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

// Generator Function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Higher-Order Function
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5));  // 10`
        },
        {
          subtitle: 'Arrays and Objects',
          description: `JavaScript arrays and objects are fundamental:

1. Arrays:
- Ordered collections
- Dynamic sizing
- Multiple data types
- Rich built-in methods

2. Objects:
- Key-value pairs
- Property access methods
- Object methods
- Prototypal inheritance

3. Array Methods:
- map, filter, reduce
- forEach, find, some
- push, pop, shift, unshift
- slice, splice

4. Object Methods:
- Object.keys()
- Object.values()
- Object.entries()
- Object.freeze()`,
          code: `// Array Creation and Methods
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");           // Add to end
fruits.unshift("lemon");        // Add to start
fruits.pop();                   // Remove from end
fruits.shift();                // Remove from start

// Array Iteration Methods
const numbers = [1, 2, 3, 4, 5];

// map: Transform elements
const doubled = numbers.map(num => num * 2);

// filter: Select elements
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce: Accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);

// forEach: Iterate elements
numbers.forEach(num => console.log(num));

// Object Creation and Methods
const person = {
    name: "John",
    age: 30,
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
};

// Object Property Access
console.log(person.name);       // Dot notation
console.log(person["age"]);     // Bracket notation

// Object Methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

// Object Spread and Destructuring
const clone = { ...person };
const { name, age } = person;

// Nested Objects
const company = {
    name: "Tech Corp",
    employees: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ],
    location: {
        city: "San Francisco",
        country: "USA"
    }
};`
        }
      ]
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      icon: <FaCode />,
      topics: [
        {
          subtitle: 'Asynchronous JavaScript',
          description: `Asynchronous programming in JavaScript:

1. Promises:
- Handle async operations
- Chainable .then() methods
- Error handling with .catch()
- Promise.all() for parallel execution

2. Async/Await:
- Cleaner async syntax
- Built on promises
- Try/catch error handling
- Sequential execution

3. Event Loop:
- Call stack
- Callback queue
- Microtask queue
- Event handling`,
          code: `// Promises
const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = { id: 1, name: "John" };
        resolve(user);
        // or reject(new Error("User not found"));
    }, 1000);
});

fetchUser
    .then(user => console.log(user))
    .catch(error => console.error(error));

// Promise.all
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));

Promise.all([promise1, promise2])
    .then(values => console.log(values));  // [3, 2]

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Sequential vs Parallel Execution
async function sequential() {
    const result1 = await fetchData1();
    const result2 = await fetchData2();
    return [result1, result2];
}

async function parallel() {
    const [result1, result2] = await Promise.all([
        fetchData1(),
        fetchData2()
    ]);
    return [result1, result2];
}`
        }
      ]
    }
  ];

  const renderOverview = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 gap-8"
    >
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-4">
          Course Overview
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Master modern JavaScript from beginner to advanced level. Learn core concepts, 
          advanced techniques, and build real-world applications with cutting-edge web technologies.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-4">
          What You'll Learn
        </h3>
        <ul className="space-y-2 text-base sm:text-base text-gray-700">
          {[
            'ES6+ Advanced Features',
            'Asynchronous Programming',
            'DOM Manipulation',
            'Functional Programming',
            'Modern JavaScript Frameworks'
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <FaCheck className="text-yellow-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const renderCurriculum = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Curriculum</h2>
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Module 1: JavaScript Basics</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Variables and Data Types</li>
            <li>Operators and Expressions</li>
            <li>Control Structures</li>
            <li>Functions and Scope</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Module 2: Advanced Concepts</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Object-Oriented Programming</li>
            <li>Prototypes and Inheritance</li>
            <li>ES6+ Features</li>
            <li>Functional Programming</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  const renderResources = () => (
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
            <li>• Eloquent JavaScript</li>
            <li>• You Don't Know JS</li>
            <li>• JavaScript: The Good Parts</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Online Resources</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• MDN Web Docs</li>
            <li>• JavaScript.info</li>
            <li>• FreeCodeCamp</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return renderOverview();
      case 'curriculum':
        return renderCurriculum();
      case 'resources':
        return renderResources();
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
            src={JavascriptLogo} 
            alt="JavaScript Logo" 
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl shadow-md object-contain"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-700">
              Learn JavaScript
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
              Master modern web development with comprehensive JavaScript training
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
                  ? 'bg-yellow-500 text-white' 
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

export default JavaScriptCoursePage;
