import { createContext, use, useContext, useEffect, useState } from "react";
import questions from "../question";
import { QuestionProps } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QuizContextType = {
  question?: QuestionProps;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
  hasStarted: boolean;
  startQuiz: () => void;
  resetToStart: () => void;
};

const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
  bestScore: 0,
  hasStarted: false,
  startQuiz: () => {},
  resetToStart: () => {},
});

type QuizProviderProps = {
  children: React.ReactNode;
};

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);

  const startQuiz = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(undefined);
    setHasStarted(true);
  };

  const resetToStart = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(undefined);
    setHasStarted(false);
  };

  const restartQuiz = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(undefined);
    setHasStarted(true);
  };

  const onNext = () => {
    if (isFinished) {
      restartQuiz();
      return;
    }
    if (question && selectedOption === question.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const saveBestScore = async (score: number) => {
    try {
      await AsyncStorage.setItem("bestScore", score.toString());
    } catch (error) {
      console.error("Error saving best score:", error);
    }
  };

  const loadBestScore = async () => {
    try {
      const storedBestScore = await AsyncStorage.getItem("bestScore");
      if (storedBestScore !== null) {
        setBestScore(Number.parseInt(storedBestScore));
      }
    } catch (error) {}
  };

  return (
    <QuizContext.Provider
      value={{
        questionIndex,
        onNext,
        question,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
        bestScore,
        hasStarted,
        startQuiz,
        resetToStart,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;

export const useQuizContext = () => useContext(QuizContext);
