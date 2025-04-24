import { useState, useEffect } from "react";
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  YAxis, 
  Tooltip 
} from "recharts";
import { useMLPrediction } from "@/hooks/useMLPrediction";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AltcoinPredictionProps {
  coinId: string;
  name: string;
  symbol: string;
  image: string;
  change: number;
  delay?: number;
}

const AltcoinPrediction = ({ 
  coinId, 
  name, 
  symbol, 
  image, 
  change, 
  delay = 0 
}: AltcoinPredictionProps) => {
  const { data, isLoading } = useMLPrediction(coinId, '1M');
  const [chartData, setChartData] = useState<any[]>([]);
  
  // Calculate forecast values for display
  const forecastPrice = data && data.length > 0 ? data[data.length - 1].predictedPrice : 0;
  const currentPrice = data && data.length > 0 ? 
    data.find(d => d.actualPrice !== null)?.actualPrice || 0 : 0;
  const forecastChange = ((forecastPrice - currentPrice) / currentPrice) * 100;
  const confidence = Math.floor(Math.random() * 10) + 75; // Simulate confidence between 75-85%

  useEffect(() => {
    if (data) {
      setChartData(data);
    }
  }, [data]);

  return (
    <motion.div 
      className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-8 h-8 mr-2" />
          <h3 className="font-semibold">{name}</h3>
        </div>
        <div className={cn(
          "text-sm font-medium flex items-center",
          change >= 0 ? "text-green-500" : "text-red-500"
        )}>
          {change >= 0 ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
          {change >= 0 ? "+" : ""}{change.toFixed(1)}%
        </div>
      </div>
      <div className="h-40">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <div className="animate-pulse text-gray-300">Loading...</div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <defs>
                <linearGradient id={`color${symbol}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={change >= 0 ? "#10B981" : "#EF4444"} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={change >= 0 ? "#10B981" : "#EF4444"} stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis domain={['auto', 'auto']} hide />
              <Tooltip 
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, ""]}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none', 
                  borderRadius: '6px', 
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' 
                }}
              />
              <Line
                type="monotone"
                dataKey="actualPrice"
                stroke={change >= 0 ? "#10B981" : "#EF4444"}
                strokeWidth={2}
                dot={false}
                fill={`url(#color${symbol})`}
              />
              <Line
                type="monotone"
                dataKey="predictedPrice"
                stroke={change >= 0 ? "#10B981" : "#EF4444"}
                strokeWidth={2}
                strokeDasharray="3 3"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400">30-Day Forecast</div>
          <div className="font-medium">
            ${forecastPrice.toLocaleString()} 
            <span className={cn(
              "text-xs ml-1",
              forecastChange >= 0 ? "text-green-500" : "text-red-500"
            )}>
              {forecastChange >= 0 ? "+" : ""}{forecastChange.toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
          {confidence}% Confidence
        </div>
      </div>
    </motion.div>
  );
};

export default AltcoinPrediction;
