"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import TreemapModule from "highcharts/modules/treemap";

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

const options: Highcharts.Options = {
  chart: { type: "treemap", height: 400, backgroundColor: "#f9f9f9" },
  title: { text: "Distribution of Exercises by Muscle Group" },
  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      interactByLeaf: true,
      dataLabels: { enabled: true },
      levelIsConstant: false,
      levels: [
        {
          level: 1,
          dataLabels: {
            enabled: true,
            style: { fontSize: "1.3em", fontWeight: "700" },
          },
          borderWidth: 3,
        },
        {
          level: 2,
          dataLabels: { enabled: true },
        },
      ],
      data,
    },
  ],
  credits: { enabled: false },
};

const MuscleGroupTreemap = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default MuscleGroupTreemap;
