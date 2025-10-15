import "./App.css";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(saved === "true");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-gray-50 dark:via-purple-50 dark:to-gray-50 overflow-x-hidden transition-colors duration-300"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Navigation - Enhanced */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/95 dark:bg-white/95 backdrop-blur-lg z-50 border-b border-purple-500/30 dark:border-purple-400/30 shadow-xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white dark:text-gray-900 hover:text-purple-400 dark:hover:text-purple-600 transition-colors cursor-pointer">
              Susan Nyawira
            </h1>

            <div className="flex items-center gap-6">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <div className="hidden md:flex gap-8">
                <a
                  href="#about"
                  className="text-gray-300 dark:text-gray-600 hover:text-purple-400 dark:hover:text-purple-600 transition-all duration-300 hover:scale-105"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 dark:text-gray-600 hover:text-purple-400 dark:hover:text-purple-600 transition-all duration-300 hover:scale-105"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 dark:text-gray-600 hover:text-purple-400 dark:hover:text-purple-600 transition-all duration-300 hover:scale-105"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 m-0 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 dark:bg-purple-400/20 rounded-full border border-purple-500/30 dark:border-purple-400/30">
            <p className="text-purple-300 dark:text-purple-600 text-sm">
              Welcome to my portfolio
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-gray-900 mb-6">
            Full-Stack Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Building the Future
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            Computer Science student. Passionate about creating impactful web
            applications. Specializing in React, Node.js and PostgreSQL.
          </p>

          <div className="flex gap-4 justify-center flex-wrap px-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900 rounded-lg font-medium border border-gray-700 dark:border-gray-300 transition text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900 dark:bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white dark:text-gray-900 mb-8 text-center">
            About Me
          </h2>

          <div className="bg-gray-800 dark:bg-white rounded-2xl p-8 border border-gray-700 dark:border-gray-200">
            <p className="text-gray-300 dark:text-gray-600 text-lg mb-6">
              I'm a final-year Computer Science student from Technical
              University of Mombasa, on a mission to build impactful web
              applications. Currently developing my skills in full-stack
              development with a long-term goal of specializing in
              cybersecurity.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900 dark:bg-gray-50 p-6 rounded-xl border border-purple-500/20 dark:border-purple-400/20">
                <h3 className="text-purple-400 dark:text-purple-600 font-bold mb-2">
                  Frontend
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  React, JavaScript, Tailwind CSS, HTML/CSS
                </p>
              </div>

              <div className="bg-gray-900 dark:bg-gray-50 p-6 rounded-xl border border-purple-500/20 dark:border-purple-400/20">
                <h3 className="text-purple-400 dark:text-purple-600 font-bold mb-2">
                  Backend
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  Node.js, Express, PostgreSQL, REST APIs
                </p>
              </div>

              <div className="bg-gray-900 dark:bg-gray-50 p-6 rounded-xl border border-purple-500/20 dark:border-purple-400/20">
                <h3 className="text-purple-400 dark:text-purple-600 font-bold mb-2">
                  Tools
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  Git, GitHub, VS Code, Docker, Linux
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-gray-900 mb-4 text-center">
            Projects
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-center mb-8 sm:mb-12 text-sm sm:text-base">
            Coming soon!!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-800 dark:bg-white rounded-xl p-4 sm:p-6 border border-gray-700 dark:border-gray-200 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition shadow-lg"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-400/20 dark:to-pink-400/20 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    Project {i} - In Progress
                  </p>
                </div>
                <h3 className="text-white dark:text-gray-900 font-bold mb-2 text-sm sm:text-base">
                  Upcoming Project
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm">
                  This space will showcase my work.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-gray-900 mb-4 sm:mb-6">
            Let's Connect
          </h2>

          <p className="text-gray-300 dark:text-gray-600 mb-8 sm:mb-12 lg:mb-16 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            I'm open to internship opportunities, collaborations and connecting
            with fellow developers!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12 justify-center">
            {/* GitHub Icon */}
            <a
              href="https://github.com/babysue1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 sm:gap-4 transition-all duration-300 hover:transform hover:scale-105"
              aria-label="GitHub"
            >
              <div className="p-3 sm:p-4 bg-gray-800 dark:bg-gray-200 hover:bg-purple-600 dark:hover:bg-purple-500 rounded-full border border-gray-700 dark:border-gray-300 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <Github className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform text-white dark:text-gray-900" />
              </div>
              <span className="text-gray-300 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-900 text-sm sm:text-base font-medium transition-colors">
                GitHub
              </span>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/susan-nyawira-9a0606388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 sm:gap-4 transition-all duration-300 hover:transform hover:scale-105"
              aria-label="LinkedIn"
            >
              <div className="p-3 sm:p-4 bg-gray-800 dark:bg-gray-200 hover:bg-purple-600 dark:hover:bg-purple-500 rounded-full border border-gray-700 dark:border-gray-300 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform text-white dark:text-gray-900" />
              </div>
              <span className="text-gray-300 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-900 text-sm sm:text-base font-medium transition-colors">
                LinkedIn
              </span>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:sw.nyawira@gmail.com"
              className="group flex flex-col items-center gap-3 sm:gap-4 transition-all duration-300 hover:transform hover:scale-105"
              aria-label="Email"
            >
              <div className="p-3 sm:p-4 bg-gray-800 dark:bg-gray-200 hover:bg-purple-600 dark:hover:bg-purple-500 rounded-full border border-gray-700 dark:border-gray-300 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform text-white dark:text-gray-900" />
              </div>
              <span className="text-gray-300 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-900 text-sm sm:text-base font-medium transition-colors">
                Email Me
              </span>
            </a>
          </div>

          {/* Alternative: Text buttons for mobile if preferred */}
          <div className="mt-12 sm:hidden">
            <div className="flex flex-col gap-4 items-center">
              <a
                href="https://github.com/babysue1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs px-6 py-4 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900 rounded-lg font-medium border border-gray-700 dark:border-gray-300 transition text-center"
              >
                Visit My GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/susan-nyawira-9a0606388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs px-6 py-4 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900 rounded-lg font-medium border border-gray-700 dark:border-gray-300 transition text-center"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:sw.nyawira@gmail.com"
                className="w-full max-w-xs px-6 py-4 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition text-center"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Additional call-to-action */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm sm:text-base mb-6">
              Ready to work together? Let's build something amazing!
            </p>
            <a
              href="mailto:sw.nyawira@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-gray-800 dark:border-gray-200 bg-gray-900 dark:bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm sm:text-base mb-2">
            © 2025 Susan Nyawira.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            Thank you for visiting my portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
