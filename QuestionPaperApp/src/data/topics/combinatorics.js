export const combinatoricsData = {
  title: "Combinatorics",
  introduction: `Combinatorics is the branch of mathematics studying counting, combination, and permutation. It provides powerful techniques for solving complex counting problems and is fundamental to probability, computer science, and algorithm design.`,
  
  keyTopics: [
    {
      title: "Counting Principles",
      content: `Fundamental counting techniques:
      • Multiplication Principle
      • Addition Principle
      • Permutations
      • Combinations
      • Factorial and Binomial Coefficients`,
      formulas: [
        {
          name: "Permutation Formula",
          formula: "P(n,r) = n! / (n-r)!",
          explanation: "Number of ways to arrange r items from n distinct items"
        },
        {
          name: "Combination Formula",
          formula: "C(n,r) = n! / (r! * (n-r)!)",
          explanation: "Number of ways to select r items from n distinct items"
        }
      ]
    },
    {
      title: "Advanced Counting Techniques",
      content: `Complex counting strategies:
      • Inclusion-Exclusion Principle
      • Pigeonhole Principle
      • Recurrence Relations
      • Generating Functions`,
      formulas: [
        {
          name: "Inclusion-Exclusion Principle",
          formula: "|A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|",
          explanation: "Counting elements in multiple sets with overlaps"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Binomial Theorem",
      statement: "(x + y)ⁿ = Σᵏ=₀ⁿ C(n,k) * xⁿ⁻ᵏ * yᵏ",
      explanation: "Expansion of binomial expressions with combinatorial coefficients"
    },
    {
      name: "Stirling's Approximation",
      statement: "n! ≈ √(2πn) * (n/e)ⁿ",
      explanation: "Approximation of factorial for large numbers"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "In how many ways can 5 different books be arranged on a shelf?",
      solution: {
        steps: [
          "Identify total number of distinct items",
          "Apply permutation formula",
          "Calculate total arrangements"
        ],
        answer: "5! = 120 ways"
      },
      explanation: "Using factorial for complete permutation"
    },
    {
      year: 2021,
      question: "Calculate the number of ways to select 3 items from 10 distinct items",
      solution: {
        steps: [
          "Identify problem as combination selection",
          "Apply combination formula",
          "Calculate total number of combinations"
        ],
        answer: "C(10,3) = 120 combinations"
      },
      explanation: "Systematic combination calculation"
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove the identity: C(n,k) = C(n,n-k)",
      solution: {
        steps: [
          "Expand combination formulas",
          "Algebraically manipulate",
          "Demonstrate symmetry of binomial coefficients"
        ],
        answer: "Mathematical proof of combination symmetry"
      }
    }
  ],

  applications: [
    {
      domain: "Algorithm Design",
      description: "Analyzing computational complexity and algorithm efficiency"
    },
    {
      domain: "Probability Theory",
      description: "Calculating probabilities and statistical distributions"
    },
    {
      domain: "Cryptography",
      description: "Generating secure key combinations"
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing permutations and combinations",
      correction: "Permutations consider order, combinations do not"
    },
    {
      mistake: "Overcomplicated counting approaches",
      correction: "Always start with fundamental counting principles"
    }
  ]
};
