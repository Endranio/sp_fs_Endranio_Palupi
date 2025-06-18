"use client"

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { AlertDelete } from "../utils/alert-dialog";
import UseEditProject from "./hooks/setting-card-hook";

export default function DeleteProject(){
    const {project} = UseEditProject()
    
    return(
        <div className="border p-4 mt-5 mb-5 rounded-xl">

        
            <div className="flex flex-col ">

            <p className="font-bold text-2xl text-red-500">Danger Zone</p>
            <p>Irreversible and destructive actions</p>
            </div>
        
        <AlertDelete 
        trigger={<Button className="bg-red-500 mt-5" > <Trash2 size={24} />
              Delete Project
              </Button>}
              url="project"
              id={project?.id || ""}
              invalidate="dashboard"
              navigate="dashboard"
        />
            
        </div>
    )
}