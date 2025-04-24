import { useQuery } from "@tanstack/react-query";
import { generatePrediction } from "@/lib/mlModels";

export function useMLPrediction(crypto: string, timeframe: '1D' | '1W' | '1M' | '1Y') {
  return useQuery({
    queryKey: ['/api/prediction', crypto, timeframe],
    queryFn: () => generatePrediction(crypto, timeframe),
    staleTime: 300000, // 5 minutes
    refetchOnWindowFocus: false,
  });
}
