
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Importa tus pantallas
import HomeTopTabs from "./HomeTopTabs";
import ProgressScreen from "../screens/ProgressScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PlaceholderScreen from "../screens/PlaceholderScreen";

const Tab = createBottomTabNavigator();

export default function RootTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "#999",
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "";

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Social":
              iconName = "people-outline";
              break;
            case "Search":
              iconName = "search-outline";
              break;
            case "Progress":
              iconName = "bar-chart-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeTopTabs} options={{ title: "Inicio" }} />
      <Tab.Screen name="Social" component={PlaceholderScreen} options={{ title: "Red social" }} />
      <Tab.Screen name="Search" component={PlaceholderScreen} options={{ title: "Buscar" }} />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{ title: "Progreso" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
    </Tab.Navigator>
  );
}
