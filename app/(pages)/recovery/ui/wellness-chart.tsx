"use client";

import { BaseChart } from "../../../ui/charts/base-chart";
import type { Options } from "highcharts";

export function WellnessChart() {
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
        name: "Wellness",
        type: "area",
        data: [80, 82, 85, 83, 88, 90, 92],
        color: "#fab005",
        fillOpacity: 0.3,
      },
    ],
    tooltip: {
      valueSuffix: " / 100",
    },
  };

  return <BaseChart options={options} title="Wellness Score" />;
}
