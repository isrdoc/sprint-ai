"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import { useMantineColorScheme } from "@mantine/core";

// Initialize the heatmap module
if (typeof Highcharts === "function") {
  HighchartsHeatmap(Highcharts);
}

// Mock data: [x, y, value] where x = day, y = macro, value = grams
// y: 0 = Carbs, 1 = Protein, 2 = Fat
const data = [
  // Carbs (lower values for high protein diet)
  [0, 0, 120],
  [1, 0, 110],
  [2, 0, 130],
  [3, 0, 125],
  [4, 0, 140],
  [5, 0, 135],
  [6, 0, 128],
  // Protein (higher values)
  [0, 1, 220],
  [1, 1, 210],
  [2, 1, 230],
  [3, 1, 225],
  [4, 1, 240],
  [5, 1, 235],
  [6, 1, 228],
  // Fat (moderate values)
  [0, 2, 60],
  [1, 2, 55],
  [2, 2, 65],
  [3, 2, 62],
  [4, 2, 70],
  [5, 2, 68],
  [6, 2, 66],
];

const NutritionHeatMap = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const options: Highcharts.Options = {
    chart: {
      type: "heatmap",
      height: 320,
      plotBorderWidth: 1,
      backgroundColor: "transparent",
      marginTop: 40,
      marginBottom: 80,
    },
    title: {
      text: undefined,
      style: {
        fontSize: "1em",
        color: isDark ? "#C1C2C5" : "#000000",
      },
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: {
        text: "Weekday",
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
      labels: {
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
    },
    yAxis: {
      categories: ["Carbs", "Protein", "Fat"],
      title: {
        text: "Macronutrient",
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
      labels: {
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
      reversed: true,
    },
    colorAxis: {
      min: 0,
      minColor: isDark ? "#2C2E33" : "#FFFFFF",
      maxColor: "#40c057", // green for nutrition
      labels: {
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
    },
    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 220,
      itemStyle: {
        color: isDark ? "#C1C2C5" : "#000000",
      },
    },
    tooltip: {
      backgroundColor: isDark ? "#2C2E33" : "#FFFFFF",
      borderColor: isDark ? "#373A40" : "#DEE2E6",
      style: {
        color: isDark ? "#C1C2C5" : "#000000",
      },
      formatter: function () {
        // @ts-expect-error Highcharts context for heatmap
        const xCat = this.series.xAxis.categories[this.point.x];
        // @ts-expect-error Highcharts context for heatmap
        const yCat = this.series.yAxis.categories[this.point.y];
        // @ts-expect-error Highcharts context for heatmap
        return `<b>${yCat}</b> <br/><b>${this.point.value}g</b> on <b>${xCat}</b>`;
      },
    },
    series: [
      {
        name: "Macros per day",
        borderWidth: 1,
        borderColor: isDark ? "#373A40" : "#DEE2E6",
        type: "heatmap",
        data: data,
        dataLabels: {
          enabled: true,
          color: isDark ? "#C1C2C5" : "#000000",
          style: { fontSize: "0.9em" },
        },
      },
    ],
    credits: { enabled: false },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 500 },
          chartOptions: {
            yAxis: {
              labels: {
                format: "{substr value 0 1}",
              },
            },
          },
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default NutritionHeatMap;
