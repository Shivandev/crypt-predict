import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "Introduction to TensorFlow.js",
    description: "Learn how to implement basic neural networks for cryptocurrency prediction using TensorFlow.js.",
    duration: "15:47"
  },
  {
    id: 2,
    title: "Building Your First Crypto Prediction Model",
    description: "Step-by-step guide to creating and training your first cryptocurrency price prediction model.",
    duration: "23:18"
  },
  {
    id: 3,
    title: "Advanced LSTM for Time Series Prediction",
    description: "Dive deep into LSTM neural networks for accurate cryptocurrency price forecasting.",
    duration: "34:52"
  }
];

const VideoTutorials = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-gray-50 dark:bg-dark-200 rounded-lg shadow-md p-6 mb-12 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {tutorials.map((tutorial) => (
          <motion.div 
            key={tutorial.id}
            className="bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200"
            variants={item}
          >
            <div className="bg-gray-300 dark:bg-dark-300 h-40 flex items-center justify-center relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-5xl text-gray-500 dark:text-gray-400 cursor-pointer"
              >
                <Play className="h-12 w-12 fill-current" />
              </motion.div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{tutorial.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {tutorial.description}
              </p>
              <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>{tutorial.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VideoTutorials;
