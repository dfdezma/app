
import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type TimerProps = {
  initialSeconds?: number; // Tiempo inicial en segundos
  onFinish?: () => void;   // Callback cuando llega a 0
};

const Timer: React.FC<TimerProps> = ({ initialSeconds = 60, onFinish }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            onFinish && onFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(seconds)}</Text>
      <View style={styles.buttons}>
        <Button title="▶️" onPress={start} disabled={isRunning} />
        <Button title="⏸️" onPress={pause} disabled={!isRunning} />
        <Button title="🔄" onPress={reset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  time: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Timer;
