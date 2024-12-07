export const dynamicProgrammingData = {
  title: "Dynamic Programming",
  introduction: "Dynamic Programming is an advanced algorithmic technique that solves complex problems by breaking them down into simpler subproblems, solving each subproblem only once, and storing their solutions to avoid redundant computations.",
  
  keyTopics: [
    {
      title: "Fundamental Principles",
      content: "Dynamic Programming involves two main approaches: Top-down (Memoization) and Bottom-up (Tabulation). Both aim to optimize recursive algorithms by storing and reusing intermediate results.",
      formulas: [
        {
          name: "Memoization Formula",
          formula: "f(n) = { memo[n] if memo[n] is computed, compute_and_store(n) otherwise }",
          explanation: "Stores computed results to avoid redundant recursive calls."
        }
      ]
    },
    {
      title: "Classic Dynamic Programming Problems",
      content: "Famous problems solved using dynamic programming include Fibonacci sequence, Longest Common Subsequence, Knapsack Problem, and Matrix Chain Multiplication.",
      formulas: [
        {
          name: "Fibonacci with DP",
          formula: "F(n) = F(n-1) + F(n-2), with memoization",
          explanation: "Reduces exponential time complexity to linear time."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Optimal Substructure Theorem",
      statement: "A problem can be solved optimally by solving its subproblems optimally.",
      explanation: "Fundamental principle of dynamic programming that allows breaking down complex problems."
    },
    {
      name: "Overlapping Subproblems Theorem",
      statement: "The same subproblems are solved multiple times in a naive recursive approach.",
      explanation: "Dynamic programming eliminates redundant computations by storing and reusing results."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Solve the 0/1 Knapsack Problem using dynamic programming. Analyze its time and space complexity.",
      solution: {
        steps: [
          "Create a 2D DP table",
          "Fill table bottom-up",
          "Time complexity: O(nW)",
          "Space complexity: O(nW)",
          "n: number of items, W: knapsack capacity"
        ],
        answer: "Optimal solution with O(nW) complexity"
      }
    },
    {
      year: 2021,
      question: "Compare the recursive and dynamic programming approaches for computing Fibonacci numbers. Explain the performance improvement.",
      solution: {
        steps: [
          "Recursive: Exponential time O(2^n)",
          "DP (Memoization): Linear time O(n)",
          "DP stores and reuses previously computed values",
          "Eliminates redundant recursive calls"
        ],
        answer: "Dynamic Programming is significantly more efficient"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Applying dynamic programming to problems without optimal substructure",
      correction: "Carefully analyze the problem's structure before using dynamic programming."
    },
    {
      mistake: "Neglecting space complexity in dynamic programming solutions",
      correction: "Consider both time and space trade-offs when implementing DP solutions."
    }
  ]
};
