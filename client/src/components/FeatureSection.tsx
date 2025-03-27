import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Database, 
  GitBranch, 
  Smartphone, 
  Layers 
} from "lucide-react";

const technologies = [
  {
    icon: <Code className="text-white h-6 w-6" />,
    title: "Frontend Development",
    description: "Expert in React, Vue, and Angular with a focus on building responsive, accessible, and performant user interfaces.",
    items: ["React", "TypeScript", "Next.js", "TailwindCSS"]
  },
  {
    icon: <Database className="text-white h-6 w-6" />,
    title: "Backend Development",
    description: "Building scalable APIs and server-side applications using modern frameworks and architectural patterns.",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    icon: <Palette className="text-white h-6 w-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful interfaces that provide exceptional user experiences across all devices.",
    items: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
  },
  {
    icon: <GitBranch className="text-white h-6 w-6" />,
    title: "DevOps & Deployment",
    description: "Setting up CI/CD pipelines and cloud infrastructure to ensure smooth deployment and operation.",
    items: ["Docker", "AWS", "GitHub Actions", "Netlify"]
  },
  {
    icon: <Smartphone className="text-white h-6 w-6" />,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications with native-like performance and seamless user experiences.",
    items: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    icon: <Layers className="text-white h-6 w-6" />,
    title: "API Integration",
    description: "Connecting applications with third-party services and APIs to extend functionality and capabilities.",
    items: ["REST", "GraphQL", "OAuth", "Webhooks"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function FeatureSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technologies & Expertise</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            I work with a variety of modern technologies to create robust and scalable applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="h-12 w-12 rounded-md bg-primary text-white flex items-center justify-center mb-5">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
