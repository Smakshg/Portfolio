import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function AboutSample() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6 py-16">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h1>

      {/* Story Section */}
      <motion.p
        className="text-gray-200 mb-12 text-center max-w-3xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm <span className="font-semibold text-yellow-300">Smaksh Gupta</span>, 
        a developer who loves creating <span className="font-semibold">functional, 
        elegant, and modern web applications</span>.  
        I combine my backend expertise with a flair for design to deliver 
        products that not only work flawlessly but also look stunning.  
        My philosophy is simple: <span className="italic">clean code, great UX, 
        and happy clients</span>.
      </motion.p>

      {/* Skills + Values */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Tilt glareEnable glareMaxOpacity={0.3} scale={1.05}>
          <motion.div
            className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-4">⚡ Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Python",
                "AI/ML",
                "Tailwind CSS",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </Tilt>

        <Tilt glareEnable glareMaxOpacity={0.3} scale={1.05}>
          <motion.div
            className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-4">🌍 What Drives Me</h2>
            <p className="text-gray-200 leading-relaxed">
              I thrive on solving complex problems, collaborating with creative
              teams, and delivering solutions that make an impact.  
              Whether it’s <span className="font-semibold">building scalable 
              APIs</span>, designing a <span className="font-semibold">beautiful UI</span>, 
              or experimenting with <span className="font-semibold">AI/ML models</span>,  
              I’m always learning, adapting, and growing.
            </p>
          </motion.div>
        </Tilt>
      </div>

      {/* Fun / Personality */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">✨ Beyond Coding</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          When I’m not coding, you’ll find me exploring new tech trends,
          brainstorming startup ideas, or contributing to communities.  
          I’ve also led <span className="font-semibold text-yellow-300">
          social media & cultural events</span>, which sharpened my teamwork 
          and leadership skills.
        </p>
      </motion.div>
    </section>
  );
}
