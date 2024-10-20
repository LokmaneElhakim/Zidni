"use client";
import AboutSection from "../components/global/About/AboutSection";
import Contact from "../components/global/Contact";
import Hero from "../components/global/Hero";
import { Testimonials } from "../components/ui/testimonials";
import { quotes } from "../data/quotes";
import Features from "../components/global/Features";
import Chatbot from "../components/global/chatbot/index";
import Footer from "../components/global/Footer/index";
// import Video from "../components/global/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Testimonials
        items={quotes}
        speed="slower"
        pauseOnHover={true}
        type="testimonials"
        direction="right"
      /> */}
      <AboutSection />

      <Testimonials
        className={""}
        direction="left"
        speed="fast"
        type="brand"
        items={2}
      />
      <Contact />
      <Chatbot />
      <Footer />
    </>
  );
}
