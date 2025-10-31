import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatsAppEditor from "./pages/WhatsAppEditor";
import DiscordEditor from "./pages/DiscordEditor";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsapp" element={<WhatsAppEditor />} />
        <Route path="/discord" element={<DiscordEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
