import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Let’s work together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 text-lg"
        >
          Have a project in mind? Let’s build something amazing together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>

          <a
            href="mailto:your@email.com"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            Send Email
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactCTA;