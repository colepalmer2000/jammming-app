import React from "react";
import Track from "./Track";

function Tracklist({ tracks, addTrack, removeTrack }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} addTrack={addTrack} removeTrack={removeTrack} />
      ))}
    </div>
  );
}

export default Tracklist;
