export const discreteMathematicsData = {
  'propositional-logic': {
    title: 'Propositional and First-Order Logic',
    overview: 'Study of logical reasoning and formal proofs',
    theorems: [
      {
        name: 'De Morgan\'s Laws',
        statement: '¬(P ∧ Q) ≡ (¬P ∨ ¬Q) and ¬(P ∨ Q) ≡ (¬P ∧ ¬Q)',
        applications: ['Circuit design', 'Boolean algebra']
      },
      {
        name: 'Resolution Principle',
        statement: 'From (P ∨ Q) and (¬Q ∨ R), we can derive (P ∨ R)',
        applications: ['Automated theorem proving', 'Logic programming']
      }
    ],
    formulas: [
      {
        topic: 'Logical Equivalences',
        list: [
          'P → Q ≡ ¬P ∨ Q',
          'P ↔ Q ≡ (P → Q) ∧ (Q → P)',
          '¬(P → Q) ≡ P ∧ ¬Q'
        ]
      },
      {
        topic: 'Predicate Logic',
        list: [
          '¬(∀x)P(x) ≡ (∃x)¬P(x)',
          '¬(∃x)P(x) ≡ (∀x)¬P(x)',
          '(∀x)(P(x) → Q(x)) ≡ (∃x)P(x) → (∃x)Q(x)'
        ]
      }
    ],
    solvedExamples: [
      {
        title: 'Proving Logical Equivalence',
        problem: 'Prove that P → (Q → R) ≡ (P ∧ Q) → R',
        solution: `Step 1: Convert first implication
P → (Q → R)
≡ P → (¬Q ∨ R)    [Using P → Q ≡ ¬P ∨ Q]
≡ ¬P ∨ (¬Q ∨ R)   [Using P → Q ≡ ¬P ∨ Q]
≡ (¬P ∨ ¬Q) ∨ R   [Associativity]
≡ ¬(P ∧ Q) ∨ R    [De Morgan's Law]
≡ (P ∧ Q) → R     [Using P → Q ≡ ¬P ∨ Q]`
      }
    ],
    gateQuestions: [
      {
        year: 2022,
        question: 'Which of the following is logically equivalent to P → (Q ∨ R)?',
        solution: `Step 1: Convert the implication
P → (Q ∨ R)
≡ ¬P ∨ (Q ∨ R)    [Using P → Q ≡ ¬P ∨ Q]
≡ (¬P ∨ Q) ∨ R    [Associativity]
≡ (P → Q) ∨ R     [Using P → Q ≡ ¬P ∨ Q]

Therefore, P → (Q ∨ R) ≡ (P → Q) ∨ R`,
        marks: 2,
        difficulty: 'Medium'
      }
    ]
  },
  'sets-relations-functions': {
    title: 'Sets, Relations, and Functions',
    overview: 'Fundamental mathematical structures and their properties',
    theorems: [
      {
        name: 'Schröder-Bernstein Theorem',
        statement: 'If there exist injective functions f: A → B and g: B → A, then there exists a bijective function h: A → B',
        applications: ['Set theory', 'Cardinality proofs']
      },
      {
        name: 'Cantor\'s Theorem',
        statement: 'For any set A, |A| < |P(A)| where P(A) is the power set of A',
        applications: ['Infinite set theory', 'Computational complexity']
      }
    ],
    formulas: [
      {
        topic: 'Set Operations',
        list: [
          '|A ∪ B| = |A| + |B| - |A ∩ B|',
          '|A × B| = |A| × |B|',
          '|P(A)| = 2^|A|'
        ]
      },
      {
        topic: 'Relations',
        list: [
          'Reflexive: aRa for all a ∈ A',
          'Symmetric: aRb → bRa',
          'Transitive: aRb and bRc → aRc'
        ]
      }
    ],
    solvedExamples: [
      {
        title: 'Function Classification',
        problem: 'Determine if f(x) = x² is injective and surjective on R',
        solution: `Step 1: Check injectivity
f(x₁) = f(x₂) → x₁² = x₂²
This means x₁ = ±x₂
Therefore, not injective (e.g., f(2) = f(-2))

Step 2: Check surjectivity
For any y ∈ R, y < 0 has no x where f(x) = y
Therefore, not surjective

Conclusion: f(x) = x² is neither injective nor surjective on R`
      }
    ],
    gateQuestions: [
      {
        year: 2021,
        question: 'How many relations on a set with 3 elements are both reflexive and symmetric?',
        solution: `Step 1: Count required elements
- For 3 elements, we need all (a,a) pairs (reflexive)
- For each (a,b), we need (b,a) (symmetric)

Step 2: Calculate
- 3 reflexive pairs required
- 3 pairs of elements to consider for symmetry
- Each pair can be present or absent
- Therefore, 2³ = 8 possible relations`,
        marks: 3,
        difficulty: 'Hard'
      }
    ]
  },
  'graph-theory': {
    title: 'Graph Theory',
    overview: 'Study of graphs and their properties',
    theorems: [
      {
        name: 'Euler\'s Formula',
        statement: 'For a connected planar graph, V - E + F = 2, where V = vertices, E = edges, F = faces',
        applications: ['Planar graph testing', 'Network design']
      },
      {
        name: 'Handshaking Lemma',
        statement: 'Sum of degrees of all vertices = 2 × number of edges',
        applications: ['Graph analysis', 'Network protocols']
      }
    ],
    formulas: [
      {
        topic: 'Graph Properties',
        list: [
          'Maximum edges in simple graph: n(n-1)/2',
          'Complete graph edges: n(n-1)/2',
          'Tree edges: n-1 (n vertices)'
        ]
      },
      {
        topic: 'Graph Coloring',
        list: [
          'Chromatic number ≤ maximum degree + 1',
          'Planar graphs: chromatic number ≤ 4',
          'Bipartite graph: chromatic number = 2'
        ]
      }
    ],
    solvedExamples: [
      {
        title: 'Shortest Path Problem',
        problem: 'Find the shortest path between vertices A and E in given weighted graph',
        solution: `Using Dijkstra's Algorithm:

Step 1: Initialize
dist[A] = 0, all others = ∞
visited = {}

Step 2: Process vertices
Visit A: Update B(4), C(2)
Visit C: Update D(5), E(6)
Visit B: Update D(7)
Visit D: Update E(8)
Visit E: Done

Shortest path: A → C → E
Distance: 6`
      }
    ],
    gateQuestions: [
      {
        year: 2020,
        question: 'In a connected graph with 6 vertices and 9 edges, find the number of faces using Euler\'s formula',
        solution: `Using Euler's formula: V - E + F = 2

Given:
V = 6 (vertices)
E = 9 (edges)

Substitute:
6 - 9 + F = 2
F = 5

Therefore, the graph has 5 faces`,
        marks: 2,
        difficulty: 'Medium'
      }
    ]
  }
}
