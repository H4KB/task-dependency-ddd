import { z } from "zod";
import { TaskIdSchema, type TaskId } from "./TaskId";

export const DependencyTypeSchema = z.enum(["SS", "SF", "FS", "FF"]);

export type DependencyType = z.infer<typeof DependencyTypeSchema>;
export const DependencyTypeValues = DependencyTypeSchema.Values;

export const DependencySchema = z.object({
  id: TaskIdSchema,
  type: DependencyTypeSchema,
});

export type Dependency = z.infer<typeof DependencySchema>;

export const createDependency = ({
  id,
  type,
}: {
  id: TaskId;
  type: DependencyType;
}): Dependency => {
  return DependencySchema.parse({ id, type });
};
