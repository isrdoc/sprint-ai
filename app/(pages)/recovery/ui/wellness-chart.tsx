"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function WellnessChart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "area",
      height: 300,
    },
    title: {
      text: "Wellness Score",
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
