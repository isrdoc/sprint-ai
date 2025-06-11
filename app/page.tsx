"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Stack,
  Card,
  Badge,
  Group,
} from "@mantine/core";
import {
  IconChartBar,
  IconCalendar,
  IconTrophy,
  IconHeartbeat,
  IconBrain,
  IconAlertTriangle,
  IconChartLine,
} from "@tabler/icons-react";
import { PerformanceChart } from "./(pages)/dashboard/ui/performance-chart";
import { PerformanceRadar } from "./(pages)/dashboard/ui/performance-radar";
import { ReadinessGauge } from "./(pages)/dashboard/ui/readiness-gauge";
import { useGetCurrentUser } from "./(pages)/users/api/use-get-user";

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

        <Stack gap="md">
          <Title order={3}>AI Insights</Title>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Paper p="md" radius="md" withBorder>
              <Stack gap="md">
                <Group>
                  <IconBrain size={24} />
                  <Title order={3}>Readiness Score</Title>
                </Group>
                <Card withBorder>
                  <Group align="center" justify="space-between">
                    <Stack gap="xs" w="50%">
                      <Text size="sm" c="dimmed">
                        Good to train hard today
                      </Text>
                      <Badge color="green" size="lg">
                        Ready
                      </Badge>
                    </Stack>
                    <ReadinessGauge />
                  </Group>
                </Card>
                <Text size="sm" c="dimmed">
                  Based on your sleep, recovery, and recent training load
                </Text>
              </Stack>
            </Paper>

            <Paper p="md" radius="md" withBorder>
              <Stack gap="md">
                <Group>
                  <IconAlertTriangle size={24} />
                  <Title order={3}>Injury Risk</Title>
                </Group>
                <Card withBorder>
                  <Stack gap="xs">
                    <Text size="xl" fw={700}>
                      Low
                    </Text>
                    <Text size="sm" c="dimmed">
                      Based on consistent recovery and moderate training load
                    </Text>
                    <Badge color="green" size="lg">
                      Safe
                    </Badge>
                  </Stack>
                </Card>
                <Text size="sm" c="dimmed">
                  Keep maintaining good form and recovery practices
                </Text>
              </Stack>
            </Paper>

            <Paper p="md" radius="md" withBorder>
              <Stack gap="md">
                <Group>
                  <IconChartLine size={24} />
                  <Title order={3}>Predicted Progress</Title>
                </Group>
                <Card withBorder>
                  <Stack gap="xs">
                    <Text fw={500}>Bench Press</Text>
                    <Text size="xl" fw={700}>
                      +5kg
                    </Text>
                    <Text size="sm" c="dimmed">
                      In 8 weeks if current trend continues
                    </Text>
                  </Stack>
                </Card>
                <Text size="sm" c="dimmed">
                  Based on your training consistency and recovery patterns
                </Text>
              </Stack>
            </Paper>

            <Paper p="md" radius="md" withBorder>
              <Stack gap="md">
                <Title order={3}>Recommendations</Title>
                <Card withBorder>
                  <Stack gap="xs">
                    <Text fw={500}>Training</Text>
                    <Text size="sm">• Increase protein intake</Text>
                    <Text size="sm">• Add rest day between heavy sessions</Text>
                    <Text size="sm">• Focus on form in deadlift</Text>
                  </Stack>
                </Card>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>

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
      </Stack>
    </Container>
  );
}
