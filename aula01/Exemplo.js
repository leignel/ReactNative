import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "green", fontSize: 30 }}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderStyle: "solid",
    borderRadius: 30,
    width: 200,
    height: 200,
  },
});
