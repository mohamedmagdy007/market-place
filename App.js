import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import NFTDetails from "./screens/NFTDetails";
import Wellcome from "./screens/Wellcome";
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Wellcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NFT-Details" component={NFTDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
