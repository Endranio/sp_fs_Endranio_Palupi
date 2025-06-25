"use client";

import { api } from "@/lib/api";
import { TaskDTO, TaskSchema } from "@/schema/task-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface StatusDTO {
  id: string;
  newStatus: string;
}

export default function UseAddTask() {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { id } = useParams();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<TaskDTO>({
    mode: "onChange",
    resolver: zodResolver(TaskSchema),
  });

  const { data: tasks } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await api.get(`/task/${id}`);
      console.log(res.data, "data");
      return res.data;
    },
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<any, Error, TaskDTO>({
    mutationKey: ["add-task"],
    mutationFn: async (data: TaskDTO) => {
      const response = await api.post(`/task/${id}`, data);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["task"],
      });

      toast.success(data.message);
      closeRef.current?.click();
      reset();
    },
  });

  const onSubmit = async (data: TaskDTO) => {
    await mutateAsync(data);
  };

  const { mutateAsync: status } = useMutation<any, Error, StatusDTO>({
    mutationKey: ["status-task"],
    mutationFn: async ({ id, newStatus }) => {
      const res = await api.patch("/task", { data: { id, newStatus } });
      return res.data;
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["task"],
      });
    },
  });

  return {
    handleSubmit,
    tasks,
    onSubmit,
    errors,
    register,
    isPending,
    closeRef,
    control,
    status,
  };
}
