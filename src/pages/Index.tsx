import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import InstagramFeedSection from "@/components/InstagramFeedSection";
import ClassScheduleSection from "@/components/ClassScheduleSection";
import LocationsSection from "@/components/LocationsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InstagramFeedSection />
        <WelcomeSection />
        <ClassScheduleSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
