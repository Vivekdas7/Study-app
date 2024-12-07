export const routingData = {
  title: "Routing",
  introduction: "Routing is a critical network function that determines the optimal path for data transmission between different network segments.",
  
  keyTopics: [
    {
      title: "Routing Algorithms",
      content: "Different strategies for determining network paths, including Distance Vector, Link State, and Hybrid routing protocols.",
      formulas: [
        {
          name: "Routing Efficiency",
          formula: "Efficiency = (Optimal Paths Found) / (Total Path Calculations)",
          explanation: "Measures the effectiveness of routing algorithm performance."
        }
      ]
    },
    {
      title: "Routing Protocols",
      content: "Examination of interior and exterior routing protocols like OSPF, RIP, BGP, and their implementation.",
      formulas: [
        {
          name: "Convergence Time",
          formula: "Convergence = (Time to Stabilize Network Routes)",
          explanation: "Measures the speed of route adaptation after network changes."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Routing Optimization Theorem",
      statement: "Optimal routing minimizes network latency and maximizes throughput",
      explanation: "Fundamental principle of efficient network path selection."
    },
    {
      name: "Path Selection Theorem",
      statement: "Routing decisions depend on multiple metrics like bandwidth, delay, and reliability",
      explanation: "Complex decision-making process in network routing."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare Distance Vector and Link State routing algorithms.",
      solution: {
        steps: [
          "Distance Vector: Simpler, slower convergence",
          "Link State: More complex, faster adaptation",
          "Different approach to route information sharing",
          "Unique strengths in different network environments"
        ],
        answer: "Algorithm selection based on network characteristics"
      }
    },
    {
      year: 2021,
      question: "Explain the functioning of OSPF (Open Shortest Path First) routing protocol.",
      solution: {
        steps: [
          "Link-state routing protocol",
          "Uses Dijkstra's algorithm",
          "Rapid network topology updates",
          "Supports large, complex networks"
        ],
        answer: "Advanced routing mechanism for dynamic networks"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all routing algorithms perform equally",
      correction: "Choose routing algorithm based on specific network topology and requirements."
    },
    {
      mistake: "Overlooking routing protocol overhead",
      correction: "Consider computational and bandwidth costs of routing mechanisms."
    }
  ]
};
