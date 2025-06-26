"use client";

import { TaskDTO } from "@/schema/task-schema";
import AvatarCard from "../utils/avatar";
import { Dropdown } from "../utils/dropdown";
import { useDraggable } from "@dnd-kit/core";

export default function CardTask(task: TaskDTO) {
  const id = task.id ?? "undefined";

  const { setNodeRef, listeners, transform } = useDraggable({ id });
  if (!id) return null;

  return (
    <div
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      ref={setNodeRef}
      className="flex justify-between items-start rounded-lg bg-white dark:bg-gray-950 p-5 mt-5 shadow-xl cursor-grab active:cursor-grabbing "
    >
      <div {...listeners}>
        <div className="flex flex-col gap-2">
          <p>{task.title}</p>
          <p className="text-sm text-gray-500">{task.description}</p>
          <AvatarCard
            size="h-8 w-8"
            fullname={task.assignee?.username}
            name={task.assignee?.username || ""}
          />
        </div>
      </div>
      <Dropdown {...task} />
    </div>
  );
}
