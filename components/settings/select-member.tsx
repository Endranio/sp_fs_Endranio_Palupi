import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { addMemberDTO, MemberDTO2 } from "@/schema/user-schema";
import { ControllerRenderProps } from "react-hook-form";
import UseMember from "./hooks/member-hook";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "../ui/input";

interface SelectScrollableProps {
  field: ControllerRenderProps<addMemberDTO, "userId">;
}

export function SelectScrollable({ field }: SelectScrollableProps) {
  const [searchText, setSearchText] = useState<string>("");

  const [searchTextDebounce] = useDebounce(searchText, 500);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const { available, refetch } = UseMember(searchTextDebounce);

  useEffect(() => {
    refetch();
  }, [searchTextDebounce, refetch]);

  return (
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select user" />
      </SelectTrigger>
      <SelectContent>
        <div className="p-2">
          <Input
            placeholder="Search user..."
            value={searchText}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <SelectGroup>
          {(available ?? []).map((data: MemberDTO2) => (
            <div key={data.id}>
              <SelectItem value={data.id}>{data.username}</SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
