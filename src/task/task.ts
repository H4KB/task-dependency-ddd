import { z } from "zod";
import { type Dependency, DependencySchema } from "./value-objects/Dependency";
import { createTaskId, TaskIdSchema } from "./value-objects/TaskId";
import { TaskPointSchema } from "./value-objects/TaskPoint";

export const TaskSchema = z.object({
  id: TaskIdSchema,
  title: z.string().min(1, "Title is required"),
  startPoint: TaskPointSchema,
  endPoint: TaskPointSchema,
  dependencies: z.array(DependencySchema).optional(),
});

export type Task = z.infer<typeof TaskSchema>;

export const createTask = ({
  title,
  startPoint,
  endPoint,
}: Omit<Task, "id">): Task => {
  return TaskSchema.parse({
    id: createTaskId(),
    title,
    startPoint,
    endPoint,
  });
};

export const addDependency = (task: Task, dependency: Dependency): Task => {
  return TaskSchema.parse({
    ...task,
    dependencies: [...(task.dependencies || []), dependency],
  });
};
