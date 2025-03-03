import React from "react";
// import Card from "../componentsUI/Cards"
import userImg from "../../img/user.png";

const MatchInfo = ({ team }) => {
  return (
    <div className="team-info">
      {/* <h3>{team.name}</h3> */}
        {team.players.map(({ username, kills,  }, id) => (
          
          <ul>
          <li className="stats" key={id}>
          <div className="user_card">

            <div className="player">
              <img src={userImg} alt="player img" />
              <span>{username}</span>
            </div>

            <div className="player">
              <span className="kills-span">Kills:</span>
              <span>{kills}</span>
            </div>

          </div>
          </li>
        </ul>
        ))}

      <div className="team-stats">
        <div className="user_card">
          
        <div>
          <span>Points:</span>
          <span>{team.points}</span>
        </div>
        <div>
          <span>Place:</span>
          <span>{team.place}</span>
        </div>
        <div>
          <span>Total Kills:</span>
          <span>{team.total_kills}</span>
        </div>
      </div>

        </div>
    </div>
  );
};

export default MatchInfo;