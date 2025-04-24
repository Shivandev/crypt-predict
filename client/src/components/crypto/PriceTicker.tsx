import { useEffect, useState } from "react";
import { useCryptoData } from "@/hooks/useCryptoData";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const PriceTicker = () => {
  const { data: cryptoData, isLoading, error } = useCryptoData();
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    if (cryptoData) {
      setPrices(cryptoData);
    }
  }, [cryptoData]);

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 mb-8 overflow-x-auto transition-colors duration-200">
        <h2 className="text-lg font-semibold mb-3">Real-time Cryptocurrency Prices</h2>
        <div className="flex space-x-4 py-2">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="flex items-center space-x-2 bg-gray-50 dark:bg-dark-100 px-3 py-2 rounded-lg animate-pulse"
              style={{width: "150px", height: "60px"}}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 mb-8 transition-colors duration-200">
        <h2 className="text-lg font-semibold mb-3">Real-time Cryptocurrency Prices</h2>
        <p className="text-red-500">Failed to load cryptocurrency data</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 mb-8 overflow-x-auto transition-colors duration-200">
      <h2 className="text-lg font-semibold mb-3">Real-time Cryptocurrency Prices</h2>
      <div className="flex space-x-4 py-2 min-w-max">
        {prices.map((crypto) => (
          <motion.div
            key={crypto.id}
            className="flex items-center space-x-2 bg-gray-50 dark:bg-dark-100 px-3 py-2 rounded-lg transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={crypto.image} 
              alt={crypto.name} 
              className="w-6 h-6" 
            />
            <div className="flex flex-col">
              <span className="font-medium">{crypto.symbol.toUpperCase()}</span>
              <span className={cn(
                "text-sm",
                crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
              )}>
                ${crypto.current_price.toLocaleString()}
              </span>
            </div>
            <span className={cn(
              "text-xs",
              crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
            )}>
              {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;
