export const propositionalLogicData = {
  title: "Propositional Logic",
  introduction: `Propositional Logic is the foundation of mathematical reasoning, dealing with logical propositions, truth values, and logical connectives. It forms the basis for understanding complex logical reasoning and computational logic.`,
  
  keyTopics: [
    {
      title: "Propositions and Truth Values",
      content: `A proposition is a declarative statement that is either true or false:
      • Simple propositions: Basic statements with definite truth values
      • Compound propositions: Created using logical connectives
      • Truth tables: Systematic way of evaluating logical expressions`,
      formulas: [
        {
          name: "Logical Connectives",
          formula: "∧ (AND), ∨ (OR), ¬ (NOT), → (IMPLIES), ↔ (EQUIVALENT)",
          explanation: "Fundamental operators for combining and manipulating propositions"
        }
      ]
    },
    {
      title: "Logical Equivalences",
      content: `Logical equivalences are fundamental transformations that preserve truth values:
      • De Morgan's Laws
      • Commutative Laws
      • Associative Laws
      • Distributive Laws
      • Absorption Laws`,
      formulas: [
        {
          name: "De Morgan's Laws",
          formula: "¬(p ∧ q) ≡ (¬p ∨ ¬q), ¬(p ∨ q) ≡ (¬p ∧ ¬q)",
          explanation: "Fundamental logical transformation rules"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Soundness Theorem",
      statement: "If a formula can be proved, it is logically valid",
      explanation: "Ensures that proof systems capture logical truth"
    },
    {
      name: "Completeness Theorem",
      statement: "If a formula is logically valid, it can be proved",
      explanation: "Demonstrates the power of logical reasoning systems"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Simplify the logical expression: ¬(p → q) ∨ (p ∧ ¬q)",
      solution: {
        steps: [
          "Apply logical equivalence rules",
          "Simplify using truth table or logical transformations",
          "Reduce to simplest equivalent form"
        ],
        answer: "p ∧ ¬q"
      },
      explanation: "Systematic logical simplification using equivalence rules"
    },
    {
      year: 2021,
      question: "Construct a truth table for the expression (p ∧ q) → (p ∨ r)",
      solution: {
        steps: [
          "Create a truth table with columns for p, q, r",
          "Evaluate each possible combination",
          "Determine truth values for the compound proposition"
        ],
        answer: "Truth table showing all 8 possible combinations"
      },
      explanation: "Comprehensive evaluation of logical implication"
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that (p → q) ≡ (¬p ∨ q) using logical equivalence rules",
      solution: {
        steps: [
          "Start with p → q",
          "Apply definition of implication",
          "Use logical equivalence transformations",
          "Demonstrate logical equivalence"
        ],
        answer: "Proof of logical equivalence"
      }
    }
  ],

  applications: [
    {
      domain: "Computer Science",
      description: "Fundamental to designing logical circuits and programming language semantics"
    },
    {
      domain: "Artificial Intelligence",
      description: "Used in knowledge representation and reasoning systems"
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing implication (→) with biconditional (↔)",
      correction: "Implication is not the same as logical equivalence"
    },
    {
      mistake: "Misunderstanding truth values in compound propositions",
      correction: "Always use truth tables to systematically evaluate complex logical expressions"
    }
  ]
};
