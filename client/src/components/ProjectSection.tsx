import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";

// Fallback placeholder for when projects are loading or if there's an error
const ProjectPlaceholder = () => (
  <div className="w-full h-60 bg-gray-800 rounded-xl animate-pulse flex items-center justify-center">
    <div className="text-gray-600 flex flex-col items-center">
      <AlertCircle className="w-10 h-10 mb-2" />
      <p>Loading project...</p>
    </div>
  </div>
);

export default function ProjectSection() {
  // Fetch projects from the API
  const { data, isLoading, error } = useQuery({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      const response = await fetch("/api/projects");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      return data.projects as Project[];
    }
  });

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
          {isLoading ? (
            // Show loading placeholders when projects are being fetched
            Array(3).fill(0).map((_, index) => (
              <motion.div key={`loading-${index}`} variants={itemVariants}>
                <ProjectPlaceholder />
              </motion.div>
            ))
          ) : error ? (
            // Show error message if projects failed to load
            <motion.div
              className="p-8 bg-red-900/20 rounded-xl text-center"
              variants={itemVariants}
            >
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold text-white mb-2">Failed to load projects</h3>
              <p className="text-gray-300">Please try refreshing the page</p>
            </motion.div>
          ) : data && data.length > 0 ? (
            // Show projects if we have data
            data.map((project, index) => (
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
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
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
                      {project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (featureIndex * 0.1), duration: 0.3 }}
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
            ))
          ) : (
            // No projects found
            <motion.div 
              className="p-8 bg-gray-800/40 rounded-xl text-center"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-300">Check back later for exciting new additions to my portfolio</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
