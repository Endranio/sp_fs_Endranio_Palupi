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
import { signOut } from "next-auth/react";

export function AppSidebar() {
  const router = useRouter();
  const logout = () => {
    signOut({ callbackUrl: "/" });
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
                  <SidebarMenuItem
                    key={project.id}
                    className="flex justify-between items-center"
                  >
                    <SidebarMenuButton asChild>
                      <Link href={`/projects/${project.id}`}>
                        {project.name}
                      </Link>
                    </SidebarMenuButton>

                    <Link
                      href={`/projects/${project.id}/settings`}
                      className="ml-2 hover:text-muted-foreground"
                    >
                      <Settings className="w-4 h-4" />
                    </Link>
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
