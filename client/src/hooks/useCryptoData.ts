import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "@/lib/api";

export function useCryptoData() {
  return useQuery({
    queryKey: ['/api/crypto/prices'],
    queryFn: fetchCryptoPrices,
    refetchInterval: 60000, // Refetch every minute
    staleTime: 30000, // Data is considered fresh for 30 seconds
  });
}
