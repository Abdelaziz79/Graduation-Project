import React from "react";
import Background from "./Background";
import { useDarkMode } from "../context/DarkModeContext";

export default function QuizPage() {
  const { darkMode } = useDarkMode();
  return (
    <Background>
      <div className="quiz-page">
        <div className="quiz-header ">
          <div class="progress ">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "12%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <p className="">
              Question <strong>1</strong> / 15
            </p>
            <p>
              <strong>0</strong> / 250
            </p>
          </div>
        </div>
        <div className="quiz-body ">
          <h4 className="text-center">
            hello world in cpp ? hello world in cpp ?hello world in cpp ?hello
            world in cpp ?hello world in cpp ?hello world in cpp ?
          </h4>
          <div className="quiz-answers ">
            <ul className="list-unstyled text-center mt-5">
              <li>
                <button
                  className={`btn btn-lg w-50 my-2 fw-bold quiz-answer-button ${
                    darkMode ? "" : "quiz-answer-button-light"
                  }  rounded-5`}
                >
                  hello hello hello
                </button>
              </li>
              <li>
                <button
                  className={`btn btn-lg w-50 my-2 fw-bold quiz-answer-button ${
                    darkMode ? "" : "quiz-answer-button-light"
                  }  rounded-5`}
                >
                  hello hello hello
                </button>
              </li>
              <li>
                <button
                  className={`btn btn-lg w-50 my-2 fw-bold quiz-answer-button ${
                    darkMode ? "" : "quiz-answer-button-light"
                  }  rounded-5`}
                >
                  hello hello hello
                </button>
              </li>
              <li>
                <button
                  className={`btn btn-lg w-50 my-2 fw-bold quiz-answer-button ${
                    darkMode ? "" : "quiz-answer-button-light"
                  }  rounded-5`}
                >
                  hello hello hello
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="quiz-footer d-flex justify-content-between align-items-center mt-5">
          <div className="quiz-timer btn-outline-primary btn rounded-5 btn-lg">
            {/* {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
        {seconds} */}
            1:00
          </div>
          <div className="quiz-next">
            <button className="btn btn-success btn-lg   rounded-5 ">
              Next
            </button>
          </div>
        </div>
      </div>
    </Background>
  );
}
