"use client";

import { MemberDTO } from "@/schema/user-schema";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { InviteMember } from "./add-member";
import UseMember from "./hooks/member-hook";
import UserProject from "./user-project-card";

export default function CardMember() {
  const { data } = UseMember();

  if (!data) {
    return <Skeleton className="mt-5 border p-4 rounded-xl h-20" />;
  }

  return (
    <div className="mt-5 border p-4 rounded-xl">
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-2xl">Team Members</p>
          <p>Manage who has access to this project</p>
        </div>
        <InviteMember trigger={<Button>+ Add Members</Button>} />
      </div>
      <div className="grid md:grid-cols-1 gap-5 mt-15">
        {data.map((userProject: MemberDTO) => (
          <div className="border rounded-xl h-full  p-4 " key={userProject.id}>
            <UserProject {...userProject} />
          </div>
        ))}
      </div>
    </div>
  );
}
