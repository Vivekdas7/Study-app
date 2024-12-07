export const vectorSpacesData = {
  title: "Vector Spaces",
  introduction: `Vector Spaces are fundamental algebraic structures that provide a rigorous framework for understanding linear transformations, geometric operations, and mathematical modeling in computer science and engineering.`,
  
  keyTopics: [
    {
      title: "Definition and Basic Properties",
      content: `A vector space is a collection of vectors that can be added together and multiplied by scalars. Key properties include:
      • Closure under addition
      • Closure under scalar multiplication
      • Existence of zero vector
      • Existence of additive inverse
      • Associativity and commutativity of vector addition`,
      formulas: [
        {
          name: "Vector Space Axioms",
          formula: "∀u, v, w ∈ V, ∀a, b ∈ F",
          explanation: "Where V is a vector space and F is the field of scalars (typically real or complex numbers)"
        }
      ]
    },
    {
      title: "Subspaces",
      content: `A subspace is a subset of a vector space that is itself a vector space. Conditions for a subspace:
      • Contains the zero vector
      • Closed under vector addition
      • Closed under scalar multiplication`,
      formulas: [
        {
          name: "Subspace Condition",
          formula: "H ⊆ V is a subspace iff ∀u, v ∈ H, ∀c ∈ F: (u + v) ∈ H and (cu) ∈ H",
          explanation: "A subset forms a subspace if it satisfies vector space axioms"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Dimension Theorem",
      statement: "dim(V) = dim(Null(T)) + dim(Range(T))",
      explanation: "For a linear transformation T, the dimension of the domain equals the sum of the dimensions of its null space and range"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Determine if the set of 2×2 symmetric matrices forms a vector space.",
      solution: {
        steps: [
          "Check closure under addition",
          "Check closure under scalar multiplication",
          "Verify zero vector exists",
          "Verify additive inverse exists"
        ],
        answer: "Yes, it forms a vector space"
      },
      explanation: "Symmetric matrices have equal elements across the main diagonal"
    },
    {
      year: 2021,
      question: "Find the dimension of a subspace of R³ containing vectors (x,y,z) where x + y + z = 0",
      solution: {
        steps: [
          "Set up the constraint equation: x + y + z = 0",
          "Express one variable in terms of others",
          "Determine the number of free variables",
          "Calculate the dimension"
        ],
        answer: "Dimension is 2"
      },
      explanation: "The dimension is the number of free variables in the constraint equation"
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that the intersection of two subspaces is always a subspace",
      solution: {
        steps: [
          "Let H1 and H2 be subspaces of V",
          "Consider H = H1 ∩ H2",
          "Prove H contains zero vector",
          "Prove H is closed under addition",
          "Prove H is closed under scalar multiplication"
        ],
        answer: "Proof by showing H satisfies subspace conditions"
      }
    }
  ],

  applications: [
    {
      domain: "Machine Learning",
      description: "Used in dimensionality reduction techniques like PCA"
    },
    {
      domain: "Computer Graphics",
      description: "Fundamental to 3D transformations and coordinate systems"
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all subsets of a vector space are subspaces",
      correction: "Only subsets that satisfy vector space axioms are subspaces"
    }
  ]
};
