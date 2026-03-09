import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteWizard from "@/components/QuoteWizard";
import Services from "@/components/Services";
import WaveDivider from "@/components/WaveDivider";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TruckAnimation from "@/components/TruckAnimation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuoteWizard />

      <TruckAnimation />

      <Services />

      <WaveDivider fillColor="#111FA2" bgColor="white" variant="wave2" />
      <WhyChooseUs />

      <TruckAnimation reverse bgColor="bg-sand-light" />
      <ServiceAreas />

      <WaveDivider fillColor="white" bgColor="#f5f8ff" variant="wave3" />
      <About />

      <WaveDivider fillColor="#070e4a" bgColor="white" variant="wave2" />
      <Testimonials />

      <WaveDivider fillColor="#f5f8ff" bgColor="#070e4a" variant="wave1" />
      <QuoteForm />

      <WaveDivider fillColor="#050a30" bgColor="#f5f8ff" variant="wave3" />
      <Footer />

      <BackToTop />
    </main>
  );
}
