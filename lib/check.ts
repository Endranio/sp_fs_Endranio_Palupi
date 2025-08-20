// hooks/useAuthCheck.ts
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useAuthCheck() {
  const query = useQuery({
    queryKey: ["authCheck"],
    queryFn: async () => {
      const res = await api.post("/auth/check");

      return res.data;
    },
  });

  return query;
}
