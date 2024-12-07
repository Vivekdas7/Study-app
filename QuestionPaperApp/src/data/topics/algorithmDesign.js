export const algorithmDesignData = {
  title: "Algorithm Design",
  introduction: "Algorithm Design is a fundamental discipline in computer science that focuses on creating efficient and effective computational methods to solve complex problems. This topic explores the principles, strategies, and techniques used to develop robust and optimized algorithms.",
  
  keyTopics: [
    {
      title: "Fundamental Algorithm Design Paradigms",
      content: "Algorithm design involves various paradigms that provide systematic approaches to solving computational problems. These paradigms help in creating efficient solutions by breaking down complex problems into manageable steps.",
      formulas: [
        {
          name: "Time Complexity Analysis",
          formula: "T(n) = O(f(n))",
          explanation: "Represents the upper bound of an algorithm's time complexity, where n is the input size and f(n) is the growth rate of computational steps."
        }
      ]
    },
    {
      title: "Divide and Conquer Strategy",
      content: "A powerful problem-solving approach that breaks down a problem into smaller, more manageable subproblems, solves them independently, and then combines their solutions.",
      formulas: [
        {
          name: "Divide and Conquer Recurrence",
          formula: "T(n) = aT(n/b) + f(n)",
          explanation: "Represents the time complexity of divide and conquer algorithms, where a is the number of subproblems, b is the division factor, and f(n) is the cost of dividing and combining."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Master Theorem",
      statement: "A method for solving recurrence relations of the form T(n) = aT(n/b) + f(n)",
      explanation: "Provides a systematic way to determine the time complexity of divide and conquer algorithms by categorizing the complexity of the combining step."
    },
    {
      name: "Algorithm Correctness Theorem",
      statement: "An algorithm is correct if it produces the correct output for all possible inputs and terminates in a finite amount of time.",
      explanation: "Ensures that an algorithm solves the intended problem completely and efficiently."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Analyze the time complexity of the merge sort algorithm. Explain how the divide and conquer strategy contributes to its efficiency.",
      solution: {
        steps: [
          "Merge sort divides the array into two halves recursively",
          "Each division takes O(log n) time",
          "Merging two sorted subarrays takes O(n) time",
          "Total time complexity is O(n log n)"
        ],
        answer: "O(n log n)"
      }
    },
    {
      year: 2021,
      question: "Explain the difference between best-case, average-case, and worst-case time complexity with an example of quicksort algorithm.",
      solution: {
        steps: [
          "Best-case: Pivot always divides array into equal halves - O(n log n)",
          "Average-case: Random pivot selection - O(n log n)",
          "Worst-case: Already sorted array with poor pivot selection - O(n²)"
        ],
        answer: "Worst-case is O(n²)"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Ignoring time and space complexity trade-offs",
      correction: "Always consider both time and space complexity when designing algorithms. Sometimes a more memory-intensive solution can be faster."
    },
    {
      mistake: "Assuming a single algorithm works best for all scenarios",
      correction: "Different problems require different algorithmic approaches. Choose the algorithm based on input characteristics and problem constraints."
    }
  ]
};
