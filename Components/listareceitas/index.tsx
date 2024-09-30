import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./listareceitas.module";
import { Categorias } from "../../Models/db.models";
import { GetCategorias } from "../../Services/dbService";

export default function ListaReceitas() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    GetCategorias("categorias", setCategorias);
  }, []);

  const handleReceita = (nome: string) => {
    (navigation as any).navigate("TelaReceita", { nome });
  };

  const renderCategoria = ({ item }: { item: Categorias }) => (
    <View>
      <View style={styles.indiceContainer}>
        <Text style={styles.textContainer}>{item.id}</Text>
      </View>
      {item.receitas.map((value, index) => {
        const [nomeReceita, urlImagem] = value.split("\\n");

        return (
          <TouchableOpacity key={index} style={styles.buttonReceitas} onPress={() => handleReceita(nomeReceita)}>
            <Text style={styles.nomeReceitas}>{nomeReceita}</Text>
            <Image
              source={{ uri: urlImagem }}
              style={{ width: 170, height: 120 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
      />
    </View>
  );
}
