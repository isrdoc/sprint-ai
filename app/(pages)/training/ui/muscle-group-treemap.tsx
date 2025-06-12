"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import TreemapModule from "highcharts/modules/treemap";
import { useMantineColorScheme } from "@mantine/core";

// Initialize the treemap module
if (typeof Highcharts === "function") {
  TreemapModule(Highcharts);
}

const data = [
  { id: "chest", name: "Chest", color: "#ffb4a2" },
  { name: "Bench Press", parent: "chest", value: 300 },
  { name: "Push-ups", parent: "chest", value: 120 },

  { id: "back", name: "Back", color: "#a2d2ff" },
  { name: "Pull-ups", parent: "back", value: 180 },
  { name: "Rows", parent: "back", value: 150 },

  { id: "legs", name: "Legs", color: "#b5ead7" },
  { name: "Squats", parent: "legs", value: 200 },
  { name: "Lunges", parent: "legs", value: 100 },

  { id: "core", name: "Core", color: "#ffe066" },
  { name: "Planks", parent: "core", value: 80 },
  { name: "Crunches", parent: "core", value: 60 },
];

const MuscleGroupTreemap = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const options: Highcharts.Options = {
    chart: {
      type: "treemap",
      height: 400,
      backgroundColor: "transparent",
    },
    title: { text: undefined },
    series: [
      {
        type: "treemap",
        layoutAlgorithm: "squarified",
        interactByLeaf: true,
        dataLabels: {
          enabled: true,
          style: {
            color: isDark ? "#C1C2C5" : "#000000",
          },
        },
        levelIsConstant: false,
        levels: [
          {
            level: 1,
            dataLabels: {
              enabled: true,
              style: {
                fontSize: "1.3em",
                fontWeight: "700",
                color: isDark ? "#C1C2C5" : "#000000",
              },
            },
            borderWidth: 3,
            borderColor: isDark ? "#373A40" : "#DEE2E6",
          },
          {
            level: 2,
            dataLabels: {
              enabled: true,
              style: {
                color: isDark ? "#C1C2C5" : "#000000",
              },
            },
            borderColor: isDark ? "#373A40" : "#DEE2E6",
          },
        ],
        data,
      },
    ],
    tooltip: {
      backgroundColor: isDark ? "#2C2E33" : "#FFFFFF",
      borderColor: isDark ? "#373A40" : "#DEE2E6",
      style: {
        color: isDark ? "#C1C2C5" : "#000000",
      },
    },
    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MuscleGroupTreemap;
