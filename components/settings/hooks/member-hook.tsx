"use client";

import { api } from "@/lib/api";
import { MemberMutationResponseDTO } from "@/response/response";
import { addMemberDTO, addMemberSchema } from "@/schema/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseMember() {
  const { id } = useParams();
  const closeRef = useRef<HTMLButtonElement>(null);
  const { data, isLoading } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const res = await api.get(`/member/exist/${id}`);
      console.log(res.data, "ini");
      return res.data;
    },
  });

  const { data: available } = useQuery({
    queryKey: ["available-member"],
    queryFn: async () => {
      const res = await api.get(`/member/${id}`);

      return res.data;
    },
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<addMemberDTO>({
    mode: "onChange",
    resolver: zodResolver(addMemberSchema),
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<
    MemberMutationResponseDTO,
    Error,
    addMemberDTO
  >({
    mutationKey: ["add-member"],
    mutationFn: async (data: addMemberDTO) => {
      const response = await api.post(`/member/${id}`, data);
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
        queryKey: ["member"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["available-member"],
      });

      toast.success(data.message);
      closeRef.current?.click();
      reset();
    },
  });

  const onSubmit = async (data: addMemberDTO) => {
    await mutateAsync(data);
  };

  return {
    data,
    isLoading,
    available,
    control,
    handleSubmit,
    onSubmit,
    errors,
    closeRef,
    isPending,
  };
}
