export const networkPerformanceData = {
  title: "Network Performance",
  introduction: "Network Performance analysis involves measuring, evaluating, and optimizing various metrics that determine the efficiency and quality of network communication.",
  
  keyTopics: [
    {
      title: "Performance Metrics",
      content: "Key indicators including bandwidth, latency, throughput, and packet loss.",
      formulas: [
        {
          name: "Network Throughput",
          formula: "Throughput = (Data Transferred) / (Total Time)",
          explanation: "Measures the rate of successful data transmission."
        }
      ]
    },
    {
      title: "Performance Optimization",
      content: "Techniques and strategies for improving network efficiency and reducing bottlenecks.",
      formulas: [
        {
          name: "Performance Improvement Ratio",
          formula: "Improvement = (Optimized Performance) / (Original Performance)",
          explanation: "Quantifies the effectiveness of performance enhancement techniques."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Network Scalability Theorem",
      statement: "Performance degrades non-linearly with increased network complexity",
      explanation: "Fundamental challenge in network design and expansion."
    },
    {
      name: "Bottleneck Identification Theorem",
      statement: "Network performance is determined by its weakest component",
      explanation: "Critical for targeted performance improvements."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain key network performance metrics and their significance.",
      solution: {
        steps: [
          "Bandwidth: Maximum data transfer rate",
          "Latency: Delay in data transmission",
          "Throughput: Actual data transfer rate",
          "Packet Loss: Percentage of dropped packets"
        ],
        answer: "Comprehensive network performance evaluation"
      }
    },
    {
      year: 2021,
      question: "Discuss strategies for network performance optimization.",
      solution: {
        steps: [
          "Bandwidth management",
          "Traffic shaping",
          "Load balancing",
          "Caching mechanisms"
        ],
        answer: "Multi-faceted approach to performance enhancement"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Focusing solely on bandwidth",
      correction: "Consider multiple performance metrics for comprehensive analysis."
    },
    {
      mistake: "Overlooking network topology's impact on performance",
      correction: "Analyze how network design affects overall performance."
    }
  ]
};
