import React from "react";
import { HOME_TITLE } from "../Constants/home_constants";
import "../styles/Home.css"
const Home = () => {
  return (
    <main className="section home-section">
      <h1 className="home-title">{HOME_TITLE}</h1>
      <p className="home-subtitle">Navigate a wealth of legal resources to understand Indian justice.</p>
      <img src="/src/assets/images/indian-emblem.jpg" className="img home-img"></img>
    </main>
  );
};

export default Home;
