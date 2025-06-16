import { UserProjectDTO } from "@/schema/user-schema";
import { Button } from "../ui/button";
import UserProject from "./user-project-card";
const data = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "owner", initials: "JD" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "member", initials: "JS" },
  { id: "3", name: "Mike Johnson", email: "mike@example.com", role: "member", initials: "MJ" },
  { id: "4", name: "Sarah Wilson", email: "sarah@example.com", role: "member", initials: "SW" },
]
export default function CardMember(){
    return(
        <div className="mt-5 border p-4 rounded-xl">
            <div className="flex justify-between">
                <div>
            <p className="font-bold text-2xl">Team Members</p>
            <p>Manage who has access to this project</p>
                </div>
                <Button>+ Add Members</Button>
            </div>
             <div className="grid md:grid-cols-1 gap-5 mt-15">
                    {data.map((userProject: UserProjectDTO) => (
                      <div className="border rounded-xl h-full  p-4 " key={userProject.id}>
                        <UserProject {...userProject} />
                      </div>
                    ))}
                  </div>

        </div>
    )
}