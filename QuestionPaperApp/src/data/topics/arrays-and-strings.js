export const arraysAndStringsData = {
  title: "Arrays and Strings",
  introduction: "Arrays and Strings are fundamental data structures in C programming, providing efficient methods for storing, manipulating, and processing sequential data.",
  
  keyTopics: [
    {
      title: "Array Fundamentals",
      content: "Comprehensive exploration of array declaration, initialization, and memory management.",
      formulas: [
        {
          name: "Array Memory Allocation",
          formula: "Memory = (Array Size) * (Size of Data Type)",
          explanation: "Calculates total memory consumption for an array."
        }
      ]
    },
    {
      title: "String Manipulation",
      content: "Detailed analysis of string handling, character array operations, and standard library functions.",
      formulas: [
        {
          name: "String Length Calculation",
          formula: "Length = Number of Characters before Null Terminator",
          explanation: "Determines the actual length of a string in C."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Array Indexing Theorem",
      statement: "Array elements are accessed using zero-based indexing in C",
      explanation: "Fundamental principle of array element retrieval."
    },
    {
      name: "Memory Contiguity Theorem",
      statement: "Array elements are stored in contiguous memory locations",
      explanation: "Critical for understanding array memory organization."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Implement an efficient algorithm to reverse an array in-place.",
      solution: {
        steps: [
          "Two-pointer approach",
          "Swap elements",
          "Handle odd and even length arrays",
          "Minimize space complexity"
        ],
        answer: "Systematic array reversal technique"
      }
    },
    {
      year: 2021,
      question: "Develop a string manipulation function without using standard library methods.",
      solution: {
        steps: [
          "Character array traversal",
          "Manual string operations",
          "Null terminator handling",
          "Efficient implementation"
        ],
        answer: "Comprehensive string manipulation approach"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Ignoring array bounds and potential buffer overflows",
      correction: "Always validate array indices and implement boundary checks."
    },
    {
      mistake: "Misunderstanding string termination in C",
      correction: "Remember that C strings are null-terminated character arrays."
    }
  ]
};
