import React, { useState, useRef, useEffect } from "react";
import ChartArea from "../components/ui/ChartArea";
import MessageArea from "../components/ui/MessageArea";
import "../styles/ChatBot.css";

const LegalBot = () => {
  const chartRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    document.body.style.backgroundColor = "#212529";
    return ()=>  document.body.style.backgroundColor = "";
  })

  return (
    <div className="chart-bot-container">
     <MessageArea  messageList={messages}/>
      <ChartArea chartRef={chartRef} updateConversationMessages={setMessages} />
    </div>
  );
};

export default LegalBot;
