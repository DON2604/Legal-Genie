import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const Layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-SemiBoldItalic": require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
    "montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;
