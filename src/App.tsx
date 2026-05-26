import { Navbar } from "./components/ui/Navbar";
import { Hero } from "./components/ui/Hero";
import { About } from "./components/ui/About";
import { Services } from "./components/ui/Services";
import BookingCalendar from "./components/ui/BookingCalendar";
import { MapReviews } from "./components/ui/MapReviews";
import { Footer } from "./components/ui/Footer";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BookingCalendar />
      <MapReviews />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;