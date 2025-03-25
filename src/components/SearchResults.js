import React from "react";
import Tracklist from "./Tracklist";

function SearchResults({ searchResults, addTrack }) {
  return (
    <div>
      <h2>Results</h2>
      <Tracklist tracks={searchResults} addTrack={addTrack} />
    </div>
  );
}

export default SearchResults;
