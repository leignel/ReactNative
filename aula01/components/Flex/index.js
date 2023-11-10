import { View, Text, StyleSheet } from "react-native";

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa} />
      <View style={[styles.caixa, { alignSelf: "flex-end" }]} />
      <View style={styles.caixa} />
      <View style={styles.caixa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  caixa: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin: 10,
  },
});
