export const recurrenceRelationsData = {
  title: "Recurrence Relations",
  introduction: "Recurrence Relations are mathematical equations that define a sequence recursively, where each term is defined in terms of preceding terms. In algorithm analysis, they are crucial for understanding the time complexity of recursive algorithms.",
  
  keyTopics: [
    {
      title: "Linear Recurrence Relations",
      content: "Recurrence relations where each term depends linearly on previous terms. Common in divide-and-conquer algorithms and dynamic programming.",
      formulas: [
        {
          name: "General Linear Recurrence",
          formula: "T(n) = aT(n-1) + bT(n-2) + f(n)",
          explanation: "Represents a linear recurrence relation with constant coefficients and an additional function term."
        }
      ]
    },
    {
      title: "Solving Techniques",
      content: "Various methods for solving recurrence relations, including substitution method, recursion tree method, and master theorem.",
      formulas: [
        {
          name: "Substitution Method",
          formula: "Guess the form of solution, then prove by mathematical induction",
          explanation: "A systematic approach to solving recurrence relations by making an educated guess and proving it rigorously."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Master Theorem",
      statement: "A comprehensive method for solving recurrences of the form T(n) = aT(n/b) + f(n)",
      explanation: "Provides a systematic way to determine the time complexity of divide-and-conquer algorithms."
    },
    {
      name: "Akra-Bazzi Theorem",
      statement: "A generalization of the Master Theorem for more complex recurrence relations",
      explanation: "Allows analysis of recurrence relations with more varied growth functions."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Solve the recurrence relation T(n) = 2T(n/2) + n and determine its time complexity.",
      solution: {
        steps: [
          "Apply Master Theorem",
          "a = 2, b = 2, f(n) = n",
          "Compare n^(log_b(a)) with f(n)",
          "Determine the complexity class"
        ],
        answer: "O(n log n)"
      }
    },
    {
      year: 2021,
      question: "Analyze the recurrence T(n) = T(n-1) + n. Solve using substitution method and determine its complexity.",
      solution: {
        steps: [
          "Expand the recurrence",
          "Observe the pattern",
          "Use mathematical induction",
          "Derive the closed-form solution"
        ],
        answer: "O(n²)"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Oversimplifying recurrence relations",
      correction: "Carefully analyze each term and its contribution to the overall complexity."
    },
    {
      mistake: "Applying Master Theorem without checking conditions",
      correction: "Ensure all conditions are met before using the Master Theorem for complexity analysis."
    }
  ]
};
