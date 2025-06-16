import CardMember from "./card-members";
import DeleteProject from "./delete-project";
import SettingsCard from "./settings-card";

export default function SettingsPage(){
    return(
        <div>
            <p className="font-bold text-4xl">Project Settings</p>
            <p className="mb-5">Manage your project details and team members</p>
            <SettingsCard/>
            <CardMember/>
            <DeleteProject/>
        </div>
    )
}