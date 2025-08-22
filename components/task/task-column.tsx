"use client";

import { useDroppable } from "@dnd-kit/core";
import CardTask from "./task-card";
import { TaskDTO } from "@/schema/task-schema";

interface Props {
  id: string;
  label: string;
  tasks: TaskDTO[];
}

export default function TaskColumn({ id, label, tasks }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col p-4 rounded-2xl flex-1 min-h-[500px] transition-colors border
        ${
          isOver
            ? "border-green-500 bg-green-50 dark:bg-green-950"
            : "border-gray-200 bg-white dark:bg-gray-900"
        } shadow-sm`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg tracking-wide text-gray-800 dark:text-gray-100">
          {label}
        </h2>
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
          {tasks.length}
        </span>
      </div>

      {/* Tasks list */}
      <div className="flex flex-col gap-3">
        {tasks.length > 0 ? (
          tasks.map((task) => <CardTask key={task.id} {...task} />)
        ) : (
          <div className="flex-1 flex items-center justify-center text-sm text-gray-400 italic border border-dashed rounded-lg p-4">
            No tasks yet
          </div>
        )}
      </div>
    </div>
  );
}
