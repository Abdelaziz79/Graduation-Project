import { useState } from "react";
import { Card } from "react-bootstrap";
import Avatar from "./Avatar";

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <Card>
      <Card.Header>
        <div className="d-flex align-items-center gap-3">
          <Avatar src={post.author?.image} alt="avatar" />
          <div>
            <h6>{post.author?.name}</h6>
            <span className="text-muted">{post.date}</span>
          </div>
        </div>
      </Card.Header>

      <Card.Img
        variant="top"
        src="https://usemynotes.com/wp-content/uploads/2021/02/what-are-arrays-in-java.jpg"
        alt="Card image"
        height="250px"
        style={{ objectFit: "cover" }}
        className="rounded"
      />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <hr />
        <span>🔼 20 </span>
        <span>🔽 12 </span>

        <span
          className="text-muted float-end "
          style={{ cursor: "pointer" }}
          onClick={() => setShowComments(!showComments)}
        >
          2 comments
        </span>
        {showComments && (
          <div>
            <hr />
            {post.comments.map((comment) => (
              <div key={comment.id} className="d-flex align-items-center gap-3">
                <Avatar src={comment.author.image} />
                <div>
                  <h6>{comment.author.name}</h6>
                  <p>{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
