"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useChartTheme } from "../../../hooks/use-chart-theme";

export function SleepChart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const theme = useChartTheme();

  const options: Highcharts.Options = {
    chart: {
      type: "area",
      height: 300,
      ...theme.chart,
    },
    title: {
      text: "Sleep Duration",
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
        text: "Hours",
        style: theme.yAxis.title.style,
      },
      min: 0,
      max: 12,
      tickInterval: 2,
      minorTickInterval: 1,
      minorGridLineWidth: 1,
      labels: theme.yAxis.labels,
      lineColor: theme.yAxis.lineColor,
      tickColor: theme.yAxis.tickColor,
      gridLineColor: theme.yAxis.gridLineColor,
      minorGridLineColor: theme.yAxis.minorGridLineColor,
    },
    series: [
      {
        name: "Sleep",
        type: "area",
        data: [7.5, 8.2, 6.8, 7.9, 8.5, 9.2, 8.8],
        color: "#228be6",
        fillOpacity: 0.3,
      },
    ],
    tooltip: {
      valueSuffix: " hours",
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
