import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { GetIngredientes } from "../../Services/dbService";
import styles from "./listaingredientes.module";
import { Ingrediente } from "../../Models/db.models";

export default function ListaIngredientes() {
  const [ingredientes, setIngredientes] = useState<Ingrediente[] | null>(null);

  useEffect(() => {
    GetIngredientes("ingredientes", setIngredientes);
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      {ingredientes ? (
        <View>
          {ingredientes.map((ingrediente) => (
            <Text key={ingrediente.id} style={styles.nomeIngrediente}>
              {ingrediente.nome.charAt(0).toUpperCase() +
                ingrediente.nome.slice(1)}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 30 }}>
          Carregando ingredientes...
        </Text>
      )}
    </ScrollView>
  );
}
