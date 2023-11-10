import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Botao() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hook States</Text>

      <TouchableOpacity style={styles.button} onPress={incrementar}>
        <Text style={styles.text}>Incrementar</Text>
        <Text>{contador}</Text>
      </TouchableOpacity>
    </View>
  );
}
