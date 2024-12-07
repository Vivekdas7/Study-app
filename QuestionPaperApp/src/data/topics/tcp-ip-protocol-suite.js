export const tcpIpProtocolSuiteData = {
  title: "TCP/IP Protocol Suite",
  introduction: "The TCP/IP Protocol Suite is the fundamental communication protocol for internet and network communications, providing robust and flexible data transmission mechanisms.",
  
  keyTopics: [
    {
      title: "Protocol Layers",
      content: "Four-layer model: Link, Internet, Transport, and Application layers with specific communication responsibilities.",
      formulas: [
        {
          name: "Protocol Efficiency",
          formula: "Efficiency = (Successful Transmissions) / (Total Transmission Attempts)",
          explanation: "Measures the effectiveness of protocol communication."
        }
      ]
    },
    {
      title: "TCP and UDP Characteristics",
      content: "Comparative analysis of Transmission Control Protocol (TCP) and User Datagram Protocol (UDP).",
      formulas: [
        {
          name: "Protocol Overhead",
          formula: "Overhead = (Protocol Metadata) / (Actual Data)",
          explanation: "Quantifies the additional information required for communication."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Reliable Communication Theorem",
      statement: "TCP ensures reliable, ordered, and error-checked data transmission",
      explanation: "Fundamental principle of connection-oriented communication."
    },
    {
      name: "Protocol Selection Theorem",
      statement: "Protocol choice depends on specific application requirements",
      explanation: "TCP and UDP have unique strengths for different scenarios."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare TCP and UDP protocols. Discuss their advantages and use cases.",
      solution: {
        steps: [
          "TCP: Connection-oriented, reliable",
          "UDP: Connectionless, faster",
          "TCP: Suitable for critical data transfer",
          "UDP: Ideal for real-time applications"
        ],
        answer: "Protocol selection based on specific requirements"
      }
    },
    {
      year: 2021,
      question: "Explain the TCP three-way handshake mechanism.",
      solution: {
        steps: [
          "SYN: Initiate connection",
          "SYN-ACK: Server acknowledgment",
          "ACK: Client confirmation",
          "Establishes reliable connection"
        ],
        answer: "Robust connection establishment process"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Using TCP for all network communications",
      correction: "Choose protocol based on specific application needs."
    },
    {
      mistake: "Overlooking protocol overhead",
      correction: "Consider performance implications of protocol selection."
    }
  ]
};
