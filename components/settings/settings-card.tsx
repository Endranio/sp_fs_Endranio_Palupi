import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function SettingsCard(){
    return(
        <div className="border rounded-xl p-4">
        <p className="font-bold text-2xl">Project Detail</p>
        <p>Update your project information</p>
        <div className="flex flex-col gap-3">

        <div className="grid gap-3 mt-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="desc-1">Description</Label>
              <Textarea id="desc-1" name="name" />
            </div>
        </div>
            <Button className="mt-3">Save Changes</Button>
        </div>
    )
}