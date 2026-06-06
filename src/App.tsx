import { Navbar } from "./components/ui/Navbar";
import { Hero } from "./components/ui/Hero";
import { About } from "./components/ui/About";
import { Trabajos } from "./components/ui/Trabajos";
import { Services } from "./components/ui/Services";
import  BookingCalendar  from "./components/ui/BookingCalendar";
import { Calculator } from "./components/ui/Calculator";
import { Reviews } from "./components/ui/Reviews";
import { Footer } from "./components/ui/Footer";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Trabajos />
      <Services />
      <BookingCalendar />
      <Calculator />
      <Reviews />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;