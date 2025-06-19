import { api } from "@/lib/api";
import { RegisterDTO, RegisterSchema } from "@/schema/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDTO>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: RegisterDTO) => {
      const res = await api.post("/auth/register", data);
      return res.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      router.push("/login");
    },
  });

  const onSubmit = handleSubmit(async (data: RegisterDTO) => {
    await mutateAsync(data);
  });
  return {
    register,
    errors,
    onSubmit,
    isPending,
  };
}
