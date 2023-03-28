import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CryptoTracker = () => {
  const [data, setData] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [alertPrice, setAlertPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${selectedCrypto}&tsyms=USD`
      );
      setData(result.data);
      const historicalResult = await axios(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${selectedCrypto}&tsym=USD&limit=30`
      );
      setHistoricalData(historicalResult.data.Data.Data);
    };
    fetchData();
  }, [selectedCrypto]);

  useEffect(() => {
    if (
      data[selectedCrypto] &&
      alertPrice &&
      data[selectedCrypto].USD >= alertPrice
    ) {
      alert(
        `Alert triggered for ${selectedCrypto}! Price is now ${data[selectedCrypto].USD}.`
      );
    }
  }, [data, alertPrice, selectedCrypto]);

  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
  };

  const handleAlertPriceChange = (event) => {
    setAlertPrice(event.target.value);
  };

  return (
    <div>
      <h1>Crypto Tracker</h1>
      <div>
        <label htmlFor="crypto-select">Select a cryptocurrency:</label>
        <select
          id="crypto-select"
          value={selectedCrypto}
          onChange={handleCryptoChange}
        >
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="LTC">Litecoin (LTC)</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Crypto</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedCrypto}</td>
            <td>{data[selectedCrypto] ? data[selectedCrypto].USD : "-"}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <label htmlFor="alert-price">Set a price alert:</label>
        <input
          id="alert-price"
          type="number"
          min="0"
          step="0.01"
          value={alertPrice}
          onChange={handleAlertPriceChange}
        />
        <span> USD</span>
      </div>
      {historicalData.length > 0 && (
        <LineChart width={800} height={400} data={historicalData}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="high" stroke="#8884d8" />
          <Line type="monotone" dataKey="low" stroke="#82ca9d" />
        </LineChart>
      )}
    </div>
  );
};

export default CryptoTracker;
