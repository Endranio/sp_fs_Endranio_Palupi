import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UseMember from "./hooks/member-hook";
import { MemberDTO, MemberDTO2 } from "@/schema/user-schema";
import { ControllerRenderProps } from "react-hook-form";

interface SelectScrollableProps {
  field: ControllerRenderProps<any, any>;
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
