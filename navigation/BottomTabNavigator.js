// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";
import Clock from '../assets/icons/arrow.svg'

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import Bookmark from "../screens/Bookmark";
import Watched from "../screens/Watched";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () =>  {
            return <Image source={require('../assets/icons/Frame.png')} />
          }
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookmarkNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
        <BottomTab.Screen
        name="Create"
        component={WatchedNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
        <BottomTab.Screen
        name="Watched"
        component={WatchedNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const BookmarkStack = createStackNavigator();

function BookmarkNavigator() {
  return (
    <BookmarkStack.Navigator>
      <BookmarkStack.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </BookmarkStack.Navigator>
  );
}

const WatchedStack = createStackNavigator();

function WatchedNavigator() {
  return (
    <WatchedStack.Navigator>
      <WatchedStack.Screen
        name="Watched"
        component={Watched}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </WatchedStack.Navigator>
  );
}
