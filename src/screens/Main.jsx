import Home from "../sections/Home.jsx";
import About from "../sections/About.jsx";
import Services from "../sections/Services.jsx";
import Skills from "../sections/Skills.jsx";
// import Test from "./Test.jsx";
import Portfolio from "../sections/Portfolio.jsx";
import Testimonials from "../sections/Testimonials.jsx";

function Main() {
  return (
    <div className={"main"}>
      <Home />
      <Services />
      <Skills />
      <About />
      <Portfolio />
      <Testimonials />
      {/*<Test />*/}
    </div>
  );
}

export default Main;
