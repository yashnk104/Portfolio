import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  
  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ProductName</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors py-2">Features</a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition-colors py-2">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-primary transition-colors py-2">Skills</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors py-2">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors py-2">Contact</a>
            <Button asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-b border-gray-200 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#features" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Features
          </a>
          <a 
            href="#projects" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <a 
            href="#waitlist" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90 m-2"
            onClick={closeMobileMenu}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
