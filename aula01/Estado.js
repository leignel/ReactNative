import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("Joaquim");
  const [idade, setIdade] = useState(25);

  // const trocar = () => {
  //   setNome("Maria");
  //   setIdade(23);
  // };

  return (
    <View style={{ marginTop: 25 }}>
      <Button
        title="Alterar Nome"
        onPress={() => {
          setNome("Maria");
          setIdade(23);
        }}
      ></Button>
      <Text>{nome}</Text>
      <Text>{idade}</Text>
    </View>
  );
}
