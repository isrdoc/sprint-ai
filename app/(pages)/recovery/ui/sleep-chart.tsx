"use client";

import { BaseChart } from "../../../ui/charts/base-chart";
import type { Options } from "highcharts";

export function SleepChart() {
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
        text: "Hours",
      },
      min: 0,
      max: 12,
      tickInterval: 2,
      minorTickInterval: 1,
      minorGridLineWidth: 1,
      minorGridLineColor: "#f0f0f0",
    },
    series: [
      {
        name: "Sleep",
        type: "area",
        data: [7.5, 8.2, 6.8, 7.9, 8.5, 9.2, 8.8],
        color: "#228be6",
        fillOpacity: 0.3,
      },
    ],
    tooltip: {
      valueSuffix: " hours",
    },
  };

  return <BaseChart options={options} title="Sleep Duration" />;
}
