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
      className={`p-5 rounded-md flex-1 min-h-[500px] border-2 transition-colors ${
        isOver
          ? "border-green-500 bg-gray-400"
          : "border-gray-300 bg-green-100 dark:bg-gray-900"
      }`}
    >
      <p className="font-bold text-xl mb-4">{label}</p>
      {tasks.map((task) => (
        <CardTask key={task.id} {...task} />
      ))}
    </div>
  );
}
