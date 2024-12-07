export const hashingTechniquesData = {
  title: "Hashing Techniques",
  introduction: "Hashing is a powerful technique for efficient data storage and retrieval, providing near-constant time complexity for fundamental operations like insertion, deletion, and search.",
  
  keyTopics: [
    {
      title: "Hash Function Principles",
      content: "Hash functions map data of arbitrary size to fixed-size values, enabling efficient data storage and retrieval in hash tables.",
      formulas: [
        {
          name: "Basic Hash Function",
          formula: "hash(key) = key % table_size",
          explanation: "Simple modulo-based hash function for distributing keys across a hash table."
        }
      ]
    },
    {
      title: "Collision Resolution Techniques",
      content: "Methods for handling situations where multiple keys map to the same hash table index, including chaining and open addressing.",
      formulas: [
        {
          name: "Load Factor",
          formula: "α = n / m",
          explanation: "Ratio of number of elements (n) to hash table size (m), crucial for performance analysis."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Birthday Paradox Theorem",
      statement: "In a random collection, the probability of a collision increases quadratically with the number of elements",
      explanation: "Demonstrates the importance of good hash function design and collision resolution."
    },
    {
      name: "Hash Table Performance Theorem",
      statement: "Average-case time complexity for basic operations is O(1) with a good hash function",
      explanation: "Highlights the efficiency of hashing when implemented correctly."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a hash table with chaining for collision resolution. Analyze its time complexity for insertion, deletion, and search operations.",
      solution: {
        steps: [
          "Use linked lists for collision resolution",
          "Average-case time complexity: O(1)",
          "Worst-case (all elements in same chain): O(n)",
          "Performance depends on hash function and load factor"
        ],
        answer: "Average O(1), Worst O(n)"
      }
    },
    {
      year: 2021,
      question: "Compare different collision resolution techniques: Chaining vs Open Addressing. Discuss their pros and cons.",
      solution: {
        steps: [
          "Chaining: Uses extra space, simple implementation",
          "Open Addressing: More space-efficient, complex probing",
          "Chaining: Better for unknown dataset sizes",
          "Open Addressing: More cache-friendly"
        ],
        answer: "Depends on specific use case and constraints"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Using a poor hash function that causes frequent collisions",
      correction: "Design hash functions that distribute keys uniformly across the hash table."
    },
    {
      mistake: "Neglecting the load factor in hash table implementation",
      correction: "Maintain an appropriate load factor to ensure optimal performance."
    }
  ]
};
