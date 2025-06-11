"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useChartTheme } from "../../../../hooks/use-chart-theme";

export function PerformanceRadar() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const theme = useChartTheme();

  const options: Highcharts.Options = {
    chart: {
      type: "area",
      height: 300,
      ...theme.chart,
    },
    title: {
      text: "Performance Metrics",
      align: "left",
      style: theme.title.style,
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
      labels: theme.xAxis.labels,
    },
    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      min: 0,
      max: 100,
      tickInterval: 20,
      minorTickInterval: 10,
      minorGridLineWidth: 1,
      labels: theme.yAxis.labels,
      gridLineColor: theme.yAxis.gridLineColor,
      minorGridLineColor: theme.yAxis.minorGridLineColor,
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
    tooltip: {
      backgroundColor: theme.tooltip.backgroundColor,
      borderColor: theme.tooltip.borderColor,
      style: theme.tooltip.style,
    },
    legend: {
      itemStyle: theme.legend.itemStyle,
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
