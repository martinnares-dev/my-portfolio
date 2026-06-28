import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive, and fast websites using React and TypeScript.",
  },
  {
    title: "UI / UX Design",
    description:
      "Creating clean and user-friendly interfaces with strong visual hierarchy.",
  },
  {
    title: "Website Optimization",
    description:
      "Improving performance, speed, and overall user experience.",
  },
];

function ServicesPreview() {
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
          Services
        </motion.h2>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;