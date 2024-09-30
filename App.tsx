import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/login";
import Cadastro from "./Screens/cadastro";
import Home from "./Screens/home";
import ListaReceitas from "./Components/listareceitas";
import ListaIngredientes from "./Components/listaingredientes";
import TelaReceita from "./Components/telareceita";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Receitas Inteligentes",
            headerBackVisible: false,
            headerTitleAlign: "center",
            headerShown: true,
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
            },
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListaReceitas"
          component={ListaReceitas}
          options={{
            title: "Lista de todas receitas",
            headerTitleAlign: "center",
            headerShown: true,
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
            },
          }}
        />
         <Stack.Screen
          name="ListaIngredientes"
          component={ListaIngredientes}
          options={{
            title: "Lista de todos ingredientes",
            headerTitleAlign: "center",
            headerShown: true,
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
            },
          }}
        />
        <Stack.Screen
          name="TelaReceita"
          component={TelaReceita}
          options={{
            title: "Receita",
            headerTitleAlign: "center",
            headerShown: true,
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
              color: "#000",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
