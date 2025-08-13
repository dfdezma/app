import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";

type ChartProps = {
  type: "line" | "bar";
  labels: string[];
  data: number[];
  title?: string;
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // Verde similar a tu tema
  strokeWidth: 2,
  decimalPlaces: 0,
  labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
  propsForDots: {
    r: "4",
    strokeWidth: "2",
    stroke: "#4CAF50",
  },
};

const Charts: React.FC<ChartProps> = ({ type, labels, data, title }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {type === "line" ? (
        <LineChart
          data={{ labels, datasets: [{ data }] }}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      ) : (
        <BarChart
          data={{ labels, datasets: [{ data }] }}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  chart: {
    borderRadius: 16,
  },
});

export default Charts;
