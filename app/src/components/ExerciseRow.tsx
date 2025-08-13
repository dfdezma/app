
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type ExerciseRowProps = {
  exerciseName: string;
  seriesNumber: number;
  plannedReps: number;
  plannedWeight: number;
  onUpdate?: (weight: number, reps: number) => void;
};

const ExerciseRow: React.FC<ExerciseRowProps> = ({
  exerciseName,
  seriesNumber,
  plannedReps,
  plannedWeight,
  onUpdate,
}) => {
  const [weight, setWeight] = useState(plannedWeight.toString());
  const [reps, setReps] = useState(plannedReps.toString());

  const handleWeightChange = (text: string) => {
    setWeight(text);
    onUpdate && onUpdate(Number(text), Number(reps));
  };

  const handleRepsChange = (text: string) => {
    setReps(text);
    onUpdate && onUpdate(Number(weight), Number(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.series}>{seriesNumber}ª Serie</Text>
      <Text style={styles.exercise}>{exerciseName}</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={handleWeightChange}
          placeholder="Peso"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={reps}
          onChangeText={handleRepsChange}
          placeholder="Reps"
        />
      </View>
      <Text style={styles.planned}>
        Plan: {plannedWeight}kg x {plannedReps} reps
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  series: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  exercise: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputs: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 4,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 6,
    textAlign: "center",
  },
  planned: {
    fontSize: 12,
    color: "#666",
  },
});

export default ExerciseRow;
