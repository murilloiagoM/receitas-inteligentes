import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LogoutUser } from "../../Services/authService";
import styles, { stylemodal } from "./home.module";
import { MultiSelect } from "react-native-element-dropdown";
import { GetIngredientes, GetReceitas } from "../../Services/dbService";
import {
  Ingrediente,
  ListaIngredientes,
  Receita,
} from "../../Models/db.models";

export default function Home() {
  const [selected, setSelected] = useState([]);
  const [ingredientes, setIngredientes] = useState<Ingrediente[] | null>(null);
  const [listaIngredientes, setListaIngredientes] = useState<
    ListaIngredientes[]
  >([]);
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [receitasFiltradas, setReceitasFiltradas] = useState<Receita[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    GetIngredientes("ingredientes", setIngredientes, setListaIngredientes);
    GetReceitas("Receitas", setReceitas, FiltrarReceitas);
  }, []);

  const handleLogout = () => {
    LogoutUser(navigation);
  };

  const handleListaReceitas = () => {
    (navigation as any).navigate("ListaReceitas");
  };

  const handleListaIngredientes = () => {
    (navigation as any).navigate("ListaIngredientes");
  };

  const handleReceita = (nome: string) => {
    (navigation as any).navigate("TelaReceita", { nome });
  };

  const FiltrarReceitas = (receitasData: Receita[]) => {
    let array = [...receitasData];

    receitasData.map((receita, index) => {
      let ingredientesSelecionados: number = 0;

      selected.map((ing) => {
        if (receita.ingredientes.includes(ing)) {
          ingredientesSelecionados++;
        }
      });

      array[index] = {
        ...receita,
        porcentagemSelecionados: Math.round(
          (ingredientesSelecionados / receita.ingredientes.length) * 100
        ),
      };
    });

    array.sort(
      (a, b) =>
        (b.porcentagemSelecionados || 0) - (a.porcentagemSelecionados || 0)
    );

    setReceitasFiltradas(array);
  };

  useEffect(() => {
    let array = [...receitas];

    receitas.map((receita, index) => {
      let ingredientesSelecionados: number = 0;

      selected.map((ing) => {
        if (receita.ingredientes.includes(ing)) {
          ingredientesSelecionados++;
        }
      });

      array[index] = {
        ...receita,
        porcentagemSelecionados: Math.round(
          (ingredientesSelecionados / receita.ingredientes.length) * 100
        ),
      };
    });

    array.sort(
      (a, b) =>
        (b.porcentagemSelecionados || 0) - (a.porcentagemSelecionados || 0)
    );

    setReceitasFiltradas(array);
  }, [selected]);

  //JSX
  const BotoesTop = () => (
    <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.buttonsTop} onPress={handleListaReceitas}>
        <Text style={styles.textTop}>Lista receitas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonsTop}
        onPress={handleListaIngredientes}
      >
        <Text style={styles.textTop}>Lista ingredientes</Text>
      </TouchableOpacity>
    </View>
  );

  const Footer = () => (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}></TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}></TouchableOpacity>
      <TouchableOpacity style={styles.footerButtonSair} onPress={handleLogout}>
        <Text style={styles.footerTextSair}>Sair</Text>
        <Image
          source={require("../../assets/logout.png")}
          style={{ width: 40, height: 40, marginLeft: -5 }}
        />
      </TouchableOpacity>
    </View>
  );

  const renderItem = (item) => {
    const isSelected = selected.includes(item.value);

    return (
      <View
        style={[stylemodal.item, isSelected && { backgroundColor: "#1e3a8a" }]}
      >
        <Text
          style={[
            stylemodal.selectedTextStyle,
            isSelected && {
              color: "white",
              textShadowColor: "black",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 5,
            },
          ]}
        >
          {item.label}
        </Text>
      </View>
    );
  };

  const ReceitasCompativeis = () => {
    return (
      <View style={styles.containerReceitas}>
        <Text style={styles.indiceReceitas}>Receitas Compatíveis</Text>
        <View style={styles.viewReceitas}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
            showsVerticalScrollIndicator={true}
          >
            {receitasFiltradas.length > 0 ? (
              receitasFiltradas.map((value) => (
                <TouchableOpacity
                  key={`${value.id}`}
                  style={styles.btnReceitas}
                  onPress={() => handleReceita(value.id)}
                >
                  <Image
                    source={{ uri: value.imagem }}
                    style={{ width: 120, height: 85 }}
                    resizeMode="cover"
                  />
                  <View style={{ flexGrow: 1, flexDirection: "column" }}>
                    <Text key={`${value.id}`} style={styles.nomeReceita}>
                      {value.id}
                    </Text>
                    <Text key={`comp-${value.id}`} style={styles.compatReceita}>
                      Compatibilidade:{" "}
                      <Text style={{ fontSize: 26 }}>
                        {`${value.porcentagemSelecionados}%`}{" "}
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={{ fontSize: 22, textAlign: "center" }}>
                Carregando...
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"height"}
      keyboardVerticalOffset={0}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <BotoesTop />
            <View style={styles.containerBuscar}>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Adicionar ingredientes
              </Text>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                style={{ width: "100%" }}
                contentContainerStyle={{ alignItems: "center" }}
                showsVerticalScrollIndicator={true}
              >
                <View style={{ width: "90%" }}>
                  <MultiSelect
                    style={stylemodal.dropdown}
                    placeholderStyle={stylemodal.placeholderStyle}
                    selectedTextStyle={stylemodal.selectedTextStyle}
                    inputSearchStyle={stylemodal.inputSearchStyle}
                    iconStyle={stylemodal.iconStyle}
                    data={listaIngredientes}
                    labelField="label"
                    valueField="value"
                    placeholder="SELECIONAR"
                    value={selected}
                    search
                    searchPlaceholder="Pesquisar..."
                    containerStyle={stylemodal.container}
                    onChange={(item) => {
                      setSelected(item);
                    }}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                      <TouchableOpacity
                        onPress={() => unSelect && unSelect(item)}
                      >
                        <View style={stylemodal.selectedStyle}>
                          <Text style={stylemodal.textSelectedStyle}>
                            {item.label}
                          </Text>
                          <Image
                            source={require("../../assets/close.png")}
                            style={{ width: 35, height: 30, marginRight: -5 }}
                          />
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </ScrollView>
            </View>
            <ReceitasCompativeis />
          </View>
        </ScrollView>
        <Footer />
      </View>
    </KeyboardAvoidingView>
  );
}
