import { motion } from "framer-motion";
import { 
  Brain, 
  TrendingUp, 
  BarChart, 
  MessageSquare,
  Box
} from "lucide-react";

const TechExplanation = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 mb-12 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-6">How AI Predicts Cryptocurrency Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Machine Learning Models</h3>
          <motion.div 
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="flex" variants={item}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 dark:bg-primary-700 text-white">
                  <Brain size={20} />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium">LSTM Neural Networks</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Long Short-Term Memory networks excel at learning patterns in sequential data, making them ideal for time series prediction of cryptocurrency prices.
                </p>
              </div>
            </motion.div>
            
            <motion.div className="flex" variants={item}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <TrendingUp size={20} />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium">Regression Analysis</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Linear and polynomial regression models identify relationships between price and various factors like trading volume, market sentiment, and more.
                </p>
              </div>
            </motion.div>
            
            <motion.div className="flex" variants={item}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M17 16l4-4-4-4"></path>
                    <path d="M12 6v12M7 8l-4 4 4 4"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium">Decision Trees & Random Forests</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  These models create prediction rules by identifying patterns in historical data, allowing for complex non-linear relationships to be captured.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Data Sources & Features</h3>
          <motion.div 
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="flex" variants={item}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <BarChart size={20} />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium">Market Data</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Historical prices, trading volumes, market capitalization, and liquidity from various exchanges form the foundation of our prediction models.
                </p>
              </div>
            </motion.div>
            
            <motion.div className="flex" variants={item}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <MessageSquare size={20} />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium">Sentiment Analysis</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Processing social media, news articles, and forum discussions to gauge public sentiment about specific cryptocurrencies.
                </p>
              </div>
            </motion.div>
            
            <motion.div className="flex" variants={item}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <Box size={20} />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium">On-Chain Metrics</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Analyzing blockchain data such as transaction counts, active addresses, hash rates, and mining difficulty to predict network health and price movements.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechExplanation;
