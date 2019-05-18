import { AppRegistry } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";

// Desabilitar Alerta amarelo
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
