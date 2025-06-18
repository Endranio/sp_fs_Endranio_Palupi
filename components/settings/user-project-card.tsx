import { MemberDTO } from "@/schema/user-schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Trash2 } from "lucide-react";

import { Badge } from "../ui/badge";
import { AlertDelete } from "../utils/alert-dialog";
import UseEditProject from "./hooks/setting-card-hook";

export default function UserProject(userProject:MemberDTO){
    const initial = userProject.user.username.charAt(0).toUpperCase();
    const {project} = UseEditProject()
    return(
        <div>
            <div className="flex justify-between items-center">
<div className="flex gap-3">

           <Avatar className="h-12 w-12">
  
  <AvatarFallback>{initial}</AvatarFallback>
</Avatar>
<div>
    <p>{userProject.user.username}</p>
    <p>{userProject.user.email}</p>
</div>
</div>
<div className="flex gap-4">
    <Badge className=" bg-gray-700 rounded-full font-sm">{userProject.role}</Badge>

    { userProject.role === "Member" && <AlertDelete
    id={userProject.userId}
    id2={project?.id}
    invalidate="member"
    trigger={<Trash2 size={18} color="#ff0000" />}
    url="member"
    />
}

</div>
            </div>
        </div>
    )
}