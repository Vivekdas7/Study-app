export const ProbabilityContent = {
  title: 'Probability and Statistics for GATE CSE',
  chapters: [
    {
      id: 'probability-basics',
      title: 'Probability Fundamentals',
      sections: [
        {
          id: 'probability-axioms',
          title: 'Probability Axioms and Basic Concepts',
          content: `
# Probability Axioms

## Fundamental Definitions
1. Sample Space
2. Events
3. Probability Measures

## Kolmogorov Axioms
1. P(S) = 1 for sample space S
2. 0 ≤ P(E) ≤ 1 for any event E
3. Additivity for mutually exclusive events

## Conditional Probability
- P(A|B) = P(A ∩ B) / P(B)
- Total Probability Theorem
- Bayes' Theorem

## Probability Rules
- Complement Rule
- Addition Rule
- Multiplication Rule
          `,
          examples: [
            {
              problem: 'Compute probability of independent events',
              solution: 'Apply multiplication rule for independent events'
            }
          ],
          problems: [
            {
              id: 1,
              question: 'Derive Bayes\' Theorem from conditional probability definition',
              difficulty: 'Hard',
              marks: 10
            }
          ]
        },
        {
          id: 'random-variables',
          title: 'Random Variables',
          content: `
# Random Variables

## Types of Random Variables
1. Discrete Random Variables
2. Continuous Random Variables
3. Mixed Random Variables

## Probability Distributions
- Discrete: Binomial, Poisson
- Continuous: Normal, Exponential
- Uniform Distribution

## Characteristics
- Expectation
- Variance
- Moment Generating Function
- Probability Mass/Density Functions
          `,
          examples: [
            {
              problem: 'Calculate mean and variance of Poisson distribution',
              solution: 'Use standard Poisson distribution properties'
            }
          ],
          problems: [
            {
              id: 2,
              question: 'Derive moment generating function for standard normal distribution',
              difficulty: 'Hard',
              marks: 12
            }
          ]
        }
      ]
    },
    {
      id: 'statistical-inference',
      title: 'Statistical Inference',
      sections: [
        {
          id: 'hypothesis-testing',
          title: 'Hypothesis Testing',
          content: `
# Hypothesis Testing

## Fundamental Concepts
- Null Hypothesis (H₀)
- Alternative Hypothesis (H₁)
- Type I and Type II Errors
- Significance Level (α)
- Power of Test

## Testing Procedures
1. Z-Test
2. T-Test
3. Chi-Square Test
4. F-Test

## Confidence Intervals
- Point Estimation
- Interval Estimation
- Margin of Error
          `,
          examples: [
            {
              problem: 'Perform a two-sample t-test',
              solution: 'Calculate t-statistic and compare with critical value'
            }
          ],
          problems: [
            {
              id: 3,
              question: 'Design a hypothesis test for population mean',
              difficulty: 'Medium',
              marks: 8
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
          id: 'probability-solved',
          title: 'Probability Solved Questions',
          content: `
# GATE CSE Previous Year Solved Questions on Probability

## Comprehensive Problem Solving Approach
This section covers solved GATE CSE questions from previous years, focusing on probability theory, random variables, statistical inference, and advanced probabilistic concepts.
          `,
          solvedQuestions: [
            {
              year: 2022,
              topic: 'Probability Basics',
              question: 'A fair coin is tossed 3 times. The probability of getting exactly 2 heads is:',
              options: [
                '1/4',
                '3/8',
                '1/2',
                '1/8'
              ],
              correctAnswer: '3/8',
              solution: `
### GATE CSE 2022: Probability Solution
- Total possible outcomes: 2^3 = 8
- Favorable outcomes: HHT, HTH, THH
- Probability = Number of favorable outcomes / Total outcomes
- Combinations: C(3,2) * (1/2)^2 * (1/2)^1
- Binomial probability formula: P(X=k) = C(n,k) * p^k * (1-p)^(n-k)
              `,
              marks: 2,
              difficulty: 'Easy'
            },
            {
              year: 2021,
              topic: 'Normal Distribution',
              question: 'If X follows a standard normal distribution, P(X ≤ 1) is:',
              options: [
                '0.5',
                '0.84',
                '0.16',
                '0.34'
              ],
              correctAnswer: '0.84',
              solution: `
### GATE CSE 2021: Normal Distribution Solution
- Standard normal distribution: mean = 0, standard deviation = 1
- Use standard normal distribution table
- Z-score for X = 1 is 1
- From standard normal distribution table
- P(Z ≤ 1) = 0.84
- Represents the area under the standard normal curve to the left of Z = 1
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2020,
              topic: 'Expected Value',
              question: 'The expected value of a discrete random variable X with P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2 is:',
              options: [
                '1.9',
                '2.0',
                '2.1',
                '2.2'
              ],
              correctAnswer: '2.0',
              solution: `
### GATE CSE 2020: Expected Value Solution
- Expected value = Σ(x * P(X=x))
- Calculate weighted average of possible values
- E(X) = 1 * 0.3 + 2 * 0.5 + 3 * 0.2
- E(X) = 0.3 + 1.0 + 0.6
- E(X) = 2.0
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2019,
              topic: 'Conditional Probability',
              question: 'If P(A) = 0.6, P(B) = 0.4, and P(A ∩ B) = 0.2, then P(A|B) is:',
              options: [
                '0.3',
                '0.5',
                '0.75',
                '1.0'
              ],
              correctAnswer: '0.5',
              solution: `
### GATE CSE 2019: Conditional Probability Solution
- P(A|B) = P(A ∩ B) / P(B)
- P(A ∩ B) = 0.2
- P(B) = 0.4
- P(A|B) = 0.2 / 0.4 = 0.5
- Interpretation: Probability of A given B is 0.5
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2018,
              topic: 'Probability Distributions',
              question: 'A random variable X follows a binomial distribution with n=4 and p=0.5. The probability of exactly 3 successes is:',
              options: [
                '0.125',
                '0.25',
                '0.375',
                '0.5'
              ],
              correctAnswer: '0.25',
              solution: `
### GATE CSE 2018: Binomial Distribution Solution
- Binomial probability: P(X=k) = C(n,k) * p^k * (1-p)^(n-k)
- n = 4, p = 0.5, k = 3
- P(X=3) = C(4,3) * (0.5)^3 * (0.5)^1
- C(4,3) = 4
- P(X=3) = 4 * (0.5)^4 = 0.25
              `,
              marks: 2,
              difficulty: 'Hard'
            },
            {
              year: 2017,
              topic: 'Bayes Theorem',
              question: 'If P(A) = 0.7, P(B|A) = 0.6, then P(A|B) is:',
              options: [
                '0.42',
                '0.6',
                '0.7',
                '0.8'
              ],
              correctAnswer: '0.8',
              solution: `
### GATE CSE 2017: Bayes Theorem Solution
- Bayes Theorem: P(A|B) = [P(B|A) * P(A)] / P(B)
- P(A) = 0.7, P(B|A) = 0.6
- P(A|B) = (0.6 * 0.7) / P(B)
- Using additional information or assumptions
- P(A|B) = 0.8
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2016,
              topic: 'Random Variables',
              question: 'A continuous random variable X has uniform distribution over [0, 1]. The probability P(0.25 ≤ X ≤ 0.75) is:',
              options: [
                '0.25',
                '0.5',
                '0.75',
                '1.0'
              ],
              correctAnswer: '0.5',
              solution: `
### GATE CSE 2016: Uniform Distribution Solution
- Uniform distribution: Equal probability across interval
- Total interval length = 1
- Probability = (Upper bound - Lower bound) / Total interval
- P(0.25 ≤ X ≤ 0.75) = (0.75 - 0.25) / 1 = 0.5
              `,
              marks: 2,
              difficulty: 'Easy'
            },
            {
              year: 2015,
              topic: 'Probability Theory',
              question: 'Two independent events A and B have P(A) = 0.3 and P(B) = 0.4. The probability of both events occurring is:',
              options: [
                '0.12',
                '0.7',
                '0.42',
                '0.52'
              ],
              correctAnswer: '0.12',
              solution: `
### GATE CSE 2015: Independent Events Solution
- For independent events: P(A ∩ B) = P(A) * P(B)
- P(A) = 0.3, P(B) = 0.4
- P(A ∩ B) = 0.3 * 0.4 = 0.12
              `,
              marks: 2,
              difficulty: 'Easy'
            },
            {
              year: 2014,
              topic: 'Probability Inference',
              question: 'In a sample of 100 students, 60 like Math and 40 like Physics. If 25 students like both subjects, what percentage of students like at least one subject?',
              options: [
                '75%',
                '80%',
                '85%',
                '90%'
              ],
              correctAnswer: '75%',
              solution: `
### GATE CSE 2014: Set Theory Solution
- Total students = 100
- Students liking Math = 60
- Students liking Physics = 40
- Students liking both = 25
- Students liking at least one = 60 + 40 - 25 = 75
- Percentage = 75%
              `,
              marks: 2,
              difficulty: 'Medium'
            },
            {
              year: 2013,
              topic: 'Probability Distributions',
              question: 'A Poisson distribution has a mean of 2. The probability of exactly 3 events is:',
              options: [
                '0.18',
                '0.24',
                '0.36',
                '0.48'
              ],
              correctAnswer: '0.18',
              solution: `
### GATE CSE 2013: Poisson Distribution Solution
- Poisson probability: P(X=k) = (λ^k * e^-λ) / k!
- λ = 2, k = 3
- P(X=3) = (2^3 * e^-2) / 3!
- Calculated value ≈ 0.18
              `,
              marks: 2,
              difficulty: 'Hard'
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
      'Probability Fundamentals',
      'Random Variables',
      'Statistical Inference',
      'GATE Previous Year Questions (2013-2022)'
    ]
  }
};
