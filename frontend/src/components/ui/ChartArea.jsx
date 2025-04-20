import React from "react";
import { TextAreaField } from "./InputTextAreaField";
import { Button } from "./Button";
import { ChatBot } from "../../services/ChatBot";

const ChartArea = ({ chartRef, updateConversationMessages }) => {

  const adjustHeight = () => {
    if (chartRef?.current) {
      chartRef.current.style.height = `${chartRef.current.scrollHeight}px`;
    }
    if(chartRef?.current.value === ""){
      chartRef.current.style.height = "auto";
    }
  };

  const handleChatSubmit = async () => {
    const question = chartRef?.current?.value;
    if (question) {
      chartRef.current.value = "";
      updateConversationMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: question, timestamp: new Date().toISOString() },
      ]);

      try {
        const response = await ChatBot(question);
        console.log("Bot Response:", response);
        updateConversationMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: response, timestamp: new Date().toISOString()},
        ]);
      } catch (error) {
        console.error("ChatBot error:", error);
        // Fallback message when the API call fails
        const errorMessage =
          "Sorry, I couldn't get the response. Please try again later.";
        updateConversationMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: errorMessage, timestamp: new Date().toISOString() },
        ]);
      }
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chart-action-btns">
        <Button
          defaultLabel={
            <img
              src="/src/assets/icons/attach_file.svg"
              className="icon file-icon"
              alt="Attach"
            />
          }
        />
        <Button
          defaultLabel={
            <img
              src="/src/assets/icons/arrow_up.svg"
              className="icon arrow-icon"
              alt="Send"
            />
          }
          clickEvent={handleChatSubmit}
        />
      </div>
      <TextAreaField
        otherClassName="chart-field"
        name={"chat-field"}
        valueRef={chartRef}
        placeholder={"Ask your legal question"}
        externalDebounceCallBack={adjustHeight}
        defaultRows={1}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleChatSubmit();
            adjustHeight();
          }
        }}
      />
    </div>
  );
};

export default ChartArea;
