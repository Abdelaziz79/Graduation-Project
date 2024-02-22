import React, { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;
    const newPost = {
      title,
      content,
      type: "post",
    };
    console.log(newPost);
  }

  return (
    <div>
      <h1 className="mb-4 ">Add new post</h1>
      <form>
        <label htmlFor="title" className="form-label fs-4">
          Title
        </label>
        <input
          className="form-control"
          type="text"
          name="title"
          id="title"
          value={title}
          required
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content" className="form-label fs-4">
          Content (accept markdown)
        </label>
        <textarea
          className="form-control"
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={content}
          required
          placeholder="content here"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Add new post
        </button>
      </form>
    </div>
  );
}
