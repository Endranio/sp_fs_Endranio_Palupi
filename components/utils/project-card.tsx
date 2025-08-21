import { ProjectDTO } from "@/schema/project-schema";
import { Button } from "../ui/button";
import Link from "next/link";
import { Settings, FolderOpen } from "lucide-react";

export default function ProjectCard(project: ProjectDTO) {
  return (
    <div className="flex flex-col h-full p-6 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex-1 space-y-2">
        <h2 className="text-xl font-semibold line-clamp-1">{project.name}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description || "No description provided."}
        </p>
      </div>

      <div className="mt-4 flex gap-3">
        <Button asChild className="flex-1">
          <Link
            href={`projects/${project.id}`}
            className="flex items-center gap-2"
          >
            <FolderOpen className="h-4 w-4" />
            View
          </Link>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link
            href={`projects/${project.id}/settings`}
            className="flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  );
}
