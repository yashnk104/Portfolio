import { motion } from "framer-motion";
import { CheckCircle2, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CIBIL Score Predictor",
    description: "An AI/ML-based model to predict CIBIL scores for unregistered small businesses, providing financial institutions with valuable insights for evaluating creditworthiness.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "CIBIL Score Predictor for Small Businesses",
    tag: "Machine Learning",
    technologies: [
      "Python", "scikit-learn", "Pandas", "React.js", "MongoDB"
    ],
    features: [
      "AI/ML algorithms to predict creditworthiness for unregistered businesses",
      "Data preprocessing and feature engineering for accurate prediction",
      "User-friendly React.js interface for inputting business financials",
      "Secure data storage and management with MongoDB",
      "Linear regression and random forest algorithms implementation"
    ],
    demoLink: "https://cibilpredictor.app",
    codeLink: "https://github.com/yashnk104/Credit_score"
  },
  {
    title: "Stock Price Predictor",
    description: "A stock price prediction application leveraging LSTM neural networks and historical financial data to forecast market trends with impressive 85% accuracy.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "Stock Price Predictor Application",
    tag: "Data Science",
    technologies: [
      "Python", "Streamlit", "LSTM Neural Networks", "Matplotlib", "Seaborn"
    ],
    features: [
      "85% accuracy in forecasting short-term stock price trends",
      "Real-time financial data integration from market APIs",
      "Interactive data visualization with Matplotlib and Seaborn",
      "Enhanced user engagement through intuitive interface design",
      "Historical data analysis for pattern recognition"
    ],
    demoLink: "https://stockpredictor.app",
    codeLink: "https://github.com/yashnikam/stock-predictor"
  },
  {
    title: "Graph Visualizer",
    description: "An interactive graph algorithm visualization tool combining advanced data structures with a modern React.js frontend to deliver both educational value and powerful computational capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "Graph Algorithm Visualizer",
    tag: "Web Application",
    technologies: [
      "React.js", "Data Structures", "JavaScript", "CSS", "Dijkstra's Algorithm"
    ],
    features: [
      "Optimized Dijkstra's algorithm with 1000+ nodes processing in under 100ms",
      "Intuitive drag-and-drop interface for node placement and manipulation",
      "Real-time graph updates and algorithm visualization",
      "Responsive design compatible with various devices",
      "Educational tool for understanding graph-based algorithms"
    ],
    demoLink: "https://graphvisualizer.app",
    codeLink: "https://github.com/yashnikam/graph-visualizer"
  }
];

export default function ProjectSection() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of my work, showcasing my expertise in full-stack development and UI/UX design.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              variants={itemVariants}
            >
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white mb-4"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {project.tag}
                </motion.span>
                
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h4 className="text-sm font-semibold text-gray-300 uppercase mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 text-gray-200 text-sm font-medium rounded-full border border-gray-700"
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h4 className="text-sm font-semibold text-gray-300 uppercase mb-3">Key Features</h4>
                  <ul className="space-y-2 text-gray-300">
                    {project.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild 
                      variant="default" 
                      className="bg-white text-black hover:bg-gray-200 hover:text-black"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-white bg-white text-black hover:bg-gray-200 hover:text-black"
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub Repo
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.div 
                  className="relative group overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Glowing border effect on hover */}
                  <motion.div 
                    className="absolute -inset-0.5 bg-gradient-to-r from-white to-gray-400 rounded-xl opacity-0 group-hover:opacity-70 blur-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Project image with mask effect */}
                  <div className="relative rounded-xl overflow-hidden">
                    <motion.img 
                      className="w-full h-auto object-cover transition-all duration-500 filter group-hover:saturate-150 z-10"
                      src={project.image} 
                      alt={project.altText}
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                    
                    {/* Dark overlay with project details on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex space-x-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <Button 
                          asChild 
                          size="sm" 
                          className="bg-white text-black hover:bg-gray-200"
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          asChild 
                          size="sm" 
                          variant="outline"
                          className="border-white bg-white text-black hover:bg-gray-200 hover:text-black"
                        >
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-3 w-3" />
                            GitHub Repo
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
