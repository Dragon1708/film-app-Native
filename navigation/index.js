// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

import VideoDataScreen from "../screens/VideoDataScreen";
import InitVideoDataScreen from "../screens/AddVideo/InitVideoDataScreen";
import SelectCategoryPage from "../screens/AddVideo/SelectCategoryPage";
import UpdateVideoScreen from "../screens/ChangeVideo/UpdateVideoScreen";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="VideoDataScreen" component={VideoDataScreen} />
      <Stack.Screen name="InitVideoDataScreen" component={InitVideoDataScreen} />
      <Stack.Screen name="SelectCategoryPage" component={SelectCategoryPage} />
      <Stack.Screen name="UpdateVideoScreen" component={UpdateVideoScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
