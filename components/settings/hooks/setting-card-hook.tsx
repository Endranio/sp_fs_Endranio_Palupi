"use client";

import { api } from "@/lib/api";
import { ProjectDTO, ProjectSchema } from "@/schema/project-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseEditProject() {
  const { id } = useParams();
  const { data: project } = useQuery<ProjectDTO>({
    queryKey: ["project-id"],
    queryFn: async () => {
      const res = await api.get(`/project/id/${id}`);

      return res.data;
    },
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectDTO>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchema),
  });

  useEffect(() => {
    if (project) {
      reset({
        name: project.name,
        description: project.description,
      });
    }
  }, [project, reset]);

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<any, Error, ProjectDTO>({
    mutationKey: ["edit-project"],
    mutationFn: async (data: ProjectDTO) => {
      console.log(project?.id, "ini");
      const res = await api.patch(`/project/${project?.id}`, data);
      return res.data;
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
    },
  });

  const onSubmit = async (data: ProjectDTO) => {
    await mutateAsync(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    onSubmit,
    project,
  };
}
