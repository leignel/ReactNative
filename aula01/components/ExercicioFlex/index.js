import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExercicioFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.texto}>Login</Text>
      </View>
      <View style={styles.caixa}>
        <Text style={styles.texto}>Home</Text>
      </View>
      <View style={styles.caixa}>
        <Text style={styles.texto}>Sair</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  caixa: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  texto: {
    fontSize: 25,
  },
});

export default ExercicioFlex;
