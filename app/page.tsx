import Header from "./components/Header";
import Hero from "./components/Hero";
import Specialist from "./components/Specialist";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Specialist />
      <WhyUs />
      <Footer />
    </main>
  );
}


