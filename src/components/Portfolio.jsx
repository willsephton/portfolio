import React from "react";

const projects = [
  { name: "Web-Based Prototype for Structured Document Comprehension", link: "https://github.com/willsephton/Masters-Dissertation-Prototype" },
  { name: "PathProtector Android Application", link: "https://github.com/willsephton/PathProtector" },
  { name: "PathProtector API and Dashboard", link: "https://github.com/willsephton/PathProtectorAPI" },
  { name: "Stock Prediction", link: "https://github.com/willsephton/NASDAQPrediction" },
  { name: "AI Restaurant Chatbot", link: "https://github.com/willsephton/humanaiinteraction" },
  { name: "CrimeScanner Android Application", link: "https://github.com/willsephton/CrimeScanner" },
  { name: "99 Trivia Android Application", link: "https://github.com/willsephton/triva-app" },
  { name: "Movie Tracker", link: "https://github.com/willsephton/movie-tracker" },
  { name: "Festival Website", link: "https://github.com/willsephton/festival-website" },
  { name: "Python Sudoku Solver", link: "https://github.com/willsephton/sudoku-solver" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">

      {/* Project Grid */}
      <main className="flex-grow w-full max-w-5xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex items-center justify-center text-center font-medium text-gray-800 hover:bg-gray-100"
          >
            {proj.name}
          </a>
        ))}
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} William Sephton
      </footer>
    </div>
  );
}
