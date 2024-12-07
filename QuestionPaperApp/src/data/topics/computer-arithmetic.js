export const computerArithmeticData = {
  title: "Computer Arithmetic",
  introduction: "Computer Arithmetic explores the fundamental techniques and algorithms for performing mathematical operations in digital systems, focusing on efficient and accurate computation.",
  
  keyTopics: [
    {
      title: "Number Representation",
      content: "Comprehensive analysis of binary, decimal, and floating-point number systems.",
      formulas: [
        {
          name: "Precision Calculation",
          formula: "Precision = log2(Number of Representable Values)",
          explanation: "Quantifies the accuracy of number representation."
        }
      ]
    },
    {
      title: "Arithmetic Algorithms",
      content: "Detailed exploration of addition, subtraction, multiplication, and division techniques.",
      formulas: [
        {
          name: "Computational Efficiency",
          formula: "Efficiency = (Correct Operations) / (Total Clock Cycles)",
          explanation: "Measures the performance of arithmetic operations."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Overflow Detection Theorem",
      statement: "Arithmetic operations must implement mechanisms to detect and handle numerical overflow",
      explanation: "Fundamental principle of reliable computational systems."
    },
    {
      name: "Floating-Point Representation Theorem",
      statement: "Floating-point numbers require specialized representation and manipulation techniques",
      explanation: "Critical for understanding numerical computation challenges."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design an efficient binary multiplication algorithm.",
      solution: {
        steps: [
          "Multiplication strategy",
          "Bit-level optimization",
          "Overflow handling",
          "Performance analysis"
        ],
        answer: "Comprehensive binary multiplication design approach"
      }
    },
    {
      year: 2021,
      question: "Explain floating-point number representation and its computational challenges.",
      solution: {
        steps: [
          "IEEE 754 standard",
          "Mantissa and exponent",
          "Precision limitations",
          "Rounding mechanisms"
        ],
        answer: "Systematic exploration of floating-point arithmetic"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking numerical precision limitations",
      correction: "Understand the complexities of number representation and arithmetic."
    },
    {
      mistake: "Assuming uniform arithmetic performance",
      correction: "Recognize variations in computational efficiency across different operations."
    }
  ]
};
