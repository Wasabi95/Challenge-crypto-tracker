// npm install recharts
// npm install axios
// npm install react-chartjs-2 chart.js

// Add more data visualizations: Fetching data from a cryptocurrency API and rendering it on the screen. The challenge is to create a simple crypto tracker that displays real-time prices of Bitcoin (BTC), Ethereum (ETH), and Litecoin (LTC) in US dollars (USD).
// Add more data visualizations: You could add more data visualizations to provide users with additional insights into the cryptocurrency market. For example, you could add a chart that shows the historical price of a specific cryptocurrency over time or a heat map that displays the price changes of different cryptocurrencies.
// Add more functionality: include news articles related to cryptocurrencies, allow users to set price alerts, or enable users to create and save custom watchlists
// Implement error handling: Currently, the app assumes that all API requests will be successful. However, in reality, there may be situations where an API request fails or returns unexpected data. To improve the app, you should implement error handling to provide users with more informative error messages and handle unexpected data appropriately.
// Improve the user interface: The current design is simple and functional, but you could enhance it with a more modern and visually appealing design. This could include better use of color, typography, and layout.

import React from "react";
import CryptoTracker from "./CryptoTracker";

function App() {
  return (
    <div>
      <CryptoTracker />;
    </div>
  );
}

export default App;
