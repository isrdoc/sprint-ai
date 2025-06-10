"use client";

import { BaseChart } from "../../../ui/charts/base-chart";
import type { Options, Point } from "highcharts";

export function TrainingIntensity() {
  const options: Options = {
    chart: {
      type: "scatter",
      height: 300,
    },
    title: {
      text: "Training Intensity Analysis",
    },
    xAxis: {
      title: {
        text: "Duration (minutes)",
      },
      min: 0,
      max: 120,
    },
    yAxis: {
      title: {
        text: "Intensity (RPE)",
      },
      min: 0,
      max: 10,
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 8,
          symbol: "circle",
        },
      },
    },
    series: [
      {
        name: "HIIT",
        type: "scatter",
        data: [[45, 8]],
        color: "#228be6",
      },
      {
        name: "Strength",
        type: "scatter",
        data: [[60, 7]],
        color: "#40c057",
      },
      {
        name: "Sprint",
        type: "scatter",
        data: [[30, 9]],
        color: "#fab005",
      },
      {
        name: "Endurance",
        type: "scatter",
        data: [[90, 6]],
        color: "#fa5252",
      },
      {
        name: "Circuit",
        type: "scatter",
        data: [[20, 8]],
        color: "#7950f2",
      },
    ],
    tooltip: {
      formatter: function (this: Point) {
        return `<b>${this.series.name}</b><br/>Duration: ${this.x} min<br/>Intensity: ${this.y}/10`;
      },
    },
  };

  return <BaseChart options={options} />;
}
