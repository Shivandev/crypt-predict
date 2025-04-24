import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, User, Video } from "lucide-react";

const events = [
  {
    id: 1,
    date: { day: "25", month: "AUG" },
    title: "Webinar: Getting Started with TensorFlow.js for Crypto Prediction",
    description: "Learn how to build your first neural network for cryptocurrency price prediction using TensorFlow.js.",
    time: "2:00 PM UTC",
    speaker: "Dr. Sarah Chen, AI Researcher",
    location: "Online"
  },
  {
    id: 2,
    date: { day: "10", month: "SEP" },
    title: "Workshop: Advanced ML Techniques for Market Prediction",
    description: "Deep dive into advanced machine learning models for cryptocurrency market forecasting, including LSTM networks and ensemble methods.",
    time: "3:00 PM UTC",
    speaker: "Prof. Michael Lee, Cambridge University",
    location: "Online"
  },
  {
    id: 3,
    date: { day: "18", month: "SEP" },
    title: "Panel Discussion: The Future of AI in Cryptocurrency Trading",
    description: "Join industry experts as they discuss the evolving landscape of AI-powered cryptocurrency trading strategies and predictions.",
    time: "6:00 PM UTC",
    speaker: "Panel of Industry Experts",
    location: "Online"
  }
];

const UpcomingEvents = () => {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 mb-12 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <motion.div 
            key={event.id}
            className="flex flex-col md:flex-row md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 p-3 rounded-lg text-center md:mr-4 mb-4 md:mb-0 transition-colors duration-200">
              <div className="text-xl font-bold">{event.date.day}</div>
              <div className="text-sm">{event.date.month}</div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {event.description}
              </p>
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center mr-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mr-4">
                  <User className="w-4 h-4 mr-1" />
                  <span>{event.speaker}</span>
                </div>
                <div className="flex items-center">
                  <Video className="w-4 h-4 mr-1" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-4">
              <Button 
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition duration-200"
              >
                Register
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
