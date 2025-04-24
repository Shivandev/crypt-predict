import { motion } from "framer-motion";
import ArticleGrid from "@/components/learn/ArticleGrid";
import TechExplanation from "@/components/learn/TechExplanation";
import VideoTutorials from "@/components/learn/VideoTutorials";
import FAQ from "@/components/learn/FAQ";

const LearnPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Learn About AI & Cryptocurrency
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore how artificial intelligence and machine learning are transforming the cryptocurrency landscape.
        </motion.p>
      </div>
      
      <ArticleGrid />
      <TechExplanation />
      <VideoTutorials />
      <FAQ />
    </motion.div>
  );
};

export default LearnPage;
