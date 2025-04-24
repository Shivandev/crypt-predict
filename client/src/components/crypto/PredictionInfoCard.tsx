import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PredictionInfoCardProps {
  type: 'prediction' | 'risk' | 'models';
}

const PredictionInfoCard = ({ type }: PredictionInfoCardProps) => {
  if (type === 'prediction') {
    return (
      <motion.div 
        className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 transition-colors duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-semibold mb-2">7-Day Prediction</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">$47,843.21</span>
            <div className="flex items-center text-green-500 text-sm">
              <ArrowUpRight size={14} className="mr-1" />
              <span>+10.7%</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Confidence</div>
            <div className="text-lg font-semibold">87%</div>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Based on LSTM neural network analysis of market trends and on-chain metrics.
        </div>
      </motion.div>
    );
  }

  if (type === 'risk') {
    return (
      <motion.div 
        className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 transition-colors duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h3 className="font-semibold mb-2">Risk Assessment</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Market Volatility</span>
          <span className="font-medium text-yellow-500">Medium</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5">
          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
        </div>
        <div className="flex justify-between items-center mt-4 mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Trading Volume</span>
          <span className="font-medium text-green-500">High</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "82%" }}></div>
        </div>
        <div className="flex justify-between items-center mt-4 mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Sentiment Analysis</span>
          <span className="font-medium text-green-500">Positive</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "76%" }}></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h3 className="font-semibold mb-3">ML Models Used</h3>
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary-500 text-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </span>
          <span>LSTM Neural Networks</span>
        </div>
        <div className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
          </span>
          <span>Linear Regression</span>
        </div>
        <div className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-600 text-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </span>
          <span>Decision Trees</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PredictionInfoCard;
