export const combinationalCircuitsData = {
  title: "Combinational Circuits",
  introduction: "Combinational Circuits are digital circuits where the output depends solely on the current input, without memory or state preservation. They are crucial for performing arithmetic, logical, and multiplexing functions in digital systems.",
  
  keyTopics: [
    {
      title: "Circuit Design Principles",
      content: "Techniques for designing and analyzing circuits with direct input-output relationships. These include Boolean algebra, Karnaugh maps, and simplification methods to reduce circuit complexity.",
      formulas: [
        {
          name: "Circuit Complexity",
          formula: "Complexity = log2(Number of Logic Gates)",
          explanation: "Quantifies the sophistication of combinational circuit design. More logic gates lead to increased complexity."
        },
        {
          name: "Logic Gate Count",
          formula: "Gate Count = (Sum of inputs for each gate) × (Number of gates)",
          explanation: "Estimates the total number of gates needed for a given circuit."
        }
      ]
    },
    {
      title: "Functional Units",
      content: "Comprehensive exploration of adders, multiplexers, decoders, and encoders. These units form the backbone of combinational circuits, facilitating operations like addition, data selection, and binary encoding/decoding.",
      formulas: [
        {
          name: "Functional Efficiency",
          formula: "Efficiency = (Successful Operations) / (Total Possible Inputs)",
          explanation: "Measures the effectiveness of combinational circuit performance by comparing actual operations to possible outcomes."
        },
        {
          name: "Adder Efficiency",
          formula: "Adder Efficiency = (Correct Sum Operations) / (Total Inputs)",
          explanation: "Specifically evaluates the performance of adder circuits."
        }
      ]
    },
    {
      title: "Multiplexer and Demultiplexer Design",
      content: "Design and functionality of multiplexers and demultiplexers. Multiplexers select one of many inputs, while demultiplexers route a single input to multiple outputs.",
      formulas: [
        {
          name: "Multiplexer Selection Efficiency",
          formula: "Efficiency = (Correct Output) / (Total Inputs)",
          explanation: "Assesses the performance of a multiplexer by evaluating the correctness of output selection."
        }
      ]
    },
    {
      title: "Decoders and Encoders",
      content: "Decoders convert binary input into a specific output, while encoders perform the reverse. They are commonly used in control systems and memory addressing.",
      formulas: [
        {
          name: "Decoder Efficiency",
          formula: "Efficiency = (Correct Addressing) / (Total Possible Addresses)",
          explanation: "Evaluates the performance of a decoder circuit."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Functional Completeness Theorem",
      statement: "Combinational circuits can implement any boolean function.",
      explanation: "This is a fundamental principle of digital circuit design, ensuring that any logical function can be expressed using a combination of logic gates."
    },
    {
      name: "Propagation Delay Theorem",
      statement: "Circuit performance depends on signal propagation through logic gates.",
      explanation: "Propagation delay affects the timing and speed of circuits. This theorem is essential for understanding how long it takes for a signal to travel through a logic gate and how it impacts circuit speed."
    },
    {
      name: "Universal Gate Theorem",
      statement: "Any logic gate can be constructed from NAND or NOR gates.",
      explanation: "This theorem highlights the versatility of NAND and NOR gates, making them fundamental to combinational circuit design."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a 4-bit binary adder using combinational logic.",
      solution: {
        steps: [
          "Full adder module design",
          "Cascading adder stages",
          "Carry propagation handling",
          "Verification of addition logic"
        ],
        answer: "A step-by-step approach to designing a binary adder, focusing on full adder modules and carry propagation to ensure accurate addition."
      }
    },
    {
      year: 2021,
      question: "Explain the functioning of a multiplexer and its applications.",
      solution: {
        steps: [
          "Data selection mechanism",
          "Address decoding",
          "Signal routing principles",
          "Practical implementation scenarios"
        ],
        answer: "A detailed explanation of how multiplexers select data inputs, with emphasis on decoding and routing principles in practical systems like communication and data transfer."
      }
    },
    {
      year: 2020,
      question: "Design a 2-to-4 line decoder using basic gates.",
      solution: {
        steps: [
          "Identify the number of inputs and outputs",
          "Implement truth table for decoding",
          "Use AND gates for output generation",
          "Verify correct functionality"
        ],
        answer: "Designing a 2-to-4 line decoder involves mapping inputs to outputs using AND gates, ensuring each input combination uniquely activates one of the outputs."
      }
    },
    {
      year: 2019,
      question: "Explain the difference between a multiplexer and a demultiplexer, with examples.",
      solution: {
        steps: [
          "Define multiplexer and demultiplexer",
          "Discuss data selection and routing in each",
          "Provide real-world examples of usage"
        ],
        answer: "A multiplexer selects one input from many, while a demultiplexer routes one input to multiple outputs. Common examples include signal routing in communication systems and memory addressing."
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking signal propagation delays",
      correction: "Consider timing characteristics in circuit design. Propagation delay can significantly affect circuit performance and must be accounted for in high-speed designs."
    },
    {
      mistake: "Treating all combinational circuits as identical",
      correction: "Recognize unique design requirements for different functional units. For example, adders and multiplexers may have different efficiency criteria."
    },
    {
      mistake: "Not simplifying logic functions",
      correction: "Simplify boolean expressions using Karnaugh maps or Boolean algebra to reduce the number of gates and improve efficiency."
    }
  ]
};
