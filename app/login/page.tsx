import LoginPage from "@/components/login/login-page";
export default function Login() {
  if (typeof window !== "undefined") {
    alert("Client side render");
  }
  return (
    <div>
      <LoginPage />
    </div>
  );
}
