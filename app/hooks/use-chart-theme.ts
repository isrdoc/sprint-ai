import { useMantineColorScheme } from "@mantine/core";

export function useChartTheme() {
  const { colorScheme } = useMantineColorScheme();

  return {
    chart: {
      backgroundColor: "transparent",
      style: {
        fontFamily: "inherit",
      },
    },
    title: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: colorScheme === "dark" ? "#C1C2C5" : "#1A1B1E",
      },
    },
    xAxis: {
      title: {
        style: {
          color: colorScheme === "dark" ? "#C1C2C5" : "#1A1B1E",
        },
      },
      labels: {
        style: {
          color: colorScheme === "dark" ? "#C1C2C5" : "#1A1B1E",
        },
      },
      lineColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
      tickColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
      gridLineColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
    },
    yAxis: {
      title: {
        style: {
          color: colorScheme === "dark" ? "#C1C2C5" : "#1A1B1E",
        },
      },
      labels: {
        style: {
          color: colorScheme === "dark" ? "#C1C2C5" : "#1A1B1E",
        },
      },
      lineColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
      tickColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
      gridLineColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
      minorGridLineColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
    },
    tooltip: {
      backgroundColor: colorScheme === "dark" ? "#25262B" : "#FFFFFF",
      borderColor: colorScheme === "dark" ? "#373A40" : "#E9ECEF",
      style: {
        color: colorScheme === "dark" ? "#C1C2C5" : "#1A1B1E",
      },
    },
    legend: {
      itemStyle: {
        color: colorScheme === "dark" ? "#C1C2C5" : "#1A1B1E",
      },
    },
  };
}
