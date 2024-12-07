export const linearTransformationsData = {
  title: "Linear Transformations",
  introduction: `Linear Transformations are fundamental mappings between vector spaces that preserve vector addition and scalar multiplication. They are crucial in understanding linear algebra's computational and geometric aspects.`,
  
  keyTopics: [
    {
      title: "Definition and Properties",
      content: `A linear transformation T: V → W is a function that satisfies:
      • T(u + v) = T(u) + T(v) for all u, v ∈ V
      • T(cu) = cT(u) for all u ∈ V, c ∈ F
      
      Key characteristics include:
      • Kernel (Null Space)
      • Range (Image)
      • Rank and Nullity`,
      formulas: [
        {
          name: "Linear Transformation Condition",
          formula: "T(u + v) = T(u) + T(v) ∧ T(cu) = cT(u)",
          explanation: "Fundamental conditions for a linear mapping"
        }
      ]
    },
    {
      title: "Matrix Representation",
      content: `Every linear transformation can be represented by a matrix. 
      • Standard matrix representation
      • Change of basis
      • Coordinate transformations`,
      formulas: [
        {
          name: "Matrix Representation",
          formula: "T(v) = A[v]",
          explanation: "Where A is the transformation matrix and [v] is the vector in standard coordinates"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Rank-Nullity Theorem",
      statement: "For a linear transformation T: V → W, dim(V) = dim(Ker(T)) + dim(Im(T))",
      explanation: "The dimension of the domain equals the sum of the dimensions of the kernel and image"
    },
    {
      name: "Fundamental Theorem of Linear Algebra",
      statement: "dim(Null(A)) + rank(A) = number of columns in A",
      explanation: "Relates the nullspace and rank of a linear transformation matrix"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Find the rank of a linear transformation that maps R³ to R² with matrix A = [[1,0,2],[0,1,3]]",
      solution: {
        steps: [
          "Identify the matrix dimensions",
          "Determine linear independence of rows",
          "Calculate the number of linearly independent rows"
        ],
        answer: "Rank is 2"
      },
      explanation: "Rank is the number of linearly independent rows or columns"
    },
    {
      year: 2021,
      question: "Determine the nullity of a linear transformation T: R⁴ → R³ with rank 2",
      solution: {
        steps: [
          "Use Rank-Nullity Theorem",
          "dim(domain) = 4",
          "rank(T) = 2",
          "nullity(T) = 4 - 2 = 2"
        ],
        answer: "Nullity is 2"
      },
      explanation: "Nullity is the dimension of the kernel of the transformation"
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that the composition of two linear transformations is also a linear transformation",
      solution: {
        steps: [
          "Let T: V → W and S: W → U be linear transformations",
          "Define composition (S ∘ T): V → U",
          "Prove additivity: (S ∘ T)(u + v) = (S ∘ T)(u) + (S ∘ T)(v)",
          "Prove homogeneity: (S ∘ T)(cu) = c(S ∘ T)(u)"
        ],
        answer: "Proof by showing composition satisfies linearity conditions"
      }
    }
  ],

  applications: [
    {
      domain: "Computer Graphics",
      description: "Used for 3D transformations, rotations, scaling, and projections"
    },
    {
      domain: "Machine Learning",
      description: "Fundamental to understanding neural network transformations"
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing linear transformations with general functions",
      correction: "Linear transformations must preserve vector addition and scalar multiplication"
    },
    {
      mistake: "Assuming all matrix transformations are linear",
      correction: "Only transformations that satisfy linearity conditions are linear transformations"
    }
  ]
};
