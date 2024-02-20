import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Explanation({ explanation }) {
  return (
    <>
      <label className="form-label fs-4">The Result</label>
      <div style={{ height: "696px" }}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={
            "no-scroll-width rounded p-3 bg-body-tertiary h-100 overflow-auto explanation-window  "
          }
        >
          {explanation}
        </Markdown>
      </div>
    </>
  );
}
