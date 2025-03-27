import { motion } from "framer-motion";
import { 
  Layers, 
  Zap, 
  Shield, 
  Users, 
  BarChart, 
  Settings 
} from "lucide-react";

const features = [
  {
    icon: <Layers className="text-white h-6 w-6" />,
    title: "Seamless Integration",
    description: "Connects with your existing tools and workflows for a unified experience without disruption."
  },
  {
    icon: <Zap className="text-white h-6 w-6" />,
    title: "Lightning Fast Performance",
    description: "Engineered for speed with real-time updates and responsive design that feels instant."
  },
  {
    icon: <Shield className="text-white h-6 w-6" />,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with end-to-end encryption and compliance with international standards."
  },
  {
    icon: <Users className="text-white h-6 w-6" />,
    title: "Team Collaboration",
    description: "Real-time collaboration tools that bring your team together no matter where they are located."
  },
  {
    icon: <BarChart className="text-white h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with comprehensive reporting and visualizations of your data."
  },
  {
    icon: <Settings className="text-white h-6 w-6" />,
    title: "Customizable Workflow",
    description: "Adapt the platform to your unique processes with flexible, customizable workflows."
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why You'll Love Our Product</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Designed with your needs in mind, our platform offers powerful features to supercharge your productivity.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="h-12 w-12 rounded-md bg-primary text-white flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
