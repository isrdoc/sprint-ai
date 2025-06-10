"use client";

import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  Button,
  Group,
  Card,
  Badge,
  SimpleGrid,
} from "@mantine/core";
import { IconPlus, IconCalendar, IconClock } from "@tabler/icons-react";
import { TrainingDistribution } from "./ui/training-distribution";
import { TrainingIntensity } from "./ui/training-intensity";

export default function TrainingPlanner() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Group justify="space-between" align="center">
          <div>
            <Title order={1}>Training Planner</Title>
            <Text c="dimmed">View and manage your training sessions</Text>
          </div>
          <Button leftSection={<IconPlus size={16} />}>New Session</Button>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Upcoming Sessions</Title>
              <Card withBorder>
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text fw={500}>Upper Body Strength</Text>
                    <Badge color="blue">June 12</Badge>
                  </Group>
                  <Group gap="xs">
                    <IconClock size={16} />
                    <Text size="sm">65 min • RPE: 7.5</Text>
                  </Group>
                </Stack>
              </Card>
              <Card withBorder>
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text fw={500}>Cardio</Text>
                    <Badge color="blue">June 14</Badge>
                  </Group>
                  <Group gap="xs">
                    <IconClock size={16} />
                    <Text size="sm">45 min • RPE: 6.5</Text>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Training Metrics</Title>
              <SimpleGrid cols={2}>
                <Card withBorder>
                  <Stack align="center" gap="xs">
                    <IconCalendar size={24} />
                    <Text size="xl" fw={700}>
                      4/3
                    </Text>
                    <Text size="sm" c="dimmed">
                      Planned/Completed
                    </Text>
                  </Stack>
                </Card>
                <Card withBorder>
                  <Stack align="center" gap="xs">
                    <IconClock size={24} />
                    <Text size="xl" fw={700}>
                      62
                    </Text>
                    <Text size="sm" c="dimmed">
                      Avg. Duration (min)
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </Paper>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <TrainingDistribution />
          <TrainingIntensity />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
