import { useLocation } from "react-router-dom";

function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query");

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      {/* Backend call / filter logic */}
    </div>
  );
}

export default SearchResults;
