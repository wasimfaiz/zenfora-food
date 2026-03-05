import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import VenturesSection from "./sections/VenturesSection";
import UncleMakhanaSection from "./sections/UncleMakhanaSection";
import PureMakhanaSection from "./sections/PureMakhanaSection";
import StatsSection from "./sections/StatsSection";
import WhyZenforaSection from "./sections/WhyZenforaSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VenturesSection />
      <UncleMakhanaSection />
      <PureMakhanaSection />
      <StatsSection />
      <WhyZenforaSection />
      <ContactSection />
      <Footer />
    </>
  );
}
