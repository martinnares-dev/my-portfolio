import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen px-6 py-20">
      
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            About Me
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Get to know more about my journey as a Front-End Developer.
          </p>
        </motion.div>

        {/* PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Who I Am
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I am a passionate Front-End Developer focused on building
            modern, responsive, and interactive web applications using
            React, TypeScript, and Tailwind CSS. I enjoy turning ideas
            into real digital experiences that users love.
          </p>
        </motion.div>

        {/* JOURNEY */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-3">
              My Journey
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>🎓 Started learning programming in college</li>
              <li>💻 Focused on Front-End Development</li>
              <li>⚛️ Specialized in React & TypeScript</li>
              <li>🚀 Building real-world projects</li>
            </ul>
          </motion.div>

          {/* GOALS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-3">
              My Goals
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>🌐 Become a professional developer</li>
              <li>📱 Build scalable web applications</li>
              <li>💡 Improve UI/UX skills</li>
              <li>🚀 Work on real industry projects</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Let’s Work Together
          </a>
        </motion.div>

      </div>
    </div>
  );
}

export default About;