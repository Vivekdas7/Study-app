export const engineeringMathematicsData = {
  'linear-algebra': {
    title: 'Linear Algebra',
    overview: 'Fundamental concepts of vectors, matrices, and linear transformations',
    theorems: [
      {
        name: 'Cayley-Hamilton Theorem',
        statement: 'Every square matrix satisfies its own characteristic equation',
        proof: 'For an n×n matrix A, if p(λ) is its characteristic polynomial, then p(A) = 0',
        applications: ['Finding inverse of matrices', 'Computing matrix powers']
      },
      {
        name: 'Rank-Nullity Theorem',
        statement: 'For a linear transformation T: V → W, dim(V) = rank(T) + nullity(T)',
        applications: ['Analyzing linear transformations', 'Solving systems of equations']
      }
    ],
    formulas: [
      {
        topic: 'Determinants',
        list: [
          'det(AB) = det(A) × det(B)',
          'det(A⁻¹) = 1/det(A)',
          'det(A^T) = det(A)'
        ]
      },
      {
        topic: 'Eigenvalues',
        list: [
          'det(A - λI) = 0 (Characteristic equation)',
          'tr(A) = sum of eigenvalues',
          'det(A) = product of eigenvalues'
        ]
      }
    ],
    solvedExamples: [
      {
        title: 'Finding Eigenvalues and Eigenvectors',
        problem: `Find eigenvalues and eigenvectors of matrix A = [[2 1], [1 2]]`,
        solution: `Step 1: Find characteristic equation
det(A - λI) = | 2-λ  1  |
              | 1    2-λ|
= (2-λ)(2-λ) - 1
= λ² - 4λ + 3 = 0

Step 2: Solve for λ
λ = 3 or λ = 1

Step 3: Find eigenvectors
For λ = 3: [2-3  1 ][x] = [0]
          [1    2-3][y]   [0]
Eigenvector: [1, 1]

For λ = 1: [2-1  1 ][x] = [0]
          [1    2-1][y]   [0]
Eigenvector: [1, -1]`
      }
    ],
    gateQuestions: [
      {
        year: 2022,
        question: 'For a 3×3 matrix A, if det(A) = 2 and tr(A) = 6, what is the sum of cofactors of diagonal elements?',
        solution: `Step 1: Let's recall that for a 3×3 matrix:
- Sum of cofactors of diagonal elements = tr(adj(A))
- tr(adj(A)) = det(A) × tr(A⁻¹)
- tr(A) × tr(adj(A)) = tr(A)² - tr(A²)

Step 2: Given det(A) = 2 and tr(A) = 6
Using the relation: tr(adj(A)) = det(A) × tr(A⁻¹)
tr(adj(A)) = 2 × 6 = 12

Therefore, sum of cofactors of diagonal elements = 12`,
        marks: 2,
        difficulty: 'Medium'
      }
    ]
  },
  'probability': {
    title: 'Probability',
    overview: 'Study of random phenomena and statistical inference',
    theorems: [
      {
        name: 'Bayes\' Theorem',
        statement: 'P(A|B) = P(B|A)P(A)/P(B)',
        applications: ['Machine Learning', 'Data Analysis']
      },
      {
        name: 'Central Limit Theorem',
        statement: 'Distribution of sample means approaches normal distribution as sample size increases',
        applications: ['Statistical inference', 'Quality control']
      }
    ],
    formulas: [
      {
        topic: 'Probability Laws',
        list: [
          'P(A∪B) = P(A) + P(B) - P(A∩B)',
          'P(A|B) = P(A∩B)/P(B)',
          'E(X+Y) = E(X) + E(Y)'
        ]
      },
      {
        topic: 'Distributions',
        list: [
          'Binomial: P(X=k) = C(n,k)p^k(1-p)^(n-k)',
          'Poisson: P(X=k) = (λ^k e^-λ)/k!',
          'Normal: f(x) = (1/σ√(2π))e^(-(x-μ)²/2σ²)'
        ]
      }
    ],
    solvedExamples: [
      {
        title: 'Applying Bayes\' Theorem',
        problem: 'In a software testing scenario, if a test fails, there\'s an 80% chance of a bug. The overall bug rate is 10%, and tests fail 15% of the time. What\'s the probability of a bug given a failed test?',
        solution: `Using Bayes' Theorem:
P(Bug|Fail) = P(Fail|Bug)P(Bug)/P(Fail)
= 0.80 × 0.10 / 0.15
= 0.533 or about 53.3%`
      }
    ],
    gateQuestions: [
      {
        year: 2021,
        question: 'If X follows normal distribution with mean 10 and variance 4, find P(8 ≤ X ≤ 12)',
        solution: `Step 1: Standardize the interval
Z = (X - μ)/σ
For X = 8: Z₁ = (8 - 10)/2 = -1
For X = 12: Z₂ = (12 - 10)/2 = 1

Step 2: Use standard normal table
P(8 ≤ X ≤ 12) = P(-1 ≤ Z ≤ 1)
= 0.8413 - 0.1587 = 0.6826

Therefore, P(8 ≤ X ≤ 12) = 0.6826 or about 68.26%`,
        marks: 3,
        difficulty: 'Hard'
      }
    ]
  },
  'calculus': {
    title: 'Calculus',
    overview: 'Study of continuous change through limits, derivatives, and integrals',
    theorems: [
      {
        name: 'Mean Value Theorem',
        statement: 'For f continuous on [a,b] and differentiable on (a,b), ∃c∈(a,b) where f\'(c)=[f(b)-f(a)]/(b-a)',
        applications: ['Optimization', 'Error estimation']
      },
      {
        name: 'Fundamental Theorem of Calculus',
        statement: 'If F is an antiderivative of f, then ∫[a to b]f(x)dx = F(b) - F(a)',
        applications: ['Area calculation', 'Physics problems']
      }
    ],
    formulas: [
      {
        topic: 'Derivatives',
        list: [
          'd/dx(x^n) = nx^(n-1)',
          'd/dx(e^x) = e^x',
          'd/dx(ln(x)) = 1/x'
        ]
      },
      {
        topic: 'Integration',
        list: [
          '∫x^n dx = x^(n+1)/(n+1) + C',
          '∫e^x dx = e^x + C',
          '∫(1/x) dx = ln|x| + C'
        ]
      }
    ],
    solvedExamples: [
      {
        title: 'Optimization Problem',
        problem: 'Find the maximum value of f(x) = x³ - 3x² + 1 on [-1, 2]',
        solution: `Step 1: Find critical points
f'(x) = 3x² - 6x
Set f'(x) = 0:
3x² - 6x = 0
3x(x - 2) = 0
x = 0 or x = 2

Step 2: Check endpoints and critical points
f(-1) = -1 - 3 + 1 = -3
f(0) = 1
f(2) = 8 - 12 + 1 = -3

Maximum value is 1 at x = 0`
      }
    ],
    gateQuestions: [
      {
        year: 2020,
        question: 'Find the volume of revolution formed by rotating y = x² from x = 0 to x = 1 about the x-axis',
        solution: `Step 1: Use the washer method
V = π∫[0 to 1](x²)² dx

Step 2: Solve the integral
V = π∫[0 to 1]x⁴ dx
= π[x⁵/5]₀¹
= π/5

Therefore, volume = π/5 cubic units`,
        marks: 3,
        difficulty: 'Medium'
      }
    ]
  }
}
