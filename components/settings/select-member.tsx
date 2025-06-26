// import * as React from "react";

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

interface SelectScrollableProps {
  field: ControllerRenderProps<addMemberDTO, "userId">;
}

export function SelectScrollable({ field }: SelectScrollableProps) {
  const { available } = UseMember();

  return (
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select user" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {available.map((data: MemberDTO2) => (
            <div key={data.id}>
              <SelectItem value={data.id}>{data.username}</SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
