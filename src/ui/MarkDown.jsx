import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { memo } from "react";

const Code = memo(function Code(props) {
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
});

export default function MarkDown({ markdown }) {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      children={markdown}
      components={{
        code: Code,
      }}
      className={
        "no-scroll-width rounded p-3 bg-body-tertiary h-100 overflow-auto explanation-window border"
      }
    />
  );
}
