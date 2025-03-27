import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 lg:pt-28 bg-gradient-to-r from-primary to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Transform Your Work<span className="text-green-50">flow</span>
            </h1>
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our innovative platform helps you manage projects, collaborate with your team, and boost productivity - all in one place.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="#waitlist">Join the Waitlist</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto mt-3 sm:mt-0 bg-transparent border-primary-100 text-white hover:bg-primary/20">
                <a href="#features">Learn More</a>
              </Button>
            </motion.div>
            <motion.div 
              className="mt-8 text-sm text-primary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>🚀 Limited spots available for early access</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative h-64 sm:h-80 lg:h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105" 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Product Dashboard Preview" 
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-white w-full h-16 rounded-t-[50px] transform translate-y-1"></div>
    </section>
  );
}
