import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import styles from "./login.module";
import { useNavigation } from "@react-navigation/native";
import { LoginUser, GetAuthStatus } from "../../Services/authService";

export default function Login() {
  const [initializing, setInitializing] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();
  const passwordInputRef = useRef<TextInput>(null);

  useEffect(() => {
    const status = GetAuthStatus(initializing, setInitializing, setEmail, setPassword, navigation );

    return status;
  }, [initializing]);

  const handleNavigation = () => {
    (navigation as any).navigate("Cadastro");
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    LoginUser(email, password, navigation);
  };

  //JSX
  const Imagem = () => {
    return (
      <View style={styles.containerImagem}>
        <Image
          source={require("../../assets/receitasinteligentes.png")}
          style={{ width: 230, height: 220 }}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"height"}
      keyboardVerticalOffset={0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={!initializing ? styles.container : { display: "none" }}>
          <Imagem />
          <View style={styles.forms}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              value={email}
              style={styles.formInput}
              onChangeText={(value) => setEmail(value)}
              onEndEditing={() => {
                passwordInputRef?.current.focus();
              }}
            />
            <Text style={styles.formLabel}>Senha</Text>
            <TextInput
              value={password}
              ref={passwordInputRef}
              style={styles.formInput}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <Text style={styles.subTexto}>Ainda não tem uma conta?</Text>
          <Text style={styles.linkSubtexto} onPress={handleNavigation}>
            Cadastre-se
          </Text>
          <TouchableOpacity onPress={handleLogin} style={styles.buttonEntrar}>
            <Text style={styles.textoEntrar}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
