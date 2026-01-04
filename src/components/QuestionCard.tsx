import { Text, View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import { QuestionProps } from "../types";
import Card from "./Card";
import { useState } from "react";

const QuestionCard = ({ question }: { question: QuestionProps }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <Card title={question.title}>
        <View style={{ gap: 12 }}>
          {question.options.map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              isSelected={selectedOption === option}
              onPress={() => handleSelectOption(option)}
            />
          ))}
        </View>
      </Card>
    </View>
  );
};

export default QuestionCard;
