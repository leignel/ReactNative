import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

const AdicionarItem = () => {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    setItens([...itens, { key: Date.now().toString(), texto: texto }]);
    setTexto("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={texto}
        onChangeText={(valor) => setTexto(valor)}
      />
      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        data={itens}
        renderItem={({ item }) => (
          <Text style={styles.textoAdicionado}>{item.texto}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  textoAdicionado: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default AdicionarItem;
