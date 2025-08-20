"use client";

import { ProjectDTO } from "@/schema/project-schema";
import { Button } from "../ui/button";
import LoadingWrapper from "../utils/lottie/loading-light";
import ProjectCard from "../utils/project-card";
import { CreateProject } from "./create-project";
import UseGetProject from "./hooks/dashboard-hook";

export default function DashboardPage() {
  const { data, isPending } = UseGetProject();

  if (isPending) {
    return <LoadingWrapper />;
  }

  return (
    <div>
      <div className="w-full flex justify-between ">
        <div>
          <p className="text-4xl font-bold">Dashboard</p>
          <p className="">Manage your projects and track progress</p>
        </div>

        <CreateProject trigger={<Button>+ New Project</Button>} />
      </div>
      <div className="grid md:grid-cols-3 gap-20 mt-5">
        {data?.map((project: ProjectDTO) => (
          <div
            className="border rounded-xl h-full shadow-xl p-4 "
            key={project.id}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
