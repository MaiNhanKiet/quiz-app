import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PressableProps,
} from "react-native";
// import { ComponentProps } from "react";

type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;
// & ComponentProps<typeof Pressable>;

const CustomButton = ({
  title,
  rightIcon,
  ...pressableProps
}: CustomButtonProps) => {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonNext}>{title}</Text>
      <View style={styles.buttonIcon}>{rightIcon}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default CustomButton;
