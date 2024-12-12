import React from "react";
import "./artworkList.css";
import SingleArtwork from "../SingleArtwork/SingleArtwork";

const artworkList = ({ artworks }) => {
  return (
    <ul className="artwork-list">
      {artworks.map((artwork) => {
        return (
          <SingleArtwork artwork={artwork} key={artwork.id}></SingleArtwork>
        );
      })}
    </ul>
  );
};

export default artworkList;
