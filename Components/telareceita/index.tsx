import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./telareceita.module";
import { useRoute } from "@react-navigation/native";
import { GetReceita } from "../../Services/dbService";
import { Receita } from "../../Models/db.models";


export default function TelaReceita() {
  const route = useRoute();
  const { nome } = route.params as { nome: string };

  const [receita, setReceita] = useState<Receita | null>(null);

  useEffect(() => {
    GetReceita("Receitas", nome, setReceita);
  }, []);


  return (
    <ScrollView style={styles.scrollView}>
      {receita ? (
        <View style={styles.container}>
          <Text style={styles.nomeReceita}>{nome}</Text>
          <Image
            source={{ uri: receita.imagem }}
            style={{ width: "100%", height: 200 }}
            resizeMode="cover"
          />
          <Text style={styles.indiceReceita}>
            Ingredientes:
          </Text>
          {receita.ingredientes.map((ingrediente, index) => (
            <Text key={index} style={{ fontSize: 20 }}>
              - {ingrediente}
            </Text>
          ))}
          <Text style={styles.indiceReceita}>
            Quantidades:
          </Text>
          {receita.quantidades.split("\\n").map((quantidade, index) => (
            <Text key={index} style={{ fontSize: 20 }}>
              {quantidade}
            </Text>
          ))}
          <Text style={styles.indiceReceita}>
            Preparo:
          </Text>
          {receita.preparo.split("\\n").map((preparo, index) => (
            <Text key={index} style={{ fontSize: 20 }}>
              {preparo}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={{fontSize: 20, textAlign: "center", marginTop: 30}}>Carregando receita...</Text>
      )}
    </ScrollView>
  );
}
