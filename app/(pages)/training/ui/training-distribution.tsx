"use client";

import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

if (typeof Highcharts === "function") {
  VariablePie(Highcharts);
}

export function TrainingDistribution() {
  const [chartOptions] = useState<Highcharts.Options>({
    chart: {
      type: "variablepie",
      backgroundColor: "transparent",
      height: 300,
    },
    title: {
      text: undefined,
    },
    plotOptions: {
      variablepie: {
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            color: "var(--mantine-color-text)",
            fontSize: "12px",
          },
        },
        states: {
          hover: {
            brightness: 0.1,
          },
        },
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        "<b>{point.name}</b><br>" +
        "Volume: <b>{point.y} mins</b><br>" +
        "Intensity: <b>{point.z}/10</b>",
    },
    series: [
      {
        type: "variablepie",
        minPointSize: 30,
        innerSize: "40%",
        zMin: 0,
        name: "Sessions",
        data: [
          {
            name: "Strength Training",
            y: 120,
            z: 8.5,
          },
          {
            name: "Cardio",
            y: 90,
            z: 6.2,
          },
          {
            name: "Mobility",
            y: 45,
            z: 4.8,
          },
          {
            name: "Skill Work",
            y: 60,
            z: 7.1,
          },
        ],
        colors: [
          "var(--mantine-color-blue-6)",
          "var(--mantine-color-green-6)",
          "var(--mantine-color-yellow-6)",
          "var(--mantine-color-grape-6)",
        ],
      } as Highcharts.SeriesVariablepieOptions,
    ],
  });

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
