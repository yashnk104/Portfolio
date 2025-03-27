import { motion } from "framer-motion";
import { Calendar, MapPin, Mail, Briefcase, GraduationCap, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate full-stack developer with a love for creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-lg text-gray-600 mb-6">
              With over 5 years of experience in web and mobile development, I've had the privilege of working on a diverse range of projects that have shaped my technical skills and problem-solving approach.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I started my career as a frontend developer, focusing on creating intuitive user interfaces. As I grew professionally, I expanded my expertise to backend development, database design, and cloud infrastructure, becoming a versatile full-stack developer capable of building complete applications from the ground up.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Briefcase className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Senior Developer at TechInnovate</h4>
                  <p className="text-sm text-gray-600">2020 - Present</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Full-stack Developer at WebSolutions</h4>
                  <p className="text-sm text-gray-600">2018 - 2020</p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCap className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">BS in Computer Science</h4>
                  <p className="text-sm text-gray-600">Graduated 2018</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">40+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-gray-600">Tech Stacks</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img 
                className="w-full h-auto object-cover object-center" 
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="John Doe - Professional Portrait" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h3>
                <p className="text-gray-600 mb-4">Full-stack Developer & UI/UX Enthusiast</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-600">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-600">Available for freelance from June 2023</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3 flex items-center">
                    <Heart className="h-4 w-4 text-primary mr-2" />
                    Personal Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Photography", "Hiking", "Machine Learning", "Open Source", "Travel"].map((interest, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
