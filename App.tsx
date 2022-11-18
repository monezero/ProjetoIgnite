import { ThemeProvider } from "styled-components";
import { NewGroup } from "@screens/Groups/NewGroup";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "react-native";
import { Loading } from "@components/Loading";
import { Groups } from "@screens/Groups";
import { Filter } from "@components/Filter";
import { Players } from "@screens/Players";
import { Routes } from "./src/routes";
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
