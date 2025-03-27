import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Download, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll state for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Blue Lock themed pulse animation
  const pulseVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
  
  return (
    <header className={`fixed w-full z-50 backdrop-blur-md transition-all duration-300 ${
      isScrolled 
        ? 'bg-[var(--bluelock-dark)]/90 shadow-[0_0_20px_rgba(0,119,255,0.4)]' 
        : 'bg-[var(--bluelock-dark)]/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Blue Lock themed digital circuit lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-[1px] bg-gradient-to-r from-transparent via-[var(--bluelock-blue)] to-transparent w-full top-0 opacity-30"></div>
          <div className="absolute h-[1px] bg-gradient-to-r from-transparent via-[var(--bluelock-neon)] to-transparent w-full bottom-0 opacity-30"></div>
        </div>

        <div className="flex justify-between h-16 items-center relative z-10">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Blue Lock themed logo */}
              <div className="relative h-8 w-8">
                <motion.div 
                  className="absolute inset-0 bg-[var(--bluelock-blue)] rounded-md opacity-70 blur-[2px]"
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                ></motion.div>
                <div className="absolute inset-0 rounded-md border border-[var(--bluelock-neon)] flex items-center justify-center">
                  <Zap className="h-4 w-4 text-[var(--bluelock-neon)]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">YN</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white blueLock-glow">Yash Nikam</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Blue Lock themed nav links */}
            <a href="#projects" className="text-white opacity-80 hover:text-[var(--bluelock-neon)] hover:opacity-100 transition-colors py-2 tracking-wide text-sm uppercase">
              Projects
            </a>
            <a href="#skills" className="text-white opacity-80 hover:text-[var(--bluelock-neon)] hover:opacity-100 transition-colors py-2 tracking-wide text-sm uppercase">
              Skills
            </a>
            <a href="#about" className="text-white opacity-80 hover:text-[var(--bluelock-neon)] hover:opacity-100 transition-colors py-2 tracking-wide text-sm uppercase">
              About
            </a>
            <a href="#contact" className="text-white opacity-80 hover:text-[var(--bluelock-neon)] hover:opacity-100 transition-colors py-2 tracking-wide text-sm uppercase">
              Contact
            </a>
            <Button 
              variant="outline" 
              asChild 
              className="flex items-center gap-1 border-[var(--bluelock-blue)] text-white hover:bg-[var(--bluelock-blue)]/20 hover:text-[var(--bluelock-neon)]"
            >
              <a href="/Yash_Nikam_Resume.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button 
              asChild
              className="bg-[var(--bluelock-blue)] text-white hover:bg-[var(--bluelock-blue)]/80 shadow-[0_0_10px_rgba(0,119,255,0.5)] hover:shadow-[0_0_15px_rgba(0,119,255,0.7)]"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--bluelock-blue)] hover:text-[var(--bluelock-neon)] border border-[var(--bluelock-blue)]/30 hover:border-[var(--bluelock-neon)] focus:outline-none"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Blue Lock themed */}
      <div className={`md:hidden bg-[var(--bluelock-dark-blue)]/95 backdrop-blur-md border-b border-[var(--bluelock-blue)]/30 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#projects" 
            className="block px-3 py-2 rounded-md text-sm uppercase font-medium text-white hover:text-[var(--bluelock-neon)] hover:bg-[var(--bluelock-blue)]/10 transition-colors tracking-wide"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 rounded-md text-sm uppercase font-medium text-white hover:text-[var(--bluelock-neon)] hover:bg-[var(--bluelock-blue)]/10 transition-colors tracking-wide"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-sm uppercase font-medium text-white hover:text-[var(--bluelock-neon)] hover:bg-[var(--bluelock-blue)]/10 transition-colors tracking-wide"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-sm uppercase font-medium text-white hover:text-[var(--bluelock-neon)] hover:bg-[var(--bluelock-blue)]/10 transition-colors tracking-wide"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <a 
            href="/Yash_Nikam_Resume.pdf" 
            download
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm uppercase font-medium text-white hover:text-[var(--bluelock-neon)] hover:bg-[var(--bluelock-blue)]/10 transition-colors tracking-wide"
            onClick={closeMobileMenu}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-sm uppercase font-medium bg-[var(--bluelock-blue)] text-white hover:bg-[var(--bluelock-blue)]/80 m-2 shadow-[0_0_10px_rgba(0,119,255,0.3)]"
            onClick={closeMobileMenu}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
