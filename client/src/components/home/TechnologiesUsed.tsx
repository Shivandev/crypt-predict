import { motion } from "framer-motion";
import { FaJs, FaNetworkWired, FaChartBar } from "react-icons/fa";

const TechnologiesUsed = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900 rounded-lg shadow-md p-6 mb-12 transition-colors duration-200">
      <h2 className="text-xl font-bold text-white mb-4">Technologies Powering Our Predictions</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="bg-white dark:bg-dark-200 rounded-lg p-4 transition-colors duration-200"
          variants={item}
        >
          <div className="flex items-center mb-3">
            <FaJs className="text-yellow-500 text-2xl mr-2" />
            <h3 className="font-semibold">TensorFlow.js</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Browser-based machine learning library that enables us to run sophisticated neural networks directly in your browser.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-dark-200 rounded-lg p-4 transition-colors duration-200"
          variants={item}
        >
          <div className="flex items-center mb-3">
            <FaNetworkWired className="text-primary-500 text-2xl mr-2" />
            <h3 className="font-semibold">Brain.js</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            JavaScript neural network library that allows for creating, training, and using artificial neural networks in the browser.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-dark-200 rounded-lg p-4 transition-colors duration-200"
          variants={item}
        >
          <div className="flex items-center mb-3">
            <FaChartBar className="text-green-500 text-2xl mr-2" />
            <h3 className="font-semibold">CoinGecko API</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Provides real-time cryptocurrency market data including prices, volume, and market cap for our prediction models.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechnologiesUsed;
