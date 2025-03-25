import React from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlistName, playlistTracks, removeTrack, updatePlaylistName }) {
  return (
    <div>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => updatePlaylistName(e.target.value)}
      />
      <Tracklist tracks={playlistTracks} removeTrack={removeTrack} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
