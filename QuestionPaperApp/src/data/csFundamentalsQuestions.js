export default [
  {
    id: 'csf-1',
    topic: 'Data Structures',
    question: 'What is the time complexity of quicksort in the average case?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 'C',
    explanation: 'Quicksort has an average-case time complexity of O(n log n), making it an efficient sorting algorithm.'
  },
  {
    id: 'csf-2',
    topic: 'Algorithms',
    question: 'Which algorithm is used for finding the shortest path in a weighted graph?',
    options: ['Breadth-First Search', 'Depth-First Search', 'Dijkstra\'s Algorithm', 'Kruskal\'s Algorithm'],
    correctAnswer: 'C',
    explanation: 'Dijkstra\'s Algorithm is specifically designed to find the shortest path in a weighted graph with non-negative edge weights.'
  },
  {
    id: 'csf-3',
    topic: 'Operating Systems',
    question: 'What is a deadlock in operating systems?',
    options: ['A situation where two processes are waiting for each other to release resources', 'A method of process scheduling', 'A type of memory management technique', 'A process of memory allocation'],
    correctAnswer: 'A',
    explanation: 'A deadlock occurs when two or more processes are unable to proceed because each is waiting for the other to release resources.'
  },
  {
    id: 'csf-4',
    topic: 'Computer Networks',
    question: 'What does TCP stand for?',
    options: ['Transmission Control Protocol', 'Transfer Control Protocol', 'Telecommunication Control Protocol', 'Transparent Control Protocol'],
    correctAnswer: 'A',
    explanation: 'TCP (Transmission Control Protocol) is a core communication protocol used for reliable, ordered, and error-checked delivery of data between applications.'
  },
  {
    id: 'csf-5',
    topic: 'Database Management',
    question: 'What is ACID in database transactions?',
    options: ['A method of data encryption', 'Atomicity, Consistency, Isolation, Durability', 'A type of database indexing', 'A database backup strategy'],
    correctAnswer: 'B',
    explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability - four key properties that guarantee database transactions are processed reliably.'
  },
  {
    id: 'csf-6',
    topic: 'Computer Architecture',
    question: 'What is the purpose of a cache in computer architecture?',
    options: ['To store permanent data', 'To speed up data access by storing frequently used data', 'To manage network connections', 'To encrypt data'],
    correctAnswer: 'B',
    explanation: 'A cache stores frequently accessed data closer to the processor, reducing the time needed to retrieve data from main memory.'
  },
  {
    id: 'csf-7',
    topic: 'Programming Concepts',
    question: 'What is polymorphism in object-oriented programming?',
    options: ['A method of data hiding', 'The ability of objects to take on multiple forms', 'A type of inheritance', 'A method of data encryption'],
    correctAnswer: 'B',
    explanation: 'Polymorphism allows objects of different types to be treated uniformly, enabling more flexible and reusable code.'
  },
  {
    id: 'csf-8',
    topic: 'Software Engineering',
    question: 'What is Agile methodology primarily focused on?',
    options: ['Strict adherence to initial project plans', 'Incremental and iterative development', 'Maximizing documentation', 'Minimizing communication'],
    correctAnswer: 'B',
    explanation: 'Agile methodology emphasizes incremental development, flexible planning, and continuous improvement throughout the software development lifecycle.'
  },
  {
    id: 'csf-9',
    topic: 'Cybersecurity',
    question: 'What is a firewall\'s primary function?',
    options: ['To speed up internet connection', 'To monitor and control network traffic', 'To compress data', 'To encrypt all data'],
    correctAnswer: 'B',
    explanation: 'A firewall monitors, filters, and controls network traffic based on predetermined security rules to protect against unauthorized access.'
  },
  {
    id: 'csf-10',
    topic: 'Cloud Computing',
    question: 'What is a key characteristic of cloud computing?',
    options: ['Limited scalability', 'On-demand resource allocation', 'Fixed hardware requirements', 'Manual resource management'],
    correctAnswer: 'B',
    explanation: 'Cloud computing allows for on-demand and flexible allocation of computing resources, enabling quick scaling and efficient resource utilization.'
  },
  {
    id: 'csf-11',
    topic: 'Operating Systems',
    question: 'Which scheduling algorithm provides the minimum average waiting time for a given set of processes?',
    options: ['First-Come First-Served', 'Shortest Job First', 'Round Robin', 'Priority Scheduling'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Shortest Job First (SJF) minimizes average waiting time by selecting the process with the smallest execution time.'
  },
  {
    id: 'csf-12',
    topic: 'Computer Networks',
    question: 'What is the primary function of the Transport Layer in the OSI model?',
    options: ['Routing', 'End-to-end communication', 'Physical transmission', 'Network addressing'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'The Transport Layer ensures end-to-end communication, providing reliable data transfer between applications.'
  },
  {
    id: 'csf-13',
    topic: 'Database Management',
    question: 'What is a composite key in a relational database?',
    options: ['A key made of multiple columns', 'A primary key', 'A foreign key', 'A unique identifier'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A composite key is a key that consists of two or more columns to uniquely identify a record.'
  },
  {
    id: 'csf-14',
    topic: 'Computer Architecture',
    question: 'What is pipelining in computer architecture?',
    options: ['Memory management technique', 'Instruction-level parallelism', 'Network routing', 'Data encryption'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Pipelining is a technique where multiple instructions are overlapped during execution to improve processor performance.'
  },
  {
    id: 'csf-15',
    topic: 'Algorithms',
    question: 'What is the time complexity of Merge Sort?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Merge Sort has a consistent time complexity of O(n log n) for all cases.'
  },
  {
    id: 'csf-16',
    topic: 'Computer Networks',
    question: 'What protocol does traceroute use to map network paths?',
    options: ['TCP', 'UDP', 'ICMP', 'HTTP'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Traceroute uses ICMP (Internet Control Message Protocol) to trace the route packets take to a destination.'
  },
  {
    id: 'csf-17',
    topic: 'Operating Systems',
    question: 'What is a semaphore in concurrent programming?',
    options: ['A type of variable', 'A synchronization primitive', 'A memory allocation technique', 'A scheduling algorithm'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'A semaphore is a synchronization primitive used to control access to a shared resource in concurrent systems.'
  },
  {
    id: 'csf-18',
    topic: 'Computer Architecture',
    question: 'What does RISC stand for?',
    options: ['Reduced Instruction Set Computing', 'Rapid Instruction Set Computation', 'Reliable Instruction Set Control', 'Robust Instruction Set Complexity'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'RISC (Reduced Instruction Set Computing) is a CPU design that uses a small, simplified set of instructions.'
  },
  {
    id: 'csf-19',
    topic: 'Database Management',
    question: 'What is normalization in database design?',
    options: ['Data compression', 'Organizing data to reduce redundancy', 'Encryption', 'Data backup'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Normalization is the process of organizing data to minimize redundancy and dependency in a database.'
  },
  {
    id: 'csf-20',
    topic: 'Programming Concepts',
    question: 'What is polymorphism in object-oriented programming?',
    options: ['Creating multiple objects', 'Method overloading', 'Ability of objects to take multiple forms', 'Data hiding'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Polymorphism allows objects to be treated differently based on their input or invocation context.'
  },
  {
    id: 'csf-21',
    topic: 'Computer Networks',
    question: 'What is the purpose of a subnet mask?',
    options: ['Firewall protection', 'Network address division', 'Data encryption', 'Routing optimization'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A subnet mask divides an IP network into smaller network segments.'
  },
  {
    id: 'csf-22',
    topic: 'Operating Systems',
    question: 'What is a deadlock in operating systems?',
    options: ['A system crash', 'A state where processes wait indefinitely', 'Memory leak', 'CPU overload'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'A deadlock occurs when two or more processes cannot proceed because each is waiting for the other to release resources.'
  },
  {
    id: 'csf-23',
    topic: 'Algorithms',
    question: 'What is the best-case time complexity of Quick Sort?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Quick Sort has an average and best-case time complexity of O(n log n).'
  },
  {
    id: 'csf-24',
    topic: 'Computer Architecture',
    question: 'What is cache coherence?',
    options: ['Memory synchronization', 'Cache size optimization', 'Network caching', 'Data compression'],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Cache coherence ensures data consistency when multiple caches store and modify the same data.'
  },
  {
    id: 'csf-25',
    topic: 'Database Management',
    question: 'What is a foreign key?',
    options: ['Primary key in another table', 'Encryption key', 'Unique identifier', 'Temporary key'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A foreign key is a column that references the primary key of another table, establishing a link between tables.'
  },
  {
    id: 'csf-26',
    topic: 'Computer Networks',
    question: 'What is the purpose of a router?',
    options: ['To connect multiple networks', 'To manage network traffic', 'To encrypt data', 'To compress data'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A router connects multiple networks and routes packets between them.'
  },
  {
    id: 'csf-27',
    topic: 'Operating Systems',
    question: 'What is a process in operating systems?',
    options: ['A program in execution', 'A thread of execution', 'A memory allocation technique', 'A scheduling algorithm'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A process is a program in execution, with its own memory space and resources.'
  },
  {
    id: 'csf-28',
    topic: 'Algorithms',
    question: 'What is the time complexity of Binary Search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Binary Search has a time complexity of O(log n) due to its divide-and-conquer approach.'
  },
  {
    id: 'csf-29',
    topic: 'Computer Architecture',
    question: 'What is a bus in computer architecture?',
    options: ['A communication pathway', 'A memory allocation technique', 'A CPU design', 'A network protocol'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A bus is a communication pathway that allows different components to exchange data.'
  },
  {
    id: 'csf-30',
    topic: 'Database Management',
    question: 'What is a database index?',
    options: ['A data structure to speed up queries', 'A data encryption technique', 'A data compression algorithm', 'A data backup strategy'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A database index is a data structure that improves query performance by allowing faster data retrieval.'
  },
  {
    id: 'csf-31',
    topic: 'Computer Networks',
    question: 'What is the purpose of a firewall?',
    options: ['To speed up internet connection', 'To monitor and control network traffic', 'To compress data', 'To encrypt all data'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A firewall monitors, filters, and controls network traffic based on predetermined security rules to protect against unauthorized access.'
  },
  {
    id: 'csf-32',
    topic: 'Operating Systems',
    question: 'What is a thread in operating systems?',
    options: ['A process in execution', 'A thread of execution', 'A memory allocation technique', 'A scheduling algorithm'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A thread is a thread of execution within a process, sharing the same memory space.'
  },
  {
    id: 'csf-33',
    topic: 'Algorithms',
    question: 'What is the time complexity of Depth-First Search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'Depth-First Search has a time complexity of O(n) in the worst case, where n is the number of vertices.'
  },
  {
    id: 'csf-34',
    topic: 'Computer Architecture',
    question: 'What is a CPU cache?',
    options: ['A small, fast memory', 'A large, slow memory', 'A memory allocation technique', 'A CPU design'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A CPU cache is a small, fast memory that stores frequently accessed data.'
  },
  {
    id: 'csf-35',
    topic: 'Database Management',
    question: 'What is a database view?',
    options: ['A virtual table based on a query', 'A physical table', 'A data encryption technique', 'A data compression algorithm'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A database view is a virtual table based on a query, providing a simplified interface to complex data.'
  },
  {
    id: 'csf-36',
    topic: 'Computer Networks',
    question: 'What is the purpose of a network protocol?',
    options: ['To manage network traffic', 'To encrypt data', 'To compress data', 'To define communication rules'],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation: 'A network protocol defines the rules and conventions for communication between devices on a network.'
  },
  {
    id: 'csf-37',
    topic: 'Operating Systems',
    question: 'What is a semaphore in concurrent programming?',
    options: ['A type of variable', 'A synchronization primitive', 'A memory allocation technique', 'A scheduling algorithm'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'A semaphore is a synchronization primitive used to control access to a shared resource in concurrent systems.'
  },
  {
    id: 'csf-38',
    topic: 'Algorithms',
    question: 'What is the time complexity of Breadth-First Search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'Breadth-First Search has a time complexity of O(n) in the worst case, where n is the number of vertices.'
  },
  {
    id: 'csf-39',
    topic: 'Computer Architecture',
    question: 'What is a register in computer architecture?',
    options: ['A small, fast memory', 'A large, slow memory', 'A memory allocation technique', 'A CPU design'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A register is a small, fast memory that stores data temporarily while it is being processed.'
  },
  {
    id: 'csf-40',
    topic: 'Database Management',
    question: 'What is a database trigger?',
    options: ['A stored procedure', 'A database view', 'A data encryption technique', 'A set of actions triggered by an event'],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation: 'A database trigger is a set of actions triggered by an event, such as inserting, updating, or deleting data.'
  },
  {
    id: 'csf-41',
    topic: 'Computer Networks',
    question: 'What is the purpose of a network bridge?',
    options: ['To connect multiple networks', 'To manage network traffic', 'To encrypt data', 'To compress data'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A network bridge connects multiple networks and filters traffic between them.'
  },
  {
    id: 'csf-42',
    topic: 'Operating Systems',
    question: 'What is a process state in operating systems?',
    options: ['Running', 'Waiting', 'Blocked', 'All of the above'],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation: 'A process state can be running, waiting, or blocked, depending on its current activity.'
  },
  {
    id: 'csf-43',
    topic: 'Algorithms',
    question: 'What is the time complexity of Dijkstra\'s Algorithm?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Dijkstra\'s Algorithm has a time complexity of O(n log n) in the worst case, where n is the number of vertices.'
  },
  {
    id: 'csf-44',
    topic: 'Computer Architecture',
    question: 'What is a CPU core?',
    options: ['A small, fast memory', 'A large, slow memory', 'A memory allocation technique', 'A processing unit'],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation: 'A CPU core is a processing unit that executes instructions and performs calculations.'
  },
  {
    id: 'csf-45',
    topic: 'Database Management',
    question: 'What is a database schema?',
    options: ['A database design', 'A database view', 'A data encryption technique', 'A data compression algorithm'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A database schema is a database design that defines the structure and organization of data.'
  },
  {
    id: 'csf-46',
    topic: 'Computer Networks',
    question: 'What is the purpose of a network router?',
    options: ['To connect multiple networks', 'To manage network traffic', 'To encrypt data', 'To compress data'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A network router connects multiple networks and routes packets between them.'
  },
  {
    id: 'csf-47',
    topic: 'Operating Systems',
    question: 'What is a thread pool in operating systems?',
    options: ['A group of threads', 'A memory allocation technique', 'A scheduling algorithm', 'A synchronization primitive'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A thread pool is a group of threads that can be used to perform multiple tasks concurrently.'
  },
  {
    id: 'csf-48',
    topic: 'Algorithms',
    question: 'What is the purpose of a hash table?',
    options: ['Sorting data', 'Storing key-value pairs', 'Compressing data', 'Encrypting data'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A hash table provides efficient key-value pair storage and retrieval using a hash function.'
  },
  {
    id: 'csf-49',
    topic: 'Computer Networks',
    question: 'What is the OSI model?',
    options: ['A network design', 'A communication protocol', 'A network reference model', 'A routing algorithm'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'The OSI (Open Systems Interconnection) model is a conceptual framework that describes how data communication occurs between devices.'
  },
  {
    id: 'csf-50',
    topic: 'Cybersecurity',
    question: 'What is a buffer overflow attack?',
    options: ['A network intrusion', 'A memory corruption technique', 'A software update', 'A data encryption method'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'A buffer overflow occurs when a program writes more data to a buffer than it can hold, potentially allowing malicious code execution.'
  },
  {
    id: 'csf-51',
    topic: 'Computer Architecture',
    question: 'What is the primary difference between CISC and RISC architectures?',
    options: [
      'Number of registers', 
      'Complexity of instruction set', 
      'Clock speed', 
      'Memory management'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'CISC (Complex Instruction Set Computing) uses complex instructions, while RISC (Reduced Instruction Set Computing) uses simpler, more focused instructions.'
  },
  {
    id: 'csf-52',
    topic: 'Operating Systems',
    question: 'What is virtual memory?',
    options: [
      'Physical RAM', 
      'CPU cache', 
      'Disk space used as RAM extension', 
      'Network storage'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Virtual memory is a memory management technique that uses disk space to extend the available RAM, allowing more processes to run simultaneously.'
  },
  {
    id: 'csf-53',
    topic: 'Computer Networks',
    question: 'What is the difference between TCP and UDP?',
    options: [
      'Speed of transmission', 
      'Connection type and reliability', 
      'Network layer', 
      'Packet size'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'TCP provides reliable, ordered, and error-checked delivery, while UDP offers faster, connectionless transmission without guaranteed delivery.'
  },
  {
    id: 'csf-54',
    topic: 'Database Management',
    question: 'What is a stored procedure?',
    options: [
      'A database backup method', 
      'A pre-compiled SQL statement', 
      'A data encryption technique', 
      'A network protocol'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A stored procedure is a prepared SQL code that can be saved and reused, improving performance and reducing network traffic.'
  },
  {
    id: 'csf-55',
    topic: 'Algorithms',
    question: 'What is the time complexity of the Bellman-Ford algorithm?',
    options: [
      'O(n)', 
      'O(log n)', 
      'O(n log n)', 
      'O(n²)'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'The Bellman-Ford algorithm has a time complexity of O(n²), where n is the number of vertices in the graph.'
  },
  {
    id: 'csf-56',
    topic: 'Computer Architecture',
    question: 'What is branch prediction in CPU design?',
    options: [
      'Memory allocation technique', 
      'Predicting the outcome of conditional branches', 
      'Network routing', 
      'Data compression'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Branch prediction is a technique used to improve processor performance by predicting the likely outcome of conditional branches before they are resolved.'
  },
  {
    id: 'csf-57',
    topic: 'Operating Systems',
    question: 'What is a race condition?',
    options: [
      'A network connectivity issue', 
      'A situation where multiple threads access shared data', 
      'A CPU scheduling problem', 
      'A memory leak'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'A race condition occurs when multiple threads access shared data concurrently, potentially leading to unpredictable results.'
  },
  {
    id: 'csf-58',
    topic: 'Computer Networks',
    question: 'What is the purpose of NAT (Network Address Translation)?',
    options: [
      'To encrypt network traffic', 
      'To compress data', 
      'To map private IP addresses to public IP addresses', 
      'To route network packets'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'NAT allows multiple devices on a local network to share a single public IP address, improving network security and address conservation.'
  },
  {
    id: 'csf-59',
    topic: 'Database Management',
    question: 'What is a database transaction?',
    options: [
      'A data backup process', 
      'A set of database operations treated as a single unit', 
      'A data encryption method', 
      'A network protocol'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A database transaction is a sequence of database operations that are treated as a single, atomic unit of work.'
  },
  {
    id: 'csf-60',
    topic: 'Cybersecurity',
    question: 'What is a SQL injection attack?',
    options: [
      'A network intrusion', 
      'A method of inserting malicious SQL code', 
      'A software update', 
      'A data encryption method'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'SQL injection is a code injection technique that exploits security vulnerabilities by inserting malicious SQL statements into application queries.'
  }
];
