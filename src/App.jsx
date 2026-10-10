
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Academics from "./components/Academics";
import CampusLife from "./components/CampusLife";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <CampusLife />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}
