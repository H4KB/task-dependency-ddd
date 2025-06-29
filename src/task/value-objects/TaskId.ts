import { nanoid } from "nanoid";
import { z } from "zod";

export const TaskIdSchema = z.string().nanoid().brand<"TaskId">();

export type TaskId = z.infer<typeof TaskIdSchema>;

export const isTaskId = (value: unknown): value is TaskId => {
  return TaskIdSchema.safeParse(value).success;
};

export const createTaskId = (): TaskId => {
  return TaskIdSchema.parse(nanoid());
};

export const parseTaskId = (value: unknown): TaskId => {
  const result = TaskIdSchema.safeParse(value);
  if (!result.success) {
    throw new Error(`Invalid TaskId: ${result.error.message}`);
  }
  return result.data;
};
