import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import profilePic from "../../assets/profile.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* BACKGROUND GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          
          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I’m{" "}
            <span className="text-blue-500 drop-shadow-lg">
              Martin
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 mt-4 text-lg md:text-xl"
          >
            Front-End Developer • React • TypeScript • UI Designer
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex gap-4 justify-center md:justify-start"
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
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

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-5 justify-center md:justify-start mt-8 text-xl text-gray-300"
          >
            <a href="#" className="hover:text-white transition hover:scale-110">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-white transition hover:scale-110">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white transition hover:scale-110">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* glowing ring */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-500/20 blur-2xl animate-pulse" />

          <img
            src={profilePic}
            alt="Profile"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;