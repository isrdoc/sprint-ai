import { supabase } from "@/libs/supabase/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetCurrentUser } from "../../users/api/use-get-user";
import { TrainingSession, TableName } from "@/libs/supabase/entities.types";

export function useUpsertTrainingSession() {
  const { data: currentUser } = useGetCurrentUser();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      session: Omit<TrainingSession, "user_id" | "created_at" | "id">
    ) => {
      const { error } = await supabase
        .from(TableName.TRAINING_SESSIONS)
        .upsert({
          ...session,
          user_id: currentUser?.id,
        });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetTrainingSessions"] });
    },
  });
}
