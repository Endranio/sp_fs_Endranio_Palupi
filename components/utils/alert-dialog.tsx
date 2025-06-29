"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { api } from "@/lib/api";
import { DeleteDTO } from "@/schema/auth-schema";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ReactNode } from "react";
import { toast } from "sonner";
import Spinner from "../ui/spinner";
import { useRouter } from "next/navigation";
import { DeleteResponseDTO } from "@/response/response";

type Delete = {
  id: string;
  trigger: ReactNode;
  invalidate: string;
  url: string;
  id2?: string;
  navigate?: string;
};

export function AlertDelete({
  trigger,
  id,
  url,
  invalidate,
  navigate,
  id2,
}: Delete) {
  const router = useRouter();

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<
    DeleteResponseDTO,
    Error,
    DeleteDTO
  >({
    mutationKey: ["delete"],
    mutationFn: async () => {
      const response = await api.delete(`/${url}/${id}/${id2 || ""}`);

      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }

      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      await queryClient.invalidateQueries({
        queryKey: [`${invalidate}`],
      });

      if (navigate) {
        router.push(`/${navigate}`);
      }
    },
  });

  const onSubmit = async (data: DeleteDTO) => {
    await mutateAsync(data);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The selected item will be permanently
            deleted and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-red-500 flex items-center justify-center gap-2"
            onClick={() => onSubmit({ id: id })}
            disabled={isPending}
          >
            {isPending ? <Spinner /> : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
