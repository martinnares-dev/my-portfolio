import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern developer portfolio built with React and Tailwind.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce UI",
    description: "Responsive shopping UI design with clean layout.",
    tech: ["React", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Landing Page Design",
    description: "High-converting landing page with animations.",
    tech: ["HTML", "CSS", "JS"],
    github: "#",
    live: "#",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition"
            >
              
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>

              {/* Tech */}
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

              {/* Links */}
              <div className="flex gap-4 mt-5 text-sm">
                <a
                  href={project.github}
                  className="text-gray-300 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;