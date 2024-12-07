export const treesAndBinaryTreesData = {
  title: "Trees and Binary Trees",
  introduction: "Trees and Binary Trees are hierarchical data structures that provide efficient organization, traversal, and manipulation of nested data with complex relationships.",
  
  keyTopics: [
    {
      title: "Binary Tree Fundamentals",
      content: "Comprehensive exploration of tree structure, node relationships, and traversal techniques.",
      formulas: [
        {
          name: "Tree Height Calculation",
          formula: "Height = max(Left Subtree Height, Right Subtree Height) + 1",
          explanation: "Determines the height of a binary tree recursively."
        }
      ]
    },
    {
      title: "Advanced Tree Operations",
      content: "Detailed analysis of insertion, deletion, and balancing techniques for tree structures.",
      formulas: [
        {
          name: "Tree Complexity",
          formula: "Complexity = O(log n) for balanced trees, O(n) for unbalanced trees",
          explanation: "Measures computational efficiency of tree operations."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Tree Traversal Theorem",
      statement: "Trees can be traversed using pre-order, in-order, and post-order techniques",
      explanation: "Fundamental principle of hierarchical data structure navigation."
    },
    {
      name: "Balance Factor Theorem",
      statement: "Tree balance is critical for maintaining optimal performance",
      explanation: "Critical for understanding self-balancing tree mechanisms."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Implement a binary search tree with advanced insertion and deletion methods.",
      solution: {
        steps: [
          "Node structure design",
          "Recursive insertion algorithm",
          "Deletion with successor replacement",
          "Balance maintenance"
        ],
        answer: "Comprehensive binary search tree implementation"
      }
    },
    {
      year: 2021,
      question: "Design an algorithm to determine the lowest common ancestor in a binary tree.",
      solution: {
        steps: [
          "Tree traversal techniques",
          "Path tracking mechanism",
          "Ancestor identification",
          "Recursive solution strategy"
        ],
        answer: "Systematic lowest common ancestor algorithm"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Inefficient recursive implementation of tree operations",
      correction: "Optimize recursive algorithms and consider iterative alternatives."
    },
    {
      mistake: "Overlooking tree balance and performance implications",
      correction: "Implement self-balancing mechanisms for complex tree structures."
    }
  ]
};
