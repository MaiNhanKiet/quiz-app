import { Text, View, StyleSheet, Pressable } from "react-native";
import { AnswerOptionProps } from "../types";
import { useQuizContext } from "../providers/QuizProvider";

const AnswerOption = ({ option }: AnswerOptionProps) => {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = selectedOption === option;

  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
      style={[
        styles.container,
        isSelected && { backgroundColor: "#E1F396", borderColor: "#A3D900" },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
  },
});

export default AnswerOption;
