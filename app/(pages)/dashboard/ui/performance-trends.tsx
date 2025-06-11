"use client";

import { Stack, SimpleGrid, Paper, Title } from "@mantine/core";
import { PerformanceChart } from "./charts/performance-chart";
import { PerformanceRadar } from "./charts/performance-radar";

export function PerformanceTrends() {
  return (
    <Stack gap="md">
      <Title order={3}>Performance Trends</Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <Paper p="md" radius="md" withBorder>
          <PerformanceChart />
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <PerformanceRadar />
        </Paper>
      </SimpleGrid>
    </Stack>
  );
}
