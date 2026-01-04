import { Text, View, StyleSheet, Pressable } from "react-native";
import { AnswerOptionProps } from "../types";

const AnswerOption = ({ option, isSelected, onPress }: AnswerOptionProps) => {
  return (
    <Pressable
      onPress={() => onPress()}
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
