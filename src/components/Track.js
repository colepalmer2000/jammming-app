import React from "react";

function Track({ track, addTrack, removeTrack }) {
  return (
    <div>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      {addTrack && <button onClick={() => addTrack(track)}>+</button>}
      {removeTrack && <button onClick={() => removeTrack(track)}>-</button>}
    </div>
  );
}

export default Track;
