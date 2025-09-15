import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    window.location.href = `mailto:your-email@example.com?subject=Contact from ${name}&body=${message}%0D%0AFrom: ${email}`;
    setStatus("✅ Your email app should now open.");
    form.reset();
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 text-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-lg shadow-xl p-8 rounded-2xl max-w-lg mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border-0 rounded px-4 py-3 text-gray-900 focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border-0 rounded px-4 py-3 text-gray-900 focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full border-0 rounded px-4 py-3 text-gray-900 focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
        >
          Send Message
        </button>
        {status && <p className="text-green-400 mt-2">{status}</p>}
      </motion.form>
    </section>
  );
}
