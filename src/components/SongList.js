import React, { useState, useEffect } from "react";

const SongList = () => {
  const [songList, setSongList] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
    );
    const data = await res.json();
    setSongList(data.tracks.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {songList.length > 0 &&
        songList.map((song, index) => {
          return (
            <div key={index}>
              <h4>{song.title}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default SongList;
