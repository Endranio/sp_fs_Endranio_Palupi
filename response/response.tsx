export interface ProjectResponseDTO {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectMutationResponseDTO {
  message: string;
  data: ProjectResponseDTO;
}

type MemberRole = {
  role: "Member" | "Owner";
};

export interface MemberResponseDTO {
  id: string;
  userId: string;
  projectId: string;
  role: MemberRole;
}

export interface MemberMutationResponseDTO {
  data: string;
  message: string;
}

type TaskStatus = "Todo" | "OnProgress" | "Done";

export interface TaskResponseDTO {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  projectId: string;
  assignedId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskMutationResponseDTO {
  message: string;
  data: TaskResponseDTO;
}

export interface DeleteResponseDTO {
  message: string;
}
