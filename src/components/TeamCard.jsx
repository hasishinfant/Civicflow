import React from "react";

function TeamCard({ team }) {

    return (
      <div className="team-card">
  
        <div className="team-header">
  
          <h3>
            {team.name}
          </h3>
  
          <span className={team.available ? "available" : "busy"}>
            {team.available ? "Available" : "Busy"}
          </span>
  
        </div>
  
        <p>
          {team.specialization}
        </p>
  
        <div className="workload">
  
          <span>
            Workload
          </span>
  
          <strong>
            {team.workload} tasks
          </strong>
  
        </div>
  
      </div>
    );
  }
  
  export default TeamCard;