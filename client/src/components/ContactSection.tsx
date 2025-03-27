import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Download, Send } from "lucide-react";
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaDribbble, 
  FaMedium 
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail className="text-xl" />,
    title: "Email",
    description: "yash10nikam@gmaila.com",
    action: "Send me an email",
    actionLink: "mailto:yash10nikam@gmaila.com"
  },
  {
    icon: <Phone className="text-xl" />,
    title: "Phone",
    description: "8080727434",
    action: "Call me",
    actionLink: "tel:8080727434"
  },
  {
    icon: <MapPin className="text-xl" />,
    title: "Location",
    description: "Pune, Maharashtra\nAvailable for remote work",
    action: "View on map",
    actionLink: "https://maps.google.com/?q=Pune,Maharashtra"
  }
];

const socialLinks = [
  { 
    icon: <FaGithub className="text-2xl" />, 
    name: "GitHub", 
    url: "https://github.com/yash-nikam" 
  },
  { 
    icon: <FaLinkedin className="text-2xl" />, 
    name: "LinkedIn", 
    url: "https://linkedin.com/in/yash-nikam" 
  },
  { 
    icon: <FaTwitter className="text-2xl" />, 
    name: "Twitter", 
    url: "https://twitter.com/yash_nikam" 
  },
  { 
    icon: <FaDribbble className="text-2xl" />, 
    name: "Dribbble", 
    url: "https://dribbble.com/yash-nikam" 
  },
  { 
    icon: <FaMedium className="text-2xl" />, 
    name: "Medium", 
    url: "https://medium.com/@yash10nikam" 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // This would normally send the data to a server
    console.log("Form submitted:", data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's Work Together</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            I'm currently available for freelance work. Connect with me via phone, email or using the form below.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out for collaborations, questions, or just to say hello! I'm open to discussing new projects and opportunities.
              </p>
              
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line mb-1">
                        {item.description}
                      </p>
                      <a 
                        href={item.actionLink} 
                        target={item.actionLink.startsWith("http") ? "_blank" : undefined} 
                        rel={item.actionLink.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-primary hover:text-primary/80"
                      >
                        {item.action} &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex space-x-5">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="text-gray-500 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Availability</h3>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Current Status</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Currently accepting new projects and collaboration opportunities. Book a discovery call to get started.
                </p>
                <Button asChild size="sm" variant="outline">
                  <a href="https://calendly.com/yash-nikam/discovery" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Call
                  </a>
                </Button>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button asChild size="sm" variant="ghost" className="w-full">
                    <a href="/Yash_Nikam_Resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        className={errors.name ? "border-red-500" : ""}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <span className="text-sm text-red-500">{errors.name.message?.toString()}</span>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={errors.email ? "border-red-500" : ""}
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && <span className="text-sm text-red-500">{errors.email.message?.toString()}</span>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className={errors.subject ? "border-red-500" : ""}
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <span className="text-sm text-red-500">{errors.subject.message?.toString()}</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      placeholder="I'd like to discuss a potential project..."
                      rows={6}
                      className={errors.message ? "border-red-500" : ""}
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message: "Message should be at least 20 characters"
                        }
                      })}
                    />
                    {errors.message && <span className="text-sm text-red-500">{errors.message.message?.toString()}</span>}
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
