import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-x-hidden">
          {/* Background Text */}
          <Parallax speed={-20}>
            <h1 className="absolute top-20 left-6 text-[6rem] md:text-[10rem] font-extrabold text-white/5 select-none">
              ABOUT
            </h1>
          </Parallax>

          {/* Foreground Content */}
          <Parallax speed={10}>
            <div className="max-w-4xl text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                About Me
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I’m{" "}
                <span className="text-yellow-300 font-semibold">
                  Smaksh Gupta
                </span>
                , a developer who merges{" "}
                <span className="font-semibold">scalable backend systems</span>{" "}
                with{" "}
                <span className="font-semibold">creative UI/UX design</span>.
                I focus on performance, usability, and crafting impactful
                digital experiences.
              </p>
            </div>
          </Parallax>
        </section>

        {/* Skills Section */}
        <section className="py-32 flex justify-center px-6">
          <Parallax speed={20}>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
              {[
                ["Development", ["React", "Node.js", "Express", "MongoDB"]],
                ["AI & Design", ["Python", "TensorFlow", "Tailwind CSS", "Django"]],
              ].map(([title, skills], i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl hover:scale-105 transition"
                >
                  <h3 className="text-3xl font-semibold text-yellow-300 mb-6">
                    {title}
                  </h3>
                  <p className="text-lg text-gray-300">{skills.join(" • ")}</p>
                </div>
              ))}
            </div>
          </Parallax>
        </section>

        {/* Mission / Vision */}
        <section className="py-32 px-6 bg-black/30 backdrop-blur-lg">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
            <Parallax speed={15}>
              <div className="bg-white/10 p-10 rounded-3xl shadow-xl">
                <h3 className="text-4xl font-bold text-yellow-400 mb-6">
                  Mission
                </h3>
                <p className="text-lg text-gray-300">
                  To build scalable, user-friendly, and intelligent digital
                  products that empower businesses and inspire people.
                </p>
              </div>
            </Parallax>
            <Parallax speed={-15}>
              <div className="bg-white/10 p-10 rounded-3xl shadow-xl">
                <h3 className="text-4xl font-bold text-yellow-400 mb-6">
                  Vision
                </h3>
                <p className="text-lg text-gray-300">
                  To be a global innovator in combining AI, design, and
                  technology into impactful experiences.
                </p>
              </div>
            </Parallax>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-80"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let’s Build Together 🚀
            </h2>
            <p className="text-xl text-gray-100 mb-10">
              I’m always open to new opportunities, collaborations, and
              freelance projects. Let’s create something amazing!
            </p>
            <a
              href="/contact"
              className="bg-white text-purple-700 px-12 py-5 rounded-lg font-bold shadow-2xl hover:scale-105 transition text-lg"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
}
