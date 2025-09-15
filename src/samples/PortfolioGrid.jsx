import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function PortfolioGrid() {
  const projects = [
    { title: "E-Commerce Website", img: "https://via.placeholder.com/400x250" },
    { title: "AI Dashboard", img: "https://via.placeholder.com/400x250" },
    { title: "Travel Booking App", img: "https://via.placeholder.com/400x250" },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white min-h-screen px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Portfolio Showcase 📂
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <Tilt key={i} glareEnable glareMaxOpacity={0.3} scale={1.05}>
            <motion.div
              className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-yellow-300">
                  {p.title}
                </h2>
                <p className="text-gray-200 mt-2">
                  A showcase of a {p.title.toLowerCase()} project with modern
                  design & functionality.
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
