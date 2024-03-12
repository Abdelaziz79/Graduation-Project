import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Finish({ numCorrect, quizLength }) {
  const percentage = Math.round((numCorrect / quizLength) * 100);

  let emoji = "😎";
  if (percentage < 50) {
    emoji = "😒";
  } else if (percentage < 80) {
    emoji = "🥰";
  }
  return (
    <div className="mt-5  d-flex flex-column justify-content-between quiz-page ">
      <div className="text-center">
        <h2>Good job! You have completed the quiz👌</h2>
        <h3>
          You got <strong>{percentage}%</strong> {emoji}
        </h3>
      </div>
      <div className="mt-5 d-flex justify-content-between">
        <Link to="/">
          <button className="btn btn-primary">Back to Home</button>
        </Link>
        <Button onClick={() => window.location.reload()}>reset</Button>
      </div>
    </div>
  );
}
