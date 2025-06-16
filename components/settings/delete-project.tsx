import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteProject(){
    return(
        <div className="border p-4 mt-5 mb-5 rounded-xl">

        
            <div className="flex flex-col ">

            <p className="font-bold text-2xl text-red-500">Danger Zone</p>
            <p>Irreversible and destructive actions</p>
            </div>
        
            <Button className="bg-red-500 mt-5" > <Trash2 size={24} />
 Delete Project</Button>
        </div>
    )
}