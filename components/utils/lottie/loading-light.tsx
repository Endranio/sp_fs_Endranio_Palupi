import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";
const LoadingDark = () => {
  return <DotLottieReact src="/lottie/Loading-darkmode.json" loop autoplay />;
};

const LoadingLight = () => {
  return <DotLottieReact src="/lottie/Loading-lightmode.json" loop autoplay />;
};

export default function LoadingWrapper() {
  const { theme } = useTheme();

  return theme === "dark" ? <LoadingDark /> : <LoadingLight />;
}
