import "./App.css";
import Navbar from "@components/navbar/Navbar";
import Header from "@components/header/Header";
import About from "@components/about/About";
import Services from "@components/services/Services";
import Projects from "@components/projects/Projects";
import Testimonials from "@components/testimonials/Testimonials";
import Contact from "@components/contact/Contact";
function App() {
  return (
    <>
      <div className="head_wrapper">
        <Navbar />
        <Header />
      </div>
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
