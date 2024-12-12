import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava, FaCode, FaDatabase, FaNetworkWired, FaShieldAlt, FaChevronDown, FaChevronUp, FaCopy } from 'react-icons/fa';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';

// Register the Java language
SyntaxHighlighter.registerLanguage('java', java);

const javaTopics = [
  {
    id: 1,
    title: 'Basics of Java',
    icon: <FaJava />,
    topics: [
      {
        subtitle: 'Variables and Data Types',
        description:

          'In Java, variables are used to store data, and data types define the kind of data they can hold. Java supports primitive data types like byte, short, int, long, float, double, char, and boolean for simple values, and reference data types such as String, arrays, and objects for more complex data. Constants, declared using the `final` keyword, are immutable values that cannot be changed once assigned. Java also supports type casting, allowing conversion between different data types, either implicitly (automatic) or explicitly (manual). As a strongly-typed language, Java ensures that variables are always declared with a specific type, preventing mismatches and enforcing type safety.',
        code: `// Data Types in Java
  int number = 42;
  double decimal = 3.14;
  boolean isTrue = true;
  char letter = 'A';
  String text = "Hello, Java!";
  
  // Constants
  final double PI = 3.14159;
  
  // Type Casting
  int x = 10;
  double y = (double) x; // Explicit casting
  int z = (int) 3.14; // Explicit casting, truncates decimal`,
      },
      {
        subtitle: 'Control Flow',
        description: 'In Java, control flow structures like if statements, loops, and switch cases help manage the flow of execution. If statements make decisions based on conditions, loops (for, while) repeat code until a condition is met, and switch cases allow multiple potential outcomes based on a variable’s value, enhancing readability and logic handling. These constructs enable dynamic control over program behavior, making it more flexible and efficient.',
        code: `// If Statement
  int age = 18;
  if (age >= 18) {
      System.out.println("Adult");
  } else {
      System.out.println("Minor");
  }
  
  // For Loop
  for (int i = 0; i < 5; i++) {
      System.out.println(i);
  }
  
  // While Loop
  int count = 0;
  while (count < 3) {
      System.out.println(count);
      count++;
  }
  
  // Switch Case
  String day = "Monday";
  switch (day) {
      case "Monday":
          System.out.println("Start of week");
          break;
      case "Friday":
          System.out.println("Weekend coming!");
          break;
      default:
          System.out.println("Regular day");`,
      },
      {
        subtitle: 'All Types of Functions',
        description: 'In Java, functions (or methods) come in various types, including instance methods, static methods, constructor methods, overloaded methods, and varargs methods. Instance methods operate on object instances, static methods are called on the class itself, constructor methods initialize objects, overloaded methods allow multiple definitions with different parameters, and varargs methods accept a variable number of arguments, offering flexibility in function usage. These different types provide the tools to structure code efficiently and cater to a wide range of programming needs.',
        code: `// 1. Instance Method (non-static)
  public class MyClass {
      private int number;
  
      // Constructor Method
      public MyClass(int number) {
          this.number = number;
      }
  
      // Instance Method
      public void printNumber() {
          System.out.println("Number: " + number);
      }
  }
  
  // Creating an instance of MyClass
  MyClass obj = new MyClass(5);
  obj.printNumber();  // Output: Number: 5
  
  
  // 2. Static Method
  public class MathUtil {
      // Static Method
      public static int add(int a, int b) {
          return a + b;
      }
  }
  
  // Calling the static method
  int result = MathUtil.add(5, 3); // Output: 8
  
  
  // 3. Constructor Method
  public class Car {
      private String model;
  
      // Constructor Method
      public Car(String model) {
          this.model = model;
      }
  
      public void displayModel() {
          System.out.println("Car model: " + model);
      }
  }
  
  // Creating a Car object
  Car myCar = new Car("Toyota");
  myCar.displayModel();  // Output: Car model: Toyota
  
  
  // 4. Overloaded Method
  public class OverloadExample {
      // Method 1
      public void printInfo(String name) {
          System.out.println("Name: " + name);
      }
  
      // Method 2 (Overloaded)
      public void printInfo(int age) {
          System.out.println("Age: " + age);
      }
  }
  
  // Calling overloaded methods
  OverloadExample example = new OverloadExample();
  example.printInfo("John");  // Output: Name: John
  example.printInfo(25);      // Output: Age: 25
  
  
  // 5. Varargs Method (Variable Arguments)
  public class VarargsExample {
      public void printNumbers(int... numbers) {
          for (int number : numbers) {
              System.out.println(number);
          }
      }
  }
  
  // Calling the varargs method
  VarargsExample varargsExample = new VarargsExample();
  varargsExample.printNumbers(1, 2, 3, 4);  // Output: 1 2 3 4
  varargsExample.printNumbers(10, 20);       // Output: 10 20`,
      },
      {
        subtitle: 'All Types of Arrays',
        description: 'In Java, arrays come in various types, including single-dimensional arrays (1D), multi-dimensional arrays (2D, 3D), and jagged arrays (arrays of arrays). A 1D array stores a simple list of elements, while multi-dimensional arrays represent more complex structures like matrices or cubes. Jagged arrays allow for unequal array lengths in each row. Additionally, Java supports arrays of objects, enabling the creation of collections of instances. These array types provide flexibility in managing data of different structures and complexities.',
        code: `// 1. Single-dimensional Array (1D Array)
  int[] numbers = {1, 2, 3, 4, 5};
  
  // Accessing Array Elements
  System.out.println(numbers[0]);  // Output: 1
  
  // 2. Multi-dimensional Arrays (2D Array)
  int[][] matrix = {
      {1, 2, 3},
      {4, 5, 6},
      {7, 8, 9}
  };
  
  // Accessing 2D Array Elements
  System.out.println(matrix[1][2]);  // Output: 6
  
  // 3. 3D Array (3D Array)
  int[][][] cube = {
      {
          {1, 2},
          {3, 4}
      },
      {
          {5, 6},
          {7, 8}
      }
  };
  
  // Accessing 3D Array Elements
  System.out.println(cube[1][0][1]);  // Output: 6
  
  // 4. Jagged Array (Array of Arrays)
  int[][] jaggedArray = {
      {1, 2},
      {3, 4, 5},
      {6}
  };
  
  // Accessing Jagged Array Elements
  System.out.println(jaggedArray[1][2]);  // Output: 5
  
  // 5. Array of Objects
  class Car {
      String model;
      public Car(String model) {
          this.model = model;
      }
  }
  
  Car[] cars = new Car[2];
  cars[0] = new Car("Toyota");
  cars[1] = new Car("Honda");
  
  // Accessing Array of Objects
  System.out.println(cars[0].model);  // Output: Toyota
  System.out.println(cars[1].model);  // Output: Honda
  
  // 6. Array Initialization (Static Initialization)
  int[] staticArray = {1, 2, 3, 4, 5};
  
  // 7. Array Initialization (Dynamic Initialization)
  int[] dynamicArray = new int[5];
  dynamicArray[0] = 1;
  dynamicArray[1] = 2;
  dynamicArray[2] = 3;
  dynamicArray[3] = 4;
  dynamicArray[4] = 5;
  
  System.out.println(dynamicArray[3]);  // Output: 4`,
      },
    ],
  },



  {
    id: 3,
    title: 'Collections Framework',
    icon: <FaDatabase />,
    topics: [
      {
        subtitle: 'Lists',
        description: 'In Java, lists are part of the Collections framework, with ArrayList and LinkedList being two common types. ArrayList provides fast random access to elements and is backed by an array, making it efficient for indexing but slower for insertions and deletions. LinkedList, on the other hand, is a doubly linked list, offering faster insertions and deletions at both ends but slower access times. Both are dynamic in size, allowing you to easily add, remove, and modify elements, making them versatile choices for handling collections of data.',
        code: `// ArrayList Example
import java.util.ArrayList;
import java.util.List;

List<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Iterating
for (String fruit : fruits) {
    System.out.println(fruit);
}

// LinkedList Example
import java.util.LinkedList;

LinkedList<Integer> numbers = new LinkedList<>();
numbers.addFirst(1);
numbers.addLast(3);
numbers.add(1, 2); // Add at index`,
      },
      {
        subtitle: 'Maps',
        description: 'In Java, Map is an interface that stores key-value pairs, with HashMap and TreeMap being two commonly used implementations. HashMap offers fast lookups, insertions, and deletions with an unordered collection of keys, using a hash table for storage. TreeMap, on the other hand, stores keys in sorted order, providing slower performance compared to HashMap but ensuring that the keys are always ordered according to their natural ordering or a custom comparator. Both are essential for efficiently mapping unique keys to corresponding values.',
        code: `// HashMap Example
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> ages = new HashMap<>();
ages.put("John", 25);
ages.put("Jane", 30);

// Iterating over Map
for (Map.Entry<String, Integer> entry : ages.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// TreeMap Example (Sorted Map)
import java.util.TreeMap;

TreeMap<String, Double> grades = new TreeMap<>();
grades.put("John", 3.8);
grades.put("Alice", 4.0);`,
      },
    ],
  },
  {
    id: 4,
    title: 'Exception Handling',
    icon: <FaNetworkWired />,
    topics: [
      {
        subtitle: 'Try-Catch Blocks',
        description: 'Handling exceptions in Java',
        code: `// Basic Exception Handling
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
} finally {
    System.out.println("This always executes");
}

// Multiple Catch Blocks
try {
    String str = null;
    str.length();
} catch (NullPointerException e) {
    System.out.println("Null reference!");
} catch (Exception e) {
    System.out.println("Other exception");
}

// Custom Exception
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

// Using Custom Exception
void checkAge(int age) throws CustomException {
    if (age < 0) {
        throw new CustomException("Age cannot be negative");
    }
}`,
      },
    ],
  },
  {
    id: 5,
    title: 'Java 8+ Features',
    icon: <FaCode />,
    topics: [
      {
        subtitle: 'Lambda Expressions',
        description: 'Understanding functional programming with lambda expressions',
        code: `// Lambda Expression Examples
// Without Lambda
Runnable runnable = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running...");
    }
};

// With Lambda
Runnable lambdaRunnable = () -> System.out.println("Running...");

// Lambda with Parameters
interface MathOperation {
    int operate(int a, int b);
}

MathOperation addition = (a, b) -> a + b;
MathOperation multiplication = (a, b) -> a * b;

// Using Method Reference
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(System.out::println);`,
      },
      {
        subtitle: 'Stream API',
        description: 'Working with Java streams for data processing',
        code: `// Stream API Examples
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers and double them
List<Integer> doubledEvens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .collect(Collectors.toList());

// Find sum of numbers
int sum = numbers.stream()
    .reduce(0, Integer::sum);

// Group strings by length
List<String> words = Arrays.asList("apple", "banana", "cherry", "date");
Map<Integer, List<String>> groupedByLength = words.stream()
    .collect(Collectors.groupingBy(String::length));

// Parallel Stream for better performance
long count = numbers.parallelStream()
    .filter(n -> n > 5)
    .count();`,
      },
    ],
  },
  {
    id: 6,
    title: 'Multithreading',
    icon: <FaNetworkWired />,
    topics: [
      {
        subtitle: 'Thread Basics',
        description: 'Creating and managing threads in Java',
        code: `// Thread Creation
// Method 1: Extending Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

// Method 2: Implementing Runnable
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable is running");
    }
}

// Using Threads
MyThread thread1 = new MyThread();
thread1.start();

Thread thread2 = new Thread(new MyRunnable());
thread2.start();

// Using Lambda
Thread thread3 = new Thread(() -> {
    System.out.println("Lambda thread");
});
thread3.start();`,
      },
      {
        subtitle: 'Synchronization',
        description: 'Thread synchronization and concurrent access',
        code: `// Synchronization Example
class Counter {
    private int count = 0;
    
    // Synchronized Method
    public synchronized void increment() {
        count++;
    }
    
    // Synchronized Block
    public void incrementBlock() {
        synchronized(this) {
            count++;
        }
    }
}

// Lock Example
import java.util.concurrent.locks.ReentrantLock;

class BankAccount {
    private double balance;
    private final ReentrantLock lock = new ReentrantLock();
    
    public void withdraw(double amount) {
        lock.lock();
        try {
            if (balance >= amount) {
                balance -= amount;
            }
        } finally {
            lock.unlock();
        }
    }
}`,
      },
    ],
  },
  {
    id: 7,
    title: 'File I/O & NIO',
    icon: <FaDatabase />,
    topics: [
      {
        subtitle: 'File Operations',
        description: 'Working with files using Java I/O',
        code: `// File I/O Examples
import java.io.*;
import java.nio.file.*;

// Reading a File
try (BufferedReader reader = new BufferedReader(
    new InputStreamReader(new FileInputStream("file.txt")))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
}

// Writing to a File
try (BufferedWriter writer = new BufferedWriter(
    new FileWriter("output.txt"))) {
    writer.write("Hello, World!");
    writer.newLine();
}

// NIO.2 File Operations
Path path = Paths.get("example.txt");
Files.write(path, "Content".getBytes(), StandardOpenOption.CREATE);

// Reading all lines
List<String> lines = Files.readAllLines(path);

// File Copy
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);`,
      },
      {
        subtitle: 'Serialization',
        description: 'Object serialization and deserialization',
        code: `// Serialization Example
class Person implements Serializable {
    private String name;
    private int age;
    private transient String password; // Won't be serialized
    
    // Constructor and getters/setters
}

// Serializing Object
Person person = new Person("John", 30);
try (ObjectOutputStream out = new ObjectOutputStream(
    new FileOutputStream("person.ser"))) {
    out.writeObject(person);
}

// Deserializing Object
try (ObjectInputStream in = new ObjectInputStream(
    new FileInputStream("person.ser"))) {
    Person loadedPerson = (Person) in.readObject();
}`,
      },
    ],
  },
  {
    id: 8,
    title: 'Database & JDBC',
    icon: <FaDatabase />,
    topics: [
      {
        subtitle: 'JDBC Basics',
        description: 'Connecting and working with databases using JDBC',
        code: `// JDBC Example
import java.sql.*;

// Database Connection
String url = "jdbc:mysql://localhost:3306/mydb";
String username = "user";
String password = "pass";

try (Connection conn = DriverManager.getConnection(url, username, password)) {
    // Create Statement
    Statement stmt = conn.createStatement();
    
    // Execute Query
    ResultSet rs = stmt.executeQuery("SELECT * FROM users");
    while (rs.next()) {
        String name = rs.getString("name");
        int age = rs.getInt("age");
    }
    
    // Prepared Statement
    String sql = "INSERT INTO users (name, age) VALUES (?, ?)";
    PreparedStatement pstmt = conn.prepareStatement(sql);
    pstmt.setString(1, "John");
    pstmt.setInt(2, 25);
    pstmt.executeUpdate();
    
    // Transaction
    conn.setAutoCommit(false);
    try {
        // Multiple operations
        conn.commit();
    } catch (SQLException e) {
        conn.rollback();
    }
}`,
      },
      {
        subtitle: 'Connection Pooling',
        description: 'Managing database connections efficiently',
        code: `// Connection Pool Example using HikariCP
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
config.setUsername("user");
config.setPassword("pass");
config.setMaximumPoolSize(10);

HikariDataSource dataSource = new HikariDataSource(config);

// Using Connection Pool
try (Connection conn = dataSource.getConnection()) {
    // Database operations
}`,
      },
    ],
  },
  {
    id: 9,
    title: 'Design Patterns',
    icon: <FaCode />,
    topics: [
      {
        subtitle: 'Singleton Pattern',
        description: 'Creating singleton classes in Java',
        code: `// Singleton Pattern Examples

// Basic Singleton
public class BasicSingleton {
    private static BasicSingleton instance;
    private BasicSingleton() {}
    
    public static BasicSingleton getInstance() {
        if (instance == null) {
            instance = new BasicSingleton();
        }
        return instance;
    }
}

// Thread-Safe Singleton
public class ThreadSafeSingleton {
    private static volatile ThreadSafeSingleton instance;
    private ThreadSafeSingleton() {}
    
    public static ThreadSafeSingleton getInstance() {
        if (instance == null) {
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) {
                    instance = new ThreadSafeSingleton();
                }
            }
        }
        return instance;
    }
}

// Enum Singleton
public enum EnumSingleton {
    INSTANCE;
    
    public void doSomething() {
        // Singleton behavior
    }
}`,
      },
      {
        subtitle: 'Factory Pattern',
        description: 'Implementing factory design pattern',
        code: `// Factory Pattern Example
interface Animal {
    void makeSound();
}

class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

// Factory Class
class AnimalFactory {
    public Animal createAnimal(String type) {
        if (type.equalsIgnoreCase("dog")) {
            return new Dog();
        } else if (type.equalsIgnoreCase("cat")) {
            return new Cat();
        }
        throw new IllegalArgumentException("Invalid animal type");
    }
}

// Using Factory
AnimalFactory factory = new AnimalFactory();
Animal dog = factory.createAnimal("dog");
dog.makeSound();`,
      },
    ],
  },
  {
    id: 10,
    title: 'Testing & Debugging',
    icon: <FaCode />,
    topics: [
      {
        subtitle: 'JUnit Testing',
        description: 'Writing unit tests with JUnit',
        code: `// JUnit 5 Example
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    void testAddition() {
        assertEquals(4, calculator.add(2, 2));
    }
    
    @Test
    void testDivision() {
        assertThrows(ArithmeticException.class, 
            () -> calculator.divide(1, 0));
    }
    
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3})
    void testMultipleValues(int value) {
        assertTrue(calculator.isPositive(value));
    }
}`,
      },
      {
        subtitle: 'Debugging Techniques',
        description: 'Java debugging and logging practices',
        code: `// Logging Example
import java.util.logging.*;

class LoggingExample {
    private static final Logger LOGGER = 
        Logger.getLogger(LoggingExample.class.getName());
    
    public void doSomething() {
        try {
            // Some risky operation
            LOGGER.info("Operation successful");
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error occurred", e);
        }
    }
}

// Using try-with-resources for Auto-Closeable
public void processFile() {
    try (BufferedReader reader = new BufferedReader(
        new FileReader("file.txt"))) {
        // File processing
    } catch (IOException e) {
        e.printStackTrace();
    }
}`,
      },
    ],
  },
  {
    id: 11,
    title: 'Advanced Collections',
    icon: <FaDatabase />,
    topics: [
      {
        subtitle: 'Concurrent Collections',
        description: `Concurrent collections in Java are specifically designed for multi-threaded applications, providing thread-safe operations without explicit synchronization.

Key Concepts:
1. Thread Safety: All operations are atomic and visible to all threads
2. Lock Striping: Uses multiple locks to increase throughput
3. Fail-Safe Iterators: Allows concurrent modification during iteration

Common Classes:
1. ConcurrentHashMap:
   - Thread-safe alternative to HashMap
   - Supports atomic operations like putIfAbsent, replace
   - Uses lock striping for better performance
   
2. CopyOnWriteArrayList:
   - Thread-safe variant of ArrayList
   - Creates a fresh copy for every write operation
   - Ideal for read-heavy scenarios
   
3. BlockingQueue:
   - Supports operations that wait for the queue to become non-empty/non-full
   - Perfect for producer-consumer patterns
   
4. ConcurrentSkipListMap:
   - Thread-safe NavigableMap implementation
   - Maintains elements in sorted order
   - O(log n) time complexity for most operations`,
        code: `// Concurrent Collections Examples
import java.util.concurrent.*;

// 1. ConcurrentHashMap Example
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("count", 1);
// Atomic operation - increment only if key exists
map.computeIfPresent("count", (k, v) -> v + 1);
// Atomic operation - add if key doesn't exist
map.putIfAbsent("newKey", 1);
// Atomic update
map.replace("count", 1, 2);

// 2. CopyOnWriteArrayList Example
CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
list.add("item1");
// Safe iteration while modifying
for (String item : list) {
    // Other threads can modify list safely
    list.add("newItem"); // Won't affect current iteration
}

// 3. BlockingQueue Example
BlockingQueue<String> queue = new ArrayBlockingQueue<>(10);
// Producer
new Thread(() -> {
    try {
        queue.put("task"); // Blocks if queue is full
        queue.offer("task", 5, TimeUnit.SECONDS); // Waits up to 5 seconds
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();

// Consumer
new Thread(() -> {
    try {
        String item = queue.take(); // Blocks if queue is empty
        item = queue.poll(5, TimeUnit.SECONDS); // Waits up to 5 seconds
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();

// 4. ConcurrentSkipListMap Example
ConcurrentSkipListMap<String, Integer> sortedMap = 
    new ConcurrentSkipListMap<>();
sortedMap.put("Z", 1);
sortedMap.put("A", 2);
sortedMap.put("M", 3);
// Automatically sorted by keys
sortedMap.forEach((k, v) -> System.out.println(k + ": " + v));
// Output: A: 2, M: 3, Z: 1`,
      },
      {
        subtitle: 'Custom Collections',
        description: `Creating custom collections allows you to implement specialized data structures tailored to specific needs. Understanding this helps in building efficient, purpose-built collections.

Key Concepts:
1. Collection Interface:
   - Defines standard operations for groups of objects
   - Part of the Java Collections Framework hierarchy
   
2. Iterator Pattern:
   - Provides sequential access to elements
   - Separates traversal from collection implementation
   
3. Thread Safety:
   - Synchronized methods for concurrent access
   - Internal state management
   
4. Capacity Management:
   - Dynamic resizing strategies
   - Memory efficiency considerations

Implementation Considerations:
1. Choose appropriate internal data structure
2. Define clear concurrency guarantees
3. Implement proper exception handling
4. Consider memory usage and performance
5. Provide clear documentation`,
        code: `// Custom Circular Buffer Implementation
public class CircularBuffer<T> implements Iterable<T> {
    private final T[] buffer;
    private int readPos = 0;
    private int writePos = 0;
    private int size = 0;
    private final int capacity;
    
    @SuppressWarnings("unchecked")
    public CircularBuffer(int capacity) {
        // Initialize buffer with specified capacity
        this.capacity = capacity;
        buffer = (T[]) new Object[capacity];
    }
    
    /**
     * Adds an item to the buffer.
     * If buffer is full, overwrites oldest element.
     * Thread-safe operation.
     */
    public synchronized void add(T item) {
        buffer[writePos] = item;
        writePos = (writePos + 1) % capacity;
        if (size < capacity) {
            size++;
        } else {
            // Buffer is full, move read position
            readPos = (readPos + 1) % capacity;
        }
    }
    
    /**
     * Retrieves and removes the oldest item.
     * Returns null if buffer is empty.
     * Thread-safe operation.
     */
    public synchronized T get() {
        if (size == 0) return null;
        T item = buffer[readPos];
        buffer[readPos] = null; // Help GC
        readPos = (readPos + 1) % capacity;
        size--;
        return item;
    }
    
    /**
     * Returns current number of elements
     */
    public synchronized int size() {
        return size;
    }
    
    /**
     * Checks if buffer is empty
     */
    public synchronized boolean isEmpty() {
        return size == 0;
    }
    
    /**
     * Checks if buffer is full
     */
    public synchronized boolean isFull() {
        return size == capacity;
    }
    
    /**
     * Implements Iterable interface for foreach support
     */
    @Override
    public Iterator<T> iterator() {
        // Return a snapshot iterator
        return new Iterator<T>() {
            private final T[] snapshot = Arrays.copyOf(buffer, size);
            private int pos = 0;
            
            @Override
            public boolean hasNext() {
                return pos < snapshot.length;
            }
            
            @Override
            public T next() {
                if (!hasNext()) {
                    throw new NoSuchElementException();
                }
                return snapshot[pos++];
            }
        };
    }
    
    // Usage Example
    public static void main(String[] args) {
        CircularBuffer<String> buffer = new CircularBuffer<>(3);
        
        // Adding elements
        buffer.add("A");
        buffer.add("B");
        buffer.add("C");
        // Buffer is now full
        
        // Adding one more element
        buffer.add("D");
        // "A" is automatically removed
        
        // Iterating over elements
        for (String item : buffer) {
            System.out.println(item);
        }
        // Output: B, C, D
    }
}`,
      },
    ],
  },
  {
    id: 12,
    title: 'Memory Management',
    icon: <FaCode />,
    topics: [
      {
        subtitle: 'Garbage Collection',
        description: `Java's Garbage Collection (GC) is a critical feature that automatically manages memory. Understanding GC helps write more efficient and leak-free applications.

Key Concepts:

1. Memory Generations:
   - Young Generation (Eden + Survivor Spaces)
   - Old Generation
   - Metaspace (Class metadata)

2. Reference Types:
   - Strong References: Default, prevents GC
   - Weak References: Collected when no strong refs
   - Soft References: Memory-sensitive caching
   - Phantom References: Pre-cleanup notification

3. GC Algorithms:
   - Serial GC: Single-threaded
   - Parallel GC: Multi-threaded
   - G1 GC: Garbage First, low pause time
   - ZGC: Ultra-low latency

4. Memory Leaks:
   - Common causes
   - Prevention strategies
   - Detection tools`,
        code: `// Memory Management Examples

// 1. Reference Types Example
import java.lang.ref.*;
import java.util.*;

class MemoryManagement {
    // Strong Reference Example
    private static void strongReference() {
        Object obj = new Object(); // Strong reference
        // obj is eligible for GC only when set to null
        obj = null;
    }
    
    // Weak Reference Example - Perfect for Caches
    static class Cache {
        private Map<String, WeakReference<BigObject>> cache = 
            new HashMap<>();
        
        public void put(String key, BigObject obj) {
            cache.put(key, new WeakReference<>(obj));
        }
        
        public BigObject get(String key) {
            WeakReference<BigObject> ref = cache.get(key);
            if (ref != null) {
                BigObject obj = ref.get();
                if (obj == null) {
                    // Object was GC'd, remove from cache
                    cache.remove(key);
                }
                return obj;
            }
            return null;
        }
        
        public void cleanup() {
            cache.entrySet().removeIf(entry -> 
                entry.getValue().get() == null);
        }
    }
    
    // Soft Reference Example - Memory-Sensitive Cache
    static class SoftCache {
        private Map<String, SoftReference<BigObject>> cache = 
            new HashMap<>();
        
        public void put(String key, BigObject obj) {
            cache.put(key, new SoftReference<>(obj));
        }
        
        // Similar get() and cleanup() as WeakCache
    }
    
    // Phantom Reference Example - Resource Cleanup
    static class ResourceTracker {
        private final ReferenceQueue<Object> refQueue = 
            new ReferenceQueue<>();
        private Set<PhantomReference<?>> trackers = 
            new HashSet<>();
        
        public void track(Object obj) {
            trackers.add(new PhantomReference<>(obj, refQueue));
        }
        
        public void cleanup() {
            Reference<?> ref;
            while ((ref = refQueue.poll()) != null) {
                // Perform cleanup
                ref.clear();
                trackers.remove(ref);
            }
        }
    }
    
    // Memory Leak Prevention Example
    static class ResourceManager implements AutoCloseable {
        private List<Resource> resources = new ArrayList<>();
        private boolean closed = false;
        
        public void addResource(Resource r) {
            if (closed) {
                throw new IllegalStateException("Manager is closed");
            }
            resources.add(r);
        }
        
        @Override
        public void close() {
            if (!closed) {
                resources.forEach(Resource::close);
                resources.clear();
                closed = true;
            }
        }
    }
    
    // Memory Statistics Example
    public static void printMemoryStats() {
        Runtime runtime = Runtime.getRuntime();
        
        long maxMemory = runtime.maxMemory(); // Max memory JVM will use
        long totalMemory = runtime.totalMemory(); // Current total memory
        long freeMemory = runtime.freeMemory(); // Free memory
        long usedMemory = totalMemory - freeMemory; // Used memory
        
        System.out.printf("""
            Memory Statistics:
            Maximum Memory: %d MB
            Total Memory: %d MB
            Used Memory: %d MB
            Free Memory: %d MB
            """,
            maxMemory / 1024 / 1024,
            totalMemory / 1024 / 1024,
            usedMemory / 1024 / 1024,
            freeMemory / 1024 / 1024
        );
    }
}`,
      },
      {
        subtitle: 'Off-Heap Memory',
        description: `Off-heap memory management allows Java applications to use memory outside the JVM heap, providing better control over memory usage and garbage collection impact.

Key Concepts:

1. Direct ByteBuffer:
   - Memory outside JVM heap
   - Zero-copy I/O operations
   - Better performance for large data
   
2. Unsafe Operations:
   - Low-level memory access
   - Direct memory allocation
   - Memory fence operations
   
3. Benefits:
   - Reduced GC pressure
   - Predictable latency
   - Large memory support
   
4. Considerations:
   - Manual memory management
   - Security implications
   - Platform dependencies`,
        code: `// Off-Heap Memory Management Examples
import java.nio.*;
import sun.misc.Unsafe;
import java.lang.reflect.Field;

public class OffHeapMemory {
    // 1. Direct ByteBuffer Example
    static class DirectBufferExample {
        private ByteBuffer buffer;
        
        public DirectBufferExample(int capacity) {
            // Allocate direct buffer
            buffer = ByteBuffer.allocateDirect(capacity);
        }
        
        public void write(int value) {
            buffer.putInt(value);
        }
        
        public int read() {
            buffer.flip(); // Prepare for reading
            int value = buffer.getInt();
            buffer.compact(); // Prepare for writing
            return value;
        }
        
        public void release() {
            // Help system release direct buffer
            buffer = null;
            System.gc();
        }
    }
    
    // 2. Unsafe Memory Management
    static class OffHeapArray {
        private final static Unsafe unsafe;
        private final long address;
        private final long size;
        
        static {
            // Get Unsafe instance
            try {
                Field f = Unsafe.class.getDeclaredField("theUnsafe");
                f.setAccessible(true);
                unsafe = (Unsafe) f.get(null);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        
        public OffHeapArray(long size) {
            this.size = size;
            // Allocate off-heap memory
            address = unsafe.allocateMemory(size);
            // Initialize memory to zero
            unsafe.setMemory(address, size, (byte) 0);
        }
        
        public void set(long index, byte value) {
            // Bounds check
            if (index >= size) {
                throw new IndexOutOfBoundsException();
            }
            unsafe.putByte(address + index, value);
        }
        
        public byte get(long index) {
            if (index >= size) {
                throw new IndexOutOfBoundsException();
            }
            return unsafe.getByte(address + index);
        }
        
        public void free() {
            // CRITICAL: Must free manually
            unsafe.freeMemory(address);
        }
    }
    
    // 3. Memory-Mapped File Example
    static class MemoryMappedFile {
        private MappedByteBuffer buffer;
        private FileChannel channel;
        
        public void map(String filename, long size) throws IOException {
            RandomAccessFile file = new RandomAccessFile(filename, "rw");
            channel = file.getChannel();
            
            // Map file to memory
            buffer = channel.map(
                FileChannel.MapMode.READ_WRITE, 0, size);
        }
        
        public void write(byte[] data) {
            buffer.put(data);
        }
        
        public byte[] read(int length) {
            byte[] data = new byte[length];
            buffer.get(data);
            return data;
        }
        
        public void close() throws IOException {
            channel.close();
            // Force unmap through cleaner
            try {
                Method cleanerMethod = buffer.getClass()
                    .getMethod("cleaner");
                cleanerMethod.setAccessible(true);
                Cleaner cleaner = (Cleaner) cleanerMethod
                    .invoke(buffer);
                cleaner.clean();
            } catch (Exception e) {
                throw new IOException("Failed to unmap", e);
            }
        }
    }
    
    // Usage Example
    public static void main(String[] args) {
        // Direct ByteBuffer
        DirectBufferExample direct = new DirectBufferExample(1024);
        direct.write(42);
        System.out.println(direct.read()); // 42
        direct.release();
        
        // Off-heap array
        OffHeapArray array = new OffHeapArray(1024);
        array.set(0, (byte) 42);
        System.out.println(array.get(0)); // 42
        array.free();
    }
}`,
      },
    ],
  },
  {
    id: 13,
    title: 'Network Programming',
    icon: <FaNetworkWired />,
    topics: [
      {
        subtitle: 'Socket Programming',
        description: 'TCP/IP networking with Java sockets',
        code: `// Socket Programming Examples

// TCP Server
ServerSocket serverSocket = new ServerSocket(8080);
while (true) {
    Socket clientSocket = serverSocket.accept();
    new Thread(() -> handleClient(clientSocket)).start();
}

void handleClient(Socket socket) {
    try (
        BufferedReader in = new BufferedReader(
            new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(
            socket.getOutputStream(), true)
    ) {
        String input;
        while ((input = in.readLine()) != null) {
            out.println("Server received: " + input);
        }
    }
}

// TCP Client
Socket socket = new Socket("localhost", 8080);
PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
BufferedReader in = new BufferedReader(
    new InputStreamReader(socket.getInputStream()));
out.println("Hello, Server!");
String response = in.readLine();

// UDP Communication
DatagramSocket socket = new DatagramSocket();
byte[] buffer = "Hello".getBytes();
InetAddress address = InetAddress.getByName("localhost");
DatagramPacket packet = new DatagramPacket(
    buffer, buffer.length, address, 8080);
socket.send(packet);`,
      },
      {
        subtitle: 'NIO Non-Blocking IO',
        description: 'Non-blocking IO operations with Java NIO',
        code: `// NIO Server Example
import java.nio.channels.*;

// Non-blocking Server
ServerSocketChannel serverChannel = ServerSocketChannel.open();
serverChannel.bind(new InetSocketAddress(8080));
serverChannel.configureBlocking(false);

Selector selector = Selector.open();
serverChannel.register(selector, SelectionKey.OP_ACCEPT);

while (true) {
    selector.select();
    Set<SelectionKey> selectedKeys = selector.selectedKeys();
    Iterator<SelectionKey> iter = selectedKeys.iterator();
    
    while (iter.hasNext()) {
        SelectionKey key = iter.next();
        
        if (key.isAcceptable()) {
            // Handle new connection
            ServerSocketChannel server = 
                (ServerSocketChannel) key.channel();
            SocketChannel client = server.accept();
            client.configureBlocking(false);
            client.register(selector, SelectionKey.OP_READ);
        }
        
        if (key.isReadable()) {
            // Handle readable channel
            SocketChannel client = (SocketChannel) key.channel();
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            client.read(buffer);
            // Process data
        }
        
        iter.remove();
    }
}

// Async Channel Example
AsynchronousServerSocketChannel server = 
    AsynchronousServerSocketChannel.open();
server.bind(new InetSocketAddress(8080));

server.accept(null, new CompletionHandler<AsynchronousSocketChannel, Void>() {
    @Override
    public void completed(AsynchronousSocketChannel client, Void attachment) {
        // Handle new client
        server.accept(null, this); // Accept next connection
        
        ByteBuffer buffer = ByteBuffer.allocate(1024);
        client.read(buffer, buffer, new CompletionHandler<Integer, ByteBuffer>() {
            @Override
            public void completed(Integer result, ByteBuffer buffer) {
                // Process received data
            }
            
            @Override
            public void failed(Throwable exc, ByteBuffer attachment) {
                // Handle failure
            }
        });
    }
    
    @Override
    public void failed(Throwable exc, Void attachment) {
        // Handle failure
    }
});`,
      },
    ],
  },
  {
    id: 14,
    title: 'Security & Cryptography',
    icon: <FaShieldAlt />,
    topics: [
      {
        subtitle: 'Encryption & Decryption',
        description: `Java provides robust cryptography support through its security APIs. Understanding these is crucial for building secure applications.

Key Concepts:

1. Symmetric Encryption:
   - Same key for encryption/decryption
   - AES (Advanced Encryption Standard)
   - Faster than asymmetric encryption
   - Ideal for large data sets

2. Asymmetric Encryption:
   - Public/Private key pairs
   - RSA algorithm
   - More secure for key exchange
   - Digital signatures

3. Cipher Modes:
   - ECB (Electronic Codebook)
   - CBC (Cipher Block Chaining)
   - GCM (Galois/Counter Mode)
   - Padding schemes

4. Best Practices:
   - Secure key management
   - IV (Initialization Vector) handling
   - Salt usage for passwords
   - Secure random number generation`,
        code: `// Cryptography Examples
import javax.crypto.*;
import javax.crypto.spec.*;
import java.security.*;
import java.util.Base64;

public class CryptoExamples {
    // 1. AES Encryption/Decryption
    static class AESUtil {
        private static final String ALGORITHM = "AES";
        private static final String TRANSFORMATION = "AES/CBC/PKCS5Padding";
        
        // Generate a secure AES key
        public static SecretKey generateKey() 
                throws NoSuchAlgorithmException {
            KeyGenerator keyGen = KeyGenerator.getInstance(ALGORITHM);
            keyGen.init(256); // 256-bit key
            return keyGen.generateKey();
        }
        
        // Generate random IV
        public static IvParameterSpec generateIv() {
            byte[] iv = new byte[16];
            new SecureRandom().nextBytes(iv);
            return new IvParameterSpec(iv);
        }
        
        // Encrypt data
        public static byte[] encrypt(String input, SecretKey key, 
                IvParameterSpec iv) throws Exception {
            Cipher cipher = Cipher.getInstance(TRANSFORMATION);
            cipher.init(Cipher.ENCRYPT_MODE, key, iv);
            return cipher.doFinal(input.getBytes());
        }
        
        // Decrypt data
        public static String decrypt(byte[] cipherText, SecretKey key,
                IvParameterSpec iv) throws Exception {
            Cipher cipher = Cipher.getInstance(TRANSFORMATION);
            cipher.init(Cipher.DECRYPT_MODE, key, iv);
            byte[] plainText = cipher.doFinal(cipherText);
            return new String(plainText);
        }
        
        // Example usage
        public static void main(String[] args) throws Exception {
            // Generate key and IV
            SecretKey key = generateKey();
            IvParameterSpec iv = generateIv();
            
            // Encrypt
            String originalText = "Hello, World!";
            byte[] cipherText = encrypt(originalText, key, iv);
            
            // Decrypt
            String decryptedText = decrypt(cipherText, key, iv);
            System.out.println("Original: " + originalText);
            System.out.println("Decrypted: " + decryptedText);
        }
    }
    
    // 2. RSA Encryption/Decryption
    static class RSAUtil {
        private static final String ALGORITHM = "RSA";
        
        // Generate key pair
        public static KeyPair generateKeyPair() 
                throws NoSuchAlgorithmException {
            KeyPairGenerator keyGen = KeyPairGenerator.getInstance(ALGORITHM);
            keyGen.initialize(2048);
            return keyGen.generateKeyPair();
        }
        
        // Encrypt with public key
        public static byte[] encrypt(String input, PublicKey key) 
                throws Exception {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, key);
            return cipher.doFinal(input.getBytes());
        }
        
        // Decrypt with private key
        public static String decrypt(byte[] cipherText, PrivateKey key)
                throws Exception {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, key);
            byte[] plainText = cipher.doFinal(cipherText);
            return new String(plainText);
        }
        
        // Digital signature
        public static byte[] sign(String data, PrivateKey privateKey)
                throws Exception {
            Signature signature = Signature.getInstance("SHA256withRSA");
            signature.initSign(privateKey);
            signature.update(data.getBytes());
            return signature.sign();
        }
        
        // Verify signature
        public static boolean verify(String data, byte[] signature,
                PublicKey publicKey) throws Exception {
            Signature sig = Signature.getInstance("SHA256withRSA");
            sig.initVerify(publicKey);
            sig.update(data.getBytes());
            return sig.verify(signature);
        }
        
        // Example usage
        public static void main(String[] args) throws Exception {
            // Generate key pair
            KeyPair keyPair = generateKeyPair();
            
            // Encrypt/Decrypt
            String originalText = "Hello, RSA!";
            byte[] cipherText = encrypt(originalText, 
                keyPair.getPublic());
            String decryptedText = decrypt(cipherText, 
                keyPair.getPrivate());
            
            // Digital signature
            byte[] signature = sign(originalText, keyPair.getPrivate());
            boolean isValid = verify(originalText, signature, 
                keyPair.getPublic());
            
            System.out.println("Original: " + originalText);
            System.out.println("Decrypted: " + decryptedText);
            System.out.println("Signature Valid: " + isValid);
        }
    }
    
    // 3. Password Hashing
    static class PasswordUtil {
        // Hash password with salt
        public static String hashPassword(String password) 
                throws Exception {
            byte[] salt = new byte[16];
            SecureRandom random = new SecureRandom();
            random.nextBytes(salt);
            
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            md.update(salt);
            byte[] hashedPassword = md.digest(password.getBytes());
            
            // Combine salt and password
            byte[] combined = new byte[salt.length + hashedPassword.length];
            System.arraycopy(salt, 0, combined, 0, salt.length);
            System.arraycopy(hashedPassword, 0, combined, 
                salt.length, hashedPassword.length);
            
            return Base64.getEncoder().encodeToString(combined);
        }
        
        // Verify password
        public static boolean verifyPassword(String password, 
                String storedHash) throws Exception {
            byte[] combined = Base64.getDecoder().decode(storedHash);
            
            // Extract salt
            byte[] salt = new byte[16];
            System.arraycopy(combined, 0, salt, 0, salt.length);
            
            // Hash password with extracted salt
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            md.update(salt);
            byte[] hashedPassword = md.digest(password.getBytes());
            
            // Compare hashes
            byte[] storedPassword = new byte[combined.length - 16];
            System.arraycopy(combined, 16, storedPassword, 0, 
                storedPassword.length);
            
            return MessageDigest.isEqual(hashedPassword, storedPassword);
        }
    }
}`,
      },
      {
        subtitle: 'Security Manager & Policies',
        description: `Java's Security Manager provides a framework for defining and enforcing security policies in applications.

Key Concepts:

1. Security Manager:
   - Access control mechanism
   - Permission checking
   - Custom policy implementation
   
2. Security Policies:
   - File system access
   - Network permissions
   - Runtime permissions
   
3. Access Controller:
   - Privileged actions
   - Stack inspection
   - Domain-based security

4. SSL/TLS:
   - Secure communication
   - Certificate management
   - Trust store configuration`,
        code: `// Security Management Examples
import java.security.*;
import javax.net.ssl.*;
import java.io.*;

public class SecurityExamples {
    // 1. Custom Security Manager
    static class CustomSecurityManager extends SecurityManager {
        @Override
        public void checkPermission(Permission perm) {
            // Check file permissions
            if (perm instanceof FilePermission) {
                String action = perm.getActions();
                if (action.contains("write")) {
                    throw new SecurityException(
                        "Write operations not allowed");
                }
            }
            
            // Check socket permissions
            if (perm instanceof SocketPermission) {
                String action = perm.getActions();
                if (action.contains("connect")) {
                    // Log connection attempts
                    System.out.println("Connection attempt to: " 
                        + perm.getName());
                }
            }
        }
        
        @Override
        public void checkExit(int status) {
            throw new SecurityException("System.exit() not allowed");
        }
    }
    
    // 2. Security Policy Example
    static class PolicyExample {
        public static void setupPolicy() {
            Policy.setPolicy(new Policy() {
                @Override
                public PermissionCollection getPermissions(
                        CodeSource codesource) {
                    Permissions permissions = new Permissions();
                    
                    // Add permissions
                    permissions.add(new SocketPermission(
                        "localhost:1024-", "listen"));
                    permissions.add(new RuntimePermission(
                        "getClassLoader"));
                    permissions.add(new FilePermission(
                        "/tmp/*", "read,write"));
                    
                    return permissions;
                }
            });
        }
    }
    
    // 3. Access Controller Example
    static class AccessControllerExample {
        public static void doPrivilegedOperation() {
            // Perform privileged action
            AccessController.doPrivileged(
                new PrivilegedAction<Void>() {
                    public Void run() {
                        // Privileged code here
                        System.getProperties().list(System.out);
                        return null;
                    }
                }
            );
        }
        
        public static void checkPermission(String target, 
                String action) {
            try {
                SecurityManager sm = System.getSecurityManager();
                if (sm != null) {
                    sm.checkPermission(
                        new FilePermission(target, action));
                }
            } catch (SecurityException e) {
                System.out.println("Access denied: " + e.getMessage());
            }
        }
    }
    
    // 4. SSL Context Configuration
    static class SSLContextExample {
        public static SSLContext createSSLContext() throws Exception {
            // Create key manager
            KeyManagerFactory kmf = KeyManagerFactory.getInstance(
                KeyManagerFactory.getDefaultAlgorithm());
            KeyStore keyStore = KeyStore.getInstance("JKS");
            keyStore.load(new FileInputStream("keystore.jks"), 
                "password".toCharArray());
            kmf.init(keyStore, "password".toCharArray());
            
            // Create trust manager
            TrustManagerFactory tmf = TrustManagerFactory.getInstance(
                TrustManagerFactory.getDefaultAlgorithm());
            KeyStore trustStore = KeyStore.getInstance("JKS");
            trustStore.load(new FileInputStream("truststore.jks"), 
                "password".toCharArray());
            tmf.init(trustStore);
            
            // Initialize SSL context
            SSLContext sslContext = SSLContext.getInstance("TLS");
            sslContext.init(kmf.getKeyManagers(), 
                tmf.getTrustManagers(), null);
            
            return sslContext;
        }
        
        // Configure HTTPS connection
        public static HttpsURLConnection configureHTTPS(
                String url, SSLContext sslContext) 
                throws Exception {
            HttpsURLConnection conn = (HttpsURLConnection) 
                new URL(url).openConnection();
            conn.setSSLSocketFactory(sslContext.getSocketFactory());
            
            // Hostname verifier
            conn.setHostnameVerifier((hostname, session) -> {
                // Custom hostname verification logic
                return hostname.equals("localhost");
            });
            
            return conn;
        }
    }
    
    // Usage Example
    public static void main(String[] args) throws Exception {
        // Set security manager
        System.setSecurityManager(new CustomSecurityManager());
        
        // Setup security policy
        PolicyExample.setupPolicy();
        
        // Perform privileged operation
        AccessControllerExample.doPrivilegedOperation();
        
        // Check file permission
        AccessControllerExample.checkPermission(
            "/tmp/test.txt", "read");
        
        // Setup SSL context
        SSLContext sslContext = SSLContextExample.createSSLContext();
        HttpsURLConnection conn = SSLContextExample.configureHTTPS(
            "https://localhost:8443", sslContext);
    }
}`,
      },
    ],
  },
  {
    id: 15,
    title: 'Object-Oriented Programming',
    icon: <FaCode />,
    topics: [
      {
        subtitle: 'Classes and Objects',
        description: `Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" that contain data and code.

Key Concepts:

1. Class Structure:
   - Blueprint for creating objects
   - Instance variables (state)
   - Methods (behavior)
   - Constructors
   - Access modifiers

2. Object Creation:
   - Instantiation process
   - Memory allocation
   - Constructor chaining
   - Object lifecycle

3. Access Modifiers:
   - public: Accessible everywhere
   - private: Only within class
   - protected: Class and subclasses
   - default: Package-level access

4. Best Practices:
   - Encapsulation of data
   - Proper constructor design
   - Method organization
   - Documentation`,
        code: `// Classes and Objects Example
public class OOPExamples {
    // 1. Basic Class Structure
    public class BankAccount {
        // Instance variables (state)
        private String accountNumber;
        private String accountHolder;
        private double balance;
        private static int totalAccounts = 0; // Class variable
        
        // Constructor
        public BankAccount(String accountHolder, double initialBalance) {
            this.accountNumber = generateAccountNumber();
            this.accountHolder = accountHolder;
            this.balance = initialBalance;
            totalAccounts++;
        }
        
        // Copy constructor
        public BankAccount(BankAccount other) {
            this.accountNumber = generateAccountNumber();
            this.accountHolder = other.accountHolder;
            this.balance = other.balance;
            totalAccounts++;
        }
        
        // Private helper method
        private String generateAccountNumber() {
            return "ACC" + System.currentTimeMillis();
        }
        
        // Instance methods (behavior)
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                logTransaction("Deposit", amount);
            }
        }
        
        public boolean withdraw(double amount) {
            if (amount > 0 && balance >= amount) {
                balance -= amount;
                logTransaction("Withdrawal", amount);
                return true;
            }
            return false;
        }
        
        // Protected method for logging
        protected void logTransaction(String type, double amount) {
            System.out.printf("%s: $%.2f, New Balance: $%.2f%n",
                type, amount, balance);
        }
        
        private String generateAccountNumber() {
            return "ACC" + System.currentTimeMillis();
        }
        
        // Getters and Setters
        public String getAccountNumber() {
            return accountNumber;
        }
        
        public String getAccountHolder() {
            return accountHolder;
        }
        
        public void setAccountHolder(String accountHolder) {
            this.accountHolder = accountHolder;
        }
        
        public double getBalance() {
            return balance;
        }
        
        // Override toString method
        @Override
        public String toString() {
            return String.format("Account[%s] - Holder: %s, Balance: $%.2f",
                accountNumber, accountHolder, balance);
        }
    }
    
    // 2. Object Creation and Usage
    public static void main(String[] args) {
        // Creating objects
        BankAccount account1 = new BankAccount("John Doe", 1000.0);
        BankAccount account2 = new BankAccount("Jane Smith", 2000.0);
        
        // Using object methods
        account1.deposit(500.0);
        account2.withdraw(300.0);
        
        // Copy constructor usage
        BankAccount account3 = new BankAccount(account1);
        
        // Static method usage
        System.out.println("Total Accounts: " + BankAccount.getTotalAccounts());
        
        // toString representation
        System.out.println(account1);
        System.out.println(account2);
        System.out.println(account3);
    }
}`,
      },
      {
        subtitle: 'Inheritance and Polymorphism',
        description: `Inheritance and Polymorphism are fundamental OOP concepts that enable code reuse and flexibility.

Key Concepts:

1. Inheritance:
   - Extending classes
   - Method overriding
   - Super keyword
   - Abstract classes
   - Final classes/methods

2. Polymorphism:
   - Method overloading
   - Runtime polymorphism
   - Dynamic method dispatch
   - Interface implementation

3. Abstract Classes:
   - Partial implementation
   - Common functionality
   - Template patterns

4. Best Practices:
   - Favor composition over inheritance
   - Program to interfaces
   - Liskov Substitution Principle
   - Clear inheritance hierarchies`,
        code: `// Inheritance and Polymorphism Examples
public class InheritanceExamples {
    // 1. Base Account Class (Abstract)
    public abstract class Account {
        protected String accountNumber;
        protected String accountHolder;
        protected double balance;
        
        public Account(String accountHolder, double initialBalance) {
            this.accountNumber = generateAccountNumber();
            this.accountHolder = accountHolder;
            this.balance = initialBalance;
        }
        
        // Abstract method - must be implemented by subclasses
        public abstract boolean withdraw(double amount);
        
        // Common functionality
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                logTransaction("Deposit", amount);
            }
        }
        
        protected void logTransaction(String type, double amount) {
            System.out.printf("%s: $%.2f, New Balance: $%.2f%n",
                type, amount, balance);
        }
        
        private String generateAccountNumber() {
            return "ACC" + System.currentTimeMillis();
        }
        
        // Getters
        public double getBalance() {
            return balance;
        }
    }
    
    // 2. Savings Account (Child Class)
    public class SavingsAccount extends Account {
        private double interestRate;
        private static final double MIN_BALANCE = 100.0;
        
        public SavingsAccount(String accountHolder, 
                double initialBalance, double interestRate) {
            super(accountHolder, initialBalance);
            this.interestRate = interestRate;
        }
        
        @Override
        public boolean withdraw(double amount) {
            if (balance - amount >= MIN_BALANCE) {
                balance -= amount;
                logTransaction("Withdrawal", amount);
                return true;
            }
            return false;
        }
        
        public void addInterest() {
            double interest = balance * interestRate;
            deposit(interest);
            System.out.printf("Added interest: $%.2f%n", interest);
        }
    }
    
    // 3. Checking Account (Child Class)
    public class CheckingAccount extends Account {
        private double overdraftLimit;
        
        public CheckingAccount(String accountHolder, 
                double initialBalance, double overdraftLimit) {
            super(accountHolder, initialBalance);
            this.overdraftLimit = overdraftLimit;
        }
        
        @Override
        public boolean withdraw(double amount) {
            if (balance + overdraftLimit >= amount) {
                balance -= amount;
                logTransaction("Withdrawal", amount);
                return true;
            }
            return false;
        }
        
        public double getAvailableBalance() {
            return balance + overdraftLimit;
        }
    }
    
    // 4. Interface Example
    public interface InterestBearing {
        void addInterest();
        double getInterestRate();
    }
    
    // 5. Multiple Interface Implementation
    public class PremiumSavings extends SavingsAccount 
            implements InterestBearing {
        private double bonusRate;
        
        public PremiumSavings(String accountHolder, 
                double initialBalance, double interestRate, 
                double bonusRate) {
            super(accountHolder, initialBalance, interestRate);
            this.bonusRate = bonusRate;
        }
        
        @Override
        public void addInterest() {
            double interest = balance * (getInterestRate() + bonusRate);
            deposit(interest);
            System.out.printf("Added premium interest: $%.2f%n", 
                interest);
        }
        
        @Override
        public double getInterestRate() {
            return super.interestRate + bonusRate;
        }
    }
    
    // 6. Polymorphism Example
    public class Bank {
        private List<Account> accounts = new ArrayList<>();
        
        public void addAccount(Account account) {
            accounts.add(account);
        }
        
        public void processInterest() {
            for (Account account : accounts) {
                if (account instanceof InterestBearing) {
                    ((InterestBearing) account).addInterest();
                }
            }
        }
        
        public double getTotalBalance() {
            return accounts.stream()
                .mapToDouble(Account::getBalance)
                .sum();
        }
    }
    
    // Usage Example
    public static void main(String[] args) {
        Bank bank = new Bank();
        
        // Create different account types
        SavingsAccount savings = new SavingsAccount(
            "John Doe", 1000.0, 0.05);
        CheckingAccount checking = new CheckingAccount(
            "Jane Smith", 2000.0, 500.0);
        PremiumSavings premium = new PremiumSavings(
            "Bob Johnson", 5000.0, 0.05, 0.02);
        
        // Add accounts to bank
        bank.addAccount(savings);
        bank.addAccount(checking);
        bank.addAccount(premium);
        
        // Demonstrate polymorphism
        savings.deposit(500.0);
        checking.withdraw(2500.0); // Uses overdraft
        premium.addInterest();
        
        // Process interest for all eligible accounts
        bank.processInterest();
        
        // Print total balance
        System.out.printf("Total Bank Balance: $%.2f%n",
            bank.getTotalBalance());
    }
}`,
      },
      {
        subtitle: 'Encapsulation and Abstraction',
        description: `Encapsulation and Abstraction are key principles that help manage complexity and maintain data integrity.

Key Concepts:

1. Encapsulation:
   - Data hiding
   - Access control
   - Immutable objects
   - Bean patterns

2. Abstraction:
   - Interface design
   - Implementation hiding
   - API development
   - Separation of concerns

3. Design Principles:
   - Single Responsibility
   - Open/Closed Principle
   - Interface Segregation
   - Dependency Inversion

4. Best Practices:
   - Immutable when possible
   - Minimal public API
   - Clear documentation
   - Consistent design`,
        code: `// Encapsulation and Abstraction Examples
public class EncapsulationExamples {
    // 1. Immutable Class Example
    public final class Money {
        private final BigDecimal amount;
        private final Currency currency;
        
        public Money(BigDecimal amount, Currency currency) {
            this.amount = amount;
            this.currency = currency;
        }
        
        public Money add(Money other) {
            if (!this.currency.equals(other.currency)) {
                throw new IllegalArgumentException(
                    "Cannot add different currencies");
            }
            return new Money(
                this.amount.add(other.amount), this.currency);
        }
        
        public Money multiply(double multiplier) {
            return new Money(
                this.amount.multiply(BigDecimal.valueOf(multiplier)),
                this.currency
            );
        }
        
        // Getters only - no setters for immutability
        public BigDecimal getAmount() { return amount; }
        public Currency getCurrency() { return currency; }
        
        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (!(o instanceof Money)) return false;
            Money money = (Money) o;
            return amount.equals(money.amount) && 
                   currency.equals(money.currency);
        }
        
        @Override
        public int hashCode() {
            return Objects.hash(amount, currency);
        }
        
        @Override
        public String toString() {
            return String.format("%s %s", 
                amount.toString(), currency.getSymbol());
        }
    }
    
    // 2. Interface Abstraction Example
    public interface PaymentProcessor {
        boolean processPayment(Money amount);
        boolean refundPayment(String transactionId);
        PaymentStatus getStatus(String transactionId);
    }
    
    public enum PaymentStatus {
        PENDING, COMPLETED, FAILED, REFUNDED
    }
    
    // 3. Implementation Example
    public class CreditCardProcessor implements PaymentProcessor {
        private final String apiKey;
        private final Map<String, PaymentStatus> transactions;
        
        public CreditCardProcessor(String apiKey) {
            this.apiKey = apiKey;
            this.transactions = new ConcurrentHashMap<>();
        }
        
        @Override
        public boolean processPayment(Money amount) {
            // Simulate payment processing
            String transactionId = generateTransactionId();
            boolean success = processWithGateway(amount);
            
            if (success) {
                transactions.put(transactionId, PaymentStatus.COMPLETED);
            } else {
                transactions.put(transactionId, PaymentStatus.FAILED);
            }
            
            return success;
        }
        
        @Override
        public boolean refundPayment(String transactionId) {
            if (!transactions.containsKey(transactionId)) {
                return false;
            }
            
            if (transactions.get(transactionId) != 
                    PaymentStatus.COMPLETED) {
                return false;
            }
            
            // Simulate refund processing
            boolean success = processRefundWithGateway(transactionId);
            
            if (success) {
                transactions.put(transactionId, PaymentStatus.REFUNDED);
            }
            
            return success;
        }
        
        @Override
        public PaymentStatus getStatus(String transactionId) {
            return transactions.getOrDefault(
                transactionId, PaymentStatus.FAILED);
        }
        
        private String generateTransactionId() {
            return UUID.randomUUID().toString();
        }
        
        private boolean processWithGateway(Money amount) {
            // Simulate gateway processing
            return true;
        }
        
        private boolean processRefundWithGateway(String transactionId) {
            // Simulate refund processing
            return true;
        }
    }
    
    // 4. Builder Pattern Example
    public class PaymentRequest {
        private final Money amount;
        private final String customerId;
        private final String description;
        private final PaymentMethod paymentMethod;
        private final boolean recurring;
        
        private PaymentRequest(Builder builder) {
            this.amount = builder.amount;
            this.customerId = builder.customerId;
            this.description = builder.description;
            this.paymentMethod = builder.paymentMethod;
            this.recurring = builder.recurring;
        }
        
        // Getters
        public Money getAmount() { return amount; }
        public String getCustomerId() { return customerId; }
        public String getDescription() { return description; }
        public PaymentMethod getPaymentMethod() { return paymentMethod; }
        public boolean isRecurring() { return recurring; }
        
        // Builder class
        public static class Builder {
            private Money amount;
            private String customerId;
            private String description;
            private PaymentMethod paymentMethod;
            private boolean recurring;
            
            public Builder amount(Money amount) {
                this.amount = amount;
                return this;
            }
            
            public Builder customerId(String customerId) {
                this.customerId = customerId;
                return this;
            }
            
            public Builder description(String description) {
                this.description = description;
                return this;
            }
            
            public Builder paymentMethod(PaymentMethod method) {
                this.paymentMethod = method;
                return this;
            }
            
            public Builder recurring(boolean recurring) {
                this.recurring = recurring;
                return this;
            }
            
            public PaymentRequest build() {
                if (amount == null || customerId == null || 
                    paymentMethod == null) {
                    throw new IllegalStateException(
                        "Missing required fields");
                }
                return new PaymentRequest(this);
            }
        }
    }
    
    // Usage Example
    public static void main(String[] args) {
        // Create immutable money object
        Money payment = new Money(
            new BigDecimal("99.99"), 
            Currency.getInstance("USD")
        );
        
        // Create payment processor
        PaymentProcessor processor = new CreditCardProcessor("api_key");
        
        // Create payment request using builder
        PaymentRequest request = new PaymentRequest.Builder()
            .amount(payment)
            .customerId("CUST123")
            .description("Monthly subscription")
            .paymentMethod(PaymentMethod.CREDIT_CARD)
            .recurring(true)
            .build();
        
        // Process payment
        boolean success = processor.processPayment(request.getAmount());
        System.out.println("Payment processed: " + success);
    }
}`,
      },
    ],
  },
];

