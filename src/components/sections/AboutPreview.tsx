import { motion } from "framer-motion";

function AboutPreview() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About Me
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            I am a passionate Front-End Developer focused on building
            modern, responsive, and user-friendly web applications using
            React, TypeScript, and Tailwind CSS.
          </p>

          <p className="text-gray-400 mt-4">
            I enjoy turning ideas into real digital products with clean UI
            and smooth user experience.
          </p>

          <a
            href="/about"
            className="inline-block mt-6 text-blue-400 hover:text-blue-300"
          >
            Read more →
          </a>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4">
            Quick Info
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>💻 Front-End Developer</li>
            <li>⚛️ React & TypeScript</li>
            <li>🎨 UI/UX Focused</li>
            <li>📍 Philippines</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutPreview;