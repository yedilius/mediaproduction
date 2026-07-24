import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Experience } from "../components/Experience/Experience";
import { Equipment } from "../components/Equipment/Equipment";
import { Stories } from "../components/Stories/Stories";
import { Niches } from "../components/Niches/Niches";
import { Services } from "../components/Services/Services";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Equipment />
        <Stories />
        <Services />
        <Projects />
        <Niches />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
