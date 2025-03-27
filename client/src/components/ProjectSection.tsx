import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Streamlining Operations at TechCorp",
    description: "Learn how TechCorp reduced their project management overhead by 45% and improved team collaboration after implementing our platform.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "TechCorp Case Study",
    tag: "Case Study",
    benefits: [
      "Reduced project completion time by 35%",
      "Improved team satisfaction scores by 28%",
      "Consolidated 6 different tools into one platform"
    ],
    link: "#",
    linkText: "Read full case study"
  },
  {
    title: "Scaling Creative Workflows at DesignHub",
    description: "See how DesignHub manages their creative assets and client approval process seamlessly using our platform's collaboration features.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "DesignHub Success Story",
    tag: "Success Story",
    benefits: [
      "Client approval time reduced by 60%",
      "25% increase in project capacity",
      "Seamless management of 10,000+ creative assets"
    ],
    link: "#",
    linkText: "View success story"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Project Showcase</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See how our product has transformed workflows for businesses across industries.
          </p>
        </motion.div>
        
        <div className="mt-16 space-y-16">
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
                <ul className="space-y-2 text-gray-600 mb-6">
                  {project.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a href={project.link} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  {project.linkText}
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  className="rounded-lg shadow-lg w-full h-auto transform transition-transform duration-500 hover:scale-[1.02]" 
                  src={project.image} 
                  alt={project.altText} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
