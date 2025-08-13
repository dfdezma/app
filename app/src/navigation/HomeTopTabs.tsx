
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Importa las pantallas de cada pestaña
import NextWorkoutScreen from "../screens/NextWorkoutScreen";
import LastWorkoutScreen from "../screens/LastWorkoutScreen";
import WeeklyRoutineScreen from "../screens/WeeklyRoutineScreen";

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="NextWorkout"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#6200EE" },
        tabBarIndicatorStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="NextWorkout"
        component={NextWorkoutScreen}
        options={{ title: "Próximo" }}
      />
      <Tab.Screen
        name="LastWorkout"
        component={LastWorkoutScreen}
        options={{ title: "Último" }}
      />
      <Tab.Screen
        name="WeeklyRoutine"
        component={WeeklyRoutineScreen}
        options={{ title: "Rutina semanal" }}
      />
    </Tab.Navigator>
  );
}
