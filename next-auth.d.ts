import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
    };
    backendToken: string;
  }

  interface User extends DefaultUser {
    backendToken?: string;
    backendUser?: {
      id: string;
      email: string;
      username: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    backendToken?: string;
    backendUser?: {
      id: string;
      email: string;
      username: string;
    };
  }
}
