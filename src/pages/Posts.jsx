import React from "react";
import Post from "../ui/Post";

const posts = [
  {
    id: 1,
    title: "Post 1",
    content:
      "ahmed said that every thing is good and bad in same time ahmed said that every thing is good and bad in same time ahmed said that every thing is good and bad in same time ahmed said that every thing is good and bad in same time ahmed said that every thing is good and bad in same time",
    date: "2022-01-01",
    author: {
      name: "Ahmed",
      image: "https://picsum.photos/200",
    },
    comments: [
      {
        id: 12,
        text: "ahmed said that every thing is good and bad in same time ahmed said that every thing is good and bad in same time ahmed said that every thing is good and bad in same time ahmed said that every thing is good and bad in same time",
        author: {
          name: "mohamed",
          image: "https://picsum.photos/200",
        },
      },
      {
        id: 13,
        text: "ahmed said that every thing is good and bad in same time",
        author: {
          name: "aly",
          image: "https://picsum.photos/200",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content 3",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content 3",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content 3",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Content 3",
  },
];

export default function Posts() {
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
