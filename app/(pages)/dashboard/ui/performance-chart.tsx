"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function PerformanceChart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "line",
      height: 300,
    },
    title: {
      text: "Performance by Muscle Group",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: {
        text: "Day",
      },
    },
    yAxis: {
      title: {
        text: "Performance Score",
      },
      min: 50,
      max: 100,
      tickInterval: 10,
      minorTickInterval: 5,
      minorGridLineWidth: 1,
      minorGridLineColor: "#f0f0f0",
    },
    series: [
      {
        name: "Upper Body",
        type: "line",
        data: [75, 78, 82, 80, 85, 88, 90],
        color: "#228be6",
      },
      {
        name: "Lower Body",
        type: "line",
        data: [70, 72, 75, 78, 80, 82, 85],
        color: "#40c057",
      },
      {
        name: "Core",
        type: "line",
        data: [65, 68, 70, 72, 75, 78, 80],
        color: "#fab005",
      },
      {
        name: "Cardio",
        type: "line",
        data: [80, 82, 85, 83, 88, 90, 92],
        color: "#fa5252",
      },
    ],
    tooltip: {
      valueSuffix: " / 100",
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 4,
        },
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
