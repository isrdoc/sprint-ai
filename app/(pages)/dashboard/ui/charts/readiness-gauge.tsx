"use client";

import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsGauge from "highcharts/modules/solid-gauge";
import { useChartTheme } from "../../../../hooks/use-chart-theme";

if (typeof Highcharts === "function") {
  HighchartsMore(Highcharts);
  HighchartsGauge(Highcharts);
}

export function ReadinessGauge() {
  const theme = useChartTheme();
  const chartRef = React.useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: "transparent",
      plotBackgroundImage: undefined,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "80%",
      width: 250,
      ...theme.chart,
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
      tickColor: theme.yAxis.tickColor,
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: "auto",
      labels: {
        distance: 20,
        style: {
          fontSize: "14px",
          color: theme.yAxis.labels.style.color,
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
          backgroundColor: theme.tooltip.backgroundColor,
          borderColor: theme.tooltip.borderColor,
          style: theme.tooltip.style,
        },
        dataLabels: {
          format: "{y}%",
          borderWidth: 0,
          color: theme.yAxis.labels.style.color,
          style: {
            fontSize: "16px",
          },
        },
        dial: {
          radius: "80%",
          backgroundColor: theme.yAxis.labels.style.color,
          baseWidth: 8,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: theme.yAxis.labels.style.color,
          radius: 4,
        },
      } as Highcharts.SeriesGaugeOptions,
    ],
  };

  // Update chart when theme changes
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chart;
      if (chart) {
        chart.update({
          chart: {
            ...theme.chart,
          },
          yAxis: {
            tickColor: theme.yAxis.tickColor,
            labels: {
              style: {
                color: theme.yAxis.labels.style.color,
              },
            },
          },
          series: [
            {
              type: "gauge",
              dataLabels: {
                color: theme.yAxis.labels.style.color,
              },
              dial: {
                backgroundColor: theme.yAxis.labels.style.color,
              },
              pivot: {
                backgroundColor: theme.yAxis.labels.style.color,
              },
            } as Highcharts.SeriesGaugeOptions,
          ],
        });
      }
    }
  }, [theme]);

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
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      />
    </div>
  );
}
