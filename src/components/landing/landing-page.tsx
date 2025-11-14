"use client";
import Intro from "./intro";
import { Challenge } from "./challenge";
import Solution from "./solution";
import Services from "./services";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <>
      <section className="bg-foreground">
        <Intro />
        <Challenge />
        <Solution />
        <Services />
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
