import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
