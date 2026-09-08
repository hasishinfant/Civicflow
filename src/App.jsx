import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import AdminDashboard from "./pages/AdminDashboard";

const DEFAULT_ISSUES = [
  {
    id: "CF-00101",
    title: "Water Leakage",
    category: "Water Leakage",
    location: "Block A",
    description: "Major water pipe burst near Block A entrance causing flooding.",
    priority: 96,
    level: "CRITICAL",
    status: "Pending",
    affected: 420
  },
  {
    id: "CF-00102",
    title: "Road Damage",
    category: "Road Damage",
    location: "Main Gate",
    description: "Deep pothole at main gate entrance causing traffic hazards.",
    priority: 92,
    level: "CRITICAL",
    status: "Assigned",
    affected: 250
  },
  {
    id: "CF-00103",
    title: "Waste Overflow",
    category: "Waste Overflow",
    location: "Ward 12",
    description: "Garbage bins overflowing near Ward 12 community park.",
    priority: 78,
    level: "HIGH",
    status: "Pending",
    affected: 180
  },
  {
    id: "CF-00104",
    title: "Streetlight Failure",
    category: "Streetlight",
    location: "Sector 4",
    description: "Multiple streetlights unoperational along Sector 4 main avenue.",
    priority: 61,
    level: "MEDIUM",
    status: "Assigned",
    affected: 90
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [issues, setIssues] = useState(() => {
    try {
      const saved = localStorage.getItem("civicflow_issues");
      return saved ? JSON.parse(saved) : DEFAULT_ISSUES;
    } catch (e) {
      return DEFAULT_ISSUES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("civicflow_issues", JSON.stringify(issues));
    } catch (e) {
      console.error("Failed to save issues to localStorage", e);
    }
  }, [issues]);

  const handleAddIssue = (newIssue) => {
    setIssues((prev) => [newIssue, ...prev]);
  };

  return (
    <>
      {currentPage === "home" && (
        <Home currentPage={currentPage} setCurrentPage={setCurrentPage} issues={issues} />
      )}

      {currentPage === "report" && (
        <ReportIssue currentPage={currentPage} setCurrentPage={setCurrentPage} onAddIssue={handleAddIssue} />
      )}

      {currentPage === "dashboard" && (
        <AdminDashboard currentPage={currentPage} setCurrentPage={setCurrentPage} issues={issues} />
      )}
    </>
  );
}

export default App;