import React from "react";

function IssueCard({ issue }) {

    const levelClass = (issue.level || "").toLowerCase();

    return (
      <div className="issue-card">
  
        <div className="issue-top">
  
          <span className={`priority ${levelClass}`}>
            {issue.level}
          </span>
  
          <span className="issue-status">
            {issue.status}
          </span>
  
        </div>
  
  
        <h3>
          {issue.title}
        </h3>
  
        <p>
          📍 {issue.location}
        </p>
  
  
        <div className="issue-details">
  
          <div>
            <span>Priority</span>
            <strong>{issue.priority}</strong>
          </div>
  
          <div>
            <span>Affected</span>
            <strong>{issue.affected}</strong>
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default IssueCard;