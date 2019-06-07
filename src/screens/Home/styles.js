import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212"
  },
  header: {
    borderBottomColor: "#fff",
    backgroundColor: "#fff"
  },
  bg: {
    height: 200,
    width: "auto"
  },
  scoreCard: {
    alignItems: "center",
    marginTop: -80
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 40
  },
  scoreboard: {
    width: Dimensions.get("window").width - 40,
    height: 200,
    backgroundColor: "#1b1b1b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  resetButton: {
    marginTop: 50,
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: "#fff",
    width: Dimensions.get("window").width - 40,
    height: 50
  },
  iconCard: {
    width: 30,
    height: 30
  },
  pontuacao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  x: {
    fontSize: 20,
    fontWeight: "100",
    margin: 20,
    color: "#909090"
  },
  scoreText: {
    fontSize: 70,
    fontWeight: "500",
    color: "#fff"
  },
  timeSeparator: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20
  },
  text500: {
    color: "#fff",
    fontWeight: "500"
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1b1b1b",
    justifyContent: "center",
    alignItems: "center"
  },
  menos: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1b1b1b",
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonOutline: {
    width: Dimensions.get("window").width - 200,
    height: 40,
    marginTop: 50,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "rgb(129,129,129)",
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    width: 2,
    height: 150,
    marginTop: -50,
    backgroundColor: "#1b1b1b"
  },
});
