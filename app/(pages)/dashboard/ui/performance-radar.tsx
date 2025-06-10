"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function PerformanceRadar() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "area",
      height: 300,
    },
    title: {
      text: "Performance Metrics",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
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
      tickInterval: 20,
      minorTickInterval: 10,
      minorGridLineWidth: 1,
      minorGridLineColor: "#f0f0f0",
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
