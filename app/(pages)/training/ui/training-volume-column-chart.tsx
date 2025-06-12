"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useMantineColorScheme } from "@mantine/core";

const TrainingVolumeColumnChart = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 320,
    },
    title: { text: undefined },
    xAxis: {
      categories: ["Strength", "Cardio", "Mobility", "Skill"],
      title: { text: null },
      labels: {
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total Minutes",
        align: "high",
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
      labels: {
        style: {
          color: isDark ? "#C1C2C5" : "#000000",
        },
      },
    },
    tooltip: {
      valueSuffix: " min",
      backgroundColor: isDark ? "#2C2E33" : "#FFFFFF",
      borderColor: isDark ? "#373A40" : "#DEE2E6",
      style: {
        color: isDark ? "#C1C2C5" : "#000000",
      },
    },
    legend: {
      itemStyle: {
        color: isDark ? "#C1C2C5" : "#000000",
      },
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          style: {
            color: isDark ? "#C1C2C5" : "#000000",
          },
        },
        borderRadius: 6,
        pointPadding: 0.2,
        groupPadding: 0.1,
      },
    },
    series: [
      {
        name: "Volume",
        type: "column",
        data: [1200, 600, 300, 180],
        dataLabels: {
          style: {
            color: isDark ? "#C1C2C5" : "#000000",
          },
        },
      },
    ],
    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TrainingVolumeColumnChart;
