
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList, ActivityIndicator, Alert } from "react-native";

interface Series {
  id: string;
  exercise: string;
  setNumber: number;
  weight: number;
  reps: number;
}

interface Workout {
  id: string;
  date: string; // formato YYYY-MM-DD
  series: Series[];
}

export default function HomeNextWorkout() {
  const [nextWorkout, setNextWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí iría la llamada a tu API / modelo ML para obtener el próximo entrenamiento
    const fetchNextWorkout = async () => {
      const data: Workout = {
        id: "w2",
        date: "2025-08-14", // mañana
        series: [
          { id: "s1", exercise: "Peso muerto", setNumber: 1, weight: 100, reps: 8 },
          { id: "s2", exercise: "Peso muerto", setNumber: 2, weight: 105, reps: 6 },
          { id: "s3", exercise: "Press militar", setNumber: 1, weight: 40, reps: 10 },
        ],
      };
      setNextWorkout(data);
      setLoading(false);
    };

    fetchNextWorkout();
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const isToday = nextWorkout?.date === today;

  const handleStartWorkout = () => {
    if (!isToday) {
      Alert.alert("No disponible", "Este entrenamiento no es para hoy");
      return;
    }
    // Navegar a pantalla de "Entrenando ahora"
    Alert.alert("Entrenamiento", "¡Comienza tu entrenamiento!");
  };

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  if (!nextWorkout)
    return (
      <View style={styles.container}>
        <Text>No tienes entrenamientos programados aún</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximo entrenamiento</Text>
      <Text style={styles.subtitle}>Fecha: {nextWorkout.date}</Text>

      <FlatList
        data={nextWorkout.series}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.seriesRow}>
            <Text>{item.exercise}</Text>
            <Text>Serie {item.setNumber}</Text>
            <Text>
              {item.weight} kg x {item.reps} reps
            </Text>
          </View>
        )}
      />

      {isToday && <Button title="Empezar entrenamiento" onPress={handleStartWorkout} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  seriesRow: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
