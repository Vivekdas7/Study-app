export const computerArithmeticData = {
  title: "Computer Arithmetic",
  introduction: "Computer Arithmetic explores the fundamental techniques and algorithms for performing mathematical operations in digital systems, focusing on efficient and accurate computation.",
  
  keyTopics: [
    {
      title: "Number Representation",
      content: "Comprehensive analysis of binary, decimal, and floating-point number systems. Focuses on the conversion between these representations and their impact on computational efficiency.",
      formulas: [
        {
          name: "Precision Calculation",
          formula: "Precision = log2(Number of Representable Values)",
          explanation: "Quantifies the accuracy of number representation and determines how many distinct values can be represented."
        },
        {
          name: "Normalization",
          formula: "Normalized Number = Mantissa * 2^Exponent",
          explanation: "In floating-point representation, normalization adjusts the number so that the leading bit of the mantissa is non-zero, ensuring maximum precision."
        }
      ]
    },
    {
      title: "Arithmetic Algorithms",
      content: "Detailed exploration of arithmetic algorithms, including addition, subtraction, multiplication, and division, with a focus on optimizing for hardware implementation and minimizing errors.",
      formulas: [
        {
          name: "Computational Efficiency",
          formula: "Efficiency = (Correct Operations) / (Total Clock Cycles)",
          explanation: "Measures the performance of arithmetic operations and helps evaluate hardware efficiency."
        },
        {
          name: "Multiplication Complexity",
          formula: "Multiplication Complexity = O(n^2)",
          explanation: "Describes the complexity of multiplication algorithms, like long multiplication, where n is the number of bits."
        }
      ]
    },
    {
      title: "Floating-Point Arithmetic",
      content: "In-depth look at floating-point representation and operations. Covers special cases like infinity, NaN (Not a Number), and precision limitations.",
      formulas: [
        {
          name: "Floating-Point Error",
          formula: "Error = |True Value - Represented Value|",
          explanation: "Defines the error in floating-point arithmetic and how precision affects numerical results."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Overflow Detection Theorem",
      statement: "Arithmetic operations must implement mechanisms to detect and handle numerical overflow.",
      explanation: "Overflow occurs when a result exceeds the representable range, which must be handled to ensure the correctness of computations."
    },
    {
      name: "Floating-Point Representation Theorem",
      statement: "Floating-point numbers require specialized representation and manipulation techniques.",
      explanation: "Floating-point arithmetic involves trade-offs in precision and range, and understanding these is crucial for numerical stability."
    },
    {
      name: "Carry Propagation Theorem",
      statement: "In binary addition, carry propagation must be handled correctly to ensure accurate results.",
      explanation: "Carry propagation is the process where the carry bit is added to the next higher bit during binary addition, crucial for large number operations."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design an efficient binary multiplication algorithm.",
      solution: {
        steps: [
          "Identify the multiplication strategy (e.g., shift-and-add or Booth's algorithm)",
          "Optimize bit-level operations (e.g., using bitwise AND/OR operations)",
          "Handle overflow cases (ensure results fit within the bit-width)",
          "Perform performance analysis (evaluate time complexity and clock cycle usage)"
        ],
        answer: "Comprehensive binary multiplication design approach, with optimizations for speed and accuracy."
      }
    },
    {
      year: 2021,
      question: "Explain floating-point number representation and its computational challenges.",
      solution: {
        steps: [
          "Describe IEEE 754 standard (single-precision and double-precision formats)",
          "Explain mantissa and exponent structure in floating-point numbers",
          "Discuss precision limitations (e.g., rounding errors, truncation)",
          "Review rounding mechanisms (e.g., round to nearest, truncation)"
        ],
        answer: "Systematic exploration of floating-point arithmetic, covering key concepts and challenges like precision and rounding errors."
      }
    },
    {
      year: 2020,
      question: "Compare different binary addition algorithms and their complexities.",
      solution: {
        steps: [
          "Describe simple bit-by-bit addition",
          "Explain carry-lookahead and carry-select adders",
          "Analyze the time complexity of each approach (e.g., O(n) vs. O(log n))",
          "Discuss trade-offs in hardware implementation"
        ],
        answer: "Analysis of binary addition methods, comparing time complexity and hardware performance."
      }
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that a 32-bit floating-point number can represent approximately 10 decimal digits of precision.",
      solution: {
        steps: [
          "Review IEEE 754 single-precision format",
          "Break down the mantissa and exponent range",
          "Estimate the number of decimal digits that can be represented",
          "Provide justification for the result based on precision"
        ],
        answer: "Calculation based on the 32-bit format of IEEE 754 single precision, showing it can represent about 7-9 significant decimal digits."
      }
    },
    {
      difficulty: "Medium",
      question: "Explain how signed numbers are represented in two's complement and perform the addition of two signed 8-bit binary numbers.",
      solution: {
        steps: [
          "Explain two's complement representation",
          "Add two signed 8-bit numbers in two's complement",
          "Handle overflow and carry correctly",
          "Verify the result"
        ],
        answer: "Step-by-step addition process in two's complement representation, with overflow handling and final verification."
      }
    }
  ],

  applications: [
    {
      domain: "Digital Systems",
      description: "Computer arithmetic is fundamental to digital systems, providing the basis for numerical operations in processors and hardware devices."
    },
    {
      domain: "Embedded Systems",
      description: "Embedded systems often require efficient arithmetic algorithms to handle sensor data, control signals, and real-time processing."
    },
    {
      domain: "Signal Processing",
      description: "Computer arithmetic plays a crucial role in digital signal processing (DSP) applications, where operations like FFT and filtering require precise and fast arithmetic."
    },
    {
      domain: "Computer Graphics",
      description: "In computer graphics, efficient arithmetic operations are vital for rendering images, applying transformations, and handling pixel manipulation."
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking numerical precision limitations",
      correction: "Understand the trade-offs between precision and performance in number representation, especially for floating-point operations."
    },
    {
      mistake: "Assuming uniform arithmetic performance across all operations",
      correction: "Recognize that different arithmetic operations (addition, multiplication, etc.) can have vastly different computational efficiencies, especially in hardware."
    },
    {
      mistake: "Neglecting overflow and underflow handling",
      correction: "Implement appropriate checks and mechanisms to handle overflow and underflow in arithmetic computations."
    }
  ]
};
