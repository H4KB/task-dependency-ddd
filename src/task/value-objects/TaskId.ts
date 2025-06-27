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
