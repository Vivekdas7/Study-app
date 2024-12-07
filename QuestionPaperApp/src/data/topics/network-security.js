export const networkSecurityData = {
  title: "Network Security",
  introduction: "Network Security encompasses strategies, technologies, and processes designed to protect network infrastructure, data, and communication from unauthorized access and cyber threats.",
  
  keyTopics: [
    {
      title: "Cryptography",
      content: "Techniques for securing communication through encryption, decryption, and key management.",
      formulas: [
        {
          name: "Encryption Strength",
          formula: "Strength = log2(Key Space Size)",
          explanation: "Measures the computational difficulty of breaking encryption."
        }
      ]
    },
    {
      title: "Security Mechanisms",
      content: "Various approaches to network protection, including firewalls, intrusion detection systems, and access control.",
      formulas: [
        {
          name: "Security Effectiveness",
          formula: "Effectiveness = (Detected Threats) / (Total Potential Threats)",
          explanation: "Quantifies the efficiency of security mechanisms."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Defense in Depth Theorem",
      statement: "Multiple layers of security provide comprehensive protection",
      explanation: "No single security mechanism is completely foolproof."
    },
    {
      name: "Cryptographic Security Theorem",
      statement: "Security depends on key length, algorithm complexity, and implementation",
      explanation: "Comprehensive approach to cryptographic protection."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare symmetric and asymmetric encryption techniques.",
      solution: {
        steps: [
          "Symmetric: Same key for encryption/decryption",
          "Asymmetric: Public and private key pairs",
          "Different performance and security characteristics",
          "Unique use cases for each approach"
        ],
        answer: "Encryption method selection based on specific requirements"
      }
    },
    {
      year: 2021,
      question: "Explain the functioning of IPSec (Internet Protocol Security).",
      solution: {
        steps: [
          "Network layer security protocol",
          "Authentication Header (AH) mode",
          "Encapsulating Security Payload (ESP) mode",
          "Provides data integrity and confidentiality"
        ],
        answer: "Comprehensive network communication security mechanism"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Relying on a single security mechanism",
      correction: "Implement multi-layered security strategies."
    },
    {
      mistake: "Overlooking regular security updates",
      correction: "Continuously update and patch security mechanisms."
    }
  ]
};
