import React from "react";
import Markdown from "react-markdown";
import { usePreviewTopic } from "../context/PreviewTopicContext";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Preview() {
  const { newTpoic } = usePreviewTopic();
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      children={newTpoic.explanation}
      components={{
        code: function Code(props) {
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
        },
      }}
      className={
        "no-scroll-width rounded p-3 bg-body-tertiary h-100 overflow-auto explanation-window  "
      }
    />
  );
}
