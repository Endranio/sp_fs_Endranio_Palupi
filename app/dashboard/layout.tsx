"use client";

import "@/app/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/utils/app-sidebar";
import { BreadcrumbNavbar } from "@/components/utils/breadcrumb";
import LoadingWrapper from "@/components/utils/lottie/loading-light";
import { useAuthCheck } from "@/lib/check";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isError, isFetched } = useAuthCheck();

  const router = useRouter();

  useEffect(() => {
    if (!isFetched) return;

    if (isFetched && isError) {
      Cookies.remove("token");
      router.replace("/login");
    }
  }, [isFetched, isError, router]);

  if (!isFetched || isError) {
    return <LoadingWrapper />;
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />

      <main className="flex-1 p-4" suppressHydrationWarning>
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
