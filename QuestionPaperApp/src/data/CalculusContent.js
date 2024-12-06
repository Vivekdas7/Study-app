export const CalculusContent = {
  title: 'Advanced Calculus for GATE CSE',
  chapters: [
    {
      id: 'limits-continuity',
      title: 'Limits and Continuity',
      sections: [
        {
          id: 'limit-definition',
          title: 'Limit Fundamentals',
          content: `
# Limits: Theoretical Foundation

## Epsilon-Delta Definition
- Formal definition of limit
- Precise mathematical characterization
- Convergence and divergence

## Limit Laws
1. Sum Law
2. Product Law
3. Quotient Law
4. Composition Law

## Limit Computation Techniques
- Algebraic manipulation
- Factorization
- Rationalization
- L'Hôpital's Rule

## Special Limit Types
- One-sided limits
- Infinite limits
- Limits at infinity
          `,
          examples: [
            {
              problem: 'Compute lim(x→0) sin(x)/x',
              solution: 'Apply L\'Hôpital\'s Rule or geometric argument'
            }
          ],
          problems: [
            {
              id: 1,
              question: 'Prove continuity of composite functions',
              difficulty: 'Hard',
              marks: 12
            }
          ]
        },
        {
          id: 'continuity',
          title: 'Continuity Analysis',
          content: `
# Continuity Properties

## Types of Discontinuities
1. Removable Discontinuity
2. Jump Discontinuity
3. Infinite Discontinuity

## Continuity Theorems
- Intermediate Value Theorem
- Extreme Value Theorem
- Uniform Continuity

## Continuous Functions
- Polynomial continuity
- Rational function continuity
- Trigonometric function continuity
          `,
          examples: [
            {
              problem: 'Identify discontinuities in a piecewise function',
              solution: 'Analyze function behavior at critical points'
            }
          ],
          problems: [
            {
              id: 2,
              question: 'Determine continuity and classify discontinuities',
              difficulty: 'Medium',
              marks: 8
            }
          ]
        }
      ]
    },
    {
      id: 'differentiation',
      title: 'Differential Calculus',
      sections: [
        {
          id: 'derivative-techniques',
          title: 'Differentiation Methods',
          content: `
# Advanced Differentiation

## Differentiation Rules
1. Power Rule
2. Product Rule
3. Quotient Rule
4. Chain Rule
5. Implicit Differentiation

## Higher-Order Derivatives
- Second derivative
- Third derivative
- Successive differentiation

## Specialized Techniques
- Logarithmic differentiation
- Parametric differentiation
- Differentiation of inverse functions
          `,
          examples: [
            {
              problem: 'Differentiate complex composite functions',
              solution: 'Apply chain rule systematically'
            }
          ],
          problems: [
            {
              id: 3,
              question: 'Find derivatives using multiple advanced techniques',
              difficulty: 'Hard',
              marks: 10
            }
          ]
        },
        {
          id: 'applications',
          title: 'Derivative Applications',
          content: `
# Derivative Applications

## Optimization Problems
- Finding maximum/minimum values
- Critical point analysis
- Inflection points

## Rate of Change Analysis
- Velocity and acceleration
- Economic applications
- Physical system modeling

## Curve Sketching
- Monotonicity
- Concavity
- Asymptotic behavior

## Mean Value Theorem
- Theoretical implications
- Computational applications
          `,
          examples: [
            {
              problem: 'Apply Mean Value Theorem to analyze function behavior',
              solution: 'Use derivative properties to prove theorem'
            }
          ],
          problems: [
            {
              id: 4,
              question: 'Solve complex optimization problem using derivatives',
              difficulty: 'Hard',
              marks: 12
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
          id: 'calculus-solved',
          title: 'Calculus Solved Questions',
          content: `
# GATE CSE Previous Year Solved Questions on Calculus

## Comprehensive Problem Solving Approach
This section covers solved GATE CSE questions from previous years, focusing on limits, derivatives, integrals, and advanced calculus concepts.
          `,
          solvedQuestions: [
            {
              year: 2022,
              question: 'The limit lim(x→0) (sin(x)/x) is:',
              options: [
                '0',
                '1',
                '2',
                'Does not exist'
              ],
              correctAnswer: '1',
              solution: `
### Solution Approach
- Classic limit problem in calculus
- Requires geometric or analytical reasoning
- Key insight: Ratio of sine to angle approaches 1 as x approaches 0

### Detailed Calculation
- Geometrically: sin(x)/x represents the ratio of arc length to chord length
- As x approaches 0, this ratio converges to 1
- Proof involves squeeze theorem or Taylor series expansion
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2021,
              question: 'The derivative of f(x) = x^2 * sin(x) is:',
              options: [
                '2x * sin(x)',
                '2x * sin(x) + x^2 * cos(x)',
                'x^2 * cos(x)',
                '2x * cos(x)'
              ],
              correctAnswer: '2x * sin(x) + x^2 * cos(x)',
              solution: `
### Solution Approach
- Use product rule of differentiation
- f'(x) = d/dx[u(x) * v(x)] = u'(x)v(x) + u(x)v'(x)
- Here, u(x) = x^2, v(x) = sin(x)

### Detailed Calculation
- u'(x) = 2x
- v'(x) = cos(x)
- f'(x) = 2x * sin(x) + x^2 * cos(x)
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2020,
              question: 'The integral ∫(0 to π/2) sin(x) dx is:',
              options: [
                '1',
                '2',
                '0',
                '1/2'
              ],
              correctAnswer: '1',
              solution: `
### Solution Approach
- Standard definite integral of sine function
- Use fundamental theorem of calculus
- Evaluate F(π/2) - F(0), where F is antiderivative

### Detailed Calculation
- Antiderivative of sin(x) is -cos(x)
- F(π/2) = -cos(π/2) = 0
- F(0) = -cos(0) = -1
- ∫(0 to π/2) sin(x) dx = 0 - (-1) = 1
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
      'Limits and Continuity',
      'Differentiation',
      'Integration',
      'GATE Previous Year Questions'
    ]
  }
};
