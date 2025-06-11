"use client";

import { SimpleGrid, Paper, Stack, Text } from "@mantine/core";
import {
  IconChartBar,
  IconCalendar,
  IconTrophy,
  IconHeartbeat,
} from "@tabler/icons-react";

export function OverviewGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
      <Paper p="md" radius="md" withBorder>
        <Stack align="center" gap="xs">
          <IconChartBar size={32} />
          <Text size="xl" fw={700}>
            220
          </Text>
          <Text size="sm" c="dimmed">
            Total Workouts
          </Text>
        </Stack>
      </Paper>

      <Paper p="md" radius="md" withBorder>
        <Stack align="center" gap="xs">
          <IconCalendar size={32} />
          <Text size="xl" fw={700}>
            3.5
          </Text>
          <Text size="sm" c="dimmed">
            Weekly Average
          </Text>
        </Stack>
      </Paper>

      <Paper p="md" radius="md" withBorder>
        <Stack align="center" gap="xs">
          <IconTrophy size={32} />
          <Text size="xl" fw={700}>
            16
          </Text>
          <Text size="sm" c="dimmed">
            Week Streak
          </Text>
        </Stack>
      </Paper>

      <Paper p="md" radius="md" withBorder>
        <Stack align="center" gap="xs">
          <IconHeartbeat size={32} />
          <Text size="xl" fw={700}>
            82
          </Text>
          <Text size="sm" c="dimmed">
            Readiness Score
          </Text>
        </Stack>
      </Paper>
    </SimpleGrid>
  );
}
