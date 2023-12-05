import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Fleet } from "./Fleet";
import { About } from "./About";
import { EmailForm } from "./Contact";

function App() {
  return (
    <div>
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
