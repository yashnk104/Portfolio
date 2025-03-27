import { motion } from "framer-motion";
import { Calendar, MapPin, Mail, Briefcase, GraduationCap, Heart } from "lucide-react";

export default function AboutSection() {
  // Animation variants
  const slideUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 20 
      }
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 20 
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.1 * i
      }
    })
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate full-stack developer and UI/UX designer with a love for creating elegant, user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              My Journey
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              With over 7 years of experience in both development and design, I've had the privilege of working on diverse projects that have shaped my technical and creative approach to digital products.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I started my career as a UI/UX designer, focusing on creating intuitive and aesthetically pleasing interfaces. As I grew professionally, I expanded my expertise to include full-stack development, allowing me to both design and implement complete digital experiences from concept to deployment.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div className="flex items-start" variants={itemVariants}>
                <Briefcase className="h-5 w-5 text-white mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Lead UI/UX Designer & Developer at PixelPerfect</h4>
                  <p className="text-sm text-gray-400">2022 - Present</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}>
                <Briefcase className="h-5 w-5 text-white mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">Senior Full-stack Developer at TechInnovate</h4>
                  <p className="text-sm text-gray-400">2020 - 2022</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}>
                <Briefcase className="h-5 w-5 text-white mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">UI Designer at DesignWave</h4>
                  <p className="text-sm text-gray-400">2018 - 2020</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}>
                <GraduationCap className="h-5 w-5 text-white mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-white">BS in Computer Science & Design</h4>
                  <p className="text-sm text-gray-400">Graduated 2018</p>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "25+", label: "Happy Clients" },
                { value: "7+", label: "Years Experience" },
                { value: "15+", label: "Design Systems" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center bg-gray-900 border border-gray-800 p-4 rounded-lg"
                  custom={i}
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    {stat.value}
                  </p>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glowing border effect */}
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-white to-gray-400 rounded-xl opacity-0 group-hover:opacity-70 blur-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  transition: { 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 2 
                  }
                }}
              />
              
              <img 
                className="w-full h-auto object-cover object-center" 
                src="/yash_portrait.jpg" 
                alt="Yash Nikam - Professional Portrait" 
              />
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Yash Nikam
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Full-stack Developer & UI/UX Designer
                </motion.p>
                
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <motion.div className="flex items-center" variants={itemVariants}>
                    <MapPin className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">Mumbai, India</span>
                  </motion.div>
                  <motion.div className="flex items-center" variants={itemVariants}>
                    <Mail className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">yash.nikam@example.com</span>
                  </motion.div>
                  <motion.div className="flex items-center" variants={itemVariants}>
                    <Calendar className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">Available for freelance from April 2025</span>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h4 className="text-sm font-semibold text-gray-300 uppercase mb-3 flex items-center">
                    <Heart className="h-4 w-4 text-white mr-2" />
                    Personal Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["UI/UX Design", "Web Development", "Mobile Apps", "Design Systems", "Minimalism"].map((interest, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-full border border-gray-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)"
                        }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
