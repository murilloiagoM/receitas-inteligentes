import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  indiceContainer: {
    backgroundColor: "#1e3a8a",
    borderColor: "white",
    height: 45,
    borderBottomWidth: 1,
    justifyContent: "center",
    borderRadius: 3,
  },
  textContainer: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  buttonReceitas: {
    borderColor: "#9e9e9e",
    marginBottom: 2,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  nomeReceitas: {
    fontSize: 22,
    flexGrow: 1,
    paddingLeft: 5,
    flexWrap: "wrap",
    width: 0,
  },
});

export default styles;
