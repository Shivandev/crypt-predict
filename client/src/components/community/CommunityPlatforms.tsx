import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaDiscord, FaRedditAlien, FaTwitter } from "react-icons/fa";

const platforms = [
  {
    id: 1,
    name: "Discord Community",
    description: "Join our active Discord server with channels for strategy discussion, algorithm sharing, and real-time market analysis.",
    icon: <FaDiscord className="text-indigo-500 text-5xl" />,
    buttonText: "Join Discord",
    buttonColor: "bg-indigo-500 hover:bg-indigo-600",
    badges: [
      { text: "Active", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { text: "15K+ Members", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" }
    ]
  },
  {
    id: 2,
    name: "Reddit Community",
    description: "Participate in our subreddit where we share insights, discuss models, and post regular prediction updates.",
    icon: <FaRedditAlien className="text-orange-600 text-5xl" />,
    buttonText: "Join Subreddit",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    badges: [
      { text: "Daily Updates", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { text: "42K+ Members", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" }
    ]
  },
  {
    id: 3,
    name: "Twitter Community",
    description: "Follow us for real-time updates, prediction announcements, and engaging discussions with industry leaders.",
    icon: <FaTwitter className="text-blue-400 text-5xl" />,
    buttonText: "Follow on Twitter",
    buttonColor: "bg-blue-400 hover:bg-blue-500",
    badges: [
      { text: "Live Updates", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { text: "78K+ Followers", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" }
    ]
  }
];

const CommunityPlatforms = () => {
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
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {platforms.map((platform) => (
        <motion.div 
          key={platform.id}
          className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200"
          variants={item}
        >
          <div className="flex items-center justify-center mb-4">
            {platform.icon}
          </div>
          <h3 className="text-xl font-bold text-center mb-2">{platform.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            {platform.description}
          </p>
          <div className="flex justify-center">
            <Button
              className={`text-white px-4 py-2 rounded-md font-medium transition duration-200 ${platform.buttonColor}`}
            >
              {platform.buttonText}
            </Button>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            {platform.badges.map((badge, index) => (
              <span 
                key={index} 
                className={`text-xs font-medium px-2.5 py-0.5 rounded ${badge.color}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CommunityPlatforms;
