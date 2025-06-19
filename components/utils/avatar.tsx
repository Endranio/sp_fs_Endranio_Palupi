import { Avatar, AvatarFallback } from "../ui/avatar";


interface AvatarProps {
    name:string
}
export default function AvatarCard({name}:AvatarProps){

    const initial = name.charAt(0).toUpperCase();

return(

<Avatar className="h-12 w-12">
  
  <AvatarFallback>{initial}</AvatarFallback>
</Avatar>
)
}