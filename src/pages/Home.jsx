import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Fade,
  Zoom,
  MoveIn,
} from "react-scroll-motion";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <ScrollContainer>
      {/* Hero Section */}
      <ScrollPage page={0}>
        <Animator animation={Fade(0, 1)}>
          <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
            {/* Floating shapes */}
            <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl bottom-0 right-0 animate-bounce"></div>

            <motion.h1
              className="text-7xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              Smaksh Gupta
            </motion.h1>

            <motion.h2
              className="text-3xl mb-8 text-gray-200 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "AI/ML Enthusiast",
                  "Creative Freelancer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h2>

            <motion.div
              className="flex gap-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <a
                href="/portfolio"
                className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition"
              >
                Hire Me
              </a>
            </motion.div>
          </section>
        </Animator>
      </ScrollPage>

      {/* About Teaser */}
      <ScrollPage page={1}>
        <Animator animation={Zoom(0.5, 1)}>
          <section className="h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6">
            <h2 className="text-5xl font-bold mb-6">Who Am I?</h2>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              I’m <span className="text-yellow-300 font-semibold">Smaksh</span>, a
              full-stack developer and AI enthusiast. I love transforming ideas
              into{" "}
              <span className="font-semibold">
                functional, elegant web apps
              </span>{" "}
              that create impact.
            </p>
          </section>
        </Animator>
      </ScrollPage>

      {/* What I Do */}
      <ScrollPage page={2}>
        <Animator animation={MoveIn(0, 200)}>
          <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 text-white text-center px-6">
            <h2 className="text-5xl font-bold mb-12">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
              {[
                {
                  title: "Web Development",
                  desc: "Responsive, scalable apps using React, Node.js & Tailwind.",
                },
                {
                  title: "AI / ML",
                  desc: "Smart models for automation, predictions & insights.",
                },
                {
                  title: "UI / UX Design",
                  desc: "Clean, modern, and intuitive design with focus on UX.",
                },
              ].map((service, i) => (
                <Tilt key={i} glareEnable glareMaxOpacity={0.3} scale={1.05}>
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl"
                    whileHover={{ scale: 1.05, y: -10 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-200">{service.desc}</p>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </section>
        </Animator>
      </ScrollPage>

      {/* Final CTA */}
      <ScrollPage page={3}>
        <Animator animation={Fade(0, 1)}>
          <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-80"></div>

            {/* Floating shapes */}
            <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-10 -left-20 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-0 right-0 animate-bounce"></div>

            <motion.div
              className="relative z-10 max-w-3xl px-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
                Let’s Build Something Amazing 🚀
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                Whether it’s a full-stack app, an AI solution, or a stunning design —
                I can help bring your vision to life.
              </p>
              <a
                href="/contact"
                className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition"
              >
                Get In Touch
              </a>
            </motion.div>
          </section>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}
