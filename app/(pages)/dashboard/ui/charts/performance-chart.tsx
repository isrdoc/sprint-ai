"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useChartTheme } from "../../../../hooks/use-chart-theme";

export function PerformanceChart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const theme = useChartTheme();

  const options: Highcharts.Options = {
    chart: {
      type: "line",
      height: 300,
      ...theme.chart,
    },
    title: {
      text: "Performance by Muscle Group",
      align: "left",
      style: theme.title.style,
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: {
        text: "Day",
        style: theme.xAxis.title.style,
      },
      labels: theme.xAxis.labels,
      lineColor: theme.xAxis.lineColor,
      tickColor: theme.xAxis.tickColor,
      gridLineColor: theme.xAxis.gridLineColor,
    },
    yAxis: {
      title: {
        text: "Performance Score",
        style: theme.yAxis.title.style,
      },
      min: 50,
      max: 100,
      tickInterval: 10,
      minorTickInterval: 5,
      minorGridLineWidth: 1,
      labels: theme.yAxis.labels,
      lineColor: theme.yAxis.lineColor,
      tickColor: theme.yAxis.tickColor,
      gridLineColor: theme.yAxis.gridLineColor,
      minorGridLineColor: theme.yAxis.minorGridLineColor,
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
      backgroundColor: theme.tooltip.backgroundColor,
      borderColor: theme.tooltip.borderColor,
      style: theme.tooltip.style,
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 4,
        },
      },
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
