import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Journey</h2>
            <p className="text-lg text-gray-600 mb-6">
              We started with a simple mission: to create a product that genuinely makes work easier and more productive. Founded by a team of industry veterans who've experienced firsthand the frustrations of using disjointed tools, we set out to build the all-in-one solution we wished we had.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              After years of development and collaboration with early adopters across various industries, we're now ready to share our platform with a wider audience. Our product combines powerful functionality with an intuitive interface, designed to adapt to your unique workflows rather than forcing you to adapt to ours.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3+ Years</p>
                <p className="text-gray-600">In Development</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-gray-600">Industry Experts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-gray-600">Customer Support</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-gray-600">Uptime Guarantee</p>
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
            <img 
              className="rounded-lg shadow-xl w-full h-auto" 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Our team collaborating" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
