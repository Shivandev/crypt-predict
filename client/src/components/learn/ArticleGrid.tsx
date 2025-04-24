import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "AI in Cryptocurrency Price Prediction",
    description: "Learn how neural networks and machine learning algorithms can analyze patterns and predict cryptocurrency price movements.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "AI and Cryptocurrency"
  },
  {
    id: 2,
    title: "Fundamentals of Blockchain Technology",
    description: "Discover the core concepts behind blockchain, including distributed ledgers, consensus mechanisms, and how they relate to cryptocurrencies.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Blockchain Technology"
  },
  {
    id: 3,
    title: "Understanding ML Algorithms for Trading",
    description: "Explore the most effective machine learning algorithms used in cryptocurrency trading, from linear regression to deep learning.",
    image: "https://images.unsplash.com/photo-1518544822903-24bf265f5e6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "ML Algorithms"
  }
];

const ArticleGrid = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {articles.map((article, index) => (
        <motion.div 
          key={article.id}
          className="bg-white dark:bg-dark-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200"
          variants={item}
        >
          <img 
            src={article.image} 
            alt={article.alt} 
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">{article.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {article.description}
            </p>
            <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
              <span>Read more</span>
              <ArrowRight size={14} className="ml-1" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ArticleGrid;
