import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";
import Search from "./components/Search/Search";
import PaginationComponent from "./components/Pagination/Pagination";

function App() {
  const [coingeckoData, setCoingeckoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  // Handling search input changes.
  const onSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    // Filtering data based on the search.
    const filteredCoins = coingeckoData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.symbol.toLowerCase().includes(searchTerm)
    );

    setPaginatedCoins(filteredCoins.slice(0, 10)); 
  };

  const handlePageChange = (event, value) => {
    setPage(value);

    // Calculating the range of data to display on the current page.
    const startIndex = (value - 1) * 10;
    const endIndex = startIndex + 10;

    setPaginatedCoins(coingeckoData.slice(startIndex, endIndex));
  };

  // Fetching data from Coingecko API.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to fetch data from the original endpoint
        const response = await fetch("/coingecko");
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        setCoingeckoData(data);
        setPaginatedCoins(data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        // Handle errors from the original endpoint
        console.error("Error fetching Coingecko data from the original endpoint:", error);
  
        // Attempt to fetch data from the alternative endpoint
        try {
          const altResponse = await fetch("https://analystt-ai-assignment.onrender.com/coingecko");
          
          if (!altResponse.ok) {
            throw new Error("Network response was not ok from the alternative endpoint");
          }
  
          const altData = await altResponse.json();
          setCoingeckoData(altData);
          setPaginatedCoins(altData.slice(0, 10));
          setLoading(false);
        } catch (altError) {
          // Handle errors from the alternative endpoint
          console.error("Error fetching Coingecko data from the alternative endpoint:", altError);
          setError(altError.message);
          setLoading(false);
        }
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <h1 className="heading">Data from Coingecko API</h1>
      {loading ? (
        <p className="loader-p">Loading Coingecko data...</p>
      ) : error ? (
        <p className="error-p">Error: {error} from coingecko API. Please try after few minutes.</p>
      ) : (
        <div className="grid-flex">
          <Search search={search} onSearchChange={onSearchChange} />

          {paginatedCoins.map((coin, index) => (
            <Grid coin={coin} key={index} />
          ))}
        </div>
      )}
{!error && !loading && <PaginationComponent page={page} handlePageChange={handlePageChange} />}

    </div>
  );
}

export default App;
