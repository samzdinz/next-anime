"use client";

import { useState } from "react";

const FavoriteButton = ({
  anime_mal_id,
  user_email,
  anime_title,
  anime_image,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleFavorite = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_title, anime_image };

    const response = await fetch("/api/v1/favorite", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const favorite = await response.json();
    if (favorite.isCreated) {
      setIsCreated(true);
    }
  };

  return (
    <>
      {isCreated ? (
        <p>Berhasil masuk ke Favorite</p>
      ) : (
        <button
          onClick={handleFavorite}
          className="bg-color-secondary rounded py-1 p-4 mt-2"
        >
          Add To Favorites
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
