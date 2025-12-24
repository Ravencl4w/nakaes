import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Project from "@/components/Project";
import Environment from "@/components/Environment";
import Contact from "@/components/Contact";
import Referral from "@/components/Referral";
import Footer from "@/components/Footer";
import ReferralPopup from "@/components/ReferralPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ReferralPopup />
      <Navbar />
      <Hero />
      <Features />
      <Project />
      <Environment />
      <Contact />
      <Referral />
      <Footer />
    </div>
  );
};

export default Index;
