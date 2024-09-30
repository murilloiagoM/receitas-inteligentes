import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFDAEC",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  containerImagem: {
    marginTop: 100,
    height: 240,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  forms: {
    height: 260,
    width: "70%",
    marginTop: 15,
  },
  formLabel: {
    fontSize: 24,
    marginTop: 15,
    color: "#3b3b3b",
  },
  formInput: {
    height: 40,
    fontSize: 24,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "white",
    paddingLeft: 2
  },
  subTexto: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "400"
  },
  linkSubtexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "blue"
  },
  buttonEntrar: {
    marginTop: 30,
    backgroundColor: "#4264ED",
    height: 60,
    width: "45%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40
  },
  textoEntrar: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  }
});

export default styles