import { motion } from "framer-motion";
import { Code, Paintbrush, Shield, PieChart, Cloud, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "Development",
    skills: [
      { name: "Frontend Architecture", value: 95 },
      { name: "Backend Systems", value: 90 },
      { name: "API Design", value: 85 }
    ]
  },
  {
    icon: <Paintbrush className="h-5 w-5" />,
    title: "Design",
    skills: [
      { name: "UI/UX Design", value: 98 },
      { name: "Interaction Design", value: 90 },
      { name: "Design Systems", value: 92 }
    ]
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security",
    skills: [
      { name: "Data Protection", value: 96 },
      { name: "Authentication Systems", value: 94 },
      { name: "Compliance Standards", value: 90 }
    ]
  },
  {
    icon: <PieChart className="h-5 w-5" />,
    title: "Analytics",
    skills: [
      { name: "Data Visualization", value: 92 },
      { name: "Reporting Engines", value: 88 },
      { name: "Business Intelligence", value: 85 }
    ]
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Infrastructure",
    skills: [
      { name: "Cloud Architecture", value: 94 },
      { name: "Scalability", value: 90 },
      { name: "DevOps", value: 87 }
    ]
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Customer Success",
    skills: [
      { name: "Onboarding", value: 97 },
      { name: "Support Systems", value: 95 },
      { name: "Training Resources", value: 93 }
    ]
  }
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            My technical toolkit and areas of expertise that I bring to every project.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                y: -5
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-4 flex items-center"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.span 
                  className="text-blue-500 flex items-center mr-2"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.span>
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-700">{skill.value}%</span>
                    </div>
                    <motion.div
                      className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden"
                      initial={{ opacity: 0.7 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
