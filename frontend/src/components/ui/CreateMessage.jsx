import React from "react";
import ReactMarkdown from "react-markdown";
import "../../styles/markdown.css"

const CreateMessage = ({ currentMessage }) => {
  return (
    <div className={`chart-message  ${currentMessage.type} ${currentMessage.type === "bot" && "markdown-container"}`}>
      {currentMessage.type === "bot" ? (
        <ReactMarkdown>{currentMessage.text}</ReactMarkdown> )
       : (
        (currentMessage.text)
      )}
    </div>
  );
};

export default CreateMessage;
