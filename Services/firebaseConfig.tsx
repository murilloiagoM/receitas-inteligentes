import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCppr0pc748-WoeNme-cfWZrYUFoUtWEZw",
  authDomain: "receitas-inteligentes-665af.firebaseapp.com",
  projectId: "receitas-inteligentes-665af",
  storageBucket: "receitas-inteligentes-665af.appspot.com",
  messagingSenderId: "109025288479",
  appId: "1:109025288479:web:c1dfc22bb3e31221cd502a",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);


export { auth, db }
