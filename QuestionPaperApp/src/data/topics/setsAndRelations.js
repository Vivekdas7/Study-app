export const setsAndRelationsData = {
  title: "Sets and Relations",
  introduction: `Sets and Relations form the mathematical foundation for understanding structured collections and connections between elements. They are crucial in computer science for modeling data structures, algorithms, and computational reasoning.`,
  
  keyTopics: [
    {
      title: "Set Theory Fundamentals",
      content: `Sets are collections of distinct objects:
      • Set operations: Union (∪), Intersection (∩), Difference (-)
      • Set types: Finite, Infinite, Empty, Universal
      • Set representations: Roster method, Set-builder notation`,
      formulas: [
        {
          name: "Set Cardinality",
          formula: "|A ∪ B| = |A| + |B| - |A ∩ B|",
          explanation: "Calculates the number of elements in the union of two sets"
        }
      ]
    },
    {
      title: "Relations and Properties",
      content: `Relations define connections between elements of sets:
      • Types of relations: Reflexive, Symmetric, Transitive
      • Equivalence relations
      • Partial and total orders
      • Relation composition`,
      formulas: [
        {
          name: "Relation Composition",
          formula: "R ∘ S = {(x,z) | ∃y ∈ Y : (x,y) ∈ R ∧ (y,z) ∈ S}",
          explanation: "Combines two relations to create a new relation"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Cantor-Bernstein Theorem",
      statement: "If |A| ≤ |B| and |B| ≤ |A|, then |A| = |B|",
      explanation: "Fundamental theorem about set cardinalities"
    },
    {
      name: "Closure Properties of Relations",
      statement: "Closure of a relation under specific properties",
      explanation: "Describes how relations can be extended to satisfy certain properties"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Let A = {1,2,3,4}, B = {3,4,5,6}. Find A ∩ B, A ∪ B, and A - B",
      solution: {
        steps: [
          "Identify common elements for intersection",
          "Combine unique elements for union",
          "Remove B's elements from A for difference"
        ],
        answer: "A ∩ B = {3,4}, A ∪ B = {1,2,3,4,5,6}, A - B = {1,2}"
      },
      explanation: "Systematic set operation calculations"
    },
    {
      year: 2021,
      question: "Determine if the relation R on {1,2,3,4} defined by xRy if |x-y| ≤ 1 is reflexive, symmetric, and transitive",
      solution: {
        steps: [
          "Check reflexivity: Is xRx true for all x?",
          "Check symmetry: If xRy, is yRx true?",
          "Check transitivity: If xRy and yRz, is xRz true?"
        ],
        answer: "Reflexive and symmetric, but not transitive"
      },
      explanation: "Systematic analysis of relation properties"
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that the intersection of two equivalence relations is not necessarily an equivalence relation",
      solution: {
        steps: [
          "Construct a counterexample",
          "Show violation of reflexivity, symmetry, or transitivity",
          "Demonstrate the complexity of relation properties"
        ],
        answer: "Proof by counterexample"
      }
    }
  ],

  applications: [
    {
      domain: "Database Systems",
      description: "Used in defining relationships between data entities"
    },
    {
      domain: "Graph Theory",
      description: "Fundamental to understanding network and graph structures"
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing set operations",
      correction: "Carefully distinguish between union, intersection, and difference"
    },
    {
      mistake: "Assuming all relations have all properties",
      correction: "Verify each property (reflexivity, symmetry, transitivity) separately"
    }
  ]
};
