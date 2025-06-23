import { Avatar, AvatarFallback } from "../ui/avatar";

interface AvatarProps {
  name: string;
  fullname?: string;
  size: string;
}
export default function AvatarCard({ size, name, fullname }: AvatarProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="flex gap-3 items-center">
      <Avatar className={size}>
        <AvatarFallback>{initial}</AvatarFallback>
      </Avatar>
      <p>{fullname}</p>
    </div>
  );
}
