"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  chart: {
    type: "column",
    backgroundColor: "#f9f9f9",
    height: 320,
  },
  title: { text: undefined },
  xAxis: {
    categories: ["Strength", "Cardio", "Mobility", "Skill"],
    title: { text: null },
  },
  yAxis: {
    min: 0,
    title: { text: "Total Minutes", align: "high" },
  },
  tooltip: {
    valueSuffix: " min",
  },
  plotOptions: {
    column: {
      dataLabels: { enabled: true },
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
      color: "#2196F3",
    },
  ],
  credits: { enabled: false },
};

const TrainingVolumeColumnChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default TrainingVolumeColumnChart;
