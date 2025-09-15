import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Import layouts
import HomeSample from "../samples/HomeSample";
import HomeSampleAlt from "../samples/HomeSampleAlt"; // new variation
import AboutSample from "../samples/AboutSample";
import AboutSampleAlt from "../samples/AboutSampleAlt"; // new variation
import CreativeAgency from "../samples/CreativeAgency";
import SaaSPage from "../samples/SaaSPage";
import PortfolioGrid from "../samples/PortfolioGrid";

export default function Portfolio() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const samples = [
    {
      id: "home",
      title: "Home Page Layouts",
      desc: "Explore different homepage designs with hero sections & services.",
      layouts: [<HomeSample key="home1" />, <HomeSampleAlt key="home2" />],
    },
    {
      id: "about",
      title: "About Page Layouts",
      desc: "Different styles of About pages that tell a story.",
      layouts: [<AboutSample key="about1" />, <AboutSampleAlt key="about2" />],
    },
    {
      id: "agency",
      title: "Creative Agency",
      desc: "Landing page layouts for modern agencies & studios.",
      layouts: [<CreativeAgency key="agency1" />],
    },
    {
      id: "saas",
      title: "SaaS Product",
      desc: "SaaS-style marketing pages with glassmorphism & animations.",
      layouts: [<SaaSPage key="saas1" />],
    },
    {
      id: "portfolio",
      title: "Portfolio Grid",
      desc: "Layouts for showcasing projects in a visual grid.",
      layouts: [<PortfolioGrid key="portfolio1" />],
    },
  ];

  const handleNext = () => {
    if (!activeDemo) return;
    setActiveIndex((prev) => (prev + 1) % activeDemo.layouts.length);
  };

  const handlePrev = () => {
    if (!activeDemo) return;
    setActiveIndex(
      (prev) =>
        (prev - 1 + activeDemo.layouts.length) % activeDemo.layouts.length
    );
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">My Work</h1>

      {/* Showcase Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {samples.map((s) => (
          <Tilt key={s.id} glareEnable glareMaxOpacity={0.3} scale={1.05}>
            <motion.div
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                {s.title}
              </h3>
              <p className="text-gray-300 mb-4">{s.desc}</p>
              <button
                onClick={() => {
                  setActiveDemo(s);
                  setActiveIndex(0);
                }}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition"
              >
                Show Demo
              </button>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative p-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDemo(null)}
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-3xl font-bold text-center mb-6 text-yellow-300">
                {activeDemo.title}
              </h2>

              {/* Layout Navigation */}
              {activeDemo.layouts.length > 1 && (
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handlePrev}
                    className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30"
                  >
                    ◀ Prev
                  </button>
                  <p className="text-gray-300">
                    {activeIndex + 1} / {activeDemo.layouts.length}
                  </p>
                  <button
                    onClick={handleNext}
                    className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30"
                  >
                    Next ▶
                  </button>
                </div>
              )}

              {/* Active Layout */}
              <div className="bg-black/40 rounded-xl p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    {activeDemo.layouts[activeIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
