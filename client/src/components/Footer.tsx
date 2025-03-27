import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaCode, FaDribbble } from "react-icons/fa";
import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-white to-gray-500 flex items-center justify-center">
                <span className="text-black font-bold">Y</span>
              </div>
              <span className="text-xl font-bold text-white">Yash Nikam</span>
            </a>
            <p className="mt-4 text-gray-300">
              Full-stack Developer & UI/UX Designer crafting beautiful, functional digital experiences that blend stunning design with powerful functionality.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://twitter.com/yash_nikam" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="text-lg" />
              </a>
              <a href="https://linkedin.com/in/yash-nikam" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://github.com/yash-nikam" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="text-lg" />
              </a>
              <a href="https://dribbble.com/yash-nikam" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Dribbble</span>
                <FaDribbble className="text-lg" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#projects" className="text-base text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/Yash_Nikam_Resume.pdf" download="Yash_Nikam_Resume.pdf" className="text-base text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white transition-colors flex items-center">
                  <FaCode className="h-4 w-4 mr-2" />
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Yash Nikam. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span className="text-gray-500">Pune, Maharashtra</span>
              <span className="text-gray-500">yash10nikam@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
