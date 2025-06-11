"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsGauge from "highcharts/modules/solid-gauge";

if (typeof Highcharts === "function") {
  HighchartsMore(Highcharts);
  HighchartsGauge(Highcharts);
}

interface RecoveryGaugeProps {
  size?: number;
}

export function RecoveryGauge({ size = 400 }: RecoveryGaugeProps) {
  // Use the same colors as the other recovery charts
  const mainColors = [
    "#228be6", // Sleep (outer, blue)
    "#40c057", // Nutrition (middle, green)
    "#fab005", // Wellness (inner, yellow)
  ];
  const trackColors = [
    "#a5d8ff", // light blue for sleep
    "#b2f2bb", // light green for nutrition
    "#ffe066", // light yellow for wellness
  ];
  // User-provided values
  const values = [90, 78, 85];

  const options: Highcharts.Options = {
    chart: {
      type: "solidgauge",
      height: size,
      width: size,
      backgroundColor: "transparent",
      spacing: [0, 0, 0, 0],
    },
    title: { text: undefined },
    tooltip: {
      enabled: true,
      useHTML: true,
      borderRadius: 8,
      borderWidth: 1,
      shadow: false,
      style: {
        fontSize: "16px",
        fontWeight: "500",
        padding: "8px",
      },
      pointFormat:
        '<span style="color:{series.color};font-weight:bold">●</span> <b>{series.name}</b><br>' +
        '<span style="font-size: 2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          outerRadius: "100%",
          innerRadius: "80%",
          backgroundColor: trackColors[0],
          borderWidth: 0,
        },
        {
          outerRadius: "78%",
          innerRadius: "58%",
          backgroundColor: trackColors[1],
          borderWidth: 0,
        },
        {
          outerRadius: "56%",
          innerRadius: "36%",
          backgroundColor: trackColors[2],
          borderWidth: 0,
        },
      ],
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
      labels: { enabled: false },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: { enabled: false },
        linecap: "round",
        stickyTracking: false,
        rounded: true,
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: "Sleep Quality",
        type: "solidgauge",
        data: [
          {
            color: mainColors[0],
            radius: "100%",
            innerRadius: "80%",
            y: values[0],
          },
        ],
      },
      {
        name: "Nutrition & Hydration",
        type: "solidgauge",
        data: [
          {
            color: mainColors[1],
            radius: "78%",
            innerRadius: "58%",
            y: values[1],
          },
        ],
      },
      {
        name: "Wellness Metrics",
        type: "solidgauge",
        data: [
          {
            color: mainColors[2],
            radius: "56%",
            innerRadius: "36%",
            y: values[2],
          },
        ],
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div style={{ width: size, height: size, minWidth: size, minHeight: size }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
