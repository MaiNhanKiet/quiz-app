import { Text, View, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect } from "react";
import { useTimer } from "../hooks/useTimer";
import LottieView from "lottie-react-native";
import party from "../../assets/party.json";

const QuizScreen = () => {
  const {
    question,
    questionIndex,
    onNext,
    score,
    totalQuestions,
    bestScore,
    hasStarted,
    startQuiz,
    resetToStart,
  } = useQuizContext();

  const { time, startTimer, clearTimer } = useTimer(20);

  useEffect(() => {
    if (question) {
      startTimer();
    } else {
      clearTimer();
    }
    return () => clearTimer();
  }, [question]);

  useEffect(() => {
    if (time === 0 && question) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      {!question && hasStarted && (
        <LottieView
          source={party}
          autoPlay
          loop={false}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      <View style={styles.container}>
        {/* Header */}
        <View>
          {question && hasStarted && (
            <Text style={styles.title}>
              Câu {questionIndex + 1}/{totalQuestions}
            </Text>
          )}
        </View>
        {/* Question Card and Timer */}
        <View>
          {!hasStarted ? (
            <Card title="Chào mừng đến với Quiz!">
              <View>
                <Text>Bạn sẽ có 20 giây để trả lời mỗi câu hỏi.</Text>
                <Text>Tổng cộng {totalQuestions} câu hỏi.</Text>
                <Text>Điểm cao nhất hiện tại: {bestScore}</Text>
              </View>
            </Card>
          ) : question ? (
            <>
              <QuestionCard question={question} />
              <Text style={styles.time}>{time} giây</Text>
            </>
          ) : (
            <Card title="Bạn đã hoàn thành bài quiz.">
              <View>
                <Text style={styles.resultText}>
                  Điểm số của bạn: {score}/{totalQuestions}
                </Text>
                <Text style={styles.resultText}>
                  Điểm cao nhất: {bestScore}
                </Text>
              </View>
            </Card>
          )}
        </View>
        {/* Footer */}
        {!hasStarted ? (
          <CustomButton title="Bắt đầu" onPress={startQuiz} />
        ) : question ? (
          <CustomButton
            title="Tiếp theo"
            rightIcon={
              <Entypo name="arrow-long-right" size={16} color="white" />
            }
            onPress={onNext}
          />
        ) : (
          <CustomButton title="Hoàn thành" onPress={resetToStart} />
        )}
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
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: "center",
    color: "#333",
  },
  resultText: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: "center",
    color: "#333",
  },
});
export default QuizScreen;
