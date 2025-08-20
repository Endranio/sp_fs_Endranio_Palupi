"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuthStore } from "@/storage/auth";
import { useEffect } from "react";
import { toast } from "sonner";

export function useOAuthLogin() {
  const { data: session } = useSession();
  const { setUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (session?.backendToken && session.user) {
      Cookies.set("token", session.backendToken, { expires: 1 });
      setUser(session.user);
      router.replace("/dashboard");
      toast.success("Login success");
    }
  }, [session, setUser, router]);

  const loginWithGoogle = async () => {
    await signIn("google", { redirect: false });
  };

  return { loginWithGoogle };
}
