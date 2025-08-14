"use client";

import { TaskDTO } from "@/schema/task-schema";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import UseAddTask from "./hooks/task-hooks";
import TaskColumn from "./task-column";
import React from "react";
type ColumnId = "Todo" | "OnProgress" | "Done";

const columns: { id: ColumnId; label: string }[] = [
  { id: "Todo", label: "To Do" },
  { id: "OnProgress", label: "In Progress" },
  { id: "Done", label: "Done" },
];

export default function ContainerTask() {
  const { tasks = [], status } = UseAddTask();
  const [localTasks, setLocalTasks] = React.useState<TaskDTO[]>([]);

  React.useEffect(() => {
    if (localTasks.length !== tasks.length) {
      setLocalTasks(tasks);
    }
  }, [tasks, localTasks.length]);

  const handleDragEnd = (event: DragEndEvent) => {
    const taskId = String(event.active.id);
    const overColumn = event.over?.id as ColumnId;
    if (!overColumn) return;

    setLocalTasks((prev) => {
      return prev.map((task) =>
        task.id === taskId ? { ...task, status: overColumn } : task,
      );
    });

    status({ id: taskId, newStatus: overColumn }).catch(() => {
      setLocalTasks(tasks);
    });
  };

  const columnData: Record<ColumnId, TaskDTO[]> = {
    Todo: localTasks.filter((task) => task.status === "Todo"),
    OnProgress: localTasks.filter((task) => task.status === "OnProgress"),
    Done: localTasks.filter((task) => task.status === "Done"),
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
