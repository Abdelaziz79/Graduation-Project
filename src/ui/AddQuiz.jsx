import { useState } from "react";
import { Button } from "react-bootstrap";

export default function AddQuiz({ questions, setQuestions }) {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const [correctOption, setCorrectOption] = useState("option1");

  function handleSubmit(e) {
    e.preventDefault();
    if (!question || !option1 || !option2 || !option3 || !option4) return;
    const newQuestion = {
      question,
      option1,
      option2,
      option3,
      option4,
      correctOption,
    };
    setQuestions([...questions, newQuestion]);
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectOption("option1");
  }

  return (
    <form>
      <label className="form-label fs-4" htmlFor="question">
        Question {questions.length + 1}
      </label>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        type="text"
        className="form-control"
        id="question"
        name="question"
        placeholder="Enter question"
      />
      <label className="form-label fs-4" htmlFor="option-1">
        Option 1
      </label>
      <input
        value={option1}
        onChange={(e) => setOption1(e.target.value)}
        type="text"
        className="form-control"
        id="option-1"
      />
      <label className="form-label fs-4" htmlFor="option-2">
        Option 2
      </label>
      <input
        value={option2}
        onChange={(e) => setOption2(e.target.value)}
        type="text"
        className="form-control"
        id="option-2"
      />
      <label className="form-label fs-4" htmlFor="option-3">
        Option 3
      </label>
      <input
        value={option3}
        onChange={(e) => setOption3(e.target.value)}
        type="text"
        className="form-control"
        id="option-3"
      />
      <label className="form-label fs-4" htmlFor="option-4">
        Option 4
      </label>
      <input
        value={option4}
        onChange={(e) => setOption4(e.target.value)}
        type="text"
        className="form-control"
        id="option-4"
      />
      <label className="form-label fs-4" htmlFor="correct">
        Correct Answer
      </label>
      <select
        value={correctOption}
        onChange={(e) => setCorrectOption(e.target.value)}
        className="form-select"
        aria-label="Default select example"
        id="correct"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <Button className="btn-success mt-3" onClick={handleSubmit}>
        Add Question {questions.length + 1}
      </Button>
    </form>
  );
}
