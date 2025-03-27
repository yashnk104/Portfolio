import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Download, Leaf } from "lucide-react";
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

  // Studio Ghibli gentle floating animation
  const floatVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-2, 2, -2], 
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        repeatType: "loop" 
      } 
    }
  };
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Nature-inspired divider */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[var(--ghibli-light-green)] via-[var(--ghibli-green)] to-[var(--ghibli-light-green)] opacity-30"></div>

        <div className="flex justify-between h-16 items-center relative z-10">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Studio Ghibli inspired logo */}
              <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-[var(--ghibli-light-green)] shadow-md">
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--ghibli-light-green)] to-[var(--ghibli-green)]"
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Leaf className="h-5 w-5 text-white" />
                </motion.div>
              </div>
              <span className="text-xl font-medium text-[var(--ghibli-dark)]">Yash Nikam</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {/* Studio Ghibli themed nav links */}
            <a href="#projects" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] transition-colors py-2 font-medium">
              Projects
            </a>
            <a href="#skills" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] transition-colors py-2 font-medium">
              Skills
            </a>
            <a href="#about" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] transition-colors py-2 font-medium">
              About
            </a>
            <a href="#contact" className="text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] transition-colors py-2 font-medium">
              Contact
            </a>
            <Button 
              variant="outline" 
              asChild 
              className="flex items-center gap-1 border-[var(--ghibli-light-green)] text-[var(--ghibli-dark)] hover:bg-[var(--ghibli-light-green)]/10 hover:text-[var(--ghibli-green)]"
            >
              <a href="/Yash_Nikam_Resume.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button 
              asChild
              className="bg-[var(--ghibli-green)] text-white hover:bg-[var(--ghibli-green)]/90 shadow-md hover:shadow-lg transition-all"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] border border-[var(--ghibli-light-green)]/30 hover:border-[var(--ghibli-green)] focus:outline-none hover:bg-[var(--ghibli-light-green)]/10"
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
      
      {/* Mobile Navigation - Studio Ghibli themed */}
      <div className={`md:hidden bg-white/95 border-b border-[var(--ghibli-light-green)]/30 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#projects" 
            className="block px-3 py-2 rounded-xl font-medium text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] hover:bg-[var(--ghibli-light-green)]/10 transition-colors"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 rounded-xl font-medium text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] hover:bg-[var(--ghibli-light-green)]/10 transition-colors"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-xl font-medium text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] hover:bg-[var(--ghibli-light-green)]/10 transition-colors"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-xl font-medium text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] hover:bg-[var(--ghibli-light-green)]/10 transition-colors"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <a 
            href="/Yash_Nikam_Resume.pdf" 
            download
            className="flex items-center gap-2 px-3 py-2 rounded-xl font-medium text-[var(--ghibli-dark)] hover:text-[var(--ghibli-green)] hover:bg-[var(--ghibli-light-green)]/10 transition-colors"
            onClick={closeMobileMenu}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="block px-4 py-2 rounded-xl font-medium bg-[var(--ghibli-green)] text-white hover:bg-[var(--ghibli-green)]/90 m-2 shadow-md"
            onClick={closeMobileMenu}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
