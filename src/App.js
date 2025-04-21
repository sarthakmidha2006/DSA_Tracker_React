import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import QuestionsContext from "./context/questions/QuestionsContext";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  const context = useContext(QuestionsContext);
  const { mode, progress, error, setError } = context;
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        setError(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [setError, error, setShowError]);

  return (
    <div
      className={`${mode} min-h-screen bg-gray-100 dark:bg-slate-700 transition duration-500`}
    >
      <Router>
        <NavBar className="flex-wrap" />
        <LoadingBar
          color={mode === "dark" ? "#FF7518" : "#f11946"}
          progress={progress}
        />
        <div className="error-container flex justify-center items-start fixed top-0 left-0 w-full z-50 pointer-events-none">
          {showError && (
            <div className="bg-gray-50 border-sky-400 text-red-600 dark:bg-slate-700 border dark:border-orange-500 dark:text-gray-300 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md p-4 mt-7 text-center shadow-md transition-opacity duration-500">
              {error}
            </div>
          )}
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
