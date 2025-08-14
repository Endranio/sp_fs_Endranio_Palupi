import { api } from "@/lib/api";
import { useAuthStore } from "@/storage/auth";
import { useQuery } from "@tanstack/react-query";

export default function UseGetProject() {
  const { user } = useAuthStore();

  const { data, isPending } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await api.get(`/project/${user.id}`);

      return res.data;
    },
  });

  return {
    data,
    isPending,
  };
}
