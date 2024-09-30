import { Dispatch, SetStateAction } from "react";
import { Alert } from "react-native";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const LoginUser = (email: string, password: string, navigation: any) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate("Home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      Alert.alert(`Erro no login!`, errorMessage, [
        {
          text: "FECHAR",
        },
      ]);
    });
};

export const LogoutUser = (navigation: any) => {
  signOut(auth)
    .then(() => {
      navigation.navigate("Login");
      Alert.alert("Logout", "Logout realizado com sucesso", [
        {
          text: "OK",
        },
      ]);
    })
    .catch((error) => {
      Alert.alert("Erro ao sair", error.message);
    });
};

export const CadastroUser = ( email: string, password: string, navigation: any ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert(`Erro no cadastro!`, errorMessage, [
          {
            text: "FECHAR",
          },
        ]);
      });
};

export const GetAuthStatus = (
  initializing: boolean,
  setInitializing: Dispatch<SetStateAction<boolean>>,
  setEmail: Dispatch<SetStateAction<string>>,
  setPassword: Dispatch<SetStateAction<string>>,
  navigation: any
) => {
  onAuthStateChanged(auth, (value) => {
    if (value != null) {
      (navigation as any).navigate("Home");
      setEmail("");
      setPassword("");
    }
    if (initializing) {
      setInitializing(false);
    }
  });
};


