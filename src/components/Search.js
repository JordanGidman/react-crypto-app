import { useNavigate } from "react-router-dom";
import "./Search.css";
function Search({ query, setQuery }) {
  //   const [singleCoin, setSingleCoin] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/coin/${query}`);
      }}
    >
      <input
        type="text"
        placeholder="Search for a coin"
        className="search-input"
        onChange={handleChange}
        value={query}
      />

      <button
        className="search-btn"
        onClick={() => {
          if (!query) return;
          navigate(`/coin/${query}`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}

export default Search;
