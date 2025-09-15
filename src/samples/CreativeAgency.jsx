import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function CreativeAgency() {
  return (
    <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white min-h-screen px-6 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-6xl font-bold mb-4">We Create Experiences 🎨</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          A design-first agency blending creativity, technology, and strategy
          into digital solutions that leave an impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          { title: "Branding", desc: "Crafting unique identities." },
          { title: "Web Design", desc: "Modern responsive websites." },
          { title: "Animation", desc: "Interactive, motion-driven UIs." },
        ].map((item, i) => (
          <Tilt key={i} glareEnable glareMaxOpacity={0.3} scale={1.05}>
            <motion.div
              className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
