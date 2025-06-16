import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/utils/app-sidebar";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
