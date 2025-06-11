export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_recommendations: {
        Row: {
          category: string
          created_at: string | null
          date: string
          id: number
          priority: number
          recommendation: string
          status: string
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          date: string
          id?: never
          priority: number
          recommendation: string
          status: string
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          date?: string
          id?: never
          priority?: number
          recommendation?: string
          status?: string
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_metrics: {
        Row: {
          created_at: string | null
          date: string
          endurance_score: number
          flexibility_score: number
          id: number
          recovery_score: number
          speed_score: number
          strength_score: number
          technique_score: number
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          date: string
          endurance_score: number
          flexibility_score: number
          id?: never
          recovery_score: number
          speed_score: number
          strength_score: number
          technique_score: number
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          date?: string
          endurance_score?: number
          flexibility_score?: number
          id?: never
          recovery_score?: number
          speed_score?: number
          strength_score?: number
          technique_score?: number
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "performance_metrics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      recovery_data: {
        Row: {
          created_at: string | null
          date: string
          id: number
          notes: string | null
          nutrition_score: number
          readiness_score: number
          sleep_hours: number
          sleep_quality: number
          updated_at: string | null
          user_id: number | null
          wellness_score: number
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: never
          notes?: string | null
          nutrition_score: number
          readiness_score: number
          sleep_hours: number
          sleep_quality: number
          updated_at?: string | null
          user_id?: number | null
          wellness_score: number
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: never
          notes?: string | null
          nutrition_score?: number
          readiness_score?: number
          sleep_hours?: number
          sleep_quality?: number
          updated_at?: string | null
          user_id?: number | null
          wellness_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "recovery_data_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      training_plan_exercises: {
        Row: {
          created_at: string | null
          duration: number | null
          id: number
          name: string
          order_index: number
          reps: number
          sets: number
          training_plan_id: number | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          created_at?: string | null
          duration?: number | null
          id?: never
          name: string
          order_index: number
          reps: number
          sets: number
          training_plan_id?: number | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          created_at?: string | null
          duration?: number | null
          id?: never
          name?: string
          order_index?: number
          reps?: number
          sets?: number
          training_plan_id?: number | null
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "training_plan_exercises_training_plan_id_fkey"
            columns: ["training_plan_id"]
            isOneToOne: false
            referencedRelation: "training_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      training_plans: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string
          id: number
          name: string
          start_date: string
          status: string
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date: string
          id?: never
          name: string
          start_date: string
          status: string
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string
          id?: never
          name?: string
          start_date?: string
          status?: string
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "training_plans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      training_sessions: {
        Row: {
          created_at: string | null
          date: string
          duration: number
          id: number
          intensity: number
          type: string
          updated_at: string | null
          user_id: number
        }
        Insert: {
          created_at?: string | null
          date: string
          duration: number
          id?: number
          intensity: number
          type: string
          updated_at?: string | null
          user_id: number
        }
        Update: {
          created_at?: string | null
          date?: string
          duration?: number
          id?: number
          intensity?: number
          type?: string
          updated_at?: string | null
          user_id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: never
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: never
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      workouts: {
        Row: {
          created_at: string | null
          date: string
          duration: number
          id: number
          intensity: number
          notes: string | null
          type: string
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          date: string
          duration: number
          id?: never
          intensity: number
          notes?: string | null
          type: string
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          date?: string
          duration?: number
          id?: never
          intensity?: number
          notes?: string | null
          type?: string
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "workouts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
