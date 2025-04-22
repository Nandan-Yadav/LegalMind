import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import "../styles/JoinOptions.css";

const JoinOptions = () => {
  const navigate = useNavigate();

  const handleUserJoin = () => {
    navigate("/user-join");
  };

  const handleAttorneyJoin = () => {
    navigate("/attorney-join");
  };

  return (
    <main className="section">
      <h1 className="heading">Sign Up Options</h1>
      <div className="join-options">
        <div className="card join-option-card">
          <img
            className="card-img"
            src="/src/assets/images/attorney.jpg"
            alt=""
          />
          <div className="card-content">
            <h2 className="card-title">Attorney</h2>
            <p className="card-description">
              As an attorney, you can provide legal assistance and guidance to
              users seeking help.
            </p>
          </div>
          <Button
            otherClassNames={"primary"}
            onClick={handleAttorneyJoin}
            defaultLabel={"Sign Up as Attorney"}
          />
        </div>
        <div className="card join-option-card">
          <img
            className="card-img"
            src="/src/assets/images/client.jpg"
            alt=""
          />
          <div className="card-content">
            <h2 className="card-title">User</h2>
            <p className="card-description">
              As a user, you can explore the intricacies of the Indian
              Constitution and legal system.
            </p>
          </div>

          <Button
            otherClassNames={"primary"}
            onClick={handleUserJoin}
            defaultLabel={"Sign Up as User"}
          />
        </div>
      </div>
    </main>
  );
};

export default JoinOptions;
