export const contextFreeGrammarsData = {
  title: "Context-Free Grammars",
  introduction: "Context-Free Grammars (CFGs) are formal systems for describing programming language syntax, parsing techniques, and computational language structures.",
  
  keyTopics: [
    {
      title: "Grammar Formalism",
      content: "Comprehensive exploration of production rules, derivation, and language generation. CFGs define the syntax of programming languages using non-terminal symbols, terminal symbols, production rules, and a start symbol.",
      formulas: [
        {
          name: "Grammar Complexity",
          formula: "Complexity = (Number of Production Rules)^2",
          explanation: "Quantifies the sophistication of context-free grammar structures. A higher number of production rules typically increases the complexity of grammar."
        },
        {
          name: "Production Rule Efficiency",
          formula: "Efficiency = (Total Productions) / (Parse Tree Size)",
          explanation: "Assesses the efficiency of grammar rules in generating parse trees, aiming for concise and expressive rules."
        }
      ]
    },
    {
      title: "Parsing Techniques",
      content: "Top-down and bottom-up parsing strategies for context-free languages. Parsing is a process of analyzing a string of symbols in accordance with the rules of a formal grammar.",
      formulas: [
        {
          name: "Parse Tree Efficiency",
          formula: "Efficiency = (Successful Parses) / (Total Parsing Attempts)",
          explanation: "Measures the effectiveness of parsing algorithms. More successful parses with fewer attempts indicate a more efficient parser."
        },
        {
          name: "Time Complexity of Parsing",
          formula: "Time Complexity = O(n^2) (for LL and LR parsing)",
          explanation: "Describes the time complexity of common parsing algorithms like LL(k) and LR(k), where n is the length of the input string."
        }
      ]
    },
    {
      title: "Ambiguity in Context-Free Grammars",
      content: "Ambiguity occurs when a grammar can generate a string in more than one way, leading to different parse trees. Ambiguous grammars can complicate parsing and analysis.",
      formulas: [
        {
          name: "Ambiguity Detection",
          formula: "Ambiguity = (Multiple Parse Trees) / (Single String)",
          explanation: "Detects ambiguous grammars by counting the number of parse trees that can be generated for a single string."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Chomsky Normal Form Theorem",
      statement: "Every context-free grammar can be converted to Chomsky Normal Form.",
      explanation: "Fundamental transformation for parsing and analysis. It simplifies the grammar for easier parsing, eliminating rules like 'A → ε' or 'A → BC'."
    },
    {
      name: "Pumping Lemma for Context-Free Languages",
      statement: "Provides necessary conditions for language membership.",
      explanation: "Critical tool for proving language properties. It helps prove whether a language is context-free by showing how strings in the language can be 'pumped' or expanded."
    },
    {
      name: "Greibach Normal Form Theorem",
      statement: "Every context-free grammar can be converted to Greibach Normal Form.",
      explanation: "It ensures that each production rule starts with a terminal symbol followed by a non-terminal, which is important for certain types of parsers."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a context-free grammar for a specific programming language construct.",
      solution: {
        steps: [
          "Identify the syntax of the language construct (e.g., expressions, loops)",
          "Define non-terminal symbols for each component of the construct",
          "Create production rules to derive the language from the start symbol",
          "Validate grammar completeness by checking if all possible inputs are covered"
        ],
        answer: "A systematic approach to grammar design, ensuring clarity and correctness while handling language constructs efficiently."
      }
    },
    {
      year: 2021,
      question: "Explain top-down and bottom-up parsing techniques.",
      solution: {
        steps: [
          "LL(k) parsing strategy: A top-down approach using left-to-right scanning and leftmost derivations",
          "LR(k) parsing approach: A bottom-up parsing strategy where the input string is reduced to the start symbol",
          "Recursive descent parsing: A top-down method where each non-terminal has a corresponding parsing function",
          "Shift-reduce parsing mechanisms: A bottom-up method using a stack to reduce the input string to the start symbol"
        ],
        answer: "Comprehensive analysis of parsing strategies, highlighting the differences between top-down and bottom-up approaches."
      }
    },
    {
      year: 2020,
      question: "Discuss the significance of ambiguity in context-free grammars and how it affects parsing.",
      solution: {
        steps: [
          "Define ambiguity in a grammar (multiple parse trees for the same string)",
          "Explain the implications of ambiguous grammars on parsing efficiency and correctness",
          "Describe methods to resolve ambiguity, such as refactoring or using disambiguation rules"
        ],
        answer: "Ambiguity in context-free grammars can lead to incorrect parsing. Methods to resolve it include rewriting the grammar to eliminate ambiguous rules or choosing a preferred parse tree."
      }
    }
  ],

  practiceProblems: [
    {
      difficulty: "Medium",
      question: "Convert the following context-free grammar to Chomsky Normal Form (CNF): A → AA | a",
      solution: {
        steps: [
          "Ensure the grammar has no ε-productions or unit productions",
          "Rewrite the grammar to have only binary production rules",
          "Apply transformations to get the grammar into CNF"
        ],
        answer: "The CNF version of the grammar: A → AB | a, B → A"
      }
    },
    {
      difficulty: "Hard",
      question: "Design a context-free grammar for arithmetic expressions with addition and multiplication, ensuring that the grammar is unambiguous.",
      solution: {
        steps: [
          "Define non-terminals for expressions, terms, and factors",
          "Ensure precedence rules for multiplication over addition",
          "Create production rules that represent the structure of arithmetic expressions"
        ],
        answer: "A systematic grammar for arithmetic expressions: E → E + T | T, T → T * F | F, F → (E) | id"
      }
    }
  ],

  applications: [
    {
      domain: "Compilers and Interpreters",
      description: "CFGs are essential for defining the syntax of programming languages. They are used in lexical analyzers and parsers to analyze and interpret source code."
    },
    {
      domain: "Natural Language Processing",
      description: "CFGs help model the structure of natural languages, providing the foundation for syntactic parsing of sentences in computational linguistics."
    },
    {
      domain: "Automata Theory",
      description: "CFGs are foundational in the study of formal languages and automata, providing a link between syntax and computational models."
    }
  ],

  commonMistakes: [
    {
      mistake: "Creating overly complex grammar rules",
      correction: "Aim for simplicity and clarity in grammar design. Complex rules can make parsing and analysis more difficult."
    },
    {
      mistake: "Overlooking ambiguity in grammar",
      correction: "Carefully design unambiguous production rules. Use techniques like factorization and left-factoring to remove ambiguity."
    },
    {
      mistake: "Neglecting grammar normalization",
      correction: "Always ensure the grammar is in a normal form (such as Chomsky or Greibach Normal Form) for easier parsing and analysis."
    }
  ]
};
