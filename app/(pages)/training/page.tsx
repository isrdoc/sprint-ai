"use client";

import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  Group,
  Card,
  Badge,
  SimpleGrid,
  Skeleton,
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
} from "@mantine/core";
import { IconPlus, IconClock, IconCalendar } from "@tabler/icons-react";
import { TrainingDistribution } from "./ui/training-distribution";
import { TrainingIntensity } from "./ui/training-intensity";
import { PrimaryButton } from "@/app/components/buttons/primary-button";
import { useGetTrainingSessions } from "./api/use-get-training-sessions";
import { useUpsertTrainingSession } from "./api/use-upsert-training-session";
import { format, isBefore, startOfDay } from "date-fns";
import { useState } from "react";
import { useSprintStore } from "@/app/sprint.store";
import TrainingVolumeColumnChart from "./ui/training-volume-column-chart";
import MuscleGroupTreemap from "./ui/muscle-group-treemap";

const TRAINING_TYPES = [
  "Strength Training",
  "Cardio",
  "Mobility",
  "Skill Work",
  "HIIT",
  "Recovery",
] as const;

type NewSession = {
  type: string;
  duration: number;
  intensity: number;
  date: string;
  updated_at: string;
};

export default function TrainingPlanner() {
  const { data: sessions, isLoading } = useGetTrainingSessions();
  const { mutate: upsertSession, isPending } = useUpsertTrainingSession();
  const { isTrainingModalOpen, openTrainingModal, closeTrainingModal } =
    useSprintStore();
  const [newSession, setNewSession] = useState<NewSession>({
    type: "",
    duration: 60,
    intensity: 7,
    date: new Date().toISOString().split("T")[0],
    updated_at: new Date().toISOString(),
  });

  const upcomingSessions = sessions?.slice(0, 2) || [];
  const totalDuration =
    sessions?.reduce((acc, session) => acc + session.duration, 0) || 0;
  const avgDuration = sessions?.length
    ? Math.round(totalDuration / sessions.length)
    : 0;

  const today = startOfDay(new Date());
  const completedSessions =
    sessions?.filter((session) => isBefore(new Date(session.date), today))
      .length || 0;
  const plannedSessions =
    sessions?.filter((session) => !isBefore(new Date(session.date), today))
      .length || 0;

  const handleCreateSession = () => {
    upsertSession(newSession, {
      onSuccess: () => {
        closeTrainingModal();
        setNewSession({
          type: "",
          duration: 60,
          intensity: 7,
          date: new Date().toISOString().split("T")[0],
          updated_at: new Date().toISOString(),
        });
      },
    });
  };

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Group justify="space-between" align="center">
          <div>
            <Title order={1}>Training Planner</Title>
            <Text c="dimmed">View and manage your training sessions</Text>
          </div>
          <PrimaryButton
            leftSection={<IconPlus size={16} />}
            onClick={openTrainingModal}
          >
            New Session
          </PrimaryButton>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Upcoming Sessions</Title>
              {isLoading ? (
                <>
                  <Skeleton height={80} radius="md" />
                  <Skeleton height={80} radius="md" />
                </>
              ) : upcomingSessions.length > 0 ? (
                upcomingSessions.map((session) => (
                  <Card key={session.id} withBorder>
                    <Stack gap="xs">
                      <Group justify="space-between">
                        <Text fw={500}>{session.type}</Text>
                        <Badge color="grape">
                          {format(new Date(session.date), "MMM d")}
                        </Badge>
                      </Group>
                      <Group gap="xs">
                        <IconClock size={16} />
                        <Text size="sm">
                          {session.duration} min • RPE: {session.intensity}
                        </Text>
                      </Group>
                    </Stack>
                  </Card>
                ))
              ) : (
                <Text c="dimmed" ta="center" py="md">
                  No upcoming sessions
                </Text>
              )}
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
                      {isLoading ? (
                        <Skeleton height={28} width={40} />
                      ) : (
                        `${plannedSessions}/${completedSessions}`
                      )}
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
                      {isLoading ? (
                        <Skeleton height={28} width={40} />
                      ) : (
                        avgDuration
                      )}
                    </Text>
                    <Text size="sm" c="dimmed">
                      Avg. Duration (min)
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Training Distribution</Title>
              <TrainingDistribution />
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Training Intensity</Title>
              <TrainingIntensity />
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Training Volume</Title>
              <TrainingVolumeColumnChart />
            </Stack>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Muscle Group Treemap</Title>
              <MuscleGroupTreemap />
            </Stack>
          </Paper>
        </SimpleGrid>
      </Stack>

      <Modal
        opened={isTrainingModalOpen}
        onClose={closeTrainingModal}
        title="New Training Session"
        size="md"
      >
        <Stack gap="md">
          <Select
            label="Type"
            placeholder="Select training type"
            data={TRAINING_TYPES}
            value={newSession.type}
            onChange={(value) =>
              setNewSession({ ...newSession, type: value || "" })
            }
            required
          />
          <NumberInput
            label="Duration (minutes)"
            placeholder="Enter duration"
            min={1}
            max={300}
            value={newSession.duration}
            onChange={(value) =>
              setNewSession({ ...newSession, duration: Number(value) || 60 })
            }
            required
          />
          <NumberInput
            label="Intensity (RPE 1-10)"
            placeholder="Enter intensity"
            min={1}
            max={10}
            step={0.5}
            value={newSession.intensity}
            onChange={(value) =>
              setNewSession({ ...newSession, intensity: Number(value) || 7 })
            }
            required
          />
          <TextInput
            label="Date"
            type="date"
            value={newSession.date}
            onChange={(e) =>
              setNewSession({ ...newSession, date: e.target.value })
            }
            required
          />
          <Group justify="flex-end" mt="md">
            <Button variant="light" onClick={closeTrainingModal}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateSession}
              loading={isPending}
              disabled={!newSession.type}
            >
              Create Session
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Container>
  );
}
