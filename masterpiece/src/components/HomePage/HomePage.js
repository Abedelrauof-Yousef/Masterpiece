import Navbar from "./homepageComponents/Navbar";
import HeroSection from "./homepageComponents/HeroSection";
import AboutBudgetWizeHub from "./homepageComponents/AboutBudgetWizeHub";
import WhyChooseUs from "./homepageComponents/WhyChooseUs";
import Footer from "./homepageComponents/Footer";


function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <AboutBudgetWizeHub />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default HomePage;
