import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
