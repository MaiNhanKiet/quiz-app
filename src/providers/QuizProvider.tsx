import { createContext, useContext, useState } from "react";
import questions from "../question";
import { QuestionProps } from "../types";

type QuizContextType = {
  question?: QuestionProps;
  questionIndex: number;
  onNext: () => void;
};

const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
  onNext: () => {},
});

type QuizProviderProps = {
  children: React.ReactNode;
};

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const onNext = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    //
    <QuizContext.Provider value={{ questionIndex, onNext, question }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;

export const useQuizContext = () => useContext(QuizContext);
