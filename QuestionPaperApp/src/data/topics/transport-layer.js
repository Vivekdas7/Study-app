export const transportLayerData = {
  title: "Transport Layer",
  introduction: "The Transport Layer provides end-to-end communication services, ensuring reliable data transfer between applications across network devices.",
  
  keyTopics: [
    {
      title: "Connection Management",
      content: "Mechanisms for establishing, maintaining, and terminating network connections.",
      formulas: [
        {
          name: "Connection Efficiency",
          formula: "Efficiency = (Successful Connections) / (Total Connection Attempts)",
          explanation: "Measures the reliability of connection establishment."
        }
      ]
    },
    {
      title: "Flow and Congestion Control",
      content: "Techniques for managing data transmission rates and preventing network overload.",
      formulas: [
        {
          name: "Congestion Index",
          formula: "Congestion = (Dropped Packets) / (Total Transmitted Packets)",
          explanation: "Quantifies network congestion and packet loss."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Reliable Communication Theorem",
      statement: "Transport layer ensures end-to-end data delivery with minimal loss",
      explanation: "Fundamental principle of network communication reliability."
    },
    {
      name: "Congestion Control Theorem",
      statement: "Effective congestion management prevents network performance degradation",
      explanation: "Critical for maintaining network stability."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain TCP's congestion control mechanisms.",
      solution: {
        steps: [
          "Slow Start phase",
          "Congestion Avoidance phase",
          "Fast Retransmit and Fast Recovery",
          "Dynamic window size adjustment"
        ],
        answer: "Adaptive approach to network congestion management"
      }
    },
    {
      year: 2021,
      question: "Compare TCP and UDP connection management strategies.",
      solution: {
        steps: [
          "TCP: Connection-oriented, reliable",
          "UDP: Connectionless, faster",
          "Different approaches to data transmission",
          "Unique strengths in specific scenarios"
        ],
        answer: "Protocol selection based on application requirements"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all transport protocols perform identically",
      correction: "Choose protocol based on specific communication needs."
    },
    {
      mistake: "Overlooking connection management complexity",
      correction: "Understand nuanced differences between transport protocols."
    }
  ]
};
