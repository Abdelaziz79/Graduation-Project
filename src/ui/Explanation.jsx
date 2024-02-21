import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { memo } from "react";

export default function Explanation({ explanation }) {
  return (
    <>
      <label className="form-label fs-4 ">The Result</label>
      <div style={{ height: "696px" }}>
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          children={explanation}
          components={{
            code: memo(function Code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={oneDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            }),
          }}
          className={
            "no-scroll-width rounded p-3 bg-body-tertiary h-100 overflow-auto explanation-window border"
          }
        />
      </div>
    </>
  );
}
