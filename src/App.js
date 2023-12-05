import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Fleet } from "./Fleet";
import { About } from "./About";
import { EmailForm } from "./Contact";

import ReactGA from "react-ga";
import RouteChangeTracker from "./RouteChangeTracker";
const TRACKING_ID = "G-6D51EZEENY"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <RouteChangeTracker />
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<EmailForm />} />
      </Routes>
    </div>
  );
}

export default App;
