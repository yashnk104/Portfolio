import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Briefcase, Send, Download, FileText } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    });
  }, [controls]);
  
  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  // Staggered container for the badges
  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  // Individual badge animation
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };
  
  // Animation for social links
  const socialLinkVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delay: 0.7 + (i * 0.1),
        duration: 0.4
      }
    }),
    hover: { 
      scale: 1.15, 
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { 
        type: "spring", 
        duration: 0.3,
        stiffness: 300
      }
    }
  };
  
  return (
    <section id="hero" className="pt-20 lg:pt-28 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28 relative">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-40 left-5 w-20 h-20 bg-white/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              Hi, I'm <span className="text-gradient">Yash</span> <span className="text-gray-300">Nikam</span>
            </motion.h1>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4"
                variants={badgeContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span 
                  className="inline-block bg-white/10 text-gray-100 px-4 py-2 rounded-full text-lg font-medium"
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    transition: { duration: 0.2 }
                  }}
                >
                  Full-stack Developer
                </motion.span>
                <motion.span 
                  className="inline-block bg-white/10 text-gray-100 px-4 py-2 rounded-full text-lg font-medium"
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    transition: { duration: 0.2 }
                  }}
                >
                  UI/UX Designer
                </motion.span>
              </motion.div>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I create beautiful, functional digital experiences that combine stunning design with powerful functionality.
              </motion.p>
            </motion.div>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="secondary" 
                  asChild 
                  className="w-full gradient-border bg-gradient-to-r from-white to-gray-100 text-black hover:bg-white"
                >
                  <a href="#projects">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View My Work
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto mt-3 sm:mt-0"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="w-full relative overflow-hidden group bg-transparent border-white/30 text-white hover:bg-white/10 hover:shadow-glow"
                >
                  <a href="#contact">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Contact Me
                  </a>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto mt-3 sm:mt-0"
              >
                <Button 
                  size="lg" 
                  variant="default" 
                  asChild 
                  className="w-full relative overflow-hidden group bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-200 hover:to-white"
                >
                  <a href="/Yash_Nikam_Resume.pdf" download="Yash_Nikam_Resume.pdf">
                    <motion.span
                      className="absolute -inset-1 bg-gradient-to-r from-white/50 to-transparent rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                    />
                    <FileText className="mr-2 h-5 w-5" />
                    <span className="relative z-10">Download Resume</span>
                    <Download className="ml-2 h-4 w-4 animate-bounce" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-8 flex space-x-4 justify-center lg:justify-start" 
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.15,
                    delayChildren: 0.6
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                href="https://github.com/yashnk104" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:shadow-glow"
                custom={0}
                variants={socialLinkVariants}
                whileHover="hover"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="mailto:yash10nikam@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:shadow-glow"
                custom={1}
                variants={socialLinkVariants}
                whileHover="hover"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
                </svg>
              </motion.a>
              <motion.a 
                href="tel:+918080727434" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:shadow-glow"
                custom={2}
                variants={socialLinkVariants}
                whileHover="hover"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/yash-nikam-7866b6250" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:shadow-glow"
                custom={3}
                variants={socialLinkVariants}
                whileHover="hover"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 15.06v-6.88h2.69v6.88h-2.69zm-.15-7.27c0-.81.67-1.48 1.48-1.48s1.48.67 1.48 1.48-.67 1.48-1.48 1.48-1.48-.67-1.48-1.48zm7.69 7.27h-2.69v-4.07c0-1.11-.37-1.85-1.32-1.85-.7 0-1.11.5-1.29.97-.07.17-.09.39-.09.61v4.34H8.9V9.79h2.69v1.09c.44-.55 1.11-1.31 2.69-1.31 1.98 0 3.44 1.29 3.44 4.07v4.23z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative h-64 sm:h-80 lg:h-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 90, 
              damping: 15, 
              delay: 0.4 
            }}
          >
            <motion.div
              className="relative mx-auto w-48 h-48 md:w-64 md:h-64"
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Profile glow effect */}
              <motion.div 
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-white to-gray-300 opacity-30 blur-md"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              <img 
                className="relative z-10 mx-auto rounded-full border-4 border-white shadow-2xl w-full h-full object-cover" 
                src="/yash_portrait.jpg" 
                alt="Yash Nikam - Portfolio" 
              />
            </motion.div>
            
            <motion.div 
              className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.p 
                className="text-lg font-medium"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="inline-block"
                >
                  <Code className="mr-2 h-5 w-5" />
                </motion.span>
                <span>3+ years of experience in development & design</span>
              </motion.p>
              <motion.p 
                className="mt-2 text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Specializing in React, UI/UX Design, and full-stack applications
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white w-full h-16 rounded-t-[50px] transform translate-y-1"></div>
    </section>
  );
}
