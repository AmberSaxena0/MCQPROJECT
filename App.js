import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/Screens/LoginScreen";
import AppBottom from "./src/BottomTabNavigation/AppBottom";
import TestDetails from "./src/BottomTabNavigation/bottonScreens/TestDetails";
import TermsNCondition from "./src/Screens/TermsNCondition";

import ChatApp from "./src/ChatApp/ChatApp";

const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Chat" component={ChatApp} />

        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="AppBottom" component={AppBottom} />

        <Stack.Screen name="FlatlistFile" component={Files} />

        <Stack.Screen name="TestDetails" component={TestDetails} />

        <Stack.Screen name="Terms" component={TermsNCondition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
