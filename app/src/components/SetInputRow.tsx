
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type SetInputRowProps = {
  seriesNumber: number;
  plannedWeight: number;
  plannedReps: number;
  onChange?: (weight: number, reps: number) => void;
};

const SetInputRow: React.FC<SetInputRowProps> = ({
  seriesNumber,
  plannedWeight,
  plannedReps,
  onChange,
}) => {
  const [weight, setWeight] = useState(plannedWeight.toString());
  const [reps, setReps] = useState(plannedReps.toString());

  useEffect(() => {
    onChange && onChange(Number(weight), Number(reps));
  }, [weight, reps]);

  return (
    <View style={styles.container}>
      <Text style={styles.series}>{seriesNumber}ª Serie</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          placeholder="Peso"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={reps}
          onChangeText={setReps}
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
    padding: 10,
    marginVertical: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  series: {
    fontWeight: "bold",
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
    borderRadius: 6,
    padding: 6,
    textAlign: "center",
  },
  planned: {
    fontSize: 12,
    color: "#666",
  },
});

export default SetInputRow;
