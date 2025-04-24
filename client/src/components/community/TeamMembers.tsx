import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Emma Chen",
    role: "Chief Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "David Kim",
    role: "Lead ML Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Blockchain Specialist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Michael Zhang",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const TeamMembers = () => {
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
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {teamMembers.map((member) => (
          <motion.div 
            key={member.id} 
            className="text-center"
            variants={item}
          >
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-dark-300 mx-auto mb-4 overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
            <div className="flex justify-center mt-2 space-x-2">
              <a href="#" className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400">
                <FaEnvelope size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamMembers;
