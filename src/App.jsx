import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Sections with IDs for scrolling */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
