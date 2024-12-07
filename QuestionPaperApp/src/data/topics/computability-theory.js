export const computabilityTheoryData = {
  title: "Computability Theory",
  introduction: "Computability Theory explores the fundamental limits of algorithmic computation, examining what problems can be solved by computational methods.",
  
  keyTopics: [
    {
      title: "Decidability",
      content: "Theoretical framework for determining whether computational problems can be solved algorithmically.",
      formulas: [
        {
          name: "Decidability Index",
          formula: "Index = (Decidable Problems) / (Total Computational Problems)",
          explanation: "Quantifies the proportion of solvable computational problems."
        }
      ]
    },
    {
      title: "Computational Complexity",
      content: "Analysis of computational resources required to solve different types of problems.",
      formulas: [
        {
          name: "Complexity Measure",
          formula: "Complexity = f(n) where f represents resource consumption",
          explanation: "Evaluates algorithmic efficiency and resource requirements."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Rice's Theorem",
      statement: "Any non-trivial semantic property of programs is undecidable",
      explanation: "Fundamental limitation of computational analysis."
    },
    {
      name: "Reduction Theorem",
      statement: "Complex problems can be transformed into simpler, equivalent problems",
      explanation: "Critical technique for computational problem solving."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Analyze the decidability of a specific computational problem.",
      solution: {
        steps: [
          "Define problem characteristics",
          "Apply decidability criteria",
          "Demonstrate computational limitations",
          "Provide theoretical justification"
        ],
        answer: "Systematic approach to computational problem analysis"
      }
    },
    {
      year: 2021,
      question: "Explain the significance of undecidable problems in computational theory.",
      solution: {
        steps: [
          "Halting problem example",
          "Theoretical implications",
          "Computational boundaries",
          "Algorithmic limitations"
        ],
        answer: "Comprehensive exploration of computational constraints"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all problems are computationally solvable",
      correction: "Recognize fundamental computational limitations."
    },
    {
      mistake: "Overlooking complexity classes",
      correction: "Understand different computational complexity categories."
    }
  ]
};
