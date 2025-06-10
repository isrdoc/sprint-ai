"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useChartTheme } from "../../../hooks/use-chart-theme";

export function WellnessChart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const theme = useChartTheme();

  const options: Highcharts.Options = {
    chart: {
      type: "area",
      height: 300,
      ...theme.chart,
    },
    title: {
      text: "Wellness Score",
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
        text: "Score",
        style: theme.yAxis.title.style,
      },
      min: 0,
      max: 100,
      tickInterval: 20,
      minorTickInterval: 10,
      minorGridLineWidth: 1,
      labels: theme.yAxis.labels,
      lineColor: theme.yAxis.lineColor,
      tickColor: theme.yAxis.tickColor,
      gridLineColor: theme.yAxis.gridLineColor,
      minorGridLineColor: theme.yAxis.minorGridLineColor,
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
