import React from "react";
import styled from "styled-components";

const SongModal = ({ closeModal, singleSong }) => {
  const min = Math.floor(singleSong.duration / 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  const sec = (singleSong.duration % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  return (
    <Wrapper>
      <div className="content glass">
        <div className="header">
          <h2># {singleSong.position}</h2>
        </div>
        <div className="body">
          <p>Title : {singleSong.title} </p>
          <p>Artist: {singleSong.artist.name}</p>
          <p>
            Duration: {min}:{sec}
          </p>
        </div>
        <div className="footer">
          <button className="btn" onClick={closeModal}>
            CLOSE
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--main-color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  .content {
    width: 600px;
    background-color: #fff;
    border-radius: 0.3rem;
  }
  .body {
    padding: 15px;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
  }
  .glass {
    background-color: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(2px);
  }
  .header,
  .footer {
    padding: 10px;
  }
`;

export default SongModal;
