import React, { useState } from "react";
import axios from "axios";

const PhotoSearch = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=QjF9N1OKB6zi9jUrZoRPrOyEqW1QWNggpwtILlzMxS4`
      )
      .then((response) => {
        setPhotos(response.data.results);
      });
  };

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
                <img src={photo.urls.small} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoSearch;
