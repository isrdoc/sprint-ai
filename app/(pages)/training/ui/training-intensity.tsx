"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { Point } from "highcharts";

export function TrainingIntensity() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "scatter",
      height: 300,
    },
    title: {
      text: "Training Intensity Analysis",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      title: {
        text: "Duration (minutes)",
      },
      min: 0,
      max: 120,
      tickInterval: 20,
      minorTickInterval: 10,
      minorGridLineWidth: 1,
      minorGridLineColor: "#f0f0f0",
    },
    yAxis: {
      title: {
        text: "Intensity (RPE)",
      },
      min: 0,
      max: 10,
      tickInterval: 2,
      minorTickInterval: 1,
      minorGridLineWidth: 1,
      minorGridLineColor: "#f0f0f0",
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
    credits: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
}
