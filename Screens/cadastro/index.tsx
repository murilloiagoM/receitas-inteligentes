import React, { useRef, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import styles from "./cadastro.module";
import { useNavigation } from "@react-navigation/native";
import { CadastroUser } from "../../Services/authService";

export default function Cadastro() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();
  const nomeInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleNavigation = () => {
    (navigation as any).navigate("Login");
    setEmail("")
    setPassword("")
  };

  const handleCadastro = () => {
    CadastroUser(email, password, navigation)
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"height"}
      keyboardVerticalOffset={0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.containerImagem}>
            <Image
              source={require("../../assets/receitasinteligentes.png")}
              style={{ width: 230, height: 220 }}
            />
          </View>
          <View style={styles.forms}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              value={email}
              style={styles.formInput}
              onChangeText={(value) => {
                setEmail(value);
              }}
              onEndEditing={() => {
                nomeInputRef?.current.focus()
              }}
            />
            <Text style={styles.formLabel}>Nome</Text>
            <TextInput style={styles.formInput} ref={nomeInputRef}
            onEndEditing={() => {
              passwordInputRef?.current.focus()
            }}/>
            <Text style={styles.formLabel}>Senha</Text>
            <TextInput
              ref={passwordInputRef}
              value={password}
              style={styles.formInput}
              secureTextEntry={true}
              onChangeText={(value) => {
                setPassword(value);
              }}
            />
          </View>
          <Text style={styles.subTexto}>Já possui uma conta?</Text>
          <Text style={styles.linkSubtexto} onPress={handleNavigation}>
            Entrar
          </Text>
          <TouchableOpacity
            style={styles.buttonEntrar}
            onPress={handleCadastro}
          >
            <Text style={styles.textoEntrar}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
