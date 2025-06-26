import { House, LogOut, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ProjectDTO } from "@/schema/project-schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UseGetProject from "../dashboard/hooks/dashboard-hook";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import Cookies from "js-cookie";

export function AppSidebar() {
  const router = useRouter();
  const logout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  const { data } = UseGetProject();

  if (data === undefined) return;

  return (
    <Sidebar>
      <SidebarContent className="flex flex-col justify-between">
        <div>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <ModeToggle />
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <House />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarGroupLabel>Project </SidebarGroupLabel>
                {data.map((project: ProjectDTO) => (
                  <SidebarMenuItem key={project.id}>
                    <SidebarMenuButton asChild>
                      <div className="flex justify-between items-center">
                        <Link href={`projects/${project.id}`}>
                          <span>{project.name}</span>
                        </Link>

                        <Link
                          className="flex flex-center"
                          href={`projects/${project.id}/settings`}
                        >
                          <Settings className="w-4 h4" />
                        </Link>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
        <div className="flex m-5 items-center">
          <Button onClick={logout} variant={"ghost"}>
            Logout <LogOut />
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
