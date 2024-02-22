import React from "react";
import Post from "../ui/Post";

const posts = [
  {
    id: 1,
    title: "Post 1",
    content:
      "```js\nconsole.log('hello world')\n```\n\n# React + Vite\n\nThis template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.\n\nCurrently, two official plugins are available:\n\n- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh\n- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh\n\n## please read this docs to create explanations for topics\n\n[read now](https://commonmark.org/help/)\n[example](https://remarkjs.github.io/react-markdown/)\n",
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
    id: 4,
    title: "Post 3",
    content: "Content 3",
  },
  {
    id: 5,
    title: "Post 3",
    content: "Content 3",
  },
  {
    id: 6,
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
