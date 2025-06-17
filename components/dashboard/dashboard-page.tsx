import { ProjectDTO } from "@/schema/project-schema";
import { Button } from "../ui/button";
import ProjectCard from "../utils/project-card";
import { CreateProject } from "../utils/create-project";


const data = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete overhaul of the company website with modern design",
    
  },
  {
    id: "2",
    name: "Mobile App",
    description: "Native mobile application for iOS and Android",
    
  },
  {
    id: "3",
    name: "Marketing Campaign",
    description: "Q1 marketing campaign for product launch",
    
  },
]
export default function DashboardPage(){

  // const {data,isPending} = UseGetProject()

    return(
            <div>
        <div className="w-full flex justify-between ">
            <div>

            <p className="text-4xl font-bold">Dashboard</p>
            <p className="">Manage your projects and track progress</p>
            </div>
            <CreateProject
            trigger={<Button> + New Project</Button>}
            />
        </div>
       <div className="grid md:grid-cols-3 gap-20 mt-15">
        {data.map((project: ProjectDTO) => (
          <div className="border rounded-xl h-full  p-4 " key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
            </div>
    )
}