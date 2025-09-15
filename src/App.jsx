import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Samples
import HomeSample from "./samples/HomeSample";
import AboutSample from "./samples/AboutSample";
import CreativeAgency from "./samples/CreativeAgency";
import SaaSPage from "./samples/SaaSPage";
import PortfolioGrid from "./samples/PortfolioGrid";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        {/* Sample Pages */}
        <Route path="/portfolio/home-sample" element={<PageWrapper><HomeSample /></PageWrapper>} />
        <Route path="/portfolio/about-sample" element={<PageWrapper><AboutSample /></PageWrapper>} />
        <Route path="/portfolio/creative-agency" element={<PageWrapper><CreativeAgency /></PageWrapper>} />
        <Route path="/portfolio/saas" element={<PageWrapper><SaaSPage /></PageWrapper>} />
        <Route path="/portfolio/portfolio-grid" element={<PageWrapper><PortfolioGrid /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
