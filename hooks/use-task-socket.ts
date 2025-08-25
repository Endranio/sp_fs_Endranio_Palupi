"use client";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getSocket } from "@/lib/socket";
import { TaskDTO } from "@/schema/task-schema";

export function useTaskSocket() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = getSocket();

    socket.on("message", (updatedTask: TaskDTO) => {
      queryClient.setQueryData<TaskDTO[]>(["task"], (old) => {
        if (!old) return [updatedTask];
        return old.map((t) => (t.id === updatedTask.id ? updatedTask : t));
      });
    });

    return () => {
      socket.off("task:statusUpdated");
    };
  }, [queryClient]);
}
