"use client";

import { BaseChart } from "../../../ui/charts/base-chart";
import type { Options } from "highcharts";

export function TrainingDistribution() {
  const options: Options = {
    chart: {
      type: "pie",
      height: 300,
    },
    title: {
      text: "Training Load Distribution",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f}%",
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Training Type",
        type: "pie",
        data: [
          {
            name: "Strength",
            y: 35,
            color: "#228be6",
          },
          {
            name: "Cardio",
            y: 25,
            color: "#40c057",
          },
          {
            name: "HIIT",
            y: 20,
            color: "#fab005",
          },
          {
            name: "Recovery",
            y: 15,
            color: "#fa5252",
          },
          {
            name: "Flexibility",
            y: 5,
            color: "#7950f2",
          },
        ],
      },
    ],
  };

  return <BaseChart options={options} />;
}
