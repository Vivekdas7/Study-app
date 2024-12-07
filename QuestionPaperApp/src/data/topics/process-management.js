export const processManagementData = {
  title: "Process Management",
  introduction: "Process Management is a critical aspect of operating systems that involves creating, scheduling, executing, and terminating processes efficiently. It ensures optimal resource utilization and system performance.",
  
  keyTopics: [
    {
      title: "Process States and Lifecycle",
      content: "Processes transition through various states during their execution, including New, Ready, Running, Waiting, and Terminated. Understanding these states is crucial for effective process management.",
      formulas: [
        {
          name: "Process State Transition",
          formula: "New → Ready → Running → Waiting/Terminated",
          explanation: "Represents the typical lifecycle of a process in an operating system."
        }
      ]
    },
    {
      title: "Process Scheduling Algorithms",
      content: "Different scheduling algorithms determine the order and duration of process execution, balancing factors like CPU utilization, throughput, and response time.",
      formulas: [
        {
          name: "CPU Utilization Formula",
          formula: "CPU Utilization = (Busy Time / Total Time) * 100%",
          explanation: "Measures the percentage of time the CPU is actively processing tasks."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Process Scheduling Theorem",
      statement: "No single scheduling algorithm provides optimal performance for all scenarios",
      explanation: "Different workloads and system requirements necessitate different scheduling strategies."
    },
    {
      name: "Context Switch Overhead Theorem",
      statement: "Process switching incurs computational overhead",
      explanation: "Frequent context switches can reduce overall system performance."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze First-Come-First-Serve (FCFS) and Shortest Job First (SJF) scheduling algorithms.",
      solution: {
        steps: [
          "FCFS: Simple, non-preemptive",
          "SJF: Minimizes average waiting time",
          "FCFS can lead to convoy effect",
          "SJF may cause starvation for long processes"
        ],
        answer: "Choice depends on specific system requirements"
      }
    },
    {
      year: 2021,
      question: "Explain the concept of process creation and the fork() system call in Unix-like operating systems.",
      solution: {
        steps: [
          "fork() creates an exact copy of the parent process",
          "Child process gets a new process ID",
          "Memory is copied using copy-on-write technique",
          "Returns different values in parent and child processes"
        ],
        answer: "Creates a new process with inherited characteristics"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all processes have equal priority",
      correction: "Implement priority-based scheduling to handle varied process requirements."
    },
    {
      mistake: "Neglecting process synchronization mechanisms",
      correction: "Use proper synchronization techniques to prevent race conditions and deadlocks."
    }
  ]
};
