import React, { useState, useEffect } from "react";
import { SongModal } from "../components";

const SongList = () => {
  const [songList, setSongList] = useState([]);
  const [value, setValue] = useState("descending");
  const [modalState, setModalState] = useState(false);
  const [singleSong, setSingleSong] = useState();

  const fetchData = async () => {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
    );
    const data = await res.json();
    setSongList(data.tracks.data.sort((a, b) => b.duration - a.duration));
  };

  const changeSort = (e) => {
    setValue(e.target.value);
    if (value === "ascending") {
      songList.sort((a, b) => b.duration - a.duration);
    }
    if (value === "descending") {
      songList.sort((a, b) => a.duration - b.duration);
    }
  };

  const closeModal = () => {
    setModalState(false);
  };
  const openModal = (song) => {
    setSingleSong(song);
    setModalState(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <label htmlFor="sortlist">Sort list by song length: </label>
      <select
        name="sortlist"
        id="sortlist"
        value={value}
        onChange={(e) => changeSort(e)}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      {songList.length > 0 &&
        songList.map((song, index) => {
          return (
            <div key={index}>
              <button onClick={() => openModal(song)}>{song.title}</button>
              <p>{song.duration}</p>
            </div>
          );
        })}
      {modalState && (
        <SongModal closeModal={closeModal} singleSong={singleSong} />
      )}
    </div>
  );
};

export default SongList;
