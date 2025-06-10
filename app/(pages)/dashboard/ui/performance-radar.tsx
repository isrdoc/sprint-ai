"use client";

import { BaseChart } from "../../../ui/charts/base-chart";
import type { Options } from "highcharts";

export function PerformanceRadar() {
  const options: Options = {
    chart: {
      type: "area",
      height: 300,
    },
    title: {
      text: "Performance Metrics",
    },
    xAxis: {
      categories: [
        "Strength",
        "Speed",
        "Endurance",
        "Flexibility",
        "Recovery",
        "Technique",
      ],
      tickmarkPlacement: "on",
      lineWidth: 0,
    },
    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      min: 0,
      max: 100,
    },
    plotOptions: {
      area: {
        fillOpacity: 0.25,
      },
    },
    series: [
      {
        name: "Current",
        type: "area",
        data: [85, 75, 80, 70, 90, 85],
        color: "#228be6",
      },
      {
        name: "Target",
        type: "area",
        data: [90, 85, 85, 80, 95, 90],
        color: "#40c057",
      },
    ],
  };

  return <BaseChart options={options} />;
}
