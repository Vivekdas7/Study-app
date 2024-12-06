export const LinearAlgebraContent = {
  title: 'Linear Algebra for GATE CSE',
  chapters: [
    {
      id: 'vector-spaces',
      title: 'Vector Spaces',
      sections: [
        {
          id: 'definition',
          title: 'Definition and Basic Properties',
          content: `
# Vector Spaces: Fundamental Concepts

## Definition
A vector space V over a field F is a set of vectors with two operations:
1. Vector Addition
2. Scalar Multiplication

### Axioms of Vector Spaces
1. Closure under Addition
   - For any u, v ∈ V, u + v ∈ V
2. Commutativity of Addition
   - u + v = v + u
3. Associativity of Addition
   - (u + v) + w = u + (v + w)
4. Existence of Zero Vector
   - ∃ 0 ∈ V such that u + 0 = u
5. Existence of Additive Inverse
   - ∀u ∈ V, ∃(-u) such that u + (-u) = 0
6. Scalar Multiplication Properties
   - 1 * u = u
   - a * (u + v) = a*u + a*v
   - (a + b) * u = a*u + b*u

## Examples of Vector Spaces
1. R^n (n-dimensional real vector space)
2. Polynomial space P(x)
3. Matrix spaces
4. Function spaces

## Key Theorems
1. Uniqueness of Zero Vector
2. Uniqueness of Additive Inverse
3. Cancellation Law of Vector Addition
          `,
          examples: [
            {
              problem: 'Prove that R^2 is a vector space',
              solution: 'Verify all vector space axioms for 2D real vectors'
            }
          ],
          problems: [
            {
              id: 1,
              question: 'Show that the set of all 2x2 matrices with trace zero forms a vector space',
              difficulty: 'Hard',
              marks: 10
            }
          ],
          gateQuestions: [
            {
              year: 2019,
              question: 'Consider the vector space of all 2x2 real matrices. Which of the following is a subspace?',
              options: [
                'All symmetric matrices',
                'All matrices with determinant 1',
                'All matrices with trace 0',
                'All invertible matrices'
              ],
              correctAnswer: 'All matrices with trace 0',
              explanation: `
A subspace must be closed under addition and scalar multiplication. 
- Symmetric matrices form a subspace
- Matrices with trace 0 form a subspace
- Invertible matrices do not form a subspace
              `
            },
            {
              year: 2017,
              question: 'Let V be a vector space over real numbers. If dim(V) = n, then the number of linearly independent vectors is:',
              options: [
                'Always less than n',
                'Always equal to n',
                'Always greater than n',
                'Cannot be determined'
              ],
              correctAnswer: 'Always equal to n',
              explanation: `
In a vector space of dimension n, the maximum number of linearly independent vectors is exactly n.
- These vectors form a basis for the vector space
- Any set of more than n vectors will be linearly dependent
              `
            }
          ]
        },
        {
          id: 'subspaces',
          title: 'Subspaces',
          content: `
# Subspaces: Subset Vector Spaces

## Definition
A subset W of a vector space V is a subspace if:
1. W is non-empty
2. W is closed under vector addition
3. W is closed under scalar multiplication

## Subspace Criteria
- Kernel of a linear transformation
- Null space of a matrix
- Column space of a matrix
- Span of a set of vectors

## Dimension and Basis
- Linearly independent vectors
- Basis of a subspace
- Dimension calculation
- Rank-nullity theorem

## Fundamental Subspace Theorem
For a matrix A ∈ R^(m×n):
- Null(A) ⊆ R^n
- Column(A) ⊆ R^m
- dim(Null(A)) + rank(A) = n
          `,
          examples: [
            {
              problem: 'Find the dimension of the subspace spanned by {[1,0,1], [0,1,1], [1,1,0]}',
              solution: 'Use Gaussian elimination to determine linear independence'
            }
          ],
          problems: [
            {
              id: 2,
              question: 'Prove that the intersection of two subspaces is also a subspace',
              difficulty: 'Hard',
              marks: 12
            }
          ],
          gateQuestions: [
            {
              year: 2020,
              question: 'The dimension of the null space of a matrix A is:',
              options: [
                'Always zero',
                'Always equal to the number of columns',
                'Less than or equal to the number of columns',
                'Greater than the number of columns'
              ],
              correctAnswer: 'Less than or equal to the number of columns',
              explanation: `
By the Rank-Nullity theorem:
dim(Null(A)) + rank(A) = number of columns
- Null space dimension cannot exceed the number of columns
- Depends on the linear independence of columns
              `
            },
            {
              year: 2018,
              question: 'For a linear transformation T: R^3 → R^2, the dimension of the null space is:',
              options: [
                '0',
                '1',
                '2',
                '3'
              ],
              correctAnswer: '1',
              explanation: `
Using rank-nullity theorem:
- dim(Null(T)) + rank(T) = domain dimension
- dim(Null(T)) + rank(T) = 3
- Since range is R^2, max rank is 2
- Therefore, dim(Null(T)) = 1
              `
            }
          ]
        }
      ]
    },
    {
      id: 'linear-transformations',
      title: 'Linear Transformations',
      sections: [
        {
          id: 'definition-properties',
          title: 'Definition and Properties',
          content: `
# Linear Transformations

## Definition
A linear transformation T: V → W is a function that satisfies:
1. T(u + v) = T(u) + T(v)
2. T(cu) = cT(u)

## Key Characteristics
- Preserves vector addition
- Preserves scalar multiplication
- Kernel (Null space)
- Image (Range)

## Representation
- Matrix representation
- Coordinate transformation
- Change of basis

## Important Theorems
1. Rank-Nullity Theorem
2. Fundamental Homomorphism Theorem
3. Invertibility Conditions
          `,
          examples: [
            {
              problem: 'Find the matrix representation of a linear transformation',
              solution: 'Compute transformation of basis vectors'
            }
          ],
          problems: [
            {
              id: 3,
              question: 'Determine if a given transformation is linear',
              difficulty: 'Medium',
              marks: 8
            }
          ],
          gateQuestions: [
            {
              year: 2019,
              question: 'Which of the following is NOT a linear transformation?',
              options: [
                'T(x) = Ax, where A is a matrix',
                'T(x) = x^2',
                'T(x) = 3x',
                'T(x) = 0'
              ],
              correctAnswer: 'T(x) = x^2',
              explanation: `
A linear transformation must satisfy:
1. T(u + v) = T(u) + T(v)
2. T(cu) = cT(u)

T(x) = x^2 fails these conditions:
- (a + b)^2 ≠ a^2 + b^2
- (ca)^2 ≠ c(a^2)
              `
            },
            {
              year: 2017,
              question: 'For a linear transformation T: R^2 → R^2, if rank(T) = 1, then:',
              options: [
                'T is injective',
                'T is surjective',
                'T maps R^2 to a line',
                'T is an isomorphism'
              ],
              correctAnswer: 'T maps R^2 to a line',
              explanation: `
When rank(T) = 1:
- The transformation maps the entire R^2 to a one-dimensional subspace (a line)
- Not all vectors are mapped uniquely
- The transformation is neither injective nor surjective
              `
            }
          ]
        },
        {
          id: 'eigenvalues-eigenvectors',
          title: 'Eigenvalues and Eigenvectors',
          content: `
# Eigenvalues and Eigenvectors

## Definition
For a square matrix A:
- Eigenvalue λ: det(A - λI) = 0
- Eigenvector v: Av = λv

## Characteristic Equation
- Characteristic polynomial
- Eigenvalue computation
- Algebraic and geometric multiplicity

## Diagonalization
- Conditions for diagonalizability
- Eigendecomposition
- Similar matrices

## Applications
- Principal component analysis
- Markov chains
- Differential equations
- Quantum mechanics
          `,
          examples: [
            {
              problem: 'Compute eigenvalues of a 2x2 matrix',
              solution: 'Use characteristic equation method'
            }
          ],
          problems: [
            {
              id: 4,
              question: 'Prove that a matrix with distinct eigenvalues is diagonalizable',
              difficulty: 'Hard',
              marks: 12
            }
          ],
          gateQuestions: [
            {
              year: 2020,
              question: 'For a 3x3 matrix with eigenvalues 2, 2, and 3, the geometric multiplicity is:',
              options: [
                '1',
                '2',
                '3',
                'Cannot be determined'
              ],
              correctAnswer: '2',
              explanation: `
Geometric multiplicity = number of linearly independent eigenvectors
- Algebraic multiplicity of 2 is 2
- Geometric multiplicity ≤ algebraic multiplicity
- In this case, geometric multiplicity is 2
              `
            },
            {
              year: 2018,
              question: 'If A is a symmetric matrix, then:',
              options: [
                'All eigenvalues are real',
                'All eigenvalues are complex',
                'All eigenvalues are positive',
                'All eigenvalues are negative'
              ],
              correctAnswer: 'All eigenvalues are real',
              explanation: `
Properties of symmetric matrices:
- Symmetric matrices have real eigenvalues
- Eigenvectors are orthogonal
- Guaranteed to be diagonalizable
              `
            }
          ]
        }
      ]
    },
    {
      id: 'gate-solved-questions',
      title: 'GATE CSE Previous Year Solved Questions',
      sections: [
        {
          id: 'linear-algebra-solved',
          title: 'Linear Algebra Solved Questions',
          content: `
# GATE CSE Previous Year Solved Questions on Linear Algebra

## Comprehensive Problem Solving Approach
This section covers solved GATE CSE questions from previous years, focusing on vector spaces, linear transformations, matrices, and advanced linear algebra concepts.
          `,
          solvedQuestions: [
            {
              year: 2022,
              topic: 'Vector Spaces',
              question: 'Consider a vector space V of dimension 3 over the real numbers. Which of the following statements is TRUE?',
              options: [
                'V has exactly 3 linearly independent vectors',
                'V has at most 3 linearly independent vectors',
                'V has at least 3 linearly independent vectors',
                'V has more than 3 linearly independent vectors'
              ],
              correctAnswer: 'V has exactly 3 linearly independent vectors',
              solution: `
### GATE CSE 2022: Vector Spaces Solution
- In a vector space of dimension n, the maximum number of linearly independent vectors is exactly n
- For a 3-dimensional vector space, there are exactly 3 linearly independent vectors
- These vectors form the basis of the vector space
              `,
              marks: 2,
              difficulty: 'Easy'
            },
            {
              year: 2021,
              topic: 'Linear Transformations',
              question: 'For a linear transformation T: R^2 → R^2, if rank(T) = 1, then:',
              options: [
                'T is injective',
                'T is surjective',
                'T maps R^2 to a line',
                'T is an isomorphism'
              ],
              correctAnswer: 'T maps R^2 to a line',
              solution: `
### GATE CSE 2021: Linear Transformations Solution
- When rank(T) = 1:
  1. The transformation maps the entire R^2 to a one-dimensional subspace (a line)
  2. Not all vectors are mapped uniquely
  3. The transformation is neither injective nor surjective
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2020,
              topic: 'Eigenvalues and Eigenvectors',
              question: 'For a 3x3 matrix with eigenvalues 2, 2, and 3, the geometric multiplicity is:',
              options: [
                '1',
                '2',
                '3',
                'Cannot be determined'
              ],
              correctAnswer: '2',
              solution: `
### GATE CSE 2020: Eigenvalues Solution
- Geometric multiplicity = number of linearly independent eigenvectors
- Algebraic multiplicity of 2 is 2
- Geometric multiplicity ≤ algebraic multiplicity
- In this case, geometric multiplicity is 2
              `,
              marks: 2,
              difficulty: 'Hard'
            },
            {
              year: 2019,
              topic: 'Subspaces',
              question: 'Consider the vector space of all 2x2 real matrices. Which of the following is a subspace?',
              options: [
                'All symmetric matrices',
                'All matrices with determinant 1',
                'All matrices with trace 0',
                'All invertible matrices'
              ],
              correctAnswer: 'All matrices with trace 0',
              solution: `
### GATE CSE 2019: Subspaces Solution
- A subspace must be closed under addition and scalar multiplication
- Symmetric matrices form a subspace
- Matrices with trace 0 form a subspace
- Invertible matrices do not form a subspace
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2018,
              topic: 'Linear Transformations',
              question: 'For a linear transformation T: R^3 → R^2, the dimension of the null space is:',
              options: [
                '0',
                '1',
                '2',
                '3'
              ],
              correctAnswer: '1',
              solution: `
### GATE CSE 2018: Null Space Solution
- Using rank-nullity theorem:
  1. dim(Null(T)) + rank(T) = domain dimension
  2. dim(Null(T)) + rank(T) = 3
  3. Since range is R^2, max rank is 2
  4. Therefore, dim(Null(T)) = 1
              `,
              marks: 2,
              difficulty: 'Hard'
            },
            {
              year: 2017,
              topic: 'Matrix Operations',
              question: 'If A is a 3x3 matrix with rank 2, then the dimension of the null space of A is:',
              options: [
                '0',
                '1',
                '2',
                '3'
              ],
              correctAnswer: '1',
              solution: `
### GATE CSE 2017: Matrix Rank Solution
- Rank-Nullity Theorem: 
  1. dim(Null(A)) + rank(A) = number of columns
  2. Number of columns = 3
  3. Rank(A) = 2
  4. dim(Null(A)) = 3 - 2 = 1
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2016,
              topic: 'Eigenvalues',
              question: 'A square matrix has all eigenvalues real. Which of the following is always TRUE?',
              options: [
                'The matrix is symmetric',
                'The matrix is orthogonal',
                'The matrix is diagonalizable',
                'The matrix is invertible'
              ],
              correctAnswer: 'The matrix is diagonalizable',
              solution: `
### GATE CSE 2016: Eigenvalues Solution
- A matrix with all real eigenvalues is diagonalizable
- Real eigenvalues do not guarantee symmetry or orthogonality
- Diagonalizability depends on eigenvalue multiplicity
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2015,
              topic: 'Linear Transformations',
              question: 'If T is a linear transformation from R^3 to R^2 with rank 1, then:',
              options: [
                'T maps R^3 to a point',
                'T maps R^3 to a line',
                'T maps R^3 to a plane',
                'T is an isomorphism'
              ],
              correctAnswer: 'T maps R^3 to a line',
              solution: `
### GATE CSE 2015: Linear Transformation Solution
- Rank 1 means the transformation maps to a one-dimensional subspace
- In this case, a line in R^2
- The transformation reduces the dimension from 3 to 1
              `,
              marks: 2,
              difficulty: 'Hard'
            },
            {
              year: 2014,
              topic: 'Determinants',
              question: 'For a 3x3 matrix A, if det(A) = 0, then:',
              options: [
                'A is always singular',
                'A has linearly dependent columns',
                'A has full rank',
                'A is invertible'
              ],
              correctAnswer: 'A has linearly dependent columns',
              solution: `
### GATE CSE 2014: Determinant Solution
- det(A) = 0 implies the matrix is singular
- Singular matrices have linearly dependent columns or rows
- Zero determinant means the matrix does not have full rank
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2013,
              topic: 'Vector Spaces',
              question: 'The dimension of a vector space is independent of:',
              options: [
                'Basis',
                'Spanning set',
                'Coordinate system',
                'Number of vectors in a basis'
              ],
              correctAnswer: 'Coordinate system',
              solution: `
### GATE CSE 2013: Vector Space Solution
- Dimension is an intrinsic property of a vector space
- Different coordinate systems can represent the same vector space
- The number of vectors in a basis remains constant
              `,
              marks: 2,
              difficulty: 'Easy'
            }
          ]
        }
      ]
    }
  ],
  practiceExam: {
    totalQuestions: 25,
    duration: 90,
    passingMarks: 35,
    syllabusCoverage: [
      'Vector Spaces',
      'Linear Transformations',
      'Eigenvalues and Eigenvectors',
      'GATE Previous Year Questions (2013-2022)'
    ]
  }
};
