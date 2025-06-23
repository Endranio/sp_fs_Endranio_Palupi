"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TaskDTO } from "@/schema/task-schema";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { AlertDelete } from "./alert-dialog";

export function Dropdown(tasks: TaskDTO) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <AlertDelete
          trigger={
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              className="text-red-500"
            >
              Delete
            </DropdownMenuItem>
          }
          id={tasks.id || ""}
          invalidate="task"
          url="task"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
