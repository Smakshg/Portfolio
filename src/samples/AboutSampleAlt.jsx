import { motion } from "framer-motion";

export default function AboutSampleAlt() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-8 text-center">
        <div className="max-w-5xl">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-8"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We are innovators, engineers, and designers committed to creating{" "}
            <span className="text-yellow-400 font-bold">impactful digital solutions</span>{" "}
            for a global audience.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">
        {[
          ["Our Mission", "To deliver scalable and intelligent solutions that empower businesses worldwide."],
          ["Our Vision", "To be pioneers in blending AI, design, and technology for transformative growth."],
        ].map(([title, desc], i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-yellow-400 mb-6">{title}</h3>
            <p className="text-lg text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Team */}
      <section className="py-32 text-center max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {["Smaksh Gupta", "Jane Doe", "John Smith"].map((name, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://via.placeholder.com/200"
                alt={name}
                className="w-40 h-40 mx-auto rounded-full border-4 border-yellow-400 shadow mb-6"
              />
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-gray-300">Full Stack Developer</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-80"></div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Join Us on the Journey 🚀
          </h2>
          <p className="text-xl text-gray-100 mb-10">
            We’re always looking for partners and clients who want to build the
            future together.
          </p>
          <a
            href="#"
            className="bg-white text-purple-700 px-12 py-5 rounded-lg font-bold shadow-2xl hover:scale-105 transition text-lg"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}
    