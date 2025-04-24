import { Link } from "wouter";
import { Brain } from "lucide-react";
import { 
  FaTwitter, 
  FaDiscord, 
  FaRedditAlien, 
  FaGithub, 
  FaPaperPlane 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-200 py-8 mt-12 border-t border-gray-200 dark:border-dark-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-xl">CryptoAI</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Leveraging the power of artificial intelligence to predict cryptocurrency market movements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-400">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-400">
                <FaDiscord size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-400">
                <FaRedditAlien size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-400">
                <FaGithub size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><Link href="/"><a className="hover:text-primary dark:hover:text-primary-400">Home</a></Link></li>
              <li><Link href="/learn"><a className="hover:text-primary dark:hover:text-primary-400">Learn</a></Link></li>
              <li><Link href="/community"><a className="hover:text-primary dark:hover:text-primary-400">Community</a></Link></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-400">API Documentation</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-400">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-400">Documentation</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-400">Tutorials</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-400">API Status</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-400">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-400">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Subscribe to receive updates about new features and cryptocurrency prediction insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 border border-gray-300 dark:border-dark-100 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary dark:bg-dark-100 dark:text-white flex-grow"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-r-md"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-100 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} CryptoAI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary-400">Privacy Policy</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary-400">Terms of Service</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary-400">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
