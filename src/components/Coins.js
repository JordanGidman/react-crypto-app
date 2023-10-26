import Coin from "../routes/Coin";
import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";
import Search from "./Search";

// import Search from "./components/Search";

function Coins({ coins, query, setQuery, setNumResults }) {
  return (
    <div className="container">
      <Search query={query} setQuery={setQuery} />
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>

        {coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>

      <button
        className="load-more-btn"
        onClick={() =>
          setNumResults((numResults) =>
            numResults < 100 ? numResults + 10 : numResults
          )
        }
      >
        Load More
      </button>
    </div>
  );
}

export default Coins;
