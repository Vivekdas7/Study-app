export const eigenvaluesEigenvectorsData = {
  title: "Eigenvalues and Eigenvectors",
  introduction: `Eigenvalues and Eigenvectors are fundamental concepts in linear algebra that describe special vectors and scalars associated with linear transformations, with profound applications in various fields of science and engineering.`,
  
  keyTopics: [
    {
      title: "Definition and Computation",
      content: `For a square matrix A, an eigenvector v satisfies:
      • Av = λv, where λ is the corresponding eigenvalue
      • Non-zero vector v that is only scaled by the linear transformation
      
      Computation steps:
      • Characteristic equation: det(A - λI) = 0
      • Solve for eigenvalues
      • Find corresponding eigenvectors`,
      formulas: [
        {
          name: "Eigenvalue Equation",
          formula: "Av = λv",
          explanation: "Fundamental equation defining eigenvalues and eigenvectors"
        },
        {
          name: "Characteristic Polynomial",
          formula: "p(λ) = det(A - λI)",
          explanation: "Polynomial used to compute eigenvalues"
        }
      ]
    },
    {
      title: "Eigenvalue Properties",
      content: `Key properties of eigenvalues:
      • Trace of matrix equals sum of eigenvalues
      • Determinant equals product of eigenvalues
      • Symmetric matrices have real eigenvalues
      • Diagonalizable matrices`,
      formulas: [
        {
          name: "Trace-Eigenvalue Relation",
          formula: "tr(A) = Σλᵢ",
          explanation: "Sum of diagonal elements equals sum of eigenvalues"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Cayley-Hamilton Theorem",
      statement: "Every square matrix satisfies its own characteristic equation",
      explanation: "A matrix A satisfies p(A) = 0, where p(λ) is its characteristic polynomial"
    },
    {
      name: "Spectral Theorem",
      statement: "Every symmetric matrix is orthogonally diagonalizable",
      explanation: "Symmetric matrices have orthonormal eigenvectors and real eigenvalues"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "For matrix A = [[4,1],[1,4]], find its eigenvalues and eigenvectors",
      solution: {
        steps: [
          "Compute characteristic equation: det(A - λI) = 0",
          "Expand and solve: λ² - 8λ + 15 = 0",
          "Find eigenvalues: λ₁ = 3, λ₂ = 5",
          "Compute corresponding eigenvectors"
        ],
        answer: "Eigenvalues: 3 and 5"
      },
      explanation: "Systematic approach to finding eigenvalues and eigenvectors"
    },
    {
      year: 2021,
      question: "If A is a 3×3 matrix with eigenvalues 2, 3, and 5, what is the trace and determinant of A?",
      solution: {
        steps: [
          "Trace = sum of eigenvalues: 2 + 3 + 5 = 10",
          "Determinant = product of eigenvalues: 2 × 3 × 5 = 30"
        ],
        answer: "Trace = 10, Determinant = 30"
      },
      explanation: "Relationship between eigenvalues and matrix properties"
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that if v is an eigenvector of A with eigenvalue λ, then v is also an eigenvector of A² with eigenvalue λ²",
      solution: {
        steps: [
          "Start with Av = λv",
          "Apply A again: A(Av) = A(λv)",
          "Simplify: A²v = λ(Av)",
          "Conclude: A²v = λ²v"
        ],
        answer: "Proof of eigenvalue property for matrix powers"
      }
    }
  ],

  applications: [
    {
      domain: "Machine Learning",
      description: "Principal Component Analysis (PCA) uses eigenvalue decomposition"
    },
    {
      domain: "Quantum Mechanics",
      description: "Fundamental to understanding quantum state transformations"
    },
    {
      domain: "Vibration Analysis",
      description: "Used in analyzing mechanical system behaviors"
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all matrices are diagonalizable",
      correction: "Not all matrices have a full set of linearly independent eigenvectors"
    },
    {
      mistake: "Confusing eigenvalues with eigenvectors",
      correction: "Eigenvalues are scalars, eigenvectors are non-zero vectors"
    }
  ]
};
