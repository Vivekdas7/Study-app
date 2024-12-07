export const linearAlgebraData = {
  title: "Linear Algebra",
  introduction: `Linear Algebra is a fundamental branch of mathematics that deals with linear equations and linear functions. 
  It is crucial for understanding many concepts in Computer Science, including computer graphics, machine learning, and quantum computing.`,
  
  keyTopics: [
    {
      title: "Matrices and Matrix Operations",
      content: `A matrix is a rectangular array of numbers arranged in rows and columns. Basic operations include:
      • Addition and Subtraction
      • Matrix Multiplication
      • Transpose
      • Inverse
      • Determinant calculation`,
      formulas: [
        {
          name: "Matrix Multiplication",
          formula: "(AB)ij = Σk (Aik × Bkj)",
          explanation: "For matrices A and B, each element of the product is the sum of products of corresponding row elements of A and column elements of B"
        },
        {
          name: "Determinant (2×2 matrix)",
          formula: "det(A) = ad - bc for matrix [[a,b],[c,d]]",
          explanation: "For a 2×2 matrix, determinant is the product of diagonal elements minus the product of off-diagonal elements"
        }
      ]
    },
    {
      title: "Eigenvalues and Eigenvectors",
      content: `Eigenvalues (λ) and eigenvectors (v) are fundamental concepts in linear algebra. For a square matrix A:
      • Av = λv
      • (A - λI)v = 0
      • det(A - λI) = 0 (characteristic equation)`,
      formulas: [
        {
          name: "Characteristic Equation",
          formula: "det(A - λI) = 0",
          explanation: "This equation helps find eigenvalues of matrix A"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Cayley-Hamilton Theorem",
      statement: "Every square matrix satisfies its own characteristic equation",
      explanation: "If p(λ) is the characteristic polynomial of a square matrix A, then p(A) = 0"
    },
    {
      name: "Rank-Nullity Theorem",
      statement: "rank(A) + nullity(A) = n",
      explanation: "For a linear transformation A: V → W, the dimension of the domain equals the sum of the rank and nullity"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Let A be a 3×3 matrix with eigenvalues 2, 3, and 5. What is the trace of matrix A?",
      solution: {
        steps: [
          "Recall that trace of a matrix is the sum of its eigenvalues",
          "Given eigenvalues are 2, 3, and 5",
          "Therefore, trace(A) = 2 + 3 + 5 = 10"
        ],
        answer: "10"
      },
      explanation: "The trace of a matrix equals the sum of its eigenvalues. This is a fundamental property in linear algebra."
    },
    {
      year: 2021,
      question: "For a 3×3 matrix A, if det(A) = 8 and A is multiplied by a scalar k to get kA with det(kA) = 216, what is the value of k?",
      solution: {
        steps: [
          "For a 3×3 matrix, det(kA) = k³ × det(A)",
          "Given: det(A) = 8 and det(kA) = 216",
          "216 = k³ × 8",
          "k³ = 27",
          "k = 3"
        ],
        answer: "3"
      },
      explanation: "When a matrix is multiplied by a scalar k, its determinant is multiplied by k raised to the power of matrix dimension."
    }
  ],

  practiceProblems: [
    {
      difficulty: "Medium",
      question: "Find the eigenvalues of matrix A = [[4,1],[1,4]]",
      solution: {
        steps: [
          "1. Write characteristic equation: det(A - λI) = 0",
          "2. Expand: det([[4-λ,1],[1,4-λ]]) = 0",
          "3. Solve: (4-λ)(4-λ) - 1 = 0",
          "4. Simplify: λ² - 8λ + 15 = 0",
          "5. Factor: (λ-3)(λ-5) = 0"
        ],
        answer: "Eigenvalues are λ = 3 and λ = 5"
      }
    }
  ],

  applications: [
    {
      domain: "Computer Graphics",
      description: "Used in transformations like rotation, scaling, and translation of objects in 2D/3D space"
    },
    {
      domain: "Machine Learning",
      description: "Essential in Principal Component Analysis (PCA), Neural Networks, and Linear Regression"
    }
  ],

  commonMistakes: [
    {
      mistake: "Matrix multiplication is commutative",
      correction: "Matrix multiplication is NOT commutative. In general, AB ≠ BA"
    },
    {
      mistake: "Every matrix has an inverse",
      correction: "Only non-singular (determinant ≠ 0) square matrices have inverses"
    }
  ]
};
