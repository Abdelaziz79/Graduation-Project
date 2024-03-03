import React from "react";
import Post from "../features/posts/Post";
import { usePosts } from "../features/posts/usePosts";
import { Spinner } from "react-bootstrap";

export default function Posts() {
  const { posts, isLoading } = usePosts();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="d-flex flex-column gap-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
