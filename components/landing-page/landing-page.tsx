"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LandingPage() {
  const router = useRouter();
  const register = () => {
    router.push("/register");
  };
  const login = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-[50%] flex flex-col gap-4 text-center">
        <p className="font-bold text-6xl">Project Management Made Simple</p>
        <p className="text-xl">
          Streamline your workflow, collaborate with your team, and deliver
          projects on time with our intuitive project management platform
          designed for modern teams.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="w-[15%]" onClick={register}>
            Get Started
          </Button>
          <Button
            className="w-[15%] dark:bg-gray-950 text-gray-100"
            onClick={login}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
