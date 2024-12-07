export const osiModelData = {
  title: "OSI Model",
  introduction: "The Open Systems Interconnection (OSI) Model is a conceptual framework describing how data communication occurs between devices in a network.",
  
  keyTopics: [
    {
      title: "OSI Layer Architecture",
      content: "Seven-layer model: Physical, Data Link, Network, Transport, Session, Presentation, and Application layers.",
      formulas: [
        {
          name: "Layer Interaction Complexity",
          formula: "Complexity = Σ(Inter-layer Communication Overhead)",
          explanation: "Measures the computational complexity of layer interactions."
        }
      ]
    },
    {
      title: "Layer Functions",
      content: "Detailed examination of each OSI layer's specific responsibilities and communication mechanisms.",
      formulas: [
        {
          name: "Layer Efficiency",
          formula: "Efficiency = (Successful Transmissions) / (Total Layer Interactions)",
          explanation: "Quantifies the effectiveness of individual network layers."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Layer Encapsulation Theorem",
      statement: "Each OSI layer adds its own header during data transmission",
      explanation: "Enables structured and modular network communication."
    },
    {
      name: "Protocol Abstraction Theorem",
      statement: "Each layer provides services to the layer above and uses services from the layer below",
      explanation: "Facilitates modular network design and implementation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the functions of each layer in the OSI Model.",
      solution: {
        steps: [
          "Physical Layer: Bit transmission",
          "Data Link Layer: Frame synchronization",
          "Network Layer: Routing and addressing",
          "Transport Layer: End-to-end communication",
          "Session Layer: Connection management",
          "Presentation Layer: Data formatting",
          "Application Layer: User interfaces"
        ],
        answer: "Comprehensive network communication framework"
      }
    },
    {
      year: 2021,
      question: "Compare and analyze the responsibilities of the Transport and Network layers.",
      solution: {
        steps: [
          "Network Layer: Logical addressing, routing",
          "Transport Layer: Segmentation, flow control",
          "End-to-end communication mechanisms",
          "Different levels of data handling"
        ],
        answer: "Distinct but interconnected layer responsibilities"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Treating OSI Model as rigid implementation",
      correction: "Understand it as a conceptual framework, not a strict protocol."
    },
    {
      mistake: "Overlooking layer interactions",
      correction: "Recognize the interdependence of different network layers."
    }
  ]
};
