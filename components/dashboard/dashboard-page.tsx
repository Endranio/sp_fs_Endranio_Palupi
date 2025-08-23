"use client";

import { ProjectDTO } from "@/schema/project-schema";
import { Button } from "../ui/button";
import LoadingWrapper from "../utils/lottie/loading-light";
import ProjectCard from "../utils/project-card";
import { CreateProject } from "./create-project";
import UseGetProject from "./hooks/dashboard-hook";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const { data, isPending } = UseGetProject();

  if (isPending || !data) {
    return <LoadingWrapper />;
  }

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your projects and track progress easily
          </p>
        </div>

        <CreateProject
          trigger={
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          }
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((project: ProjectDTO) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
