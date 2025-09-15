import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function SaaSPage() {
  return (
    <section className="bg-gradient-to-tr from-blue-600 via-indigo-700 to-purple-800 text-white min-h-screen px-6 py-16">
      <div className="text-center mb-16">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Supercharge Your Workflow ⚡
        </motion.h1>
        <p className="text-gray-200 max-w-xl mx-auto mb-6">
          A SaaS tool that helps teams collaborate, manage projects, and
          automate tasks with ease.
        </p>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition">
          Try Free
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Collaboration", "Automation", "Analytics"].map((feature, i) => (
          <Tilt key={i} glareEnable glareMaxOpacity={0.3} scale={1.05}>
            <motion.div
              className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">
                {feature}
              </h3>
              <p className="text-gray-200">
                Powerful tools to make {feature.toLowerCase()} easy and
                effective.
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
