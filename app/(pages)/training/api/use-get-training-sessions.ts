import { supabase } from "@/libs/supabase/supabase";
import { useQuery } from "@tanstack/react-query";
import { useGetCurrentUser } from "../../users/api/use-get-user";
import { TrainingSession, TableName } from "@/libs/supabase/entities.types";

export function useGetTrainingSessions() {
  const { data: currentUser } = useGetCurrentUser();
  return useQuery<TrainingSession[]>({
    enabled: !!currentUser,
    queryKey: ["useGetTrainingSessions"],
    queryFn: async () => {
      const { data } = await supabase
        .from(TableName.TRAINING_SESSIONS)
        .select("*")
        .eq("user_id", currentUser?.id)
        .order("date", { ascending: false });
      return data ? data : [];
    },
  });
}
