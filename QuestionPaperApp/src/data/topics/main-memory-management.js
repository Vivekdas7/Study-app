export const mainMemoryManagementData = {
  title: "Main Memory Management",
  introduction: "Main Memory Management involves allocating, tracking, and optimizing computer memory resources to ensure efficient program execution and system performance.",
  
  keyTopics: [
    {
      title: "Memory Allocation Strategies",
      content: "Techniques for allocating memory to processes, including contiguous and non-contiguous allocation methods.",
      formulas: [
        {
          name: "Memory Utilization",
          formula: "Memory Utilization = (Allocated Memory / Total Memory) * 100%",
          explanation: "Measures the percentage of memory currently in use."
        }
      ]
    },
    {
      title: "Fragmentation",
      content: "Memory allocation inefficiencies that reduce available memory usability, including external and internal fragmentation.",
      formulas: [
        {
          name: "Fragmentation Ratio",
          formula: "Fragmentation = (Unusable Memory) / (Total Memory) * 100%",
          explanation: "Quantifies memory allocation inefficiency."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Memory Allocation Optimization Theorem",
      statement: "Efficient memory allocation balances utilization, performance, and flexibility",
      explanation: "No single allocation strategy is optimal for all scenarios."
    },
    {
      name: "Fragmentation Minimization Theorem",
      statement: "Memory allocation techniques should minimize fragmentation",
      explanation: "Reduces memory waste and improves system performance."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze contiguous and non-contiguous memory allocation methods.",
      solution: {
        steps: [
          "Contiguous: Continuous memory blocks",
          "Non-contiguous: Scattered memory allocation",
          "Contiguous: Simpler implementation",
          "Non-contiguous: More flexible memory usage"
        ],
        answer: "Each method has unique advantages"
      }
    },
    {
      year: 2021,
      question: "Explain memory compaction as a fragmentation reduction technique.",
      solution: {
        steps: [
          "Relocates memory blocks",
          "Consolidates free memory",
          "Reduces external fragmentation",
          "Performance overhead consideration"
        ],
        answer: "Technique to optimize memory allocation"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking memory allocation overhead",
      correction: "Consider both time and space complexity in memory management."
    },
    {
      mistake: "Assuming all memory allocation strategies are equal",
      correction: "Choose allocation method based on specific system requirements."
    }
  ]
};
