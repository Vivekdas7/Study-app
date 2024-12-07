export const memoryHierarchyData = {
  title: "Memory Hierarchy",
  introduction: "Memory Hierarchy explores the multi-level memory organization in computer systems, focusing on performance optimization, caching strategies, and data access mechanisms.",
  
  keyTopics: [
    {
      title: "Cache Memory Organization",
      content: "Comprehensive analysis of cache levels, mapping techniques, and performance optimization.",
      formulas: [
        {
          name: "Cache Hit Rate",
          formula: "Hit Rate = (Cache Hits) / (Total Memory Accesses)",
          explanation: "Quantifies the effectiveness of cache memory design."
        }
      ]
    },
    {
      title: "Memory Access Mechanisms",
      content: "Detailed exploration of memory access patterns, latency, and bandwidth considerations.",
      formulas: [
        {
          name: "Memory Bandwidth",
          formula: "Bandwidth = (Data Transferred) / (Time Interval)",
          explanation: "Measures the data transfer capacity of memory systems."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Locality of Reference Theorem",
      statement: "Programs tend to access memory locations that are close to recently accessed locations",
      explanation: "Fundamental principle underlying cache memory design."
    },
    {
      name: "Memory Wall Theorem",
      statement: "Memory access speed grows slower compared to processor speed",
      explanation: "Critical for understanding memory system performance limitations."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a cache memory system and explain its mapping techniques.",
      solution: {
        steps: [
          "Cache organization",
          "Mapping strategies",
          "Replacement policies",
          "Performance analysis"
        ],
        answer: "Comprehensive cache memory design approach"
      }
    },
    {
      year: 2021,
      question: "Explain memory hierarchy and its performance implications.",
      solution: {
        steps: [
          "Multilevel memory structure",
          "Access time considerations",
          "Bandwidth optimization",
          "Caching strategies"
        ],
        answer: "Systematic exploration of memory system organization"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking cache complexity",
      correction: "Understand intricate cache mapping and replacement mechanisms."
    },
    {
      mistake: "Assuming uniform memory access times",
      correction: "Recognize variations in memory access latencies across different levels."
    }
  ]
};
