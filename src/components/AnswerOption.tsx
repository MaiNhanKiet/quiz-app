import { Text, View, StyleSheet } from "react-native";

const AnswerOption = () => {
  return (
    <View style={styles.container}>
      <Text>This is an answer option</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 100,
  },
});

export default AnswerOption;
