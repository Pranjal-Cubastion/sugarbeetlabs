import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ValuePropSection from "@/components/ValuePropSection";
import BlogSection from "@/components/BlogSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-page animated">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ValuePropSection />
      <BlogSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
