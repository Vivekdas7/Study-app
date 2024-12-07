export const asymptoticalAnalysisData = {
  title: "Asymptotic Analysis of Algorithms",
  introduction: "Asymptotic Analysis is a fundamental technique in computer science for evaluating the performance and efficiency of algorithms as input sizes grow. It provides a standardized method to compare and understand algorithmic complexity, focusing on how an algorithm scales with increasing input sizes, rather than on specific input values.",

  keyTopics: [
    {
      title: "Big O Notation",
      content: "Big O Notation is used to describe the upper bound of an algorithm's runtime or space requirements. It represents the worst-case scenario, giving an idea of the longest amount of time an algorithm could take to complete or the maximum memory it could consume.",
      formulas: [
        {
          name: "Big O Definition",
          formula: "O(g(n)) = {f(n): there exist positive constants c and n0 such that 0 ≤ f(n) ≤ c * g(n) for all n ≥ n0}",
          explanation: "This defines the asymptotic upper bound for the growth rate of a function, ensuring that the function does not grow faster than a constant multiple of g(n)."
        },
        {
          name: "Common Big O Classes",
          formula: "O(1), O(log n), O(n), O(n log n), O(n²), O(2^n)",
          explanation: "These are common growth rates, where O(1) is constant time, O(log n) logarithmic, O(n) linear, and so on, reflecting varying levels of algorithm efficiency."
        }
      ],
      graph: {
        description: "Graph showing various growth rates, including O(1), O(log n), O(n), and O(n²).",
        url: "graph_big_o.png"
      }
    },
    {
      title: "Omega and Theta Notations",
      content: "Omega (Ω) Notation describes the lower bound of an algorithm's runtime or space requirements, while Theta (Θ) Notation describes a tight bound, meaning the algorithm's runtime is bounded both above and below by the same growth rate.",
      formulas: [
        {
          name: "Omega Notation",
          formula: "Ω(g(n)) = {f(n): there exist positive constants c and n0 such that 0 ≤ c * g(n) ≤ f(n) for all n ≥ n0}",
          explanation: "Omega Notation provides the best-case growth rate, helping to understand the most efficient performance of an algorithm."
        },
        {
          name: "Theta Notation",
          formula: "Θ(g(n)) = {f(n): there exist positive constants c1, c2, and n0 such that c1 * g(n) ≤ f(n) ≤ c2 * g(n) for all n ≥ n0}",
          explanation: "Theta Notation gives a tight bound, indicating that the algorithm grows at the same rate as g(n)."
        }
      ],
      graph: {
        description: "Comparison of growth rates for Omega, Theta, and Big O Notations.",
        url: "graph_omega_theta.png"
      }
    }
  ],

  theorems: [
    {
      name: "Master Theorem",
      statement: "A method for solving recurrence relations of the form T(n) = aT(n/b) + f(n)",
      explanation: "Master Theorem provides a quick way to analyze the time complexity of divide-and-conquer algorithms by comparing the growth rate of f(n) with n^(log_b(a)). It helps determine whether the runtime is dominated by recursive calls or by the additional work f(n).",
      graph: {
        description: "Graph depicting cases of Master Theorem and their impact on time complexity.",
        url: "graph_master_theorem.png"
      }
    },
    {
      name: "Complexity Comparison Theorem",
      statement: "Different complexity classes have different growth rates and scalability",
      explanation: "This theorem emphasizes the importance of understanding the differences in growth rates between complexity classes, such as O(log n), O(n), and O(n²), to select efficient algorithms for large-scale problems."
    },
    {
      name: "Amortized Analysis Theorem",
      statement: "Amortized analysis averages the cost of an operation over a sequence of operations",
      explanation: "It ensures that expensive operations (e.g., resizing a dynamic array) are spread out over a series of cheaper operations, leading to a lower average cost."
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
          "Since log_b(a) = log_2(2) = 1 and f(n) = n, T(n) belongs to Case 2 of Master Theorem",
          "Time complexity is O(n log n)"
        ],
        answer: "O(n log n)",
        graph: {
          description: "Recursive tree and its complexity for T(n) = 2T(n/2) + n.",
          url: "graph_recursive_tree.png"
        }
      }
    },
    {
      year: 2021,
      question: "Compare the asymptotic complexities of O(n), O(log n), and O(n²). Explain their scalability for large input sizes.",
      solution: {
        steps: [
          "O(log n) grows slowest, as it increases very gradually even for large n",
          "O(n) grows linearly, making it scalable for moderately large n",
          "O(n²) grows quadratically, which is inefficient for large n",
          "Performance degrades significantly for O(n²) as input size grows"
        ],
        answer: "O(log n) < O(n) < O(n²)"
      }
    },
    {
      year: 2020,
      question: "Explain the significance of Theta (Θ) notation in asymptotic analysis with an example.",
      solution: {
        steps: [
          "Define Theta Notation",
          "Provide an example: Merge Sort has a time complexity of Θ(n log n)",
          "Explain that Merge Sort’s time complexity is bounded both above and below by n log n",
          "Emphasize that Θ provides a precise growth rate for performance analysis"
        ],
        answer: "Theta Notation is crucial for identifying the exact growth rate of algorithms, providing clarity in performance comparisons."
      }
    },
    {
      year: 2019,
      question: "Solve the recurrence relation T(n) = 3T(n/3) + n using Master Theorem and determine its complexity.",
      solution: {
        steps: [
          "Apply Master Theorem",
          "a = 3, b = 3, f(n) = n",
          "Compare n^(log_b(a)) with f(n)",
          "Since log_b(a) = log_3(3) = 1 and f(n) = n, T(n) belongs to Case 2 of Master Theorem",
          "Time complexity is O(n log n)"
        ],
        answer: "O(n log n)"
      }
    },
    {
      year: 2018,
      question: "For an algorithm with time complexity T(n) = T(n-1) + O(1), determine the asymptotic complexity.",
      solution: {
        steps: [
          "Expand the recurrence relation",
          "T(n) = T(n-1) + O(1)",
          "T(n) = T(n-2) + O(1) + O(1)",
          "Continue expansion until T(1)",
          "Sum all terms: T(n) = O(n)"
        ],
        answer: "O(n)"
      }
    },
    {
      year: 2017,
      question: "Evaluate the space complexity of recursive algorithms and its impact on stack usage. Provide an example with Fibonacci calculation.",
      solution: {
        steps: [
          "Define space complexity for recursion",
          "Analyze the call stack usage",
          "Provide example: Fibonacci recursive algorithm",
          "Space complexity is proportional to the recursion depth",
          "For Fibonacci, depth is O(n)"
        ],
        answer: "Space complexity for recursive Fibonacci is O(n)."
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing average-case and worst-case time complexity",
      correction: "Always consider the context of the problem and analyze the algorithm for all possible cases, including best, average, and worst."
    },
    {
      mistake: "Neglecting space complexity in asymptotic analysis",
      correction: "Both time and space complexity are vital for evaluating algorithm efficiency. Ignoring one can lead to suboptimal implementations."
    },
    {
      mistake: "Improper application of Master Theorem",
      correction: "Ensure the recurrence fits the form required for Master Theorem before applying it. Misapplication can lead to incorrect results."
    },
    {
      mistake: "Assuming asymptotic complexity reflects practical performance",
      correction: "Consider factors like constant factors, lower-order terms, and hardware when analyzing real-world performance."
    }
  ]
};
