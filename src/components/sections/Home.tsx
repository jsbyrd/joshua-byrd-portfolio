import { RevealOnScroll } from "../RevealOnScroll";
import resumePdf from "../../assets/Joshua_Byrd_Resume.pdf"; // Assuming your PDF is in the assets folder
import { IoDownloadOutline } from "react-icons/io5"; // Import the download icon

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Joshua Byrd
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who specializes in web development using
            .NET and JavaScript. I'm driven by contributing to meaningful
            projects and continuously honing my problem-solving skills.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href={resumePdf}
              download="Joshua_Byrd_Resume.pdf"
              className="flex gap-2 items-center bg-blue-500 text-white p-2 md:px-4 md:py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Download Resume
              <span className="hidden md:block">
                <IoDownloadOutline size={24} />
              </span>
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 p-2 md:px-4 md:py-3 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <a
              href="https://www.github.com/jsbyrd"
              className="rounded transition-all duration-200 hover:-translate-y-0.5 shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="github_dark.svg" alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshuabyrddev"
              className="rounded transition-all duration-200 hover:-translate-y-0.5 shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="linkedin.svg"
                alt="LinkedinIcon"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