const JavaCoursePage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubTopic, setSelectedSubTopic] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Copy code function
  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md py-6 px-4 md:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Java Programming Course
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Master Java with comprehensive tutorials and examples
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto md:px-4 pb-6 md:pb-8">
        {/* Desktop Navigation (only visible on md and larger screens) */}
        <div className="hidden md:block mb-4">
          <div className="bg-white shadow-sm p-3 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {javaTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all ${selectedTopic === topic.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <span className="text-lg">{topic.icon}</span>
                  <span className="font-medium">{topic.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="md:grid md:grid-cols-12 md:gap-4">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-6">
              {javaTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl text-blue-600">{topic.icon}</div>
                      <h2 className="text-xl font-semibold text-gray-800">{topic.title}</h2>
                    </div>
                    <div className="text-gray-400">
                      {selectedTopic === topic.id ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {selectedTopic === topic.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100"
                      >
                        {topic.topics.map((subtopic, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-100 last:border-b-0"
                          >
                            <button
                              onClick={() =>
                                setSelectedSubTopic(
                                  selectedSubTopic === `${topic.id}-${index}`
                                    ? null
                                    : `${topic.id}-${index}`
                                )
                              }
                              className="w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                              <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-700">
                                  {subtopic.subtitle}
                                </h3>
                                <div className="text-gray-400">
                                  {selectedSubTopic === `${topic.id}-${index}` ? (
                                    <FaChevronUp />
                                  ) : (
                                    <FaChevronDown />
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm mt-2">
                                {subtopic.description}
                              </p>
                            </button>

                            <AnimatePresence>
                              {selectedSubTopic === `${topic.id}-${index}` && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="p-4 bg-gray-50"
                                >
                                  <div className="relative group">
                                    <button
                                      onClick={() =>
                                        handleCopyCode(subtopic.code, `${topic.id}-${index}`)
                                      }
                                      className="absolute right-2 top-2 p-2 bg-gray-800 bg-opacity-75 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                                    >
                                      {copiedCode === `${topic.id}-${index}` ? (
                                        'Copied!'
                                      ) : (
                                        <FaCopy />
                                      )}
                                    </button>

                                    <SyntaxHighlighter
                                      language="java"
                                      style={tomorrow}
                                      className="rounded-lg !mt-0 text-sm md:text-base"
                                      customStyle={{
                                        padding: '1.5rem',
                                        fontSize: isMobile ? '0.875rem' : '1rem',
                                        lineHeight: '1.5',
                                      }}
                                      showLineNumbers={true}
                                      wrapLines={true}
                                    >
                                      {subtopic.code}
                                    </SyntaxHighlighter>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block md:col-span-12">
            {selectedTopic ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Topic Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat opacity-20"></div>
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {javaTopics.find(t => t.id === selectedTopic)?.title}
                    </h2>
                    <p className="text-blue-100">
                      Explore detailed concepts and practical examples
                    </p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {javaTopics
                      .find(topic => topic.id === selectedTopic)
                      ?.topics.map((subtopic, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-white rounded-lg shadow-sm hover:shadow transition-all duration-300 border border-gray-100"
                        >
                          {/* Subtopic Header */}
                          <div className="p-3 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              {subtopic.subtitle}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {subtopic.description}
                            </p>
                          </div>

                          {/* Code Section */}
                          <div className="relative group">
                            {/* Copy Button */}
                            <button
                              onClick={() => handleCopyCode(subtopic.code, `${selectedTopic}-${index}`)}
                              className="absolute right-2 top-2 p-1.5 bg-gray-800 bg-opacity-75 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hover:bg-opacity-90"
                            >
                              <div className="flex items-center space-x-1">
                                <FaCopy size={12} />
                                <span className="text-xs">
                                  {copiedCode === `${selectedTopic}-${index}` ? 'Copied!' : 'Copy'}
                                </span>
                              </div>
                            </button>

                            {/* Code Display */}
                            <div className="bg-gray-50 p-3 rounded-b-lg">
                              <div className="max-h-[300px] overflow-auto custom-scrollbar">
                                <SyntaxHighlighter
                                  language="java"
                                  style={tomorrow}
                                  className="rounded !mt-0 text-sm"
                                  customStyle={{
                                    padding: '1rem',
                                    fontSize: '0.875rem',
                                    lineHeight: '1.4',
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                  }}
                                  showLineNumbers={true}
                                  wrapLines={true}
                                >
                                  {subtopic.code}
                                </SyntaxHighlighter>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <div className="max-w-2xl mx-auto px-4">
                  <div className="text-blue-600 text-5xl mb-4">
                    <FaJava />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Welcome to Java Programming
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Select a topic from above to start learning Java concepts with practical examples
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {javaTopics.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic.id)}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
                      >
                        <span className="text-lg text-blue-600">{topic.icon}</span>
                        <span className="font-medium text-gray-700">{topic.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaCoursePage;
