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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
function AppContent() {
  const location = useLocation();

  // Popup sirf Home page par show hoga
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen scroll-smooth">
       <Router>
      <div className="min-h-screen scroll-smooth">
        <Navbar />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* PRIVACY POLICY */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          {/* TERMS OF SERVICE */}
          <Route
            path="/terms-of-service"
            element={<TermsOfService />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>

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