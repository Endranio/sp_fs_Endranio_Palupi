import { api } from "@/lib/api";
import { ProjectMutationResponseDTO } from "@/response/response";
import { ProjectDTO, ProjectSchema } from "@/schema/project-schema";
import { useAuthStore } from "@/storage/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseAddProject() {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { user } = useAuthStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ProjectDTO>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchema),
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<
    ProjectMutationResponseDTO,
    Error,
    ProjectDTO
  >({
    mutationKey: ["add-project"],
    mutationFn: async (data: ProjectDTO) => {
      const response = await api.post(`/project/${user.id}`, data);
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
        queryKey: ["dashboard"],
      });

      toast.success(data.message);
      closeRef.current?.click();
      reset();
    },
  });

  const onSubmit = async (data: ProjectDTO) => {
    await mutateAsync(data);
  };

  return {
    handleSubmit,
    onSubmit,
    errors,
    register,
    isPending,
    closeRef,
  };
}
