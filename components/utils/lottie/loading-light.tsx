"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";
const LoadingDark = () => {
  return (
    <div className="w-40 h-screen m-auto">
      <DotLottieReact src="/lottie/Loading-darkmode.json" loop autoplay />;
    </div>
  );
};

const LoadingLight = () => {
  return (
    <div className="w-40 h-screen m-auto">
      <DotLottieReact src="/lottie/Loading-lightmode.json" loop autoplay />
    </div>
  );
};

export default function LoadingWrapper() {
  const { theme } = useTheme();

  return theme === "dark" ? <LoadingDark /> : <LoadingLight />;
}
