import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      
      <div className="max-w-3xl">
        
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I’m <span className="text-blue-500">Martin</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 mt-4 text-lg md:text-xl"
        >
          Front-End Developer • React • TypeScript • UI Designer
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 flex gap-4 justify-center"
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-5 justify-center mt-8 text-xl text-gray-300"
        >
          <a href="#"><FaGithub /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;