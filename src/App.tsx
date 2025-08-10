import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import Excellence from "./components/Excellence";
import Spotlight from "./components/Spotlight";
import EyewearByMood from "./components/EyewearByMood";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <NewArrivals />
      <Excellence />
      <Spotlight />
      <EyewearByMood />
      <Footer />
    </div>
  );
}

export default App;
