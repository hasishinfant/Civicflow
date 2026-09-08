import React from "react";
import Navbar from "../components/Navbar";
import IssueForm from "../components/IssueForm";

function ReportIssue({ currentPage, setCurrentPage, onAddIssue }) {

  return (
    <div>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="report-page">

        <div className="page-heading">

          <p className="tag">
            CITIZEN PORTAL
          </p>

          <h1>
            Report a Civic Issue
          </h1>

          <p>
            Help your community by reporting a problem
            that needs attention.
          </p>

        </div>


        <IssueForm setCurrentPage={setCurrentPage} onAddIssue={onAddIssue} />

      </main>

    </div>
  );
}

export default ReportIssue;