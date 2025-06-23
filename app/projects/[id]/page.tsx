"use client";

import UseEditProject from "@/components/settings/hooks/setting-card-hook";
import Task from "@/components/task/task-page";

export default function TaskPage() {
  const { project, isPending } = UseEditProject();

  if (project === undefined) {
    return "Loading...";
  }

  return (
    <div>
      <div className="w-[97%] m-auto mt-5">
        <Task key={project.id} {...project} />
      </div>
    </div>
  );
}
