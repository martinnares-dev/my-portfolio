import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "I build modern, responsive, and fast websites using React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "UI / UX Design",
    description:
      "I design clean and user-friendly interfaces focused on great user experience.",
  },
  {
    title: "Website Optimization",
    description:
      "I improve performance, speed, SEO, and overall user experience of websites.",
  },
  {
    title: "Landing Page Creation",
    description:
      "High-converting landing pages designed for businesses and personal brands.",
  },
];

function Services() {
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
            My Services
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            What I can offer as a Front-End Developer.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition"
            >
              <h2 className="text-xl font-semibold">
                {service.title}
              </h2>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-10"
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

export default Services;