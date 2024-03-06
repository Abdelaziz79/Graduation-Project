import Avatar from "../../ui/Avatar";

import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import MarkDown from "../../ui/MarkDown";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Post({ post }) {
  const { darkMode } = useDarkMode();
  const [showComments, setShowComments] = useState(false);
  return (
    <Row className="">
      <Col sm={12} md={12} lg={8} className="mx-auto">
        <Card className={`w-100 ${darkMode ? "post-dark" : ""}`}>
          <Card.Header className={`${darkMode ? "post-header-border" : ""}`}>
            <div className="d-flex align-items-center gap-3">
              <Avatar src="https://i.pravatar.cc/300" alt="avatar" />
              <div>
                <h6>{post.author?.name}</h6>
                <span className="text-muted">{post.date}</span>
              </div>
            </div>
          </Card.Header>

          {/* <Card.Img
            variant="top"
            src="https://usemynotes.com/wp-content/uploads/2021/02/what-are-arrays-in-java.jpg"
            alt="Card image"
            height="250px"
            className="rounded cover"
          /> */}
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <div
              className="no-scroll-width  "
              style={{ maxHeight: "500px", overflowY: "auto" }}
            >
              <MarkDown markdown={post.content} />
            </div>
            <hr />
            <span>🔼 20 </span>
            <span>🔽 12 </span>

            <span
              className=" float-end pointer"
              onClick={() => setShowComments(!showComments)}
            >
              2 comments
            </span>
            {showComments && (
              <div>
                <hr />
                {post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="d-flex align-items-center gap-3"
                  >
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
      </Col>
    </Row>
  );
}
