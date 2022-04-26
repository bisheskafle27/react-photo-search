import React, { useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PhotoSearch = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const changePhoto = () => {
    setLoading(true);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=QjF9N1OKB6zi9jUrZoRPrOyEqW1QWNggpwtILlzMxS4`
      )
      .then((response) => {
        setPhotos(response.data.results);
        setLoading(false);
      });
  };

  if (loading) return <Skeleton count={70} />;

  return (
    <div>
      <div>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Enter your keywords Here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" onClick={changePhoto} className="button">
          Search
        </button>
      </div>

      <div className="container">
        <div className="row">
          {photos.map((photo) => {
            return (
              <div className="column">
                <img src={photo.urls.small} alt={`${query}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoSearch;
