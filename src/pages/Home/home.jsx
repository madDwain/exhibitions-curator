import React from "react";
import "./home.css";
import ArtworkList from "../../components/ArtworkList/artworkList";
import { getObjects } from "../../utils/api";
import { useEffect, useState } from "react";

const Home = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getObjects().then(({ data }) => {
      setArtworks(data.records);
    });
  }, []);
  return (
    <div className="home-page">
      homeepage MUSTARD
      <ArtworkList artworks={artworks} />
    </div>
  );
};

export default Home;
