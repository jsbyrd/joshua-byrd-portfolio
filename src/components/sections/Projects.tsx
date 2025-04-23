import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Speedrun History Visualizer
              </h3>
              <p className="text-gray-400 mb-4">
                Full stack web application with data visualizations, user
                authentication with JWTs, and a notification system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "D3.js",
                  "ASP.NET Core Web API",
                  "SQL Server",
                  "Azure",
                  "AWS",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 items-center">
                <a
                  href="https://github.com/jsbyrd/speedrun-visualizer-backend"
                  className="rounded transition-all duration-200 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="github_dark.svg" alt="GitHub" className="w-8 h-8" />
                </a>
                <a
                  href="https://speedviz.joshua-byrd.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Chess Desktop App</h3>
              <p className="text-gray-400 mb-4">
                A WPF desktop app with a chess game with varying opponents,
                including random moves, freestyle, and a simple chess AI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["WPF", "C#", ".NET"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6">
                <a
                  href="https://github.com/jsbyrd/chess-desktop-app"
                  className="rounded transition-all duration-200 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="github_dark.svg" alt="GitHub" className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Chess Notation Trainer</h3>
              <p className="text-gray-400 mb-4">
                Full stack web application with minigames and stat tracking to
                help users with their notation recognition. Also features
                multiplayer chess capabilities with WebSockets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "PostgreSQL",
                  "AWS",
                  "WebSockets",
                  "Redis",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 items-center">
                <a
                  href="https://github.com/jsbyrd/chess-learning-app"
                  className="rounded transition-all duration-200 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="github_dark.svg" alt="GitHub" className="w-8 h-8" />
                </a>
                <a
                  href="https://chess.joshua-byrd.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Army Reserve Mercury</h3>
              <p className="text-gray-400 mb-4">
                A platform streamlining communication and administrative tasks
                for soldiers and leaders within the U.S. Army Reserve. The repo
                is privated, so check out my resume to see what I contributed!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Native", "JavaScript", "Jenkins", "Jest"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://reservemercury.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Login Page Only →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
