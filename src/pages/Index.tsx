
import Hero from "@/components/Hero";
import LeagueInfo from "@/components/LeagueInfo";
import Schedule from "@/components/Schedule";
import FreeAgent from "@/components/FreeAgent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LeagueInfo />
      <Schedule />
      <FreeAgent />
      <Footer />
    </div>
  );
};

export default Index;
