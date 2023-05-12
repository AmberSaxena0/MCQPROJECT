import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";
import {
  LineChart,
  ContributionGraph,
  screenWidth,
} from "react-native-chart-kit";

export default ScoreTab = () => {
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 7 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 },
  ];
  const chartConfig = {
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    <ScrollView style={{ marginBottom: "0.1%" }}>
      <View>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 40,
            margin: 10,
          }}
        >
          Score
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <LineChart
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "June",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: [12, 34, 56, 90, 91, 56, 56, 90, 91, 56],
              },
            ],
          }}
          width={Dimensions.get("window").width / 1.05}
          height={300}
          chartConfig={{
            backgroundGradientFrom: "#ff442b",
            backgroundGradientTo: "#FFB100",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "7",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            marginVertical: 20,
            color: "black",
          }}
        >
          Contribution
        </Text>
      </View>
      <View style={{ borderRadius: 100 }}>
        <ContributionGraph
          width={Dimensions.get("window").width / 1.05}
          values={commitsData}
          endDate={new Date("2017-04-01")}
          numDays={105}
          // width={screenWidth}
          height={220}
          style={{ borderRadius: 20, margin: 10 }}
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  );
};
