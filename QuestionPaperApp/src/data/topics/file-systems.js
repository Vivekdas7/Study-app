export const fileSystemsData = {
  title: "File Systems",
  introduction: "File Systems are essential components of operating systems that manage data storage, organization, and retrieval, providing structured methods for file allocation, access, and protection.",
  
  keyTopics: [
    {
      title: "File System Structures",
      content: "Different approaches to organizing and managing files and directories, including hierarchical, indexed, and linked allocation methods.",
      formulas: [
        {
          name: "Storage Utilization",
          formula: "Storage Utilization = (Used Space / Total Space) * 100%",
          explanation: "Measures the efficiency of file system storage allocation."
        }
      ]
    },
    {
      title: "File Allocation Methods",
      content: "Techniques for allocating disk space to files, including contiguous, linked, and indexed allocation.",
      formulas: [
        {
          name: "Fragmentation Ratio",
          formula: "Fragmentation = (Unused Space / Total Allocated Space) * 100%",
          explanation: "Indicates the inefficiency in space utilization due to fragmentation."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "File System Performance Theorem",
      statement: "File system performance depends on allocation method, access patterns, and metadata management",
      explanation: "Different file systems optimize for various access and storage scenarios."
    },
    {
      name: "Metadata Management Theorem",
      statement: "Efficient metadata handling is crucial for file system performance",
      explanation: "Impacts file lookup, creation, and deletion operations."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze contiguous and indexed file allocation methods.",
      solution: {
        steps: [
          "Contiguous: Continuous disk blocks",
          "Indexed: Uses index block for file allocation",
          "Contiguous: Simple, but prone to external fragmentation",
          "Indexed: More flexible, slightly more complex"
        ],
        answer: "Each method has unique advantages"
      }
    },
    {
      year: 2021,
      question: "Explain the implementation of journaling in modern file systems.",
      solution: {
        steps: [
          "Maintains log of file system transactions",
          "Provides crash recovery mechanism",
          "Ensures file system consistency",
          "Reduces data loss risk"
        ],
        answer: "Advanced file system reliability technique"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking file system overhead",
      correction: "Consider metadata management and allocation strategy impacts."
    },
    {
      mistake: "Assuming all file systems perform equally",
      correction: "Choose file system based on specific use case and performance requirements."
    }
  ]
};
