import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Categorias, Ingrediente, ListaIngredientes, Receita } from "../Models/db.models";
import { Dispatch, SetStateAction } from "react";

export const GetReceitas = async (collectionName: string, setReceitas: Dispatch<SetStateAction<Receita[]>>, FiltrarReceitas?) => {
const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);

  const dataList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Receita[]
  setReceitas(dataList)
  if(FiltrarReceitas){
    FiltrarReceitas(dataList)
  }
  return dataList;
}

export const GetCategorias = async (
  collectionName: string,
  setCategorias: Dispatch<SetStateAction<Categorias[]>>
) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);

  const dataList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Categorias[];

  setCategorias(dataList);
  return dataList;
};

export const GetReceita = async (collectionName: string, docId: string, setReceita: Dispatch<SetStateAction<Receita>>) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setReceita(docSnap.data() as Receita);
  } else {
    console.log("No such document!");
  }
};

export const GetIngredientes = async (
  collectionName: string,
  setIngredientes: Dispatch<SetStateAction<Ingrediente[]>>,
  setListaIngredientes?: Dispatch<SetStateAction<ListaIngredientes[]>>
) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);

  const dataList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Ingrediente[];

  setIngredientes(dataList);

  if (setListaIngredientes) {
    const mappedList = dataList.map((ingrediente) => ({
      id: ingrediente.id,
      label: ingrediente.nome,
      value: ingrediente.nome, 
    }));

    setListaIngredientes(mappedList);
  }
};

