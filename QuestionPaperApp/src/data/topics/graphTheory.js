export const graphTheoryData = {
  title: "Graph Theory",
  introduction: `Graph Theory is a fundamental branch of discrete mathematics that studies mathematical structures used to model pairwise relations between objects. It has extensive applications in computer science, networking, and algorithm design.`,
  
  keyTopics: [
    {
      title: "Graph Fundamentals",
      content: `Graphs are mathematical structures consisting of:
      • Vertices (Nodes)
      • Edges (Connections)
      • Types of Graphs:
        - Directed vs Undirected
        - Weighted vs Unweighted
        - Connected vs Disconnected
        - Simple vs Multigraph`,
      formulas: [
        {
          name: "Handshaking Lemma",
          formula: "∑deg(v) = 2|E|",
          explanation: "Sum of vertex degrees equals twice the number of edges"
        }
      ]
    },
    {
      title: "Graph Algorithms",
      content: `Key algorithmic techniques in graph theory:
      • Breadth-First Search (BFS)
      • Depth-First Search (DFS)
      • Shortest Path Algorithms
        - Dijkstra's Algorithm
        - Bellman-Ford Algorithm
      • Minimum Spanning Tree
        - Kruskal's Algorithm
        - Prim's Algorithm`,
      formulas: [
        {
          name: "Time Complexity of BFS/DFS",
          formula: "O(V + E)",
          explanation: "Complexity based on vertices and edges"
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Euler Path Theorem",
      statement: "A graph has an Euler path if and only if exactly zero or two vertices have odd degree",
      explanation: "Determines the existence of a path that uses each edge exactly once"
    },
    {
      name: "Four Color Theorem",
      statement: "Any map can be colored using at most four colors such that no adjacent regions share a color",
      explanation: "Fundamental theorem in graph coloring"
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "In a graph with 10 vertices, if each vertex has a degree of 4, how many edges are in the graph?",
      solution: {
        steps: [
          "Apply Handshaking Lemma",
          "Calculate total degree",
          "Divide by 2 to get number of edges"
        ],
        answer: "20 edges"
      },
      explanation: "Using the fundamental relationship between vertex degrees and edges"
    },
    {
      year: 2021,
      question: "Implement Dijkstra's algorithm to find the shortest path in a weighted graph with 5 vertices",
      solution: {
        steps: [
          "Choose starting vertex",
          "Initialize distances",
          "Select unvisited vertex with minimum distance",
          "Update neighboring vertex distances",
          "Repeat until all vertices processed"
        ],
        answer: "Shortest path algorithm implementation"
      },
      explanation: "Systematic approach to finding shortest paths"
    }
  ],

  practiceProblems: [
    {
      difficulty: "Hard",
      question: "Prove that in any graph, the number of vertices with odd degree is always even",
      solution: {
        steps: [
          "Use contradiction",
          "Apply Handshaking Lemma",
          "Demonstrate mathematical impossibility"
        ],
        answer: "Proof of graph degree parity"
      }
    }
  ],

  applications: [
    {
      domain: "Network Design",
      description: "Routing, connectivity, and network optimization"
    },
    {
      domain: "Social Network Analysis",
      description: "Studying connections and influence patterns"
    },
    {
      domain: "Artificial Intelligence",
      description: "Path finding, game theory, and decision trees"
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing directed and undirected graph properties",
      correction: "Always clarify graph type before applying algorithms"
    },
    {
      mistake: "Assuming all graph algorithms have same complexity",
      correction: "Time complexity varies based on graph structure and algorithm"
    }
  ]
};
