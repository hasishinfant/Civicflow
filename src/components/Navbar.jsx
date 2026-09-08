import React from "react";

function Navbar({ currentPage, setCurrentPage }) {

    return (
      <header className="navbar">
  
        <div
          className="logo"
          onClick={() => setCurrentPage("home")}
        >
          <div className="logo-mark">CF</div>
  
          <div>
            <h2>CivicFlow</h2>
            <span>Smart Civic Response</span>
          </div>
        </div>
  
  
        <nav>
  
          <button
            className={currentPage === "home" ? "active" : ""}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
  
          <button
            className={currentPage === "report" ? "active" : ""}
            onClick={() => setCurrentPage("report")}
          >
            Report Issue
          </button>
  
          <button
            className={currentPage === "dashboard" ? "active" : ""}
            onClick={() => setCurrentPage("dashboard")}
          >
            Dashboard
          </button>
  
        </nav>
  
      </header>
    );
  }
  
  export default Navbar;