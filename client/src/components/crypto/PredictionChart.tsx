import { useEffect, useState } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area,
  ComposedChart
} from "recharts";
import { useMLPrediction } from "@/hooks/useMLPrediction";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeframeButtonProps {
  label: string;
  timeframe: '1D' | '1W' | '1M' | '1Y';
  active: boolean;
  onClick: (timeframe: '1D' | '1W' | '1M' | '1Y') => void;
}

const TimeframeButton = ({ label, timeframe, active, onClick }: TimeframeButtonProps) => (
  <Button
    variant="ghost"
    size="sm"
    className={cn(
      "px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200",
      active 
        ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" 
        : "hover:bg-gray-100 dark:hover:bg-dark-100 text-gray-500 dark:text-gray-400"
    )}
    onClick={() => onClick(timeframe)}
  >
    {label}
  </Button>
);

const PredictionChart = () => {
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '1Y'>('1D');
  const [chartData, setChartData] = useState<any[]>([]);
  
  const { data, isLoading } = useMLPrediction('bitcoin', timeframe);

  useEffect(() => {
    if (data) {
      setChartData(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="lg:col-span-2 bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 transition-colors duration-200 h-[350px] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading prediction data...</div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-2 bg-white dark:bg-dark-200 rounded-lg shadow-md p-4 transition-colors duration-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Bitcoin Price Prediction</h2>
        <div className="flex space-x-2">
          <TimeframeButton 
            label="1D" 
            timeframe="1D" 
            active={timeframe === '1D'} 
            onClick={setTimeframe} 
          />
          <TimeframeButton 
            label="1W" 
            timeframe="1W" 
            active={timeframe === '1W'} 
            onClick={setTimeframe} 
          />
          <TimeframeButton 
            label="1M" 
            timeframe="1M" 
            active={timeframe === '1M'} 
            onClick={setTimeframe} 
          />
          <TimeframeButton 
            label="1Y" 
            timeframe="1Y" 
            active={timeframe === '1Y'} 
            onClick={setTimeframe} 
          />
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <defs>
              <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(156, 163, 175, 0.2)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgba(156, 163, 175, 0.2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(156, 163, 175, 0.2)" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              tickFormatter={(value) => value.split(' ')[0]}
              stroke="rgba(156, 163, 175, 0.2)"
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              domain={['auto', 'auto']}
              tickFormatter={(value) => `$${Number(value).toLocaleString()}`}
              stroke="rgba(156, 163, 175, 0.2)"
            />
            <Tooltip 
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="actualPrice" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Actual Price"
            />
            <Line 
              type="monotone" 
              dataKey="predictedPrice" 
              stroke="#10B981" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="AI Prediction (LSTM)"
            />
            <Area
              type="monotone"
              dataKey="upperBound"
              stroke="rgba(156, 163, 175, 0.5)"
              fill="url(#colorConfidence)"
              activeDot={false}
              name="Upper Bound"
            />
            <Area
              type="monotone"
              dataKey="lowerBound"
              stroke="rgba(156, 163, 175, 0.5)"
              fill="transparent"
              activeDot={false}
              name="Lower Bound"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-primary-500 mr-1"></div>
          <span>Actual Price</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
          <span>AI Prediction (LSTM)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 mr-1"></div>
          <span>Confidence Interval</span>
        </div>
      </div>
    </div>
  );
};

export default PredictionChart;
