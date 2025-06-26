// import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MemberDTO } from "@/schema/user-schema";
import { ControllerRenderProps } from "react-hook-form";
import UseMember from "../settings/hooks/member-hook";
import { TaskDTO } from "@/schema/task-schema";

interface SelectScrollableProps {
  field: ControllerRenderProps<TaskDTO, "assignedId">;
}

export function SelectScrollable({ field }: SelectScrollableProps) {
  const { data } = UseMember();

  if (data === undefined) {
    return "Loading ...";
  }

  return (
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select user" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((data: MemberDTO) => (
            <div key={data.id}>
              <SelectItem value={data.userId}>{data.user.username}</SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
