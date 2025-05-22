import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className="max-w-4xl mx-auto px-4 py-10 dark:text-white mt-16">

      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

      <p className="text-center mb-8 text-lg">
        Have a question, feedback, or just want to say hello? We'd love to hear
        from you!
      </p>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md dark:bg-slate-900 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 px-4 py-2 rounded-md dark:bg-slate-900 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full border border-gray-300 px-4 py-2 rounded-md dark:bg-slate-900 dark:border-gray-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;
