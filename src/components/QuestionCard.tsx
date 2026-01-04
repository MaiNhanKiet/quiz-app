import { Text, View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import { QuestionProps } from "../types";
import Card from "./Card";
import { useState } from "react";
import { useQuizContext } from "../providers/QuizProvider";

const QuestionCard = ({ question }: { question: QuestionProps }) => {
  return (
    <View>
      <Card title={question.title}>
        <View style={{ gap: 12 }}>
          {question.options.map((option, index) => (
            <AnswerOption key={index} option={option} />
          ))}
        </View>
      </Card>
    </View>
  );
};

export default QuestionCard;
