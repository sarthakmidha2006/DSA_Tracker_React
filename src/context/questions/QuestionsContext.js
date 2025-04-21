import { createContext } from "react";

const QuestionsContext = createContext({
  progress: 0,
  setProgress: () => {},
  mode: "dark",
  setMode: () => {},
  error: null,
  setError: () => {}
});

export default QuestionsContext;
