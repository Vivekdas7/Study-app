export const asymptoticalAnalysisData = {
  title: "Asymptotic Analysis of Algorithms",
  introduction: "Asymptotic Analysis is a fundamental technique in computer science for evaluating the performance and efficiency of algorithms as input sizes grow. It provides a standardized method to compare and understand algorithmic complexity.",
  
  keyTopics: [
    {
      title: "Big O Notation",
      content: "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In algorithm analysis, it represents the worst-case time complexity.",
      formulas: [
        {
          name: "Big O Definition",
          formula: "O(g(n)) = {f(n): there exist positive constants c and n0 such that 0 ≤ f(n) ≤ c * g(n) for all n ≥ n0}",
          explanation: "Represents an upper bound on the growth rate of an algorithm's time complexity."
        }
      ]
    },
    {
      title: "Omega and Theta Notations",
      content: "Complementary notations to Big O that provide lower bound (Ω) and tight bound (Θ) representations of algorithmic complexity.",
      formulas: [
        {
          name: "Omega Notation",
          formula: "Ω(g(n)) = {f(n): there exist positive constants c and n0 such that 0 ≤ c * g(n) ≤ f(n) for all n ≥ n0}",
          explanation: "Represents the lower bound of an algorithm's time complexity."
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
      name: "Complexity Comparison Theorem",
      statement: "Different complexity classes have different growth rates and scalability",
      explanation: "Understanding these differences is crucial for algorithm selection and optimization."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Analyze the time complexity of an algorithm with the recurrence relation T(n) = 2T(n/2) + n. Determine its asymptotic behavior.",
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
      question: "Compare the asymptotic complexities of O(n), O(log n), and O(n²). Explain their scalability for large input sizes.",
      solution: {
        steps: [
          "O(log n) grows slowest",
          "O(n) grows linearly",
          "O(n²) grows quadratically",
          "Performance degrades significantly for large n"
        ],
        answer: "O(log n) < O(n) < O(n²)"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing average-case and worst-case time complexity",
      correction: "Always consider different complexity scenarios when analyzing algorithms."
    },
    {
      mistake: "Neglecting space complexity in asymptotic analysis",
      correction: "Time complexity is important, but space complexity is equally crucial for algorithm evaluation."
    }
  ]
};
