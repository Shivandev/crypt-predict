import { motion } from "framer-motion";
import CommunityPlatforms from "@/components/community/CommunityPlatforms";
import UpcomingEvents from "@/components/community/UpcomingEvents";
import JoinCTA from "@/components/community/JoinCTA";
import TeamMembers from "@/components/community/TeamMembers";

const CommunityPage = () => {
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
          Join Our Crypto AI Community
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with like-minded enthusiasts, developers, and traders interested in the intersection of AI and cryptocurrency.
        </motion.p>
      </div>
      
      <CommunityPlatforms />
      <UpcomingEvents />
      <JoinCTA />
      <TeamMembers />
    </motion.div>
  );
};

export default CommunityPage;
