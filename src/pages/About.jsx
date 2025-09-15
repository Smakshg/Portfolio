import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <ParallaxProvider>
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col justify-center items-center px-6">
        {/* Background parallax layers */}
        <Parallax speed={-20}>
          <h1 className="absolute top-20 left-10 text-[8rem] font-bold text-white/5">
            ABOUT
          </h1>
        </Parallax>

        <Parallax speed={10}>
          <div className="max-w-4xl text-center">
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m <span className="text-yellow-300 font-semibold">Smaksh Gupta</span>, 
              a developer who merges <span className="font-semibold">scalable backend systems</span> 
              with <span className="font-semibold">creative UI/UX design</span>.  
              I focus on performance, usability, and crafting impactful digital experiences.
            </p>
          </div>
        </Parallax>

        {/* Skills showcase */}
        <Parallax speed={20}>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mt-16">
            {[
              ["React", "Node.js", "Express", "MongoDB"],
              ["Python", "TensorFlow", "Tailwind CSS", "Django"],
            ].map((group, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
                  {i === 0 ? "Development" : "AI & Design"}
                </h3>
                <p className="text-gray-300">{group.join(" • ")}</p>
              </div>
            ))}
          </div>
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
