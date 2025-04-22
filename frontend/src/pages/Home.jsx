import React from "react";
import {
  HOME_TITLE,
  JOIN_NOW,
  TALK_TO_LEGAL_BOT,
} from "../constants/home_constants.js";
import { Button } from "../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  const navigate = useNavigate();
  const handleJoinNow = () => {
    navigate("/join-options");
  };
  const handleTalkToLegalBot = () => {
    navigate("/legal-bot");
  }

  return (
    <main className="section home-section">
      <h1 className="home-title">{HOME_TITLE}</h1>
      <p className="home-description">
        Explore the intricacies of the Indian Constitution and legal system.
      </p>
      <div className="home-btns">
        <Button otherClassNames="primary" defaultLabel={JOIN_NOW} clickEvent={handleJoinNow}/>
        <Button otherClassNames="secondary" defaultLabel={TALK_TO_LEGAL_BOT} clickEvent={handleTalkToLegalBot} />
      </div>
      <img
        src="/src/assets/images/indian-emblem.jpg"
        className="img home-img"
      ></img>
    </main>
  );
};

export default Home;
