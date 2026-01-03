import { Text, View, StyleSheet, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>
        {/* Question Card and Timer */}
        <View>
          <QuestionCard />
          <Text style={styles.time}> 20 sec</Text>
        </View>
        {/* Footer */}
        <Pressable style={styles.button} onPress={() => console.warn("hihi")}>
          <Text style={styles.buttonNext}>Next</Text>
          <Entypo
            name="arrow-long-right"
            size={16}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
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
  button: {
    backgroundColor: "#005050",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonNext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});
export default QuizScreen;
