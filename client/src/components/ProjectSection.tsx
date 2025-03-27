import { motion } from "framer-motion";
import { CheckCircle2, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ModernCommerce",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, cart management, user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "ModernCommerce E-commerce Platform",
    tag: "Full-stack Project",
    technologies: [
      "React", "Node.js", "Express", "MongoDB", "Stripe API"
    ],
    features: [
      "Responsive product catalog with filtering and sorting",
      "Secure user authentication and profile management",
      "Real-time inventory tracking and notifications",
      "Comprehensive admin dashboard with analytics"
    ],
    demoLink: "https://moderncommerce.demo.com",
    codeLink: "https://github.com/johndoe/moderncommerce"
  },
  {
    title: "TaskFlow",
    description: "A collaborative project management application with drag-and-drop task management, team collaboration features, and real-time updates using WebSockets.",
    image: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "TaskFlow Project Management App",
    tag: "Web Application",
    technologies: [
      "React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"
    ],
    features: [
      "Intuitive kanban board with drag-and-drop functionality",
      "Real-time collaboration with live updates",
      "Customizable workflows and task categories",
      "Time tracking and reporting capabilities"
    ],
    demoLink: "https://taskflow.demo.com",
    codeLink: "https://github.com/johndoe/taskflow"
  },
  {
    title: "FitTracker",
    description: "A mobile fitness application built with React Native that helps users track workouts, set goals, and monitor progress. Includes integration with health APIs and customizable workout plans.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "FitTracker Mobile App",
    tag: "Mobile Application",
    technologies: [
      "React Native", "Firebase", "Redux", "Apple HealthKit", "Google Fit API"
    ],
    features: [
      "Customizable workout plans and exercise library",
      "Progress tracking with visual charts and statistics",
      "Integration with wearable devices for accurate metrics",
      "Social features for sharing achievements and competing with friends"
    ],
    demoLink: "https://fittracker.demo.com",
    codeLink: "https://github.com/johndoe/fittracker"
  }
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my recent work, showcasing my skills and expertise in web and mobile development.
          </p>
        </motion.div>
        
        <div className="mt-16 space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                  {project.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">Key Features</h4>
                  <ul className="space-y-2 text-gray-600">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="default">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative group">
                  <img 
                    className="rounded-lg shadow-lg w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.02]" 
                    src={project.image} 
                    alt={project.altText} 
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button asChild size="sm">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
