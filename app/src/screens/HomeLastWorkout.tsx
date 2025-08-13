
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";

interface Series {
  id: string;
  exercise: string;
  setNumber: number;
  weight: number;
  reps: number;
}

interface Workout {
  id: string;
  date: string;
  duration: number; // en minutos
  feeling: "mucho sufrimiento" | "sufrimiento normal" | "entrenamiento ligero";
  series: Series[];
}

export default function HomeLastWorkout() {
  const [lastWorkout, setLastWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí iría la llamada a tu API para obtener el último entrenamiento
    const fetchLastWorkout = async () => {
      // Simulación
      const data: Workout = {
        id: "w1",
        date: "2025-08-13",
        duration: 60,
        feeling: "sufrimiento normal",
        series: [
          { id: "s1", exercise: "Press de banca", setNumber: 1, weight: 50, reps: 10 },
          { id: "s2", exercise: "Press de banca", setNumber: 2, weight: 55, reps: 8 },
          { id: "s3", exercise: "Sentadilla", setNumber: 1, weight: 80, reps: 10 },
        ],
      };
      setLastWorkout(data);
      setLoading(false);
    };

    fetchLastWorkout();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  if (!lastWorkout)
    return (
      <View style={styles.container}>
        <Text>No tienes entrenamientos registrados aún</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Último entrenamiento</Text>
      <Text style={styles.subtitle}>Fecha: {lastWorkout.date}</Text>
      <Text>Duración: {lastWorkout.duration} min</Text>
      <Text>Sentimiento: {lastWorkout.feeling}</Text>

      <Text style={styles.seriesTitle}>Series:</Text>
      <FlatList
        data={lastWorkout.series}
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
    marginBottom: 5,
  },
  seriesTitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  seriesRow: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
