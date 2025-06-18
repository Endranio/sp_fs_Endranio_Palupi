

import { api } from "@/lib/api";
import { useAuthStore } from "@/storage/auth";
import { useQuery } from "@tanstack/react-query";

export default function UseGetProject(){

    const {user} =useAuthStore()
    console.log(user.id,"user")
     const { data,isPending } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await api.get(`/project/${user.id}`);
      console.log(res.data,"data")
      return res.data;
    },
  });

  return{
    data,
    isPending
  }

  

}