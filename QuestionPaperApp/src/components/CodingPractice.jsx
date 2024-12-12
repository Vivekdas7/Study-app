import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaProjectDiagram, 
  FaPuzzlePiece 
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';
import { FaCheckCircle } from 'react-icons/fa';

const CodingPractice = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [completedQuestions, setCompletedQuestions] = useState(() => {
    const saved = localStorage.getItem('completedQuestions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
  }, [completedQuestions]);

  const toggleQuestionComplete = (questionId) => {
    setCompletedQuestions(prev => {
      if (prev.includes(questionId)) {
        return prev.filter(id => id !== questionId);
      }
      return [...prev, questionId];
    });
  };

  const getProgressStats = () => {
    const totalQuestions = sdeSheetQuestions.length;
    const completedCount = completedQuestions.length;
    const progressPercentage = Math.round((completedCount / totalQuestions) * 100);

    const topicProgress = {};
    sdeSheetQuestions.forEach(question => {
      if (!topicProgress[question.topic]) {
        topicProgress[question.topic] = {
          total: 0,
          completed: 0
        };
      }
      topicProgress[question.topic].total += 1;
      if (completedQuestions.includes(question.id)) {
        topicProgress[question.topic].completed += 1;
      }
    });

    return {
      totalQuestions,
      completedCount,
      progressPercentage,
      topicProgress
    };
  };

  const codingPracticeCategories = [
    {
      name: 'Data Structures',
      icon: <FaDatabase />,
      description: 'Master fundamental data structures and their implementations',
      color: 'blue'
    },
    {
      name: 'Algorithms',
      icon: <FaProjectDiagram />,
      description: 'Learn and practice advanced algorithmic techniques',
      color: 'green'
    },
    {
      name: 'Problem Solving',
      icon: <FaPuzzlePiece />,
      description: 'Solve challenging coding problems and improve problem-solving skills',
      color: 'purple'
    }
  ];

  const codingPlatforms = [
    { 
      name: 'LeetCode', 
      icon: <SiLeetcode />, 
      url: 'https://leetcode.com',
      color: 'blue' 
    },
    { 
      name: 'HackerRank', 
      icon: <SiHackerrank />, 
      url: 'https://hackerrank.com',
      color: 'green' 
    },
    { 
      name: 'CodeChef', 
      icon: <SiCodechef />, 
      url: 'https://codechef.com',
      color: 'red' 
    }
  ];

  const sdeSheetQuestions = [
    // Arrays
    {
      id: 1,
      topic: 'Arrays',
      question: 'Two Sum',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/two-sum/'
    },
    {
      id: 2,
      topic: 'Arrays',
      question: 'Best Time to Buy and Sell Stock',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
    },
    {
      id: 3,
      topic: 'Arrays',
      question: 'Sort Colors',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/sort-colors/'
    },
    {
      id: 4,
      topic: 'Arrays',
      question: 'Maximum Subarray',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/'
    },
    {
      id: 5,
      topic: 'Arrays',
      question: 'Merge Intervals',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/merge-intervals/'
    },
    {
      id: 6,
      topic: 'Arrays',
      question: 'Next Permutation',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/next-permutation/'
    },
    {
      id: 7,
      topic: 'Arrays',
      question: 'Pascal\'s Triangle',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/pascals-triangle/'
    },
    {
      id: 8,
      topic: 'Arrays',
      question: 'Set Matrix Zeroes',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/set-matrix-zeroes/'
    },
    {
      id: 9,
      topic: 'Arrays',
      question: 'Rotate Image',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/rotate-image/'
    },
    {
      id: 10,
      topic: 'Arrays',
      question: 'Search in 2D Matrix',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/search-a-2d-matrix/'
    },
    {
      id: 101,
      topic: 'Arrays',
      question: 'Kth Largest Element in an Array',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/'
    },
    {
      id: 102,
      topic: 'Arrays',
      question: 'Find Minimum in Rotated Sorted Array',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/'
    },
    {
      id: 103,
      topic: 'Arrays',
      question: 'Maximum Product Subarray',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/maximum-product-subarray/'
    },
    {
      id: 104,
      topic: 'Arrays',
      question: 'Container With Most Water',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/container-with-most-water/'
    },
    {
      id: 105,
      topic: 'Arrays',
      question: 'Product of Array Except Self',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/product-of-array-except-self/'
    },
    {
      id: 106,
      topic: 'Arrays',
      question: 'Subarray Sum Equals K',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/subarray-sum-equals-k/'
    },
    {
      id: 107,
      topic: 'Arrays',
      question: 'Longest Consecutive Sequence',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/longest-consecutive-sequence/'
    },
    {
      id: 108,
      topic: 'Arrays',
      question: 'Maximum Length of Repeated Subarray',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/maximum-length-of-repeated-subarray/'
    },
    {
      id: 109,
      topic: 'Arrays',
      question: 'Find All Numbers Disappeared in an Array',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/'
    },
    {
      id: 200,
      topic: 'Arrays',
      question: 'Top K Frequent Elements',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/top-k-frequent-elements/'
    },
    {
      id: 201,
      topic: 'Arrays',
      question: '3Sum',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/3sum/'
    },
    {
      id: 202,
      topic: 'Arrays',
      question: 'Spiral Matrix',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/spiral-matrix/'
    },

    // String
    {
      id: 11,
      topic: 'String',
      question: 'Valid Parentheses',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/valid-parentheses/'
    },
    {
      id: 12,
      topic: 'String',
      question: 'Longest Palindromic Substring',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/'
    },
    {
      id: 13,
      topic: 'String',
      question: 'String to Integer (atoi)',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/'
    },
    {
      id: 14,
      topic: 'String',
      question: 'Longest Common Prefix',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/longest-common-prefix/'
    },
    {
      id: 15,
      topic: 'String',
      question: 'Generate Parentheses',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/generate-parentheses/'
    },

    // Linked List
    {
      id: 16,
      topic: 'Linked List',
      question: 'Reverse Linked List',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/reverse-linked-list/'
    },
    {
      id: 17,
      topic: 'Linked List',
      question: 'Middle of the Linked List',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/middle-of-the-linked-list/'
    },
    {
      id: 18,
      topic: 'Linked List',
      question: 'Merge Two Sorted Lists',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/'
    },
    {
      id: 19,
      topic: 'Linked List',
      question: 'Remove Nth Node From End',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/'
    },
    {
      id: 20,
      topic: 'Linked List',
      question: 'Add Two Numbers',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/add-two-numbers/'
    },

    // Stack & Queue
    {
      id: 21,
      topic: 'Stack & Queue',
      question: 'Implement Queue using Stacks',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/'
    },
    {
      id: 22,
      topic: 'Stack & Queue',
      question: 'Next Greater Element I',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/next-greater-element-i/'
    },
    {
      id: 23,
      topic: 'Stack & Queue',
      question: 'Min Stack',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/min-stack/'
    },
    {
      id: 24,
      topic: 'Stack & Queue',
      question: 'LRU Cache',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/lru-cache/'
    },
    {
      id: 25,
      topic: 'Stack & Queue',
      question: 'Sliding Window Maximum',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/sliding-window-maximum/'
    },

    // Trees
    {
      id: 26,
      topic: 'Trees',
      question: 'Maximum Depth of Binary Tree',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/'
    },
    {
      id: 27,
      topic: 'Trees',
      question: 'Diameter of Binary Tree',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/diameter-of-binary-tree/'
    },
    {
      id: 28,
      topic: 'Trees',
      question: 'Invert Binary Tree',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/invert-binary-tree/'
    },
    {
      id: 29,
      topic: 'Trees',
      question: 'Binary Tree Level Order Traversal',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/binary-tree-level-order-traversal/'
    },
    {
      id: 30,
      topic: 'Trees',
      question: 'Validate Binary Search Tree',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/validate-binary-search-tree/'
    },

    // Graph
    {
      id: 31,
      topic: 'Graph',
      question: 'Number of Islands',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/number-of-islands/'
    },
    {
      id: 32,
      topic: 'Graph',
      question: 'Clone Graph',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/clone-graph/'
    },
    {
      id: 33,
      topic: 'Graph',
      question: 'Course Schedule',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/course-schedule/'
    },
    {
      id: 34,
      topic: 'Graph',
      question: 'Word Ladder',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/word-ladder/'
    },
    {
      id: 35,
      topic: 'Graph',
      question: 'Graph Valid Tree',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/graph-valid-tree/'
    },

    // Dynamic Programming
    {
      id: 36,
      topic: 'Dynamic Programming',
      question: 'Climbing Stairs',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/climbing-stairs/'
    },
    {
      id: 37,
      topic: 'Dynamic Programming',
      question: 'House Robber',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/house-robber/'
    },
    {
      id: 38,
      topic: 'Dynamic Programming',
      question: 'Longest Increasing Subsequence',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/longest-increasing-subsequence/'
    },
    {
      id: 39,
      topic: 'Dynamic Programming',
      question: 'Coin Change',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/coin-change/'
    },
    {
      id: 40,
      topic: 'Dynamic Programming',
      question: 'Word Break',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/word-break/'
    },

    // Backtracking
    {
      id: 41,
      topic: 'Backtracking',
      question: 'Letter Combinations of Phone Number',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/'
    },
    {
      id: 42,
      topic: 'Backtracking',
      question: 'Permutations',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/permutations/'
    },
    {
      id: 43,
      topic: 'Backtracking',
      question: 'Subsets',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/subsets/'
    },
    {
      id: 44,
      topic: 'Backtracking',
      question: 'Palindrome Partitioning',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/palindrome-partitioning/'
    },
    {
      id: 45,
      topic: 'Backtracking',
      question: 'N-Queens',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/n-queens/'
    },

    // Binary Search
    {
      id: 46,
      topic: 'Binary Search',
      question: 'Binary Search',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/binary-search/'
    },
    {
      id: 47,
      topic: 'Binary Search',
      question: 'Search in Rotated Sorted Array',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/search-in-rotated-sorted-array/'
    },
    {
      id: 48,
      topic: 'Binary Search',
      question: 'Find First and Last Position',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/'
    },
    {
      id: 49,
      topic: 'Binary Search',
      question: 'Search a 2D Matrix',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/search-a-2d-matrix/'
    },
    {
      id: 50,
      topic: 'Binary Search',
      question: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/median-of-two-sorted-arrays/'
    },

    // Heap & Priority Queue
    {
      id: 51,
      topic: 'Heap',
      question: 'Kth Largest Element',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/'
    },
    {
      id: 52,
      topic: 'Heap',
      question: 'Top K Frequent Elements',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/top-k-frequent-elements/'
    },
    {
      id: 53,
      topic: 'Heap',
      question: 'Find Median from Data Stream',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/find-median-from-data-stream/'
    },
    {
      id: 54,
      topic: 'Heap',
      question: 'Merge K Sorted Lists',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/merge-k-sorted-lists/'
    },
    {
      id: 55,
      topic: 'Heap',
      question: 'Task Scheduler',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/task-scheduler/'
    },

    // Bit Manipulation
    {
      id: 56,
      topic: 'Bit Manipulation',
      question: 'Single Number',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/single-number/'
    },
    {
      id: 57,
      topic: 'Bit Manipulation',
      question: 'Number of 1 Bits',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/number-of-1-bits/'
    },
    {
      id: 58,
      topic: 'Bit Manipulation',
      question: 'Counting Bits',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/counting-bits/'
    },
    {
      id: 59,
      topic: 'Bit Manipulation',
      question: 'Reverse Bits',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/reverse-bits/'
    },
    {
      id: 60,
      topic: 'Bit Manipulation',
      question: 'Sum of Two Integers',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/sum-of-two-integers/'
    },

    // Greedy
    {
      id: 61,
      topic: 'Greedy',
      question: 'Jump Game',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/jump-game/'
    },
    {
      id: 62,
      topic: 'Greedy',
      question: 'Gas Station',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/gas-station/'
    },
    {
      id: 63,
      topic: 'Greedy',
      question: 'Container With Most Water',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/container-with-most-water/'
    },
    {
      id: 64,
      topic: 'Greedy',
      question: 'Partition Labels',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/partition-labels/'
    },
    {
      id: 65,
      topic: 'Greedy',
      question: 'Non-overlapping Intervals',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/non-overlapping-intervals/'
    },

    // Two Pointers
    {
      id: 66,
      topic: 'Two Pointers',
      question: 'Valid Palindrome',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/valid-palindrome/'
    },
    {
      id: 67,
      topic: 'Two Pointers',
      question: '3Sum',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/3sum/'
    },
    {
      id: 68,
      topic: 'Two Pointers',
      question: 'Remove Nth Node From End of List',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/'
    },
    {
      id: 69,
      topic: 'Two Pointers',
      question: 'Linked List Cycle II',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle-ii/'
    },
    {
      id: 70,
      topic: 'Two Pointers',
      question: 'Trapping Rain Water',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/trapping-rain-water/'
    },

    // Sliding Window
    {
      id: 71,
      topic: 'Sliding Window',
      question: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'
    },
    {
      id: 72,
      topic: 'Sliding Window',
      question: 'Minimum Window Substring',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/minimum-window-substring/'
    },
    {
      id: 73,
      topic: 'Sliding Window',
      question: 'Sliding Window Maximum',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/sliding-window-maximum/'
    },
    {
      id: 74,
      topic: 'Sliding Window',
      question: 'Find All Anagrams in a String',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/'
    },
    {
      id: 75,
      topic: 'Sliding Window',
      question: 'Longest Repeating Character Replacement',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/longest-repeating-character-replacement/'
    },

    // Intervals
    {
      id: 76,
      topic: 'Intervals',
      question: 'Insert Interval',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/insert-interval/'
    },
    {
      id: 77,
      topic: 'Intervals',
      question: 'Merge Intervals',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/merge-intervals/'
    },
    {
      id: 78,
      topic: 'Intervals',
      question: 'Non-overlapping Intervals',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/non-overlapping-intervals/'
    },
    {
      id: 79,
      topic: 'Intervals',
      question: 'Meeting Rooms II',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/meeting-rooms-ii/'
    },
    {
      id: 80,
      topic: 'Intervals',
      question: 'Minimum Number of Arrows to Burst Balloons',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/'
    },

    // Matrix
    {
      id: 81,
      topic: 'Matrix',
      question: 'Spiral Matrix',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/spiral-matrix/'
    },
    {
      id: 82,
      topic: 'Matrix',
      question: 'Word Search',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/word-search/'
    },
    {
      id: 83,
      topic: 'Matrix',
      question: 'Valid Sudoku',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/valid-sudoku/'
    },
    {
      id: 84,
      topic: 'Matrix',
      question: 'Game of Life',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/game-of-life/'
    },
    {
      id: 85,
      topic: 'Matrix',
      question: 'Maximal Square',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/maximal-square/'
    },

    // Math & Numbers
    {
      id: 86,
      topic: 'Math & Numbers',
      question: 'Palindrome Number',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/palindrome-number/'
    },
    {
      id: 87,
      topic: 'Math & Numbers',
      question: 'Power of Two',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/power-of-two/'
    },
    {
      id: 88,
      topic: 'Math & Numbers',
      question: 'Happy Number',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/happy-number/'
    },
    {
      id: 89,
      topic: 'Math & Numbers',
      question: 'Excel Sheet Column Number',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/excel-sheet-column-number/'
    },
    {
      id: 90,
      topic: 'Math & Numbers',
      question: 'Factorial Trailing Zeroes',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/factorial-trailing-zeroes/'
    },

    // Trie
    {
      id: 91,
      topic: 'Trie',
      question: 'Implement Trie (Prefix Tree)',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/implement-trie-prefix-tree/'
    },
    {
      id: 92,
      topic: 'Trie',
      question: 'Design Add and Search Words Data Structure',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/'
    },
    {
      id: 93,
      topic: 'Trie',
      question: 'Word Search II',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/word-search-ii/'
    },
    {
      id: 94,
      topic: 'Trie',
      question: 'Replace Words',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/replace-words/'
    },
    {
      id: 95,
      topic: 'Trie',
      question: 'Maximum XOR of Two Numbers in an Array',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/'
    },

    // Design
    {
      id: 96,
      topic: 'Design',
      question: 'LRU Cache',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/lru-cache/'
    },
    {
      id: 97,
      topic: 'Design',
      question: 'Min Stack',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/min-stack/'
    },
    {
      id: 98,
      topic: 'Design',
      question: 'Serialize and Deserialize Binary Tree',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/'
    },
    {
      id: 99,
      topic: 'Design',
      question: 'Design Twitter',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/design-twitter/'
    },
    {
      id: 100,
      topic: 'Design',
      question: 'Design HashMap',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/design-hashmap/'
    },

    // Recursion
    {
      id: 101,
      topic: 'Recursion',
      question: 'Pow(x, n)',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/powx-n/'
    },
    {
      id: 102,
      topic: 'Recursion',
      question: 'K-th Symbol in Grammar',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/k-th-symbol-in-grammar/'
    },
    {
      id: 103,
      topic: 'Recursion',
      question: 'Generate Parentheses',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/generate-parentheses/'
    },
    {
      id: 104,
      topic: 'Recursion',
      question: 'Different Ways to Add Parentheses',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/different-ways-to-add-parentheses/'
    },
    {
      id: 105,
      topic: 'Recursion',
      question: 'Regular Expression Matching',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/regular-expression-matching/'
    },

    // More Recursion Questions
    {
      id: 131,
      topic: 'Recursion',
      question: 'Fibonacci Number',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/fibonacci-number/'
    },
    {
      id: 132,
      topic: 'Recursion',
      question: 'N-Queens',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/n-queens/'
    },
    {
      id: 133,
      topic: 'Recursion',
      question: 'Sudoku Solver',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/sudoku-solver/'
    },
    {
      id: 134,
      topic: 'Recursion',
      question: 'Word Search II',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/word-search-ii/'
    },
    {
      id: 135,
      topic: 'Recursion',
      question: 'Permutations',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/permutations/'
    },
    {
      id: 136,
      topic: 'Recursion',
      question: 'Combinations',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/combinations/'
    },
    {
      id: 137,
      topic: 'Recursion',
      question: 'Letter Combinations of a Phone Number',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/'
    },
    {
      id: 138,
      topic: 'Recursion',
      question: 'Palindrome Partitioning',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/palindrome-partitioning/'
    },
    {
      id: 139,
      topic: 'Recursion',
      question: 'Word Break II',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/word-break-ii/'
    },
    {
      id: 140,
      topic: 'Recursion',
      question: 'Expression Add Operators',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/expression-add-operators/'
    },

    // Monotonic Stack
    {
      id: 106,
      topic: 'Monotonic Stack',
      question: 'Next Greater Element I',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/next-greater-element-i/'
    },
    {
      id: 107,
      topic: 'Monotonic Stack',
      question: 'Daily Temperatures',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/daily-temperatures/'
    },
    {
      id: 108,
      topic: 'Monotonic Stack',
      question: 'Largest Rectangle in Histogram',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/largest-rectangle-in-histogram/'
    },
    {
      id: 109,
      topic: 'Monotonic Stack',
      question: 'Remove K Digits',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/remove-k-digits/'
    },
    {
      id: 110,
      topic: 'Monotonic Stack',
      question: 'Sum of Subarray Minimums',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/sum-of-subarray-minimums/'
    },

    // Union Find
    {
      id: 111,
      topic: 'Union Find',
      question: 'Number of Provinces',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/number-of-provinces/'
    },
    {
      id: 112,
      topic: 'Union Find',
      question: 'Redundant Connection',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/redundant-connection/'
    },
    {
      id: 113,
      topic: 'Union Find',
      question: 'Most Stones Removed with Same Row or Column',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/'
    },
    {
      id: 114,
      topic: 'Union Find',
      question: 'Accounts Merge',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/accounts-merge/'
    },
    {
      id: 115,
      topic: 'Union Find',
      question: 'Satisfiability of Equality Equations',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/satisfiability-of-equality-equations/'
    },

    // Binary Search Tree
    {
      id: 116,
      topic: 'Binary Search Tree',
      question: 'Validate Binary Search Tree',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/validate-binary-search-tree/'
    },
    {
      id: 117,
      topic: 'Binary Search Tree',
      question: 'Kth Smallest Element in a BST',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/'
    },
    {
      id: 118,
      topic: 'Binary Search Tree',
      question: 'Convert Sorted Array to Binary Search Tree',
      difficulty: 'Easy',
      leetcodeLink: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/'
    },
    {
      id: 119,
      topic: 'Binary Search Tree',
      question: 'Binary Search Tree Iterator',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/binary-search-tree-iterator/'
    },
    {
      id: 120,
      topic: 'Binary Search Tree',
      question: 'Recover Binary Search Tree',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/recover-binary-search-tree/'
    },

    // Graph Advanced
    {
      id: 121,
      topic: 'Graph Advanced',
      question: 'Alien Dictionary',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/alien-dictionary/'
    },
    {
      id: 122,
      topic: 'Graph Advanced',
      question: 'Reconstruct Itinerary',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/reconstruct-itinerary/'
    },
    {
      id: 123,
      topic: 'Graph Advanced',
      question: 'Network Delay Time',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/network-delay-time/'
    },
    {
      id: 124,
      topic: 'Graph Advanced',
      question: 'Cheapest Flights Within K Stops',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/'
    },
    {
      id: 125,
      topic: 'Graph Advanced',
      question: 'Find the City With the Smallest Number of Neighbors',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/'
    },

    // String Advanced
    {
      id: 126,
      topic: 'String Advanced',
      question: 'Longest Palindromic Subsequence',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/longest-palindromic-subsequence/'
    },
    {
      id: 127,
      topic: 'String Advanced',
      question: 'Edit Distance',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/edit-distance/'
    },
    {
      id: 128,
      topic: 'String Advanced',
      question: 'Distinct Subsequences',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/distinct-subsequences/'
    },
    {
      id: 129,
      topic: 'String Advanced',
      question: 'Interleaving String',
      difficulty: 'Medium',
      leetcodeLink: 'https://leetcode.com/problems/interleaving-string/'
    },
    {
      id: 130,
      topic: 'String Advanced',
      question: 'Wildcard Matching',
      difficulty: 'Hard',
      leetcodeLink: 'https://leetcode.com/problems/wildcard-matching/'
    }
  ];

  const topics = ['All', ...new Set(sdeSheetQuestions.map(q => q.topic))];

  const filteredQuestions = sdeSheetQuestions.filter(question => {
    const matchesTopic = selectedTopic === 'All' || question.topic === selectedTopic;
    const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         question.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const TopicTable = ({ topic, questions, completedQuestions, onToggleComplete }) => {
    const filteredQuestions = questions.filter(q => q.topic === topic);
    
    return (
      <motion.div 
        className="mb-8 overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-8 py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            {topic === 'Arrays' && <FaDatabase className="text-indigo-400" />}
            {topic === 'String' && <FaCode className="text-green-400" />}
            {topic === 'Linked List' && <FaProjectDiagram className="text-blue-400" />}
            {topic === 'Stack & Queue' && <FaPuzzlePiece className="text-yellow-400" />}
            {topic} ({filteredQuestions.length} questions)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Question</th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Difficulty</th>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredQuestions.map((question) => (
                <motion.tr 
                  key={question.id} 
                  className="hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
                >
                  <td className="px-8 py-5 whitespace-nowrap">
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <input
                        type="checkbox"
                        checked={completedQuestions.includes(question.id)}
                        onChange={() => onToggleComplete(question.id)}
                        className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md cursor-pointer transition-all duration-200"
                      />
                    </motion.div>
                  </td>
                  <td className="px-8 py-5">
                    <a
                      href={question.leetcodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-indigo-600 font-medium hover:underline transition-colors duration-200"
                    >
                      {question.question}
                    </a>
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
                        question.difficulty === 'Easy'
                          ? 'bg-green-100 text-green-800'
                          : question.difficulty === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {question.difficulty}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(question.leetcodeLink, '_blank')}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors duration-200"
                    >
                      Solve
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    );
  };

  const uniqueTopics = [...new Set(sdeSheetQuestions.map(q => q.topic))].sort();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-7xl mt-16"
    >
      {/* Header Section */}
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-gray-900 mb-6 flex items-center gap-3"
        >
          <FaCode className="text-indigo-600" />
          SDE Interview Practice
        </motion.h1>
        
        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
              />
            </div>
            <div className="w-full md:w-64">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: `right 0.5rem center`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" className="text-gray-900">All Topics</option>
                {uniqueTopics.map(topic => (
                  <option key={topic} value={topic} className="text-gray-900">{topic}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-sm border border-indigo-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-indigo-900 font-semibold">Total Questions</h3>
                <div className="p-2 bg-indigo-200 rounded-lg">
                  <FaCode className="text-indigo-700 text-xl" />
                </div>
              </div>
              <p className="text-3xl font-bold text-indigo-900 mt-2">{sdeSheetQuestions.length}</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl shadow-sm border border-emerald-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-emerald-900 font-semibold">Completed</h3>
                <div className="p-2 bg-emerald-200 rounded-lg">
                  <FaCheckCircle className="text-emerald-700 text-xl" />
                </div>
              </div>
              <p className="text-3xl font-bold text-emerald-900 mt-2">{completedQuestions.length}</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-xl shadow-sm border border-violet-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-violet-900 font-semibold">Progress</h3>
                <div className="p-2 bg-violet-200 rounded-lg">
                  <FaLaptopCode className="text-violet-700 text-xl" />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-3xl font-bold text-violet-900">
                  {Math.round((completedQuestions.length / sdeSheetQuestions.length) * 100)}%
                </p>
                <div className="w-full bg-violet-200 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-violet-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round((completedQuestions.length / sdeSheetQuestions.length) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Questions Tables */}
      {uniqueTopics.map((topic, index) => (
        <motion.div
          key={topic}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <TopicTable
            topic={topic}
            questions={sdeSheetQuestions}
            completedQuestions={completedQuestions}
            onToggleComplete={toggleQuestionComplete}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CodingPractice;
