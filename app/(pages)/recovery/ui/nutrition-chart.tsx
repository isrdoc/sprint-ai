"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function NutritionChart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "area",
      height: 300,
    },
    title: {
      text: "Nutrition Score",
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
        name: "Nutrition",
        type: "area",
        data: [75, 78, 82, 80, 85, 88, 90],
        color: "#40c057",
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
