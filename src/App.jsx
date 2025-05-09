import Header from "./Views/Header";
import HeroSection from "./Views/HeroSection";
import CompaniesLogo from "./Views/CompaniesLogo";
import Service from "./Views/Service";
import Testimonial from "./Views/Testimonial";
import Trials from "./Views/Trials";
import Pricing from "./Views/Pricing";
import FAQ from "./Views/FAQ";
import Footer from "./Views/Footer";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompaniesLogo />
      <Service />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trials />
      <Footer />
    </>
  );
}
