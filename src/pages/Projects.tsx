import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern developer portfolio built with React and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "E-Commerce UI",
    description: "Responsive shopping interface with clean UX design.",
    tech: ["React", "CSS"],
  },
  {
    title: "Landing Page",
    description: "High-converting landing page with animations and modern layout.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard design with responsive layout system.",
    tech: ["React", "TypeScript"],
  },
];

function Projects() {
  return (
    <div className="min-h-screen px-6 py-20">
      
      <div className="max-w-6xl mx-auto space-y-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            My Projects
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            A collection of things I’ve built using modern web technologies.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
            >
              
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-5 flex gap-4 text-sm">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  GitHub
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;