import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Founders from "@/components/Founders/Founders";
import HumanExperience from "@/components/HumanExperience/HumanExperience";
import Events from "@/components/Events/Events";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <HumanExperience />
        <Events />
        <Gallery />
        <Founders />
      </main>
      <Footer />
    </>
  );
}
