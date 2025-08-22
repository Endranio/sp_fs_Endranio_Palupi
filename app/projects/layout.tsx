"use client";

import "@/app/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/utils/app-sidebar";
import { BreadcrumbNavbar } from "@/components/utils/breadcrumb";
import LoadingWrapper from "@/components/utils/lottie/loading-light";
import { useAuthCheck } from "@/lib/check";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isError, isFetched } = useAuthCheck();

  useEffect(() => {
    if (isError) {
      Cookies.remove("token");
      window.location.replace("/login");
    }
  }, [isError]);

  if (!isFetched || isError) {
    return <LoadingWrapper />;
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="w-full" suppressHydrationWarning>
        <div className="flex items-center ml-3 gap-3">
          <SidebarTrigger />
          <p>|</p>
          <BreadcrumbNavbar />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
