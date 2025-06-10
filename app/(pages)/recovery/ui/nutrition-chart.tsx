"use client";

import { BaseChart } from "../../../ui/charts/base-chart";
import type { Options } from "highcharts";

export function NutritionChart() {
  const options: Options = {
    chart: {
      type: "area",
      height: 300,
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: {
        text: "Day",
      },
    },
    yAxis: {
      title: {
        text: "Score",
      },
      min: 0,
      max: 100,
      tickInterval: 20,
      minorTickInterval: 10,
      minorGridLineWidth: 1,
      minorGridLineColor: "#f0f0f0",
    },
    series: [
      {
        name: "Nutrition",
        type: "area",
        data: [75, 78, 82, 80, 85, 88, 90],
        color: "#40c057",
        fillOpacity: 0.3,
      },
    ],
    tooltip: {
      valueSuffix: " / 100",
    },
  };

  return <BaseChart options={options} title="Nutrition Score" />;
}
