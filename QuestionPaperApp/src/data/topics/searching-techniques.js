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
      ],
      implementationDetails: {
        bestCase: "O(1) - Target found at the first position",
        worstCase: "O(n) - Target is the last element or not present",
        spaceComplexity: "O(1) - In-place searching"
      },
      pseudoCode: `
function linearSearch(arr, target):
    for i = 0 to arr.length - 1:
        if arr[i] == target:
            return i  // Element found
    return -1  // Element not found
      `
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
      ],
      implementationDetails: {
        prerequisite: "Collection must be sorted",
        bestCase: "O(1) - Target is the middle element",
        worstCase: "O(log n) - Target requires multiple divisions",
        spaceComplexity: "O(1) - Iterative approach, O(log n) - Recursive approach"
      },
      pseudoCode: `
function binarySearch(arr, target):
    left = 0
    right = arr.length - 1
    
    while left <= right:
        mid = (left + right) / 2
        
        if arr[mid] == target:
            return mid  // Element found
        
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  // Element not found
      `
    },
    {
      title: "Hash-based Search",
      content: "A modern searching technique using hash tables to achieve near-constant time complexity for element lookup.",
      formulas: [
        {
          name: "Hash Search Average Complexity",
          formula: "O(1)",
          explanation: "Constant time complexity for element retrieval in hash tables."
        }
      ],
      implementationDetails: {
        advantages: [
          "Extremely fast retrieval",
          "Efficient for large datasets",
          "Supports dynamic data structures"
        ],
        challenges: [
          "Potential hash collisions",
          "Additional memory overhead"
        ]
      }
    }
  ],

  theorems: [
    {
      name: "Search Space Reduction Theorem",
      statement: "Efficient searching algorithms reduce the search space in each iteration",
      explanation: "The key to improving search performance is minimizing the number of comparisons.",
      mathematicalRepresentation: "Search Space = Initial Size * (Reduction Factor)^(Number of Iterations)"
    },
    {
      name: "Comparison Lower Bound Theorem",
      statement: "For comparison-based searching, the lower bound is Ω(log n)",
      explanation: "Proves the fundamental limit of searching efficiency in sorted collections.",
      implications: [
        "No comparison-based search can be faster than O(log n)",
        "Applies to sorted or partially sorted collections"
      ]
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
          "Linear Search: Simple implementation, good for small lists",
          "Binary Search: Efficient for large sorted lists"
        ],
        answer: "Linear Search is suitable for small, unsorted lists with O(n) complexity. Binary Search is optimal for large, sorted collections with O(log n) complexity."
      }
    },
    {
      year: 2023,
      question: "Design an algorithm to search an element in a rotated sorted array with O(log n) complexity.",
      solution: {
        steps: [
          "Find the pivot point where rotation occurs",
          "Determine which subarray is sorted",
          "Apply modified binary search"
        ],
        complexityAnalysis: "Time Complexity: O(log n), Space Complexity: O(1)"
      }
    }
  ],

  practiceProblems: [
    {
      title: "Find First and Last Position of Element in Sorted Array",
      difficulty: "Medium",
      description: "Given a sorted array and a target value, find the starting and ending positions of the target value.",
      solution: {
        approach: "Modified Binary Search",
        timeComplexity: "O(log n)"
      }
    },
    {
      title: "Search in Rotated Sorted Array",
      difficulty: "Hard",
      description: "Search for a target in a rotated sorted array with unique elements.",
      solution: {
        approach: "Two-pass Binary Search",
        timeComplexity: "O(log n)"
      }
    }
  ]
};
