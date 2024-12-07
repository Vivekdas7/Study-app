export const computabilityTheoryData = {
  title: "Computability Theory",
  introduction: "Computability Theory explores the fundamental limits of algorithmic computation, examining what problems can be solved by computational methods.",
  
  keyTopics: [
    {
      title: "Decidability",
      content: "Theoretical framework for determining whether computational problems can be solved algorithmically. Problems that are decidable have algorithms that guarantee a solution in a finite amount of time.",
      formulas: [
        {
          name: "Decidability Index",
          formula: "Index = (Decidable Problems) / (Total Computational Problems)",
          explanation: "Quantifies the proportion of solvable computational problems."
        },
        {
          name: "Halting Problem",
          formula: "H(P) = {Yes, if program P halts; No, if P does not halt}",
          explanation: "The Halting Problem is a classic example of an undecidable problem in computability theory."
        }
      ]
    },
    {
      title: "Computational Complexity",
      content: "Analysis of computational resources required to solve different types of problems. This involves categorizing problems based on time and space requirements.",
      formulas: [
        {
          name: "Complexity Measure",
          formula: "Complexity = f(n) where f represents resource consumption",
          explanation: "Evaluates algorithmic efficiency and resource requirements."
        },
        {
          name: "Big O Notation",
          formula: "O(f(n)) = Upper bound of time or space complexity",
          explanation: "Describes the asymptotic behavior of an algorithm, focusing on the largest term as input size grows."
        }
      ]
    },
    {
      title: "Undecidability and Incomputability",
      content: "Explores problems that cannot be solved by any algorithm. The distinction between undecidable and incomputable problems is crucial in computability theory.",
      formulas: [
        {
          name: "Incomputability Index",
          formula: "Index = (Incomputable Problems) / (Total Computational Problems)",
          explanation: "Quantifies the proportion of problems that cannot be computed by any algorithm."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Rice's Theorem",
      statement: "Any non-trivial semantic property of programs is undecidable.",
      explanation: "This theorem demonstrates that it is impossible to decide properties like program equivalence or halting in general."
    },
    {
      name: "Reduction Theorem",
      statement: "Complex problems can be transformed into simpler, equivalent problems.",
      explanation: "Reduction is a key method in computational theory, used to show the relative difficulty of problems."
    },
    {
      name: "Church-Turing Thesis",
      statement: "Anything computable by a human using an algorithm can be computed by a Turing machine.",
      explanation: "This foundational thesis connects the concepts of algorithmic computation and machine computation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Analyze the decidability of a specific computational problem.",
      solution: {
        steps: [
          "Define problem characteristics (determine if the problem is algorithmic or not)",
          "Apply decidability criteria (e.g., check if it fits within known decidable classes)",
          "Demonstrate computational limitations (provide an undecidability proof if needed)",
          "Provide theoretical justification (link the result to known theorems like Rice's or the Halting Problem)"
        ],
        answer: "Systematic approach to analyzing computational problems by applying decidability criteria."
      }
    },
    {
      year: 2021,
      question: "Explain the significance of undecidable problems in computational theory.",
      solution: {
        steps: [
          "Halting problem example (explain why it's undecidable)",
          "Theoretical implications (what undecidability means for algorithmic computation)",
          "Computational boundaries (understanding what can't be computed)",
          "Algorithmic limitations (explain the importance of these limitations in real-world applications)"
        ],
        answer: "Comprehensive exploration of computational constraints and the significance of undecidable problems in shaping the limits of computation."
      }
    },
    {
      year: 2020,
      question: "What is the difference between decidable and undecidable problems?",
      solution: {
        steps: [
          "Define decidable problems (problems that have an algorithmic solution)",
          "Define undecidable problems (problems that cannot be solved algorithmically)",
          "Provide examples (e.g., Halting problem for undecidability)",
          "Link to theoretical implications (why undecidability is fundamental to computational theory)"
        ],
        answer: "Decidable problems are those that can be solved by a finite algorithm, while undecidable problems cannot be solved algorithmically."
      }
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that the Halting Problem is undecidable.",
      solution: {
        steps: [
          "Assume the existence of an algorithm that can solve the Halting Problem",
          "Show that this leads to a contradiction (using diagonalization or self-reference)",
          "Conclude that such an algorithm cannot exist"
        ],
        answer: "Proof that no algorithm can decide whether an arbitrary program halts on a given input."
      }
    },
    {
      difficulty: "Medium",
      question: "Given a set of problems, categorize them as decidable or undecidable.",
      solution: {
        steps: [
          "Identify the nature of each problem",
          "Check known results in computability theory (e.g., the Halting problem, Turing machine universality)",
          "Classify the problem based on its decidability status"
        ],
        answer: "Decidable problems are those that can be algorithmically solved, while undecidable problems cannot."
      }
    }
  ],

  applications: [
    {
      domain: "Algorithm Design",
      description: "Understanding decidability and computational complexity helps in designing efficient algorithms."
    },
    {
      domain: "Cryptography",
      description: "Incomputability results play a role in the design of secure cryptographic protocols."
    },
    {
      domain: "Artificial Intelligence",
      description: "Incorporating undecidable problems into AI systems helps define the limits of AI capabilities."
    },
    {
      domain: "Theoretical Computer Science",
      description: "Foundational concepts from computability theory shape the study of computational limits and complexity classes."
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all problems are computationally solvable.",
      correction: "Recognize fundamental computational limitations, such as undecidability and incomputability."
    },
    {
      mistake: "Overlooking complexity classes.",
      correction: "Understand different computational complexity categories (P, NP, NP-complete, etc.) and their implications."
    },
    {
      mistake: "Confusing decidable and undecidable problems.",
      correction: "Clearly differentiate between problems that can be solved algorithmically (decidable) and those that cannot (undecidable)."
    }
  ]
};
