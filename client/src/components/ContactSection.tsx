import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram 
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <Mail className="text-xl" />,
    title: "Email",
    description: "hello@productname.com",
    action: "Send us an email",
    actionLink: "mailto:hello@productname.com"
  },
  {
    icon: <MessageSquare className="text-xl" />,
    title: "Live Chat",
    description: "Available weekdays 9AM-6PM ET",
    action: "Start a conversation",
    actionLink: "#"
  },
  {
    icon: <MapPin className="text-xl" />,
    title: "Office",
    description: "123 Innovation Way\nSan Francisco, CA 94103",
    action: "View on map",
    actionLink: "https://maps.google.com"
  }
];

const socialLinks = [
  { 
    icon: <FaTwitter className="text-2xl" />, 
    name: "Twitter", 
    url: "#" 
  },
  { 
    icon: <FaLinkedin className="text-2xl" />, 
    name: "LinkedIn", 
    url: "#" 
  },
  { 
    icon: <FaGithub className="text-2xl" />, 
    name: "GitHub", 
    url: "#" 
  },
  { 
    icon: <FaInstagram className="text-2xl" />, 
    name: "Instagram", 
    url: "#" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Our team is here to help. Reach out through any of the channels below.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all text-center"
              variants={itemVariants}
            >
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-base text-gray-600 whitespace-pre-line">
                {item.description}
              </p>
              <p className="mt-5">
                <a 
                  href={item.actionLink} 
                  target={item.actionLink.startsWith("http") ? "_blank" : undefined} 
                  rel={item.actionLink.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-base font-medium text-primary hover:text-primary/80"
                >
                  {item.action} &rarr;
                </a>
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="text-gray-400 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <span className="sr-only">{link.name}</span>
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
