"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Paper } from "@mantine/core";

interface BaseChartProps {
  options: Highcharts.Options;
  title?: string;
  containerProps?: HighchartsReact.Props;
}

export function BaseChart({ options, title, containerProps }: BaseChartProps) {
  const defaultOptions: Highcharts.Options = {
    chart: {
      style: {
        fontFamily: "inherit",
      },
      backgroundColor: "transparent",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: title,
      style: {
        fontSize: "16px",
        fontWeight: "500",
      },
    },
    ...options,
  };

  return (
    <Paper p="md" radius="md" withBorder>
      <HighchartsReact
        highcharts={Highcharts}
        options={defaultOptions}
        {...containerProps}
      />
    </Paper>
  );
}
