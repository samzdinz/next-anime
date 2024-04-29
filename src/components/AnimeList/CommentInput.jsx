"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, anime_title, username }) => {
  const [comment, setComment] = useState("");

  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_title, comment, username };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">Pesan Terkirim...</p>}
      <textarea
        className="w-full h-32 bg-color-primary p-4"
        onChange={handleInput}
        value={comment}
      />
      <button
        className="bg-color-secondary w-32 h-10 rounded text-color-primary"
        onClick={handlePosting}
      >
        Kirim Pesan
      </button>
    </div>
  );
};
export default CommentInput;
