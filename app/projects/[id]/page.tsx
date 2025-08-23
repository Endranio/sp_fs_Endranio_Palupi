"use client";

import UseEditProject from "@/components/settings/hooks/setting-card-hook";
import Task from "@/components/task/task-page";
import LoadingWrapper from "@/components/utils/lottie/loading-light";

export default function TaskPage() {
  const { project } = UseEditProject();

  if (!project) {
    return <LoadingWrapper />;
  }

  return (
    <div>
      <div className="w-[97%] m-auto mt-5">
        <Task key={project.id} {...project} />
      </div>
    </div>
  );
}
