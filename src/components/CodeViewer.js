import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import clipboardIcon from "../icons/clipboard.svg";
import tickIcon from "../icons/tick.svg";

const CodeViewer = (props) => {
  // const highlightLine = () => ({
  //   className: "highlighted-line",
  // });
  // const highlightedLines = props.highlightedLines ? props.highlightedLines : []

  const { lang, code } = props;
  const [copied, setCopied] = useState(false);
  return (
    <div
      className={`codeViewer flex flex-col items-center ${
        props.className ? props.className : ""
      }`}
    >
      <div className="bg-gray-700 w-full flex justify-between items-center rounded-t-xl px-2 py-1 text-sm text-white">
        <p className="px-4">{lang}</p>
        <button
          className="rounded-lg py-2 px-4 flex items-center gap-2"
          onClick={(e) => {
            navigator.clipboard.writeText(code);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        >
          <img
            src={copied ? tickIcon : clipboardIcon}
            alt="Copy"
            className="w-4"
          />
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      {code !== "" && (
        <SyntaxHighlighter
          language={lang}
          style={coldarkDark}
          customStyle={{
            margin: "0",
            borderRadius: "0 0 12px 12px",
            fontSize: "14px",
            whiteSpace: "pre-line",
            padding: "25px 30px",
            width: "100%",
          }}
          wrapLongLines={true}
          // showLineNumbers={true}
          // lineProps={(lineNumber) =>
          //   highlightedLines.includes(lineNumber) ? highlightLine() : {}
          // }
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default CodeViewer;
