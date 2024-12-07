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
      • Factorial and Binomial Coefficients
      • Multinomial Coefficients`,
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
        },
        {
          name: "Multinomial Coefficient Formula",
          formula: "C(n; n₁, n₂, ..., nk) = n! / (n₁! * n₂! * ... * nk!)",
          explanation: "Generalization of combinations when selecting items from multiple categories"
        }
      ]
    },
    {
      title: "Advanced Counting Techniques",
      content: `Complex counting strategies:
      • Inclusion-Exclusion Principle
      • Pigeonhole Principle
      • Recurrence Relations
      • Generating Functions
      • Stirling Numbers
      • Partitions`,
      formulas: [
        {
          name: "Inclusion-Exclusion Principle",
          formula: "|A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|",
          explanation: "Counting elements in multiple sets with overlaps"
        },
        {
          name: "Stirling Numbers",
          formula: "S(n,k) = k! * Σ (-1)ᵏᵗ * C(k,t) * (k-t)ⁿ",
          explanation: "Counting the number of ways to partition a set of n elements into k non-empty subsets"
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
    },
    {
      name: "Pascal's Rule",
      statement: "C(n,r) = C(n-1,r-1) + C(n-1,r)",
      explanation: "Recursive relationship for computing binomial coefficients"
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
    },
    {
      year: 2020,
      question: "How many different 4-digit numbers can be formed using the digits 1, 2, 3, and 4 without repetition?",
      solution: {
        steps: [
          "Determine number of available digits",
          "Apply permutation formula for selecting 4 digits",
          "Calculate total number of arrangements"
        ],
        answer: "4! = 24 numbers"
      },
      explanation: "Permutation of 4 digits with no repetition"
    },
    {
      year: 2019,
      question: "How many ways can a committee of 3 members be selected from a group of 8 people?",
      solution: {
        steps: [
          "Identify selection as a combination problem",
          "Apply combination formula",
          "Calculate total number of combinations"
        ],
        answer: "C(8,3) = 56 ways"
      },
      explanation: "Combination of 3 members from 8 people"
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
    },
    {
      difficulty: "Medium",
      question: "Find the number of ways to distribute 6 identical objects into 3 distinct boxes.",
      solution: {
        steps: [
          "Recognize as stars and bars problem",
          "Apply stars and bars formula",
          "Calculate total number of distributions"
        ],
        answer: "C(6+3-1, 3-1) = C(8,2) = 28 ways"
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
    },
    {
      domain: "Game Theory",
      description: "Determining optimal strategies and outcomes"
    },
    {
      domain: "Network Design",
      description: "Analyzing connectivity and routing paths"
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
    },
    {
      mistake: "Ignoring symmetry in combination problems",
      correction: "Recognize that C(n,k) = C(n,n-k) and apply it to simplify calculations"
    }
  ]
};
