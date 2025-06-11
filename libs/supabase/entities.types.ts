import { Tables } from "./database.types";

export enum TableName {
  USERS = "users",
  TRAINING_SESSIONS = "training_sessions",
  TRAINING_PLANS = "training_plans",
  TRAINING_PLAN_EXERCISES = "training_plan_exercises",
  PERFORMANCE_METRICS = "performance_metrics",
  RECOVERY_DATA = "recovery_data",
  AI_RECOMMENDATIONS = "ai_recommendations",
  WORKOUTS = "workouts",
}

export type UserDb = Tables<TableName.USERS>;
export type TrainingSessionDb = Tables<TableName.TRAINING_SESSIONS>;
export type TrainingPlanDb = Tables<TableName.TRAINING_PLANS>;
export type TrainingPlanExerciseDb = Tables<TableName.TRAINING_PLAN_EXERCISES>;
export type PerformanceMetricDb = Tables<TableName.PERFORMANCE_METRICS>;
export type RecoveryDataDb = Tables<TableName.RECOVERY_DATA>;
export type AiRecommendationDb = Tables<TableName.AI_RECOMMENDATIONS>;
export type WorkoutDb = Tables<TableName.WORKOUTS>;

export type User = Transform<UserDb> & { avatar: string };
export type TrainingSession = Transform<TrainingSessionDb>;
export type TrainingPlan = Transform<TrainingPlanDb>;
export type TrainingPlanExercise = Transform<TrainingPlanExerciseDb>;
export type PerformanceMetric = Transform<PerformanceMetricDb>;
export type RecoveryData = Transform<RecoveryDataDb>;
export type AiRecommendation = Transform<AiRecommendationDb>;
export type Workout = Transform<WorkoutDb>;

type Transform<T> = NullToUndefined<T>;

type NullToUndefined<T> = T extends null
  ? undefined
  : T extends object
  ? { [K in keyof T]: NullToUndefined<T[K]> }
  : T;
