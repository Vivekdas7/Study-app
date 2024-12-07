export const virtualMemoryData = {
  title: "Virtual Memory",
  introduction: "Virtual Memory is an advanced memory management technique that provides an abstraction of storage resources, enabling efficient memory utilization and process isolation.",
  
  keyTopics: [
    {
      title: "Paging",
      content: "A memory management scheme that eliminates the need for contiguous memory allocation by dividing memory into fixed-size pages.",
      formulas: [
        {
          name: "Page Hit Ratio",
          formula: "Page Hit Ratio = (Page Hits) / (Total Memory Accesses)",
          explanation: "Measures the effectiveness of page caching."
        }
      ]
    },
    {
      title: "Page Replacement Algorithms",
      content: "Strategies for selecting which pages to remove from memory when new pages need to be loaded.",
      formulas: [
        {
          name: "Page Fault Rate",
          formula: "Page Fault Rate = (Page Faults) / (Total Memory Accesses) * 100%",
          explanation: "Indicates the frequency of page loading from secondary storage."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Memory Abstraction Theorem",
      statement: "Virtual memory provides a consistent and isolated memory view for each process",
      explanation: "Enables efficient memory management and process protection."
    },
    {
      name: "Page Replacement Optimization Theorem",
      statement: "Effective page replacement minimizes page faults and maximizes system performance",
      explanation: "Different algorithms perform better in specific scenarios."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze FIFO, LRU, and Optimal page replacement algorithms.",
      solution: {
        steps: [
          "FIFO: Simple, may replace frequently used pages",
          "LRU: Replaces least recently used pages",
          "Optimal: Theoretical best replacement strategy",
          "Each algorithm has unique performance characteristics"
        ],
        answer: "Choice depends on specific workload"
      }
    },
    {
      year: 2021,
      question: "Explain the concept of demand paging and its implementation in virtual memory systems.",
      solution: {
        steps: [
          "Pages loaded only when accessed",
          "Reduces initial load time",
          "Requires page fault handling mechanism",
          "Improves overall memory efficiency"
        ],
        answer: "Efficient memory management technique"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming virtual memory eliminates physical memory constraints",
      correction: "Virtual memory has performance implications and overhead."
    },
    {
      mistake: "Overlooking page replacement algorithm selection",
      correction: "Choose algorithm based on specific workload characteristics."
    }
  ]
};
