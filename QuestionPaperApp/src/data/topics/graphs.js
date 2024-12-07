export const graphsData = {
  title: "Graphs",
  introduction: "Graphs are powerful non-linear data structures representing complex relationships and networks, providing sophisticated algorithms for traversal, connectivity, and optimization.",
  
  keyTopics: [
    {
      title: "Graph Representation",
      content: "Comprehensive exploration of adjacency matrix, adjacency list, and edge list representations.",
      formulas: [
        {
          name: "Graph Density",
          formula: "Density = (Number of Edges) / (Maximum Possible Edges)",
          explanation: "Quantifies the connectivity of a graph structure."
        }
      ]
    },
    {
      title: "Graph Traversal Algorithms",
      content: "Detailed analysis of Breadth-First Search (BFS) and Depth-First Search (DFS) techniques.",
      formulas: [
        {
          name: "Traversal Complexity",
          formula: "Complexity = O(V + E), where V = Vertices, E = Edges",
          explanation: "Measures computational efficiency of graph traversal."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Connectivity Theorem",
      statement: "Graphs can be analyzed for connectivity, path existence, and component structure",
      explanation: "Fundamental principle of graph theory and network analysis."
    },
    {
      name: "Shortest Path Theorem",
      statement: "Various algorithms exist for finding optimal paths in weighted graphs",
      explanation: "Critical for understanding graph optimization techniques."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Implement Dijkstra's shortest path algorithm for a weighted graph.",
      solution: {
        steps: [
          "Graph representation",
          "Distance initialization",
          "Priority queue management",
          "Path reconstruction mechanism"
        ],
        answer: "Comprehensive shortest path algorithm implementation"
      }
    },
    {
      year: 2021,
      question: "Design an algorithm to detect cycles in an undirected graph.",
      solution: {
        steps: [
          "Graph traversal strategy",
          "Cycle detection mechanism",
          "Visited node tracking",
          "Recursive and iterative approaches"
        ],
        answer: "Systematic graph cycle detection technique"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Inefficient graph representation selection",
      correction: "Choose graph representation based on specific problem requirements."
    },
    {
      mistake: "Overlooking graph traversal complexity",
      correction: "Understand time and space complexity of different traversal algorithms."
    }
  ]
};
