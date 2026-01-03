import { Text, View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";

const QuestionCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>What is React Native ?</Text>
      <View style={{ gap: 12 }}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  question: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default QuestionCard;
