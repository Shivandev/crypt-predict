import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const faqs = [
  {
    id: 1,
    question: "How accurate are the AI predictions?",
    answer: "Our AI models typically achieve 75-85% accuracy for short-term predictions (1-3 days) and 60-70% for medium-term predictions (1-2 weeks). However, cryptocurrency markets are highly volatile and can be influenced by unpredictable factors such as regulatory news or market sentiment shifts."
  },
  {
    id: 2,
    question: "Which machine learning algorithms work best for crypto prediction?",
    answer: "LSTM (Long Short-Term Memory) neural networks typically perform best for cryptocurrency price prediction due to their ability to capture long-term dependencies in time series data. Random Forests and Gradient Boosting algorithms also perform well, especially when incorporating multiple features beyond just price history."
  },
  {
    id: 3,
    question: "How is sentiment analysis used in predictions?",
    answer: "We analyze social media platforms, news articles, and forum discussions to gauge market sentiment. Natural Language Processing (NLP) techniques help us quantify sentiment into positive, negative, or neutral signals, which are then incorporated as features in our prediction models to improve accuracy."
  },
  {
    id: 4,
    question: "Do your models account for market manipulation?",
    answer: "Our models incorporate anomaly detection algorithms that can identify unusual trading patterns that may indicate market manipulation. However, it's important to note that no model can perfectly account for all forms of market manipulation, especially in cryptocurrency markets where regulation is still evolving."
  }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 dark:border-dark-100 pb-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="text-gray-500 dark:text-gray-400 w-5 h-5" />
        ) : (
          <ChevronDown className="text-gray-500 dark:text-gray-400 w-5 h-5" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem 
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItem === faq.id}
            toggleOpen={() => toggleItem(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
