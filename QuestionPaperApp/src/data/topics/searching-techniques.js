export const searchingTechniquesData = {
  title: "Searching Techniques",
  introduction: "Searching Techniques are fundamental algorithms for finding specific elements within data structures. This topic explores various searching methods, their implementations, and efficiency across different scenarios.",
  
  keyTopics: [
    {
      title: "Linear Search",
      content: "The simplest searching technique that sequentially checks each element in a collection until the target is found or the entire collection is traversed.",
      formulas: [
        {
          name: "Linear Search Complexity",
          formula: "O(n)",
          explanation: "Time complexity grows linearly with the number of elements in the collection."
        }
      ]
    },
    {
      title: "Binary Search",
      content: "An efficient searching algorithm for sorted collections that repeatedly divides the search interval in half, dramatically reducing search time.",
      formulas: [
        {
          name: "Binary Search Complexity",
          formula: "O(log n)",
          explanation: "Logarithmic time complexity makes it extremely efficient for large sorted collections."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Search Space Reduction Theorem",
      statement: "Efficient searching algorithms reduce the search space in each iteration",
      explanation: "The key to improving search performance is minimizing the number of comparisons."
    },
    {
      name: "Comparison Lower Bound Theorem",
      statement: "For comparison-based searching, the lower bound is Ω(log n)",
      explanation: "Proves the fundamental limit of searching efficiency in sorted collections."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare the time complexity of Linear Search and Binary Search. Explain when to use each approach.",
      solution: {
        steps: [
          "Linear Search: O(n), works on unsorted and sorted collections",
          "Binary Search: O(log n), requires sorted collection",
          "Linear Search: Simple implementation",
          "Binary Search: More efficient for large sorted datasets"
        ],
        answer: "Binary Search is more efficient for large sorted collections"
      }
    },
    {
      year: 2021,
      question: "Design a searching algorithm for a rotated sorted array. Analyze its time complexity.",
      solution: {
        steps: [
          "Modified binary search approach",
          "Identify the rotation point",
          "Perform binary search on appropriate subarray",
          "Time complexity: O(log n)"
        ],
        answer: "O(log n) time complexity"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Applying binary search to unsorted collections",
      correction: "Always ensure the collection is sorted before using binary search."
    },
    {
      mistake: "Overlooking the importance of data structure selection for searching",
      correction: "Choose the appropriate data structure and searching technique based on specific requirements."
    }
  ]
};
