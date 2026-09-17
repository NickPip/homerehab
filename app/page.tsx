import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Specialist from "./components/Specialist";
import WhyUs from "./components/WhyUs";
import Coverage from "./components/Coverage";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Specialist />
      <WhyUs />
      <Coverage />
      <FAQ />
      <Footer />
    </main>
  );
}


