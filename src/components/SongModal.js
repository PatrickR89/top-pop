import React from "react";
import styled from "styled-components";

const SongModal = ({ closeModal, singleSong }) => {
  return (
    <Wrapper>
      <div className="content">
        <div className="header">
          <h2># {singleSong.position}</h2>
        </div>
        <div className="body">
          <p>Title : {singleSong.title} </p>
          <p>Artist: {singleSong.artist.name}</p>
          <p>
            Duration: {Math.floor(singleSong.duration / 60)}:
            {singleSong.duration % 60}
          </p>
        </div>
        <div className="footer">
          <button onClick={closeModal}>CLOSE</button>
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
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 600px;
    background-color: #fff;
  }
  .body {
    padding: 15px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  .header,
  .footer {
    padding: 10px;
  }
`;

export default SongModal;
