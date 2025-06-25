"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TaskDTO } from "@/schema/task-schema";
import { Ellipsis } from "lucide-react";
import { EditTask } from "../task/edit-task";
import { AlertDelete } from "./alert-dialog";

export function Dropdown(tasks: TaskDTO) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <EditTask
          task={tasks}
          trigger={
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
              }}
            >
              Edit
            </DropdownMenuItem>
          }
        />

        <AlertDelete
          trigger={
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
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
