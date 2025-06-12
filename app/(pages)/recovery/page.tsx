"use client";

import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  Card,
  Progress,
  Group,
  SimpleGrid,
} from "@mantine/core";
import { IconBed, IconApple, IconHeartbeat } from "@tabler/icons-react";
import { SleepChart } from "./ui/sleep-chart";
import { NutritionChart } from "./ui/nutrition-chart";
import { WellnessChart } from "./ui/wellness-chart";
import NutritionHeatMap from "./ui/nutrition-heat-map";
import PictorialChart from "./ui/composition-pictoral-chat";

export default function Recovery() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1}>Recovery Tracking</Title>
          <Text c="dimmed" size="lg">
            Monitor your recovery metrics
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <IconBed size={24} />
                <Title order={3}>Sleep Quality</Title>
              </Group>
              <Card withBorder>
                <Stack gap="xs">
                  <Text size="xl" fw={700}>
                    7.2
                  </Text>
                  <Text size="sm" c="dimmed">
                    Average Hours/Night
                  </Text>
                  <Progress value={72} size="sm" />
                </Stack>
              </Card>
              <Text size="sm" c="dimmed">
                You slept 8 hours last night—great for recovery!
              </Text>
              <SleepChart />
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <IconApple size={24} />
                <Title order={3}>Nutrition & Hydration</Title>
              </Group>
              <Card withBorder>
                <Stack gap="xs">
                  <Text size="xl" fw={700}>
                    78
                  </Text>
                  <Text size="sm" c="dimmed">
                    Nutrition Score
                  </Text>
                  <Progress value={78} size="sm" color="green" />
                </Stack>
              </Card>
              <Text size="sm" c="dimmed">
                Nutrition score improved 10% this month
              </Text>
              <NutritionChart />
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <IconHeartbeat size={24} />
                <Title order={3}>Wellness Metrics</Title>
              </Group>
              <Card withBorder>
                <Stack gap="xs">
                  <Text size="xl" fw={700}>
                    85
                  </Text>
                  <Text size="sm" c="dimmed">
                    Wellness Score
                  </Text>
                  <Progress value={85} size="sm" color="yellow" />
                </Stack>
              </Card>
              <Text size="sm" c="dimmed">
                Your overall wellness is trending up
              </Text>
              <WellnessChart />
            </Stack>
          </Paper>
        </SimpleGrid>
        <Paper p="md" radius="md" withBorder>
          <Stack gap="md">
            <Title order={3}>Nutrition Macro Intake</Title>
            <NutritionHeatMap />
          </Stack>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Stack gap="md">
            <Title order={3}>Body Composition</Title>
            <PictorialChart />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
