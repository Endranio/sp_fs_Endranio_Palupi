import { UserProjectDTO } from "@/schema/user-schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Trash2 } from "lucide-react";

import { Badge } from "../ui/badge";

export default function UserProject(userProject:UserProjectDTO){
    return(
        <div>
            <div className="flex justify-between items-center">
<div className="flex gap-3">

           <Avatar className="h-12 w-12">
  
  <AvatarFallback>{userProject.initials}</AvatarFallback>
</Avatar>
<div>
    <p>{userProject.name}</p>
    <p>{userProject.email}</p>
</div>
</div>
<div className="flex gap-4">
    <Badge className=" bg-gray-700 rounded-full font-sm">{userProject.role}</Badge>
<Trash2 size={18} color="#ff0000" />

</div>
            </div>
        </div>
    )
}