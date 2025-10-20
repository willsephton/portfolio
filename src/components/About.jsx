import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="max-w-3xl text-center mt-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Hi, I’m <span className="font-semibold">William Sephton</span>, a
          passionate software developer and MSc Computer Science (with AI) graduate.
          I love working on projects involving AI, NLP, and full-stack
          development — from Android apps to machine learning models.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          This portfolio showcases a range of my projects across different
          technologies — demonstrating my ability to design, build, and deploy
          intelligent systems.
        </p>
      </div>
    </div>
  );
}
