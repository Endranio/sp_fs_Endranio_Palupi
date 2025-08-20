import { ProjectDTO } from "@/schema/project-schema";
import { Button } from "../ui/button";
import { CreateTask } from "./create-task";
import ContainerTask from "./task-container";
import { Skeleton } from "../ui/skeleton";
import UseAddTask from "./hooks/task-hooks";

export default function Task(project: ProjectDTO) {
  const { isLoading } = UseAddTask();

  if (isLoading) {
    return <Skeleton className="w-[97%] m-auto mt-5" />;
  }

  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-4xl">{project.name}</p>
            <p>{project.description}</p>
          </div>
          <CreateTask trigger={<Button>+ Add Task</Button>} />
        </div>
        <div className="rounded-xl">
          <ContainerTask />
        </div>
      </div>
    </div>
  );
}
