import FeaturesSection from "./components/ui/landing/FeaturesSection";
import Footer from "./components/ui/landing/Footer";
import HeroSection from "./components/ui/landing/HeroSection";
import TestimonialsSection from "./components/ui/landing/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  );
}
