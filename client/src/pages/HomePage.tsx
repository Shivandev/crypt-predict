import { motion } from "framer-motion";
import PriceTicker from "@/components/crypto/PriceTicker";
import PredictionChart from "@/components/crypto/PredictionChart";
import PredictionInfoCard from "@/components/crypto/PredictionInfoCard";
import AltcoinPrediction from "@/components/crypto/AltcoinPrediction";
import TechnologiesUsed from "@/components/home/TechnologiesUsed";
import { useCryptoData } from "@/hooks/useCryptoData";

const HomePage = () => {
  const { data: cryptoData, isLoading } = useCryptoData();
  
  const altcoins = [
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
      change: -2.3
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      image: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
      change: 4.7
    },
    {
      id: "binancecoin",
      name: "BNB",
      symbol: "BNB",
      image: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
      change: 1.2
    }
  ];

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
          AI-Powered Cryptocurrency Predictions
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Leveraging machine learning algorithms to forecast cryptocurrency price movements
          with unprecedented accuracy.
        </motion.p>
      </div>

      <PriceTicker />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <PredictionChart />
        <div className="space-y-4">
          <PredictionInfoCard type="prediction" />
          <PredictionInfoCard type="risk" />
          <PredictionInfoCard type="models" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {altcoins.map((coin, index) => (
          <AltcoinPrediction
            key={coin.id}
            coinId={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            change={coin.change}
            delay={index}
          />
        ))}
      </div>

      <TechnologiesUsed />
    </motion.div>
  );
};

export default HomePage;
