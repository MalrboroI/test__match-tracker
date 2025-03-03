import React, { useState } from "react";
import MatchInfo from "./MatchInfo";
import commandImg from "../../img/command.png";
import arrowImg from "../..//img/arrow.svg";

const MatchItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="item">
      {/* <div className="border"> */}

      <div className="wrapper">
        <div className="team">
          <img className="team-icon" src={commandImg} alt="team icon" />
          <span>{item.awayTeam.name}</span>
        </div>

        <div className="score-block">
          <div className="score">
            {item.awayScore} : {item.homeScore}
          </div>
          <div className={`status ${item.status.toLowerCase()}`}>
            {item.status}
          </div>
        </div>

        <div className="team">
          <span>{item.homeTeam.name}</span>
          <img className="team-icon" src={commandImg} alt="team icon" />

          <img
            onClick={toggleOpen}
            className={`arrow-icon ${open ? "open" : ""}`}
            src={arrowImg}
            alt="arrow icon"
          />
        </div>
      </div>

      {open && (
        <div className="match-info">
          <MatchInfo team={item.awayTeam} />
          <MatchInfo team={item.homeTeam} />
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default MatchItem;
