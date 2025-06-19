import { ProjectDTO } from "@/schema/project-schema";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProjectCard(projects: ProjectDTO) {
  return (
    <div className="h-full flex flex-col  gap-3">
      <p className="font-bold text-2xl">{projects.name}</p>
      <p>{projects.description}</p>

      <div className="flex gap-3">
        <Button>
          {" "}
          <Link href={`projects/${projects.id}`}>Veiw Project</Link>
        </Button>
        <Button variant={"outline"}>
          <Link href={`projects/${projects.id}/settings`}>Setting</Link>
        </Button>
      </div>
    </div>
  );
}
