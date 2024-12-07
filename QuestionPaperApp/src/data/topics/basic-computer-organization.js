export const basicComputerOrganizationData = {
  title: "Basic Computer Organization",
  introduction: "Basic Computer Organization explores the fundamental structure and components of computer systems, providing insights into how digital systems process and manage information. This field lays the groundwork for understanding modern computing by analyzing how hardware and software interact to execute tasks efficiently.",

  keyTopics: [
    {
      title: "Computer System Architecture",
      content: "Comprehensive exploration of computer system components and their interactions, including the CPU, memory, and input/output systems. It focuses on how these components collaborate to perform computations and manage data.",
      formulas: [
        {
          name: "Performance Calculation",
          formula: "Performance = 1 / (Execution Time)",
          explanation: "This formula quantifies the computational efficiency of a computer system by measuring how quickly tasks are executed. Lower execution times lead to higher performance."
        }
      ],
      graph: {
        description: "Visualization of system architecture, showing the relationships and data flow between components such as the processor, memory, and peripheral devices.",
        url: "graph_system_architecture.png"
      }
    },
    {
      title: "Functional Units",
      content: "Detailed analysis of the central processing unit (CPU), memory hierarchy, and input/output (I/O) subsystems. Each functional unit plays a critical role in executing instructions and managing data flow within a computer system.",
      formulas: [
        {
          name: "System Throughput",
          formula: "Throughput = (Number of Instructions) / (Total Execution Time)",
          explanation: "This formula measures the computational capacity of a system by evaluating how many instructions it can process within a given time frame. Higher throughput indicates a more powerful system."
        }
      ],
      graph: {
        description: "Graph showing interactions between functional units, including how data and control signals move between the CPU, memory, and I/O devices.",
        url: "graph_functional_units.png"
      }
    }
  ],

  theorems: [
    {
      name: "Von Neumann Architecture Theorem",
      statement: "Computers consist of a processing unit, control unit, memory, and input/output mechanisms.",
      explanation: "This theorem is the cornerstone of modern computer design, emphasizing the stored-program concept where instructions and data share the same memory space.",
      graph: {
        description: "Diagram of Von Neumann Architecture components, illustrating the data flow between memory, the processing unit, and I/O devices.",
        url: "graph_von_neumann.png"
      }
    },
    {
      name: "Bottleneck Theorem",
      statement: "System performance is limited by the slowest component in the computational pipeline.",
      explanation: "This theorem highlights the importance of addressing slow-performing components to improve overall system efficiency. Common bottlenecks include memory access speeds and I/O performance.",
      graph: {
        description: "Illustration of bottleneck effects in a computer system, showing how a slow component can restrict the performance of the entire system.",
        url: "graph_bottleneck_theorem.png"
      }
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the functional components of a computer system.",
      solution: {
        steps: [
          "Describe the CPU architecture, including its core functionalities like instruction execution and control flow.",
          "Analyze the memory hierarchy, detailing levels such as cache, RAM, and storage.",
          "Explain the role and mechanisms of I/O systems in data communication.",
          "Discuss how the control unit orchestrates operations among the functional units."
        ],
        answer: "The functional components of a computer system include the CPU for processing, memory for data storage, and I/O mechanisms for communication, all coordinated by the control unit to perform tasks efficiently."
      }
    },
    {
      year: 2021,
      question: "Discuss the principles of Von Neumann architecture.",
      solution: {
        steps: [
          "Introduce the stored-program concept where instructions and data are stored in a shared memory space.",
          "Detail the fetch-decode-execute cycle that defines the operational sequence of the CPU.",
          "Explain how memory interacts with the processing unit to store and retrieve data.",
          "Describe control flow mechanisms that manage the order of instruction execution."
        ],
        answer: "The Von Neumann architecture is characterized by its stored-program concept and systematic instruction cycle, enabling efficient computation through unified memory and control mechanisms."
      }
    },
    {
      year: 2020,
      question: "Calculate the throughput of a system that processes 1,000 instructions in 2 seconds.",
      solution: {
        steps: [
          "Identify the formula: Throughput = (Number of Instructions) / (Total Execution Time).",
          "Substitute the given values: Throughput = 1000 / 2.",
          "Perform the calculation: Throughput = 500 instructions per second."
        ],
        answer: "The system's throughput is 500 instructions per second."
      }
    },
    {
      year: 2019,
      question: "Explain how the bottleneck theorem applies to modern computing systems.",
      solution: {
        steps: [
          "Define the bottleneck theorem and its relevance to performance.",
          "Identify common bottlenecks in modern systems, such as memory latency and I/O speed.",
          "Discuss strategies for mitigating bottlenecks, like parallelism and caching.",
          "Provide examples of real-world scenarios where bottleneck analysis improved system performance."
        ],
        answer: "The bottleneck theorem helps identify and address performance limitations by focusing on the slowest system component, ensuring efficient resource utilization."
      }
    },
    {
      year: 2018,
      question: "Compare and contrast RISC and CISC architectures in terms of instruction set complexity and performance.",
      solution: {
        steps: [
          "Define RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer).",
          "Highlight key differences, such as instruction set simplicity in RISC versus complexity in CISC.",
          "Discuss performance trade-offs, like faster execution in RISC due to pipelining versus CISC's compact code size.",
          "Provide examples of processors using RISC (ARM) and CISC (x86) architectures."
        ],
        answer: "RISC architectures emphasize simplicity and efficiency, making them suitable for embedded systems, while CISC architectures prioritize versatility and are common in general-purpose computing."
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking the importance of system interconnections.",
      correction: "Focus on understanding how different computer components communicate and interact to ensure seamless operation."
    },
    {
      mistake: "Treating all computer architectures as identical.",
      correction: "Recognize and study variations in system design, such as differences between RISC and CISC architectures, to appreciate diverse architectural approaches."
    }
  ]
};
