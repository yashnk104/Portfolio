import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Briefcase, Send, Download, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 lg:pt-28 bg-[var(--bluelock-dark)] text-white blueLock-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28 relative z-10">
        {/* Blue Lock anime-inspired digital elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--bluelock-blue)] opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[var(--bluelock-neon)] opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[var(--bluelock-blue)] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[var(--bluelock-neon)] opacity-5"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight blueLock-glow">
              Hi, I'm Yash <span className="text-[var(--bluelock-neon)]">Nikam</span>
            </h1>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                <span className="inline-block bg-[var(--bluelock-blue)]/20 border border-[var(--bluelock-blue)]/50 text-white px-4 py-2 rounded-md text-lg font-medium shadow-[0_0_10px_rgba(0,119,255,0.3)]">
                  Full-stack Developer
                </span>
                <span className="inline-block bg-[var(--bluelock-blue)]/20 border border-[var(--bluelock-blue)]/50 text-white px-4 py-2 rounded-md text-lg font-medium shadow-[0_0_10px_rgba(0,119,255,0.3)]">
                  UI/UX Designer
                </span>
              </div>
              <p className="text-xl md:text-2xl text-[var(--bluelock-neon)] max-w-2xl mx-auto lg:mx-0">
                I create beautiful, functional digital experiences that combine stunning design with powerful functionality.
              </p>
            </motion.div>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="w-full sm:w-auto bg-[var(--bluelock-blue)] text-white hover:bg-[var(--bluelock-blue)]/80 shadow-[0_0_15px_rgba(0,119,255,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,119,255,0.7)]"
              >
                <a href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="w-full sm:w-auto mt-3 sm:mt-0 bg-transparent border-[var(--bluelock-blue)] text-white hover:bg-[var(--bluelock-blue)]/20"
              >
                <a href="#contact">
                  <Send className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto mt-3 sm:mt-0"
              >
                <Button 
                  size="lg" 
                  variant="default" 
                  asChild 
                  className="w-full relative overflow-hidden group bg-[var(--bluelock-neon)] text-[var(--bluelock-dark)] hover:bg-[var(--bluelock-neon)]/90 shadow-[0_0_15px_rgba(0,238,255,0.5)]"
                >
                  <a href="/Yash_Nikam_Resume.pdf" download="Yash_Nikam_Resume.pdf">
                    <FileText className="mr-2 h-5 w-5" />
                    <span className="relative z-10">Download Resume</span>
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <Download className="ml-2 h-4 w-4 animate-bounce" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-8 flex space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#" className="text-[var(--bluelock-blue)] hover:text-[var(--bluelock-neon)] transition-colors border border-[var(--bluelock-blue)]/50 p-2 rounded-full hover:border-[var(--bluelock-neon)] hover:shadow-[0_0_10px_rgba(0,238,255,0.5)]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[var(--bluelock-blue)] hover:text-[var(--bluelock-neon)] transition-colors border border-[var(--bluelock-blue)]/50 p-2 rounded-full hover:border-[var(--bluelock-neon)] hover:shadow-[0_0_10px_rgba(0,238,255,0.5)]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[var(--bluelock-blue)] hover:text-[var(--bluelock-neon)] transition-colors border border-[var(--bluelock-blue)]/50 p-2 rounded-full hover:border-[var(--bluelock-neon)] hover:shadow-[0_0_10px_rgba(0,238,255,0.5)]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[var(--bluelock-blue)] hover:text-[var(--bluelock-neon)] transition-colors border border-[var(--bluelock-blue)]/50 p-2 rounded-full hover:border-[var(--bluelock-neon)] hover:shadow-[0_0_10px_rgba(0,238,255,0.5)]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 15.06v-6.88h2.69v6.88h-2.69zm-.15-7.27c0-.81.67-1.48 1.48-1.48s1.48.67 1.48 1.48-.67 1.48-1.48 1.48-1.48-.67-1.48-1.48zm7.69 7.27h-2.69v-4.07c0-1.11-.37-1.85-1.32-1.85-.7 0-1.11.5-1.29.97-.07.17-.09.39-.09.61v4.34H8.9V9.79h2.69v1.09c.44-.55 1.11-1.31 2.69-1.31 1.98 0 3.44 1.29 3.44 4.07v4.23z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative h-64 sm:h-80 lg:h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Hexagonal frame - inspired by Blue Lock's visual style */}
            <div className="relative mx-auto w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-[var(--bluelock-blue)] rounded-full opacity-20 blur-md animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-[var(--bluelock-blue)] rounded-full"></div>
              <div className="absolute inset-2 border border-[var(--bluelock-neon)] rounded-full opacity-50"></div>
              <img 
                className="absolute inset-4 rounded-full object-cover shadow-[0_0_20px_rgba(0,119,255,0.5)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,238,255,0.7)]" 
                src="/yash_portrait.jpg" 
                alt="Yash Nikam - Portfolio" 
              />
              {/* Digital circuit lines - Blue Lock aesthetic */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <path d="M100,0 L120,35 L100,70 L80,35 Z" fill="none" stroke="var(--bluelock-blue)" strokeWidth="1" opacity="0.3" />
                <path d="M100,130 L120,165 L100,200 L80,165 Z" fill="none" stroke="var(--bluelock-blue)" strokeWidth="1" opacity="0.3" />
                <path d="M0,100 L35,80 L70,100 L35,120 Z" fill="none" stroke="var(--bluelock-blue)" strokeWidth="1" opacity="0.3" />
                <path d="M130,100 L165,80 L200,100 L165,120 Z" fill="none" stroke="var(--bluelock-blue)" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
            <div className="mt-6 bg-[var(--bluelock-dark-blue)]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-[var(--bluelock-blue)]/30 shadow-[0_0_15px_rgba(0,119,255,0.2)]">
              <p className="text-lg font-medium text-[var(--bluelock-neon)]">
                <Code className="inline-block mr-2 h-5 w-5" />
                <span>3+ years of experience in development & design</span>
              </p>
              <p className="mt-2 text-blue-100 text-sm">
                Specializing in React, UI/UX Design, and full-stack applications
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[var(--bluelock-gray)] w-full h-16 rounded-t-[50px] transform translate-y-1"></div>
    </section>
  );
}
