import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  // replace “xvgbnqyw” with your form ID from Formspree
  const [state, handleSubmit] = useForm("xvgbnqyw");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    // Formspree's handleSubmit already takes care of preventing default
    await handleSubmit(e);
    if (state.succeeded) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Thank you!</h2>
          <p className="text-gray-700">Your message has been sent. I’ll get back to you soon 😊</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-lg bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-4">Contact Me</h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-200 mb-1">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-sm text-red-500 mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-200 mb-1">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-sm text-red-500 mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-200 mb-1">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-sm text-red-500 mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full py-3 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:scale-105 transition ${
            state.submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {/* optional: show form-level errors */}
        <ValidationError
          errors={state.errors}
          className="text-sm text-red-500"
        />
      </form>
    </section>
  );
}
