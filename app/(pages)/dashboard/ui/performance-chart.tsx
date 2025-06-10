"use client";

import { BaseChart } from "../../../ui/charts/base-chart";
import type { Options } from "highcharts";

export function PerformanceChart() {
  const options: Options = {
    chart: {
      type: "line",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      title: {
        text: "Performance Score",
      },
    },
    series: [
      {
        name: "Performance",
        type: "line",
        data: [65, 72, 68, 75, 82, 85],
        color: "#228be6",
      },
    ],
    plotOptions: {
      line: {
        marker: {
          enabled: true,
        },
      },
    },
  };

  return <BaseChart options={options} />;
}
