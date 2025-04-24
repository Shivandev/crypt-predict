// This file simulates ML models for cryptocurrency prediction
import * as tf from '@tensorflow/tfjs';

// Number of days to look back for prediction
const LOOKBACK_WINDOW = 30;

// Initialize TensorFlow.js
async function initTF() {
  // Only initialize once
  if (!tf.getBackend()) {
    await tf.ready();
    tf.setBackend('webgl');
  }
}

// Simple mock LSTM model
async function createLSTMModel() {
  await initTF();
  
  const model = tf.sequential();
  
  // Add layers
  model.add(tf.layers.lstm({
    units: 50,
    returnSequences: true,
    inputShape: [LOOKBACK_WINDOW, 1]
  }));
  
  model.add(tf.layers.dropout({ rate: 0.2 }));
  
  model.add(tf.layers.lstm({
    units: 50,
    returnSequences: false
  }));
  
  model.add(tf.layers.dense({ units: 7 })); // Predict 7 days
  
  // Compile the model
  model.compile({
    optimizer: 'adam',
    loss: 'meanSquaredError',
    metrics: ['mae']
  });
  
  return model;
}

// Generate synthetic price and prediction data
export async function generatePrediction(crypto: string, timeframe: '1D' | '1W' | '1M' | '1Y') {
  // Create time series data based on timeframe
  let days = 0;
  switch (timeframe) {
    case '1D':
      days = 1;
      break;
    case '1W':
      days = 7;
      break;
    case '1M':
      days = 30;
      break;
    case '1Y':
      days = 365;
      break;
  }
  
  // Generate dates
  const dates = [];
  const now = new Date();
  for (let i = days - 1; i >= -7; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);
    dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  
  // Base prices for different cryptocurrencies
  const basePrices: Record<string, number> = {
    'bitcoin': 42000,
    'ethereum': 2300,
    'solana': 60,
    'binancecoin': 310,
    'ripple': 0.5,
    'cardano': 0.35,
    'polkadot': 4.5,
    'avalanche': 18,
    'dogecoin': 0.08
  };
  
  const basePrice = basePrices[crypto] || 100;
  
  // Simulate actual prices with some randomness
  const actualPrices = [];
  for (let i = 0; i < dates.length - 7; i++) {
    const randomFactor = 1 + (Math.random() * 0.1 - 0.05); // +/- 5%
    const price = basePrice * randomFactor * (1 + (i * 0.01)); // Slight uptrend
    actualPrices.push(price);
  }
  
  // Simulate predicted prices with a slight uptrend
  const predictedPrices = [];
  const lastActualPrice = actualPrices[actualPrices.length - 1];
  
  for (let i = 0; i < 7; i++) {
    const randomFactor = 1 + (Math.random() * 0.05);
    const growthFactor = 1 + ((i + 1) * 0.01);
    const price = lastActualPrice * randomFactor * growthFactor;
    predictedPrices.push(price);
  }
  
  // Generate upper and lower bounds for confidence interval
  const upperBounds = predictedPrices.map(price => price * (1 + (Math.random() * 0.08 + 0.02)));
  const lowerBounds = predictedPrices.map(price => price * (1 - (Math.random() * 0.08 + 0.02)));
  
  // Create the combined dataset
  const data = [];
  
  // Actual data
  for (let i = 0; i < actualPrices.length; i++) {
    data.push({
      date: dates[i],
      actualPrice: actualPrices[i],
      predictedPrice: null,
      upperBound: null,
      lowerBound: null
    });
  }
  
  // Predicted data
  for (let i = 0; i < predictedPrices.length; i++) {
    data.push({
      date: dates[actualPrices.length + i],
      actualPrice: null,
      predictedPrice: predictedPrices[i],
      upperBound: upperBounds[i],
      lowerBound: lowerBounds[i]
    });
  }
  
  // Simulate model training time
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return data;
}

// Simulate brain.js neural network for sentiment analysis
export async function analyzeSentiment(text: string) {
  // Simple keyword-based sentiment analysis
  const positiveWords = ['bullish', 'growth', 'profit', 'gain', 'up', 'rise', 'success', 'optimistic'];
  const negativeWords = ['bearish', 'loss', 'down', 'fail', 'crash', 'drop', 'pessimistic'];
  
  const words = text.toLowerCase().split(/\s+/);
  
  let positiveCount = 0;
  let negativeCount = 0;
  
  words.forEach(word => {
    if (positiveWords.includes(word)) positiveCount++;
    if (negativeWords.includes(word)) negativeCount++;
  });
  
  const total = positiveCount + negativeCount;
  if (total === 0) return 0.5; // Neutral
  
  return positiveCount / total;
}

// Linear regression for simple trend analysis
export async function linearTrendPrediction(historicalPrices: number[], daysToPredict: number) {
  await initTF();
  
  // Create x values (days) and normalize
  const x = Array.from({ length: historicalPrices.length }, (_, i) => i);
  
  // Convert to tensors
  const xs = tf.tensor2d(x, [x.length, 1]);
  const ys = tf.tensor2d(historicalPrices, [historicalPrices.length, 1]);
  
  // Create and train linear regression model
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  
  model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
  
  await model.fit(xs, ys, { epochs: 100, verbose: 0 });
  
  // Predict future values
  const newX = Array.from(
    { length: daysToPredict }, 
    (_, i) => historicalPrices.length + i
  );
  
  const predictionsX = tf.tensor2d(newX, [newX.length, 1]);
  const predictions = model.predict(predictionsX) as tf.Tensor;
  
  // Convert predictions to array
  const result = await predictions.array() as number[][];
  return result.map(v => v[0]);
}
