export const greedyTechniquesData = {
  title: "Greedy Algorithms",
  introduction: "Greedy Algorithms are problem-solving strategies that make locally optimal choices at each step with the hope of finding a global optimum. They are powerful for optimization problems where making the best immediate decision leads to the overall best solution.",
  
  keyTopics: [
    {
      title: "Greedy Choice Property",
      content: "The core principle of greedy algorithms is making the locally optimal choice at each stage, believing it will lead to a globally optimal solution.",
      formulas: [
        {
          name: "Greedy Selection Criteria",
          formula: "Select the best immediate option that doesn't compromise future choices",
          explanation: "Requires proving that local optimal choices lead to a global optimal solution."
        }
      ]
    },
    {
      title: "Classic Greedy Algorithms",
      content: "Several important problems are solved efficiently using greedy approaches, including Dijkstra's shortest path, Kruskal's minimum spanning tree, and Huffman coding.",
      formulas: [
        {
          name: "Fractional Knapsack Problem Complexity",
          formula: "O(n log n)",
          explanation: "Sorting items by value-to-weight ratio and selecting items greedily."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Greedy Choice Theorem",
      statement: "A greedy algorithm is optimal if making locally optimal choices always leads to a globally optimal solution.",
      explanation: "Not all problems can be solved optimally with a greedy approach."
    },
    {
      name: "Exchange Argument Theorem",
      statement: "Prove optimality by showing any non-greedy solution can be transformed into a greedy solution without losing optimality.",
      explanation: "A powerful technique for proving the correctness of greedy algorithms."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the greedy approach to solve the Fractional Knapsack Problem. Analyze its time complexity and optimality.",
      solution: {
        steps: [
          "Calculate value-to-weight ratio for each item",
          "Sort items in descending order of ratio",
          "Fill knapsack by selecting items greedily",
          "Time complexity: O(n log n) due to sorting"
        ],
        answer: "Optimal solution with O(n log n) complexity"
      }
    },
    {
      year: 2021,
      question: "Compare Dijkstra's algorithm (greedy approach) with Bellman-Ford algorithm for finding shortest paths in a weighted graph.",
      solution: {
        steps: [
          "Dijkstra's: Greedy, works for non-negative weights",
          "Bellman-Ford: Dynamic programming, handles negative weights",
          "Dijkstra's: O((V + E) log V)",
          "Bellman-Ford: O(VE)"
        ],
        answer: "Depends on graph characteristics"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming greedy algorithms always find the optimal solution",
      correction: "Carefully prove the greedy choice property for each specific problem."
    },
    {
      mistake: "Overlooking the importance of sorting in greedy algorithms",
      correction: "Sorting is often crucial for implementing the greedy strategy efficiently."
    }
  ]
};
