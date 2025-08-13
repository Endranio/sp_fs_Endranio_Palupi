import Benefits from "@/components/landing-page/benefit";
import Feature from "@/components/landing-page/features";
import LandingPage from "@/components/landing-page/landing-page";
import Navbar from "@/components/landing-page/navbar";

export default function Home() {
  return (
    <div className="w-auto">
      <Navbar />
      <LandingPage />
      <Feature />
      <Benefits />
    </div>
  );
}
