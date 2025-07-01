import { Text, View, StatusBar } from "react-native";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });
  return (
    <GluestackUIProvider mode="light">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#202024'
        }}
      >
        <StatusBar 
          barStyle={"light-content"}
          backgroundColor='transparent'
          translucent
        />
        { fontsLoaded ? <Text>Home</Text> : <View /> }
      </View>
    </GluestackUIProvider>
  );
}
