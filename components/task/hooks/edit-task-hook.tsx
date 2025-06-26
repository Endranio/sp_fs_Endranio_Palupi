import { api } from "@/lib/api";
import { TaskMutationResponseDTO } from "@/response/response";
import { TaskDTO, TaskSchema } from "@/schema/task-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseEditTask({ task }: { task: TaskDTO }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<TaskDTO>({
    mode: "onChange",
    resolver: zodResolver(TaskSchema),
  });

  console.log(task, "tasks");

  useEffect(() => {
    if (task) {
      reset({
        title: task.title,
        description: task.description,
        assignedId: task.assignedId,
      });
    }
  }, [task, reset]);

  const queryClient = useQueryClient();
  console.log(task.id, "initasks");

  const { mutateAsync, isPending } = useMutation<
    TaskMutationResponseDTO,
    Error,
    TaskDTO
  >({
    mutationKey: ["edit-task"],
    mutationFn: async (data: TaskDTO) => {
      const response = await api.patch(`/task/${task.id}`, data);
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
    },
  });

  const onSubmit = async (data: TaskDTO) => {
    await mutateAsync(data);
  };

  return {
    register,
    onSubmit,
    errors,
    handleSubmit,
    isPending,
    closeRef,
    control,
  };
}
