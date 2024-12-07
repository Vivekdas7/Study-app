export const turingMachinesData = {
  title: "Turing Machines",
  introduction: "Turing Machines are fundamental computational models representing the theoretical limits of algorithmic computation and computational complexity.",
  
  keyTopics: [
    {
      title: "Machine Configuration",
      content: "Comprehensive exploration of tape, head, and state interactions in Turing machines.",
      formulas: [
        {
          name: "Computational Complexity",
          formula: "Complexity = O(f(n)) where f represents tape traversal",
          explanation: "Quantifies the computational resources required."
        }
      ]
    },
    {
      title: "Computational Capabilities",
      content: "Theoretical limits and capabilities of Turing machine computations.",
      formulas: [
        {
          name: "Halting Probability",
          formula: "P(Halt) = (Terminating Configurations) / (Total Configurations)",
          explanation: "Measures the likelihood of computation termination."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Church-Turing Thesis",
      statement: "Any effectively calculable function can be computed by a Turing machine",
      explanation: "Fundamental principle of computational theory."
    },
    {
      name: "Undecidability Theorem",
      statement: "Some computational problems cannot be solved by any Turing machine",
      explanation: "Demonstrates fundamental limitations of computation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a Turing machine to solve a specific computational problem.",
      solution: {
        steps: [
          "Define initial tape configuration",
          "Create state transition rules",
          "Implement head movement logic",
          "Validate problem-solving approach"
        ],
        answer: "Systematic Turing machine design methodology"
      }
    },
    {
      year: 2021,
      question: "Explain the halting problem and its significance in computational theory.",
      solution: {
        steps: [
          "Undecidability concept",
          "Proof by contradiction",
          "Implications for algorithm design",
          "Computational limitations"
        ],
        answer: "Comprehensive analysis of computational boundaries"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming Turing machines can solve all problems",
      correction: "Recognize fundamental computational limitations."
    },
    {
      mistake: "Overlooking computational complexity",
      correction: "Consider resource requirements and algorithmic efficiency."
    }
  ]
};
