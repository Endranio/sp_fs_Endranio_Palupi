"use client";

import { TaskDTO } from "@/schema/task-schema";
import AvatarCard from "../utils/avatar";
import { Dropdown } from "../utils/dropdown";

export default function CardTask(task: TaskDTO) {
  return (
    <div className="flex justify-between rounded-lg  dark:bg-gray-950 p-5 mt-5 ">
      <div className="flex flex-col gap-2 ">
        <p>{task.title}</p>
        <p>{task.description}</p>
        <AvatarCard
          size="h-8 w-8"
          fullname={task.assignee?.username}
          name={task.assignee?.username || ""}
        />
      </div>
      <div>
        <Dropdown {...task} />
      </div>
    </div>
  );
}
