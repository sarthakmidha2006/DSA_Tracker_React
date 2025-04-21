import { useState } from "react";
import QuestionsContext from "./QuestionsContext";

const QuestionsState = (props) => {
  const defaultMode = localStorage.getItem("mode") || "dark";
  const [mode, setMode] = useState(defaultMode);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const updateMode = (newMode) => {
    localStorage.setItem("mode", newMode);
    setMode(newMode);
  };

  return (
    <QuestionsContext.Provider
      value={{
        progress,
        setProgress,
        mode,
        setMode: updateMode,
        setError,
        error
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsState;
