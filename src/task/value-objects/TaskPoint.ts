import { z } from "zod";

export const TaskPointSchema = z
  .object({
    x: z.number().int().min(0), // UNIX 時間
    y: z.number().int().min(1), // 行番号
  })
  .brand<"TaskPoint">();

export type TaskPoint = z.infer<typeof TaskPointSchema>;

export const isTaskPoint = (value: unknown): value is TaskPoint => {
  return TaskPointSchema.safeParse(value).success;
};

export const createTaskPoint = ({
  x,
  y,
}: {
  x: number;
  y: number;
}): TaskPoint => {
  return TaskPointSchema.parse({ x, y });
};
