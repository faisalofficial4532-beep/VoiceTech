import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AutoPopup from "./components/AutoPopup";

function AppContent() {
  const location = useLocation();

  // Popup sirf Home page par show hoga
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />

      {/* AUTO POPUP — ONLY HOME PAGE */}
      {isHomePage && <AutoPopup />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;