"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/utils/app-sidebar";
import "@/app/globals.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useEffect } from "react";
import Spinner from "@/components/ui/spinner";
import Cookies from 'js-cookie';




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


   const { isFetched, isError } = useQuery({
    queryKey: ["check"],
    queryFn: async () => {
      Cookies.get("token");
      const res = await api.post("/auth/check");
      return res.data;
    },
  });

  useEffect(() => {
    if (isError) {
      Cookies.remove("token");
      window.location.replace("/login");
    }
  }, [isError]);

  if (!isFetched || isError) {
    return <Spinner/>;
  }


  return (
    
    <SidebarProvider defaultOpen={false}>
   <AppSidebar/>
      <main className="w-full" suppressHydrationWarning>
        <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>   
  );
}
