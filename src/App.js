import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");
  const [numResults, setNumResults] = useState(10);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=${numResults}&page=1&sparkline=false&locale=en`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Coins
              coins={coins}
              query={query}
              setQuery={setQuery}
              setNumResults={setNumResults}
            />
          }
        />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
