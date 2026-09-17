import { StructuredData } from "./components/StructuredData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Conditions from "./components/Conditions";
import Specialist from "./components/Specialist";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Coverage from "./components/Coverage";
import FAQ from "./components/FAQ";
import CallbackForm from "./components/CallbackForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <StructuredData />
      <Header />
      <Hero />
      <Services />
      <Conditions />
      <Specialist />
      <WhyUs />
      <Process />
      <Coverage />
      <FAQ />
      <CallbackForm />
      <Footer />
    </main>
  );
}


