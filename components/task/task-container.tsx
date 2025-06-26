"use client";

import { TaskDTO } from "@/schema/task-schema";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import UseAddTask from "./hooks/task-hooks";
import TaskColumn from "./task-column";
type ColumnId = "Todo" | "OnProgress" | "Done";

const columns: { id: ColumnId; label: string }[] = [
  { id: "Todo", label: "To Do" },
  { id: "OnProgress", label: "In Progress" },
  { id: "Done", label: "Done" },
];

export default function ContainerTask() {
  const { tasks = [], status } = UseAddTask();

  const columnData: Record<ColumnId, TaskDTO[]> = {
    Todo: tasks.filter((task: TaskDTO) => task.status === "Todo"),
    OnProgress: tasks.filter((task: TaskDTO) => task.status === "OnProgress"),
    Done: tasks.filter((task: TaskDTO) => task.status === "Done"),
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const taskId = String(event.active.id);
    const overColumn = event.over?.id as ColumnId;
    if (!overColumn) return;

    const fromColumn = Object.keys(columnData).find((column) =>
      columnData[column as ColumnId].some((task) => task.id === taskId),
    );

    if (fromColumn === overColumn) return;

    await status({ id: taskId, newStatus: overColumn });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex justify-between mt-5 mb-5 gap-8">
        {columns.map(({ id, label }) => (
          <TaskColumn key={id} id={id} label={label} tasks={columnData[id]} />
        ))}
      </div>
    </DndContext>
  );
}
