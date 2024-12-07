export const networkFundamentalsData = {
  title: "Network Fundamentals",
  introduction: "Network Fundamentals provide the foundational understanding of computer networks, their architecture, communication principles, and essential components.",
  
  keyTopics: [
    {
      title: "Network Topologies",
      content: "Different network design structures including Bus, Star, Ring, Mesh, and Hybrid topologies.",
      formulas: [
        {
          name: "Network Efficiency",
          formula: "Efficiency = (Successful Transmissions) / (Total Transmission Attempts)",
          explanation: "Measures the effectiveness of network communication."
        }
      ]
    },
    {
      title: "Network Classifications",
      content: "Categorization of networks based on size, ownership, and geographical spread: LAN, MAN, WAN.",
      formulas: [
        {
          name: "Network Scalability Index",
          formula: "Scalability = (Maximum Nodes) / (Network Overhead)",
          explanation: "Quantifies the network's ability to expand and accommodate growth."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Network Communication Theorem",
      statement: "Effective communication requires standardized protocols and consistent data representation",
      explanation: "Fundamental principle of network interactions."
    },
    {
      name: "Network Topology Optimization Theorem",
      statement: "Network design should balance reliability, performance, and cost",
      explanation: "Different topologies suit different organizational needs."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze different network topologies: Bus, Star, Ring, and Mesh.",
      solution: {
        steps: [
          "Bus: Shared communication line",
          "Star: Centralized connection point",
          "Ring: Sequential data transmission",
          "Mesh: Multiple interconnected paths"
        ],
        answer: "Each topology has unique characteristics and use cases"
      }
    },
    {
      year: 2021,
      question: "Explain the characteristics and differences between LAN, MAN, and WAN networks.",
      solution: {
        steps: [
          "LAN: Limited geographical area",
          "MAN: City or metropolitan scale",
          "WAN: Nationwide or global coverage",
          "Varying transmission speeds and complexities"
        ],
        answer: "Network classification based on geographical spread"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all network topologies perform equally",
      correction: "Choose network topology based on specific requirements and constraints."
    },
    {
      mistake: "Overlooking scalability in network design",
      correction: "Consider future growth and expansion potential."
    }
  ]
};
