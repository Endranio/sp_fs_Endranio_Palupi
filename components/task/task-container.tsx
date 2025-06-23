"use client";

import { TaskDTO } from "@/schema/task-schema";
import UseAddTask from "./hooks/task-hooks";
import CardTask from "./task-card";

export default function ContainerTask() {
  const { tasks } = UseAddTask();

  if (tasks === undefined) {
    return "Loading ...";
  }

  const Todo = tasks.filter((task: TaskDTO) => task.status === "Todo");
  const onProgress = tasks.filter(
    (task: TaskDTO) => task.status === "OnProgress",
  );
  const Done = tasks.filter((task: TaskDTO) => task.status === "Done");

  return (
    <div className="flex justify-between mt-5 gap-8">
      <div className="dark:bg-gray-900 p-5 rounded-sm flex-1 min-h-[500px]">
        <p className=" font-bold text-xl">To Do</p>
        {Todo.map((tasks: TaskDTO) => (
          <div key={tasks.id}>
            <CardTask {...tasks} />
          </div>
        ))}
      </div>
      <div className="dark:bg-gray-800 p-5 rounded-sm flex-1 min-h-[500px]">
        <p className=" font-bold text-xl">In Progress</p>
        {onProgress.map((tasks: TaskDTO) => (
          <div key={tasks.id}>
            <CardTask {...tasks} />
          </div>
        ))}
      </div>
      <div className="dark:bg-green-900 p-5 rounded-sm flex-1 min-h-[500px]">
        <p className=" font-bold text-xl">Done</p>
        {Done.map((tasks: TaskDTO) => (
          <div key={tasks.id}>
            <CardTask {...tasks} />
          </div>
        ))}
      </div>
    </div>
  );
}
