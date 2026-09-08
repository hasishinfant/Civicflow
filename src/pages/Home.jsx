import React from "react";
import Navbar from "../components/Navbar";

function Home({ currentPage, setCurrentPage, issues = [] }) {

  const totalCount = issues.length;
  const criticalCount = issues.filter(i => i.level === "CRITICAL").length;
  const pendingCount = issues.filter(i => i.status === "Pending").length;
  const resolvedCount = issues.filter(i => i.status === "Resolved").length;

  return (
    <div>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />


      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="tag">
            SMART CIVIC MANAGEMENT
          </p>

          <h1>
            Turning Civic Problems
            <span> Into Smart Solutions.</span>
          </h1>

          <p className="hero-description">
            CivicFlow is a smart civic issue response system
            designed to help communities report problems and
            help authorities prioritize their response.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => setCurrentPage("report")}
            >
              Report an Issue
            </button>

            <button
              className="secondary-button"
              onClick={() => setCurrentPage("dashboard")}
            >
              View Dashboard
            </button>

          </div>

        </div>

        <div className="hero-image-container">
          <img src="/images/hero_smart_city.png" alt="Smart City Command Center" className="hero-banner-img" />
        </div>

      </section>


      {/* STATISTICS */}

      <section className="stats">

        <div className="stat-card">
          <h2>{totalCount}</h2>
          <p>Total Issues</p>
        </div>

        <div className="stat-card">
          <h2>{resolvedCount}</h2>
          <p>Resolved</p>
        </div>

        <div className="stat-card">
          <h2>{criticalCount}</h2>
          <p>Critical</p>
        </div>

        <div className="stat-card">
          <h2>{pendingCount}</h2>
          <p>Pending</p>
        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="how-it-works">

        <p className="tag">
          HOW IT WORKS
        </p>

        <h2>
          From Report to Resolution
        </h2>


        <div className="workflow">

          <div className="workflow-card">
            <span>01</span>
            <h3>Report</h3>
            <p>
              Citizens report civic problems with
              important details.
            </p>
          </div>


          <div className="workflow-card">
            <span>02</span>
            <h3>Analyze</h3>
            <p>
              CivicFlow analyzes the severity and
              impact of the issue.
            </p>
          </div>


          <div className="workflow-card">
            <span>03</span>
            <h3>Assign</h3>
            <p>
              The appropriate response team is
              selected.
            </p>
          </div>


          <div className="workflow-card">
            <span>04</span>
            <h3>Resolve</h3>
            <p>
              The issue is handled and its progress
              is tracked.
            </p>
          </div>

        </div>

      </section>


      {/* PROBLEMS */}

      <section className="problems">

        <p className="tag">
          CIVIC ISSUES
        </p>

        <h2>
          Problems CivicFlow Can Handle
        </h2>


        <div className="problem-grid">

          <div className="problem-card">
            <div className="card-image-wrapper">
              <img src="/images/road_damage.png" alt="Road Damage" className="problem-img" />
            </div>
            <h3>Road Damage</h3>
            <p>
              Potholes and damaged roads affecting
              public safety.
            </p>
          </div>


          <div className="problem-card">
            <div className="card-image-wrapper">
              <img src="/images/water_leakage.png" alt="Water Leakage" className="problem-img" />
            </div>
            <h3>Water Leakage</h3>
            <p>
              Water leaks that require immediate
              attention.
            </p>
          </div>


          <div className="problem-card">
            <div className="card-image-wrapper">
              <img src="/images/waste_overflow.png" alt="Waste Overflow" className="problem-img" />
            </div>
            <h3>Waste Overflow</h3>
            <p>
              Overflowing waste and garbage collection
              problems.
            </p>
          </div>


          <div className="problem-card">
            <div className="card-image-wrapper">
              <img src="/images/streetlight_repair.png" alt="Streetlight Failure" className="problem-img" />
            </div>
            <h3>Streetlight Failure</h3>
            <p>
              Broken streetlights affecting public
              areas.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <h2>
          See a civic problem?
        </h2>

        <p>
          Report it and help make your community better.
        </p>

        <button
          className="primary-button"
          onClick={() => setCurrentPage("report")}
        >
          Report Civic Issue
        </button>

      </section>

    </div>
  );
}

export default Home;