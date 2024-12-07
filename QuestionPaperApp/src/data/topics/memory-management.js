export const memoryManagementData = {
  title: "Memory Management",
  introduction: "Memory Management is a crucial function of operating systems that handles allocation, tracking, and optimization of computer memory resources, ensuring efficient program execution and system performance.",
  
  keyTopics: [
    {
      title: "Memory Allocation Strategies",
      content: "Different approaches to allocating memory to processes, including contiguous and non-contiguous allocation methods.",
      formulas: [
        {
          name: "Memory Utilization",
          formula: "Memory Utilization = (Allocated Memory / Total Memory) * 100%",
          explanation: "Measures the percentage of memory currently in use by processes."
        }
      ]
    },
    {
      title: "Virtual Memory Concepts",
      content: "A memory management technique that provides an 'idealized' abstraction of storage resources, allowing efficient use of physical memory.",
      formulas: [
        {
          name: "Page Fault Rate",
          formula: "Page Fault Rate = (Number of Page Faults / Total Memory Accesses) * 100%",
          explanation: "Indicates the frequency of page faults in virtual memory systems."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Memory Fragmentation Theorem",
      statement: "Memory allocation can lead to external and internal fragmentation",
      explanation: "Fragmentation reduces effective memory utilization and can cause performance degradation."
    },
    {
      name: "Working Set Model",
      statement: "A process's memory requirements change dynamically during execution",
      explanation: "Helps in predicting and managing memory allocation more effectively."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze Paging and Segmentation memory management techniques.",
      solution: {
        steps: [
          "Paging: Divides memory into fixed-size pages",
          "Segmentation: Divides memory into variable-sized segments",
          "Paging reduces external fragmentation",
          "Segmentation provides more flexible memory protection"
        ],
        answer: "Each technique has unique advantages"
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
          "Improves overall system memory efficiency"
        ],
        answer: "Efficient memory management technique"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking memory allocation overhead",
      correction: "Consider both time and space complexity in memory management strategies."
    },
    {
      mistake: "Assuming virtual memory eliminates physical memory constraints",
      correction: "Virtual memory has performance implications and is not a complete solution to memory limitations."
    }
  ]
};
