import { StyleSheet, Text, View } from "react-native";

type CardProps = {
  title: string;
  children?: React.ReactNode;
};

const Card = ({ children, title }: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {children}
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
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default Card;
