import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
];

function SkillsSection() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills List */}
        <div className="mt-10 space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillsSection;