import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import WaveDivider from "@/components/WaveDivider";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Contact Us | Paradise Removals - Get a Free Quote",
  description:
    "Get a free, no-obligation quote for your Gold Coast furniture removal. Contact Paradise Removals today for professional, affordable moving services.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-36 sm:pt-40 pb-16 sm:pb-20"
        style={{
          background:
            "linear-gradient(145deg, #070e4a 0%, #111FA2 35%, #1a2db8 55%, #0a1470 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-title-bar mx-auto" />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to make your move a breeze? Fill out the form below and
            we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <WaveDivider fillColor="#f5f8ff" bgColor="#0a1470" variant="wave1" />
      <QuoteForm />
      <WaveDivider fillColor="#050a30" bgColor="#f5f8ff" variant="wave3" />

      <Footer />
      <BackToTop />
    </main>
  );
}
