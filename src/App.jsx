import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Susan Nyawira</h1>
            <div className="hidden md:flex gap-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-purple-400 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <p className="text-purple-300 text-sm">Welcome to my portfolio</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Full-Stack Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Building the Future
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Computer Science student. Passionate about creating impactful web
            applications. Specializing in React, Node.js and PostgreSQL.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium border border-gray-700 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            About Me
          </h2>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg mb-6">
              I'm a final-year Computer Science student from Technical
              University of Mombasa, on a mission to build impactful web
              applications. Currently developing my skills in full-stack
              development with a long-term goal of specializing in
              cybersecurity.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-purple-400 font-bold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">
                  React, JavaScript, Tailwind CSS, HTML/CSS
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-purple-400 font-bold mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">
                  Node.js, Express, PostgreSQL, REST APIs
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-purple-400 font-bold mb-2">Tools</h3>
                <p className="text-gray-400 text-sm">
                  Git, GitHub, VS Code, Docker, Linux
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Projects
          </h2>
          <p className="text-gray-400 text-center mb-12">Coming soon!!</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">
                    Project {i} - In Progress
                  </p>
                </div>
                <h3 className="text-white font-bold mb-2">Upcoming Project</h3>
                <p className="text-gray-400 text-sm">
                  This space will showcase my work as I build real applications.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-gray-300 mb-8">
            I'm open to internship opportunities, collaborations and connecting
            with fellow developers!
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/babysue1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium border border-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/susan-nyawira-9a0606388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium border border-gray-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sw.nyawira@gmail.com"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Susan. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
