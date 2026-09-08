import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function AdminDashboard({ currentPage, setCurrentPage, issues }) {

  return (
    <div>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="dashboard-page">

        <div className="page-heading">

          <p className="tag">
            ADMIN PORTAL
          </p>

          <h1>
            CivicFlow Command Center
          </h1>

          <p>
            Monitor civic issues and response operations
            from a single dashboard.
          </p>

        </div>


        <Dashboard issues={issues} />

      </main>

    </div>
  );
}

export default AdminDashboard;