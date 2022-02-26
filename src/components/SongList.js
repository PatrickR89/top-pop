import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
    const tempValue = e.target.value;
    setValue(tempValue);
    // sort items second option with 2 functions, where value state change triggers useEffect with sort function
    if (tempValue === "descending") {
      songList.sort((a, b) => b.duration - a.duration);
    } else if (tempValue === "ascending") {
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
    <Wrapper>
      <div className="select-container">
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
      </div>
      {songList.length > 0 &&
        songList.map((song, index) => {
          return (
            <div key={index} className="btn-container">
              <button className="btn" onClick={() => openModal(song)}>
                {song.title}
              </button>
            </div>
          );
        })}
      {modalState && (
        <SongModal closeModal={closeModal} singleSong={singleSong} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-container {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .select-container {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    select {
      border: none;
      background-color: var(--main-background);
      color: var(--main-color);
      font-size: 1.2rem;
      outline: none;
    }
  }
  .btn {
    border: none;
    border-radius: 0.2rem;
    background-color: var(--main-background);
    color: var(--main-color);
    transition: 0.2s ease-in;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    width: 100%;
    :hover {
      background-color: var(--main-color);
      color: var(--main-background);
      cursor: pointer;
    }
    :active {
      background-color: var(--main-color-light);
    }
  }
`;

export default SongList;
