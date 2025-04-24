// API functions for fetching cryptocurrency data

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

// Fetch top cryptocurrencies with price data
export async function fetchCryptoPrices(): Promise<CryptoCurrency[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    
    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cryptocurrency prices:', error);
    // Return sample data for demonstration if API fails
    return [
      {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
        image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
        current_price: 43215.48,
        price_change_percentage_24h: 2.34
      },
      {
        id: "ethereum",
        symbol: "eth",
        name: "Ethereum",
        image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
        current_price: 2345.12,
        price_change_percentage_24h: -1.56
      },
      {
        id: "tether",
        symbol: "usdt",
        name: "Tether",
        image: "https://assets.coingecko.com/coins/images/325/small/Tether.png",
        current_price: 1.00,
        price_change_percentage_24h: 0.01
      },
      {
        id: "binancecoin",
        symbol: "bnb",
        name: "BNB",
        image: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
        current_price: 312.45,
        price_change_percentage_24h: 1.23
      },
      {
        id: "solana",
        symbol: "sol",
        name: "Solana",
        image: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
        current_price: 64.87,
        price_change_percentage_24h: 4.72
      }
    ];
  }
}

// Fetch historical price data for a specific cryptocurrency
export async function fetchHistoricalPrices(
  coinId: string, 
  days: number = 30
): Promise<{prices: [number, number][]}> {
  try {
    const response = await fetch(
      `${COINGECKO_API}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
    );
    
    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching historical prices for ${coinId}:`, error);
    // Return empty data if API fails
    return { prices: [] };
  }
}

// Fetch detailed info for a specific cryptocurrency
export async function fetchCryptoDetails(coinId: string) {
  try {
    const response = await fetch(
      `${COINGECKO_API}/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`
    );
    
    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching details for ${coinId}:`, error);
    return null;
  }
}
