import "./App.css";
import CaseStudies from "./components/CaseStudies";
import Contack from "./components/Contack";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WorkingPeocces from "./components/WorkingPeocces";

function App() {
  return (
    <div className="font-primary overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingPeocces />
      <Team />
      <Testimonials />
      <Contack />
      <Footer />
    </div>
  );
}

export default App;
