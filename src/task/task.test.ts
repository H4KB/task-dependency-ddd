import { beforeEach, describe, expect, it, mock } from "bun:test";
import { createTask } from "./task";
import { createTaskPoint } from "./value-objects/TaskPoint";
import { parseTaskId } from "./value-objects/TaskId";

describe("Task", () => {
  beforeEach(() => {
    mock.module("nanoid", () => ({
      nanoid: () => "00000000_00000000-000",
    }));
  });

  it("正常なタスクが作成できること", () => {
    const act = createTask({
      title: "Test Task",
      startPoint: createTaskPoint({ x: 5000, y: 1 }),
      endPoint: createTaskPoint({ x: 6000, y: 5 }),
    });

    expect(act).toEqual({
      id: parseTaskId("00000000_00000000-000"),
      title: "Test Task",
      startPoint: createTaskPoint({ x: 5000, y: 1 }),
      endPoint: createTaskPoint({ x: 6000, y: 5 }),
    });
  });
});
