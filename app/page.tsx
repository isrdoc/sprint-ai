"use client";

import { Container, Title, Text, Stack } from "@mantine/core";
import { useGetCurrentUser } from "./(pages)/users/api/use-get-user";
import { OverviewGrid } from "./(pages)/dashboard/ui/overview-grid";
import { AIInsights } from "./(pages)/dashboard/ui/ai-insights";
import { PerformanceTrends } from "./(pages)/dashboard/ui/performance-trends";

export default function Dashboard() {
  const { data: user } = useGetCurrentUser();

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1}>Welcome back, {user?.name}!</Title>
          <Text c="dimmed" size="lg">
            Here&apos;s your progress at a glance
          </Text>
        </div>

        <OverviewGrid />
        <AIInsights />
        <PerformanceTrends />
      </Stack>
    </Container>
  );
}
