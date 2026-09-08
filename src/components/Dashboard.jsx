import React from "react";
import IssueCard from "./IssueCard";
import TeamCard from "./TeamCard";


const issues = [

  {
    id: 1,
    title: "Water Leakage",
    location: "Block A",
    priority: 96,
    level: "CRITICAL",
    status: "Pending",
    affected: 420
  },

  {
    id: 2,
    title: "Road Damage",
    location: "Main Gate",
    priority: 92,
    level: "CRITICAL",
    status: "Assigned",
    affected: 250
  },

  {
    id: 3,
    title: "Waste Overflow",
    location: "Ward 12",
    priority: 78,
    level: "HIGH",
    status: "Pending",
    affected: 180
  },

  {
    id: 4,
    title: "Streetlight Failure",
    location: "Sector 4",
    priority: 61,
    level: "MEDIUM",
    status: "Assigned",
    affected: 90
  }

];


const teams = [

  {
    name: "Team 01",
    specialization: "Water Management",
    available: true,
    workload: 2
  },

  {
    name: "Team 02",
    specialization: "Road Maintenance",
    available: false,
    workload: 5
  },

  {
    name: "Team 03",
    specialization: "Electrical",
    available: true,
    workload: 1
  }

];


function Dashboard({ issues = [] }) {

  const totalCount = issues.length;
  const criticalCount = issues.filter(i => i.level === "CRITICAL").length;
  const pendingCount = issues.filter(i => i.status === "Pending").length;
  const resolvedCount = issues.filter(i => i.status === "Resolved").length;

  return (
    <div className="dashboard-content">

      <div className="dashboard-stats">

        <div>
          <span>Total Issues</span>
          <strong>{totalCount}</strong>
        </div>

        <div>
          <span>Critical</span>
          <strong>{criticalCount}</strong>
        </div>

        <div>
          <span>Pending</span>
          <strong>{pendingCount}</strong>
        </div>

        <div>
          <span>Resolved</span>
          <strong>{resolvedCount}</strong>
        </div>

      </div>


      <div className="dashboard-grid">

        <section>

          <div className="section-title">

            <h2>
              Priority Queue
            </h2>

            <span>
              LIVE
            </span>

          </div>


          <div className="issue-list">

            {issues.length === 0 ? (
              <p className="no-issues">No issues reported yet.</p>
            ) : (
              issues.map(issue => (
                <IssueCard
                  key={issue.id}
                  issue={issue}
                />
              ))
            )}

          </div>

        </section>


        <section>

          <div className="section-title">

            <h2>
              Response Teams
            </h2>

          </div>


          <div className="team-list">

            {teams.map(team => (
              <TeamCard
                key={team.name}
                team={team}
              />
            ))}

          </div>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;