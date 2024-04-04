import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./screens/Onboarding";
import type { RouteProp as NRouteProp } from "@react-navigation/native";

export type HomeStackParamList = {
  Home: undefined;
  Onboarding: undefined;
};

export type RootStackParamList = HomeStackParamList;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;

const Stack = createNativeStackNavigator<HomeStackParamList>();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <StackNavigator />;
}
