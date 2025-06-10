"use client";

import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  Card,
  SimpleGrid,
  Avatar,
  Group,
  Badge,
} from "@mantine/core";
import { IconTrophy, IconTarget, IconNotes } from "@tabler/icons-react";
import { useAuth } from "@/app/(pages)/users/api/use-auth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Paper p="md" radius="md" withBorder>
          <Group gap="lg">
            <Avatar
              size={120}
              radius={120}
              src={user?.avatar}
              alt={user?.name}
            />
            <Stack gap="xs">
              <Title order={1}>{user?.name}</Title>
              <Text size="lg" c="dimmed">
                29 years old • 2+ years training
              </Text>
              <Group gap="xs">
                <Badge size="lg">Strength Training</Badge>
                <Badge size="lg">Consistent</Badge>
              </Group>
            </Stack>
          </Group>
        </Paper>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <IconTarget size={24} />
                <Title order={3}>Goals</Title>
              </Group>
              <Card withBorder>
                <Stack gap="xs">
                  <Text fw={500}>Primary Goals</Text>
                  <Text size="sm">• Build muscle mass</Text>
                  <Text size="sm">• Improve overall strength</Text>
                  <Text size="sm">• Maintain training consistency</Text>
                </Stack>
              </Card>
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <IconTrophy size={24} />
                <Title order={3}>Achievements</Title>
              </Group>
              <Card withBorder>
                <Stack gap="xs">
                  <Text fw={500}>Recent Milestones</Text>
                  <Text size="sm">• Completed 200th training session</Text>
                  <Text size="sm">• New PR in deadlift: 140kg</Text>
                  <Text size="sm">• 16-week training streak</Text>
                </Stack>
              </Card>
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Group>
                <IconNotes size={24} />
                <Title order={3}>Coach Notes</Title>
              </Group>
              <Card withBorder>
                <Stack gap="xs">
                  <Text fw={500}>Training Style</Text>
                  <Text size="sm">• Responds well to higher volume</Text>
                  <Text size="sm">• Focus on progressive overload</Text>
                  <Text size="sm">• Good recovery management</Text>
                </Stack>
              </Card>
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Personal Records</Title>
              <Card withBorder>
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text fw={500}>Bench Press</Text>
                    <Text fw={700}>100kg</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text fw={500}>Deadlift</Text>
                    <Text fw={700}>140kg</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text fw={500}>Squat</Text>
                    <Text fw={700}>120kg</Text>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </Paper>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
