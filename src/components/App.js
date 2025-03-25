import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  // State for search results (simulating API response for now)
  const [searchResults, setSearchResults] = useState([
    { id: "1", name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: "2", name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: "3", name: "Song 3", artist: "Artist 3", album: "Album 3" },
  ]);

  // State for user's custom playlist
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Function to add a track to the playlist
  const addTrack = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  // Function to remove a track from the playlist
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  };

  // Function to update the playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults searchResults={searchResults} addTrack={addTrack} />
      <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        removeTrack={removeTrack}
        updatePlaylistName={updatePlaylistName}
      />
    </div>
  );
}

export default App;
