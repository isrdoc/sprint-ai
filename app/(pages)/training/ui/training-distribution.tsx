"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useChartTheme } from "../../../hooks/use-chart-theme";

export function TrainingDistribution() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const theme = useChartTheme();

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      height: 300,
      ...theme.chart,
    },
    title: {
      text: "Training Load Distribution",
      align: "left",
      style: theme.title.style,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f}%",
          style: theme.xAxis.labels.style,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Training Type",
        type: "pie",
        data: [
          {
            name: "Strength",
            y: 35,
            color: "#228be6",
          },
          {
            name: "Cardio",
            y: 25,
            color: "#40c057",
          },
          {
            name: "HIIT",
            y: 20,
            color: "#fab005",
          },
          {
            name: "Recovery",
            y: 15,
            color: "#fa5252",
          },
          {
            name: "Flexibility",
            y: 5,
            color: "#7950f2",
          },
        ],
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
