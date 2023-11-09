import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "My home",
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          }
        }}
      />
      <Text>Home Screen</Text>
      <Link href={{ pathname: "home", params: { name: "Raj" } }}>
        Go to Home
      </Link>
    </View>
  );
}
