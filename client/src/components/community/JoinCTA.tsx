import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const JoinCTA = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-800 dark:to-indigo-800 rounded-lg shadow-md p-8 mb-12 text-white text-center transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Join the Conversation — Where AI Meets Blockchain!</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Be part of our growing community of developers, traders, and enthusiasts exploring the cutting edge of AI-powered cryptocurrency analysis.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition duration-200"
        >
          Join Our Newsletter
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-bold transition duration-200"
        >
          Explore Communities
        </Button>
      </div>
    </motion.div>
  );
};

export default JoinCTA;
