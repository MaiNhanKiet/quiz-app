import { Text, View, StyleSheet, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";

const QuizScreen = () => {
  const { question, questionIndex, onNext } = useQuizContext();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Câu {questionIndex + 1}/5</Text>
        </View>
        {/* Question Card and Timer */}
        <View>
          {question ? (
            <QuestionCard question={question} />
          ) : (
            <Card title="Well done!">
              <View>
                <Text>Bạn đã hoàn thành bài quiz.</Text>
                <Text>Điểm số của bạn: 4/5</Text>
                <Text>Điểm cao nhất: 10</Text>
              </View>
            </Card>
          )}
          <Text style={styles.time}> 20 giây</Text>
        </View>
        {/* Footer */}
        <CustomButton
          title="Tiếp theo"
          rightIcon={<Entypo name="arrow-long-right" size={16} color="white" />}
          onPress={onNext}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    textAlign: "center",
    color: "#005050",
  },
  time: {
    textAlign: "center",
    color: "#005050",
    marginTop: 15,
    fontWeight: "bold",
  },
});
export default QuizScreen;
