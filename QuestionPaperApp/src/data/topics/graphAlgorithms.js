export const graphAlgorithmsData = {
  title: "Graph Algorithms",
  introduction: "Graph Algorithms are powerful computational techniques for solving problems involving interconnected data structures. This topic explores various algorithms for traversing, searching, and analyzing graphs.",
  
  keyTopics: [
    {
      title: "Graph Traversal Techniques",
      content: "Methods for exploring and navigating graph structures, including Depth-First Search (DFS) and Breadth-First Search (BFS).",
      formulas: [
        {
          name: "Graph Traversal Complexity",
          formula: "O(V + E)",
          explanation: "Time complexity for graph traversal, where V is the number of vertices and E is the number of edges."
        }
      ]
    },
    {
      title: "Shortest Path Algorithms",
      content: "Techniques for finding the most efficient path between nodes in a graph, including Dijkstra's and Bellman-Ford algorithms.",
      formulas: [
        {
          name: "Dijkstra's Algorithm Complexity",
          formula: "O(V² or E log V)",
          explanation: "Time complexity depends on the implementation and data structures used."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Connectivity Theorem",
      statement: "A graph is connected if there is a path between every pair of vertices",
      explanation: "Fundamental concept in graph theory for understanding graph structure and traversability."
    },
    {
      name: "Minimum Spanning Tree Theorem",
      statement: "A minimum spanning tree is a subset of edges that connects all vertices with minimum total edge weight",
      explanation: "Critical for network design and optimization problems."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare Breadth-First Search (BFS) and Depth-First Search (DFS). Explain their applications and time complexity.",
      solution: {
        steps: [
          "BFS: Explores nearest vertices first, uses queue",
          "DFS: Explores deepest vertices first, uses stack",
          "Both have O(V + E) time complexity",
          "BFS best for shortest path, DFS for connectivity"
        ],
        answer: "Depends on specific problem requirements"
      }
    },
    {
      year: 2021,
      question: "Explain Dijkstra's algorithm for finding the shortest path in a weighted graph. Analyze its time and space complexity.",
      solution: {
        steps: [
          "Uses greedy approach to find shortest paths",
          "Maintains a set of visited and unvisited vertices",
          "Time complexity: O(V² or E log V)",
          "Space complexity: O(V)"
        ],
        answer: "O(V² or E log V)"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing graph traversal algorithms",
      correction: "Understand the specific use cases and characteristics of different graph traversal techniques."
    },
    {
      mistake: "Neglecting graph representation impact on algorithm performance",
      correction: "The choice of graph representation (adjacency matrix vs. adjacency list) significantly affects algorithm efficiency."
    }
  ]
};
