import React, { useContext, useState, useEffect, useCallback, useMemo } from "react"; 
import QuestionsContext from "../context/questions/QuestionsContext";
import HorizontalProgressBar from "./HorizontalProgressBar";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

function Questions() {
  const { id } = useParams();
  const context = useContext(QuestionsContext);
  const { setError, setProgress } = context;
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const categoryMap = useMemo(() => ({
    "1": "Arrays",
    "2": "Strings",
    "3": "Linked Lists",
    "4": "Trees",
    "5": "Graphs",
    "6": "Dynamic Programming"
  }), []);

  const mockQuestions = useMemo(() => ({
    "Arrays": [
      { id: "1", title: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
      { id: "2", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { id: "3", title: "Contains Duplicate", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" },
      { id: "4", title: "Product of Array Except Self", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
      { id: "5", title: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" }
    ],
    "Strings": [
      { id: "6", title: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
      { id: "7", title: "Valid Parentheses", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/" },
      { id: "8", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { id: "9", title: "Longest Palindromic Substring", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { id: "10", title: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" }
    ],
    "Linked Lists": [
      { id: "11", title: "Reverse Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
      { id: "12", title: "Merge Two Sorted Lists", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { id: "13", title: "Linked List Cycle", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: "14", title: "Remove Nth Node From End of List", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
      { id: "15", title: "Add Two Numbers", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/" }
    ],
    "Trees": [
      { id: "16", title: "Invert Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/" },
      { id: "17", title: "Maximum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { id: "18", title: "Same Tree", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/" },
      { id: "19", title: "Subtree of Another Tree", difficulty: "Easy", url: "https://leetcode.com/problems/subtree-of-another-tree/" },
      { id: "20", title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Easy", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" }
    ],
    "Graphs": [
      { id: "21", title: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
      { id: "22", title: "Clone Graph", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" },
      { id: "23", title: "Course Schedule", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" },
      { id: "24", title: "Pacific Atlantic Water Flow", difficulty: "Medium", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
      { id: "25", title: "Word Ladder", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" }
    ],
    "Dynamic Programming": [
      { id: "26", title: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
      { id: "27", title: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
      { id: "28", title: "Longest Increasing Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { id: "29", title: "Coin Change", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" },
      { id: "30", title: "Word Break", difficulty: "Medium", url: "https://leetcode.com/problems/word-break/" }
    ]
  }), []);

  const getDSAQuestions = useCallback(async (category) => {
    try {
      setIsLoading(true);
      setProgress(25);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(50);
      
      const categoryQuestions = mockQuestions[category] || [];
      setProgress(75);
      
      setQuestions(categoryQuestions);
      setCategoryName(category);
      setIsLoading(false);
      setProgress(100);
    } catch (error) {
      setIsLoading(false);
      setProgress(100);
      setError(error.message);
    }
  }, [setError, setProgress, mockQuestions]);

  useEffect(() => {
    const category = categoryMap[id];
    if (category) {
      getDSAQuestions(category);
    }
  }, [id, categoryMap, getDSAQuestions]);

  if (isLoading) {
    return (
      <div className="text-center py-2">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-full w-full relative px-4 pt-2 pb-4">
      <div className="px-4 py-2">
        <div className="flex justify-center items-center font-bold text-black pb-4">
          <div className="dark:text-white text-blue-600 font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:5xl mb-2">
            {categoryName} Problems
          </div>
        </div>
        <div className="pb-6">
          <HorizontalProgressBar
            done={0}
            total={questions.length}
          />
        </div>
      </div>
      <div className="overflow-auto max-h-svh mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg">
          <thead
            className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
            style={{ position: "sticky", top: 0, zIndex: 1 }}
          >
            <tr>
              <th className="px-6 py-3">Problem</th>
              <th className="px-6 py-3">Difficulty</th>
              <th className="px-6 py-3">Link</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {question.title}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    question.difficulty === "Easy" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : question.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}>
                    {question.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={question.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Solve Now
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Questions;
