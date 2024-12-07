export const divideAndConquerData = {
  title: "Divide and Conquer Algorithms",
  introduction: "Divide and Conquer is a powerful algorithmic paradigm that solves complex problems by breaking them down into smaller, more manageable subproblems, solving them independently, and then combining their solutions.",
  
  keyTopics: [
    {
      title: "Fundamental Approach",
      content: "The divide and conquer strategy involves three main steps: Divide the problem into smaller subproblems, Conquer the subproblems by solving them recursively, and Combine the solutions to create a solution to the original problem.",
      formulas: [
        {
          name: "General Divide and Conquer Recurrence",
          formula: "T(n) = aT(n/b) + f(n)",
          explanation: "Represents the time complexity of divide and conquer algorithms, where a is the number of subproblems, b is the division factor, and f(n) is the cost of dividing and combining."
        }
      ]
    },
    {
      title: "Classic Divide and Conquer Algorithms",
      content: "Several important algorithms use the divide and conquer approach, including Merge Sort, Quick Sort, Binary Search, and Strassen's Matrix Multiplication.",
      formulas: [
        {
          name: "Merge Sort Time Complexity",
          formula: "T(n) = 2T(n/2) + O(n)",
          explanation: "Demonstrates the typical divide and conquer recurrence for sorting algorithms."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Master Theorem",
      statement: "A method for solving recurrence relations of the form T(n) = aT(n/b) + f(n)",
      explanation: "Provides a systematic way to determine the time complexity of divide and conquer algorithms."
    },
    {
      name: "Divide and Conquer Efficiency Theorem",
      statement: "The efficiency of divide and conquer algorithms depends on the cost of division, recursive solving, and combination.",
      explanation: "Balancing these three components is crucial for optimal performance."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Analyze the time complexity of Merge Sort using the divide and conquer approach. Explain how the algorithm achieves O(n log n) complexity.",
      solution: {
        steps: [
          "Divide array into two halves recursively",
          "Merge sorted subarrays",
          "Recursion depth is log n",
          "Merging takes O(n) time"
        ],
        answer: "O(n log n)"
      }
    },
    {
      year: 2021,
      question: "Compare the divide and conquer approach of Merge Sort and Quick Sort. Discuss their worst-case and average-case time complexities.",
      solution: {
        steps: [
          "Merge Sort: O(n log n) in all cases",
          "Quick Sort: O(n log n) average, O(n²) worst-case",
          "Merge Sort uses extra space, Quick Sort in-place",
          "Performance depends on pivot selection"
        ],
        answer: "Depends on specific requirements"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking the overhead of division and combination",
      correction: "Consider the entire process, not just the recursive solving step."
    },
    {
      mistake: "Assuming divide and conquer is always the best approach",
      correction: "Evaluate the problem's characteristics and choose the most suitable algorithm."
    }
  ]
};
