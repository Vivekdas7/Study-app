export const booleanAlgebraData = {
  title: "Boolean Algebra",
  introduction: "Boolean Algebra is the mathematical foundation of digital logic, providing a systematic approach to analyzing and designing digital circuits using binary logic. It is essential for understanding and implementing logical expressions and their simplifications in computer science and engineering.",

  keyTopics: [
    {
      title: "Boolean Operations",
      content: "Comprehensive exploration of AND, OR, NOT, XOR, NAND, NOR, and XNOR operations, which form the building blocks of logical expressions and digital circuits.",
      formulas: [
        {
          name: "Basic Boolean Operations",
          formula: "A AND B = A \u00b7 B, A OR B = A + B, NOT A = \u00acA",
          explanation: "These fundamental operations are the basis of all boolean algebra expressions. AND represents intersection, OR represents union, and NOT represents negation."
        },
        {
          name: "Boolean Expression Complexity",
          formula: "Complexity = log2(Number of Logical Operations)",
          explanation: "Quantifies the sophistication and computational cost of evaluating boolean expressions."
        }
      ]
    },
    {
      title: "Boolean Identities",
      content: "Fundamental laws and properties such as the Idempotent Law, Domination Law, and Absorption Law that govern logical transformations and simplifications.",
      formulas: [
        {
          name: "Simplification Efficiency",
          formula: "Efficiency = (Reduced Logical Steps) / (Original Logical Steps)",
          explanation: "Measures the effectiveness of boolean expression simplification techniques."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "De Morgan's Theorem",
      statement: "\u00ac(A AND B) = \u00acA OR \u00acB, \u00ac(A OR B) = \u00acA AND \u00acB",
      explanation: "De Morgan's laws are essential for transforming logical expressions and simplifying complex circuits. They provide an equivalence between AND/OR operations under negation."
    },
    {
      name: "Boolean Completeness Theorem",
      statement: "Any logical function can be constructed using only NAND or NOR gates.",
      explanation: "This theorem highlights the universality of NAND and NOR gates, which can represent any logical operation."
    }
  ],

  gateQuestions: [
    {
      year: 2023,
      question: "Simplify the boolean expression A \u00b7 (A + B).",
      solution: {
        steps: [
          "Apply the Absorption Law: A \u00b7 (A + B) = A.",
          "The simplified expression is A."
        ],
        answer: "A"
      }
    },
    {
      year: 2022,
      question: "Prove De Morgan's theorem for \u00ac(A AND B).",
      solution: {
        steps: [
          "Express \u00ac(A AND B) as NOT of AND operation.",
          "Apply De Morgan's theorem: \u00ac(A AND B) = \u00acA OR \u00acB.",
          "Verify by truth table."
        ],
        answer: "\u00ac(A AND B) = \u00acA OR \u00acB."
      }
    },
    {
      year: 2021,
      question: "Explain the universal properties of NAND gates.",
      solution: {
        steps: [
          "Define a NAND gate and its truth table.",
          "Demonstrate how AND, OR, and NOT gates can be constructed using NAND gates.",
          "Discuss the significance of NAND as a universal gate."
        ],
        answer: "NAND gates are universal because they can replicate all other basic logic gates."
      }
    },
    {
      year: 2020,
      question: "Construct a NOT gate using a NAND gate.",
      solution: {
        steps: [
          "Connect both inputs of the NAND gate to the same input signal (A).",
          "The output will be \u00acA, functioning as a NOT gate."
        ],
        answer: "A NOT gate can be constructed by feeding the same input to both terminals of a NAND gate."
      }
    },
    {
      year: 2019,
      question: "Simplify the boolean expression \u00ac(A + B) \u00b7 (A + B).",
      solution: {
        steps: [
          "Apply De Morgan's theorem to \u00ac(A + B): \u00ac(A + B) = \u00acA \u00b7 \u00acB.",
          "Substitute and simplify: (\u00acA \u00b7 \u00acB) \u00b7 (A + B).",
          "Apply the Distribution Law and Absorption Law to simplify further.",
          "The final expression is 0 (always false)."
        ],
        answer: "The simplified expression is 0."
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing De Morgan's laws with other boolean properties.",
      correction: "Practice truth tables and logical equivalences to internalize De Morgan's laws."
    },
    {
      mistake: "Overcomplicating boolean expression simplifications.",
      correction: "Apply boolean identities systematically and avoid redundant steps."
    }
  ]
};
