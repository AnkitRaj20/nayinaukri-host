"use client";
import Hero from "../components/Hero";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Testimonial from "@/components/Testimonial";
import Stats from "@/components/Stats";
import Article from "@/components/Article";

// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Steps from "@/components/Steps";
import Cta from "@/components/Cta";

// export const metadata: Metadata = {
//   title: 'NayiNaukri',
//   description: 'An online job platform',
// }
export default function Home() {
  // AOS.init();

  return (
    <>
      <Navbar />
      <Hero />
      <Steps />

      Stats

      <Stats />

      <div>
        <Article />
      </div>
      {/* CTA */}
      <Cta />

      {/* Testimonial starts here*/}
      <Testimonial />
      {/* Testimonial ends here */}
      <Footer />
    </>
  );
}
