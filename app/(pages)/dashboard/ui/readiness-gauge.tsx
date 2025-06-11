"use client";

import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsGauge from "highcharts/modules/solid-gauge";

if (typeof Highcharts === "function") {
  HighchartsMore(Highcharts);
  HighchartsGauge(Highcharts);
}

export function ReadinessGauge() {
  const [chartOptions] = useState<Highcharts.Options>({
    chart: {
      type: "gauge",
      plotBackgroundColor: "transparent",
      plotBackgroundImage: undefined,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "80%",
      width: 250,
    },
    title: {
      text: undefined,
    },
    pane: {
      startAngle: -90,
      endAngle: 89.9,
      background: [],
      center: ["50%", "75%"],
      size: "110%",
    },
    yAxis: {
      min: 0,
      max: 100,
      tickPixelInterval: 72,
      tickPosition: "inside",
      tickColor: "#FFFFFF",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: "auto",
      labels: {
        distance: 20,
        style: {
          fontSize: "14px",
        },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: 0,
          to: 30,
          color: "var(--mantine-color-red-6)", // red
          thickness: 15,
          borderRadius: "25%",
        },
        {
          from: 30,
          to: 60,
          color: "var(--mantine-color-yellow-6)", // yellow
          thickness: 15,
          borderRadius: "25%",
        },
        {
          from: 60,
          to: 100,
          color: "var(--mantine-color-green-6)", // green
          thickness: 15,
          borderRadius: "25%",
        },
      ],
    },
    series: [
      {
        type: "gauge",
        name: "Readiness",
        data: [82],
        tooltip: {
          valueSuffix: "%",
        },
        dataLabels: {
          format: "{y}%",
          borderWidth: 0,
          color: "var(--mantine-color-text)",
          style: {
            fontSize: "16px",
          },
        },
        dial: {
          radius: "80%",
          backgroundColor: "var(--mantine-color-dark-4)",
          baseWidth: 8,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: "var(--mantine-color-dark-4)",
          radius: 4,
        },
      } as Highcharts.SeriesGaugeOptions,
    ],
  });

  // Add animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const chart = Highcharts.charts[0];
      if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0];
        if (point && typeof point.y === "number") {
          const inc = Math.round((Math.random() - 0.5) * 10);
          let newVal = point.y + inc;
          if (newVal < 0 || newVal > 100) {
            newVal = point.y - inc;
          }
          point.update(newVal);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "250px", height: "180px", margin: "0 auto" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
