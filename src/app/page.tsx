import {
  Faq,
  Footer,
  Hero,
  Intro,
  Partners,
  Services,
  Testimonial,
  Tools,
} from "@/components";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Tools />
      <Partners />
      <Services />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}
