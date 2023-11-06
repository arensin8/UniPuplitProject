import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Chatbot.css";

const CodeBlock = ({ language, code }) => {
  if(language.toLowerCase().includes("c+") || language.toLowerCase().includes("c#")){
    language = "c"
  }
  return (
    <SyntaxHighlighter 
      language={language} 
      style={atomDark}
      customStyle={{
        padding: "25px"
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

const TextWithCode = ({ text }) => {
  // Regular expression to match code blocks
  const codeBlockRegex = /```([\s\S]*?)```/g;
  const boldTextRegex = /``(.*?)``/g;

  const matches = text.match(codeBlockRegex);

  if (!matches) {
    // If no code blocks found, render the text as is
    return <p>{text}</p>;
  }

  // Replace text inside double backticks with bold text
  const formattedText = text.replace(boldTextRegex, (_, p1) => `<strong>${p1}</strong>`);

  // Split the text into code and non-code parts
  const parts = formattedText.split(codeBlockRegex);

  return (
    <div>
      {parts.map((part, index) => {
        if (index % 2 === 0) {
          // Non-code part
          return <p key={index} dangerouslySetInnerHTML={{ __html: part }} />;
        } else {
          // Code part
          const [language, code] = part.split('\n', 2);
          return <CodeBlock key={index} language={language} code={part} />;
        }
      })}
    </div>
  );
};

export default TextWithCode;
