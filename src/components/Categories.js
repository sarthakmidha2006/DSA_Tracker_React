import React, { useContext, useEffect, useState, useCallback } from "react";
import Category from "./Category";
import QuestionsContext from "../context/questions/QuestionsContext";
import HorizontalProgressBar from "./HorizontalProgressBar";
import Spinner from "./Spinner";

const mockData = [
  {
    _id: "1",
    category_name: "Arrays",
    questions: 50,
    done: 0
  },
  {
    _id: "2",
    category_name: "Strings",
    questions: 40,
    done: 0
  },
  {
    _id: "3",
    category_name: "Linked Lists",
    questions: 30,
    done: 0
  },
  {
    _id: "4",
    category_name: "Trees",
    questions: 45,
    done: 0
  },
  {
    _id: "5",
    category_name: "Graphs",
    questions: 35,
    done: 0
  },
  {
    _id: "6",
    category_name: "Dynamic Programming",
    questions: 25,
    done: 0
  }
];

function Categories() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(QuestionsContext);
  const { setProgress, setError } = context;

  const getAllData = useCallback(async () => {
    try {
      setIsLoading(true);
      setProgress(25);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setProgress(50);
      setData(mockData);
      setIsLoading(false);
      setProgress(100);
    } catch (error) {
      setProgress(100);
      setIsLoading(false);
      setError(error.message || "Error fetching data");
    }
  }, [setProgress, setError]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  if (isLoading) {
    return (
      <div className="text-center py-2">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container max-w-full px-4 pt-7 pb-4 w-full relative">
      <div className="pb-6">
        <HorizontalProgressBar
          percentage={0}
          done={0}
          total={mockData.reduce((acc, curr) => acc + curr.questions, 0)}
        />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center sm:justify-items-stretch">
          {data.map((element) => (
            <div key={element._id}>
              <Category category={element} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
