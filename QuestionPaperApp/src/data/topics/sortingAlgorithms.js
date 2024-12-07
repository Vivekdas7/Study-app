export const sortingAlgorithmsData = {
  title: "Sorting Algorithms",
  introduction: "Sorting algorithms are fundamental techniques in computer science for arranging elements in a specific order. This topic explores various sorting methods, their efficiency, and implementation strategies.",
  
  keyTopics: [
    {
      title: "Comparison-Based Sorting Algorithms",
      content: "These algorithms sort elements by comparing them pairwise. Examples include Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort.",
      formulas: [
        {
          name: "Comparison Sort Lower Bound",
          formula: "Ω(n log n)",
          explanation: "Minimum time complexity for comparison-based sorting algorithms in the average and worst cases."
        }
      ]
    },
    {
      title: "Non-Comparison Based Sorting",
      content: "Algorithms that don't rely on element comparisons, such as Counting Sort, Radix Sort, and Bucket Sort. These can achieve better time complexity for specific input types.",
      formulas: [
        {
          name: "Counting Sort Time Complexity",
          formula: "O(n + k)",
          explanation: "Where n is the number of elements and k is the range of input values."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Sorting Algorithm Complexity Theorem",
      statement: "No comparison-based sorting algorithm can have a time complexity better than O(n log n)",
      explanation: "Proves the fundamental lower bound for comparison-based sorting methods."
    },
    {
      name: "Stability in Sorting",
      statement: "A sorting algorithm is stable if it preserves the relative order of equal elements",
      explanation: "Important in scenarios where maintaining original order of equal elements is crucial."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare the time and space complexity of Merge Sort and Quick Sort. Discuss their strengths and weaknesses.",
      solution: {
        steps: [
          "Merge Sort: O(n log n) time, O(n) space, stable",
          "Quick Sort: O(n log n) average, O(n²) worst-case, O(log n) space, not stable",
          "Merge Sort better for large datasets, Quick Sort more memory-efficient"
        ],
        answer: "Depends on specific use case and constraints"
      }
    },
    {
      year: 2021,
      question: "Explain how Radix Sort works and analyze its time complexity for sorting integers.",
      solution: {
        steps: [
          "Sort digits from least significant to most significant",
          "Uses Counting Sort as a subroutine",
          "Time complexity: O(d * (n + k))",
          "d is number of digits, n is number of elements, k is range of digits"
        ],
        answer: "O(d * (n + k))"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Choosing a sorting algorithm without considering input characteristics",
      correction: "Select sorting algorithm based on input size, data distribution, and memory constraints."
    },
    {
      mistake: "Assuming all sorting algorithms perform equally well",
      correction: "Different sorting algorithms have varying performance characteristics. Choose wisely based on specific requirements."
    }
  ]
};
