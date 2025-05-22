import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 dark:text-white">
      {/* Centered Back Button */}
      <div className="flex justify-center mb-6">
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg leading-relaxed text-justify">
        Welcome to <strong>bookStore</strong> – your one-stop destination for a
        world of books. Whether you're a casual reader, a student, or a
        bookworm, we have something for everyone. Our mission is to promote the
        joy of reading and make knowledge accessible to all.
      </p>
      <div className="mt-6 space-y-4">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p>
          To inspire a global community of readers by providing easy and
          affordable access to literature across genres and languages.
        </p>
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Customer Satisfaction</li>
          <li>Integrity and Trust</li>
          <li>Innovation in Reading</li>
          <li>Support for Authors and Publishers</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
