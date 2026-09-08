import React, { useState } from "react";
import { calculatePriority, classifyPriority } from "../logic/civicLogic";

function IssueForm({ setCurrentPage, onAddIssue }) {

  const [formData, setFormData] = useState({
    category: "",
    location: "",
    description: "",
    severity: "5",
    affectedPeople: "1",
    urgency: "5"
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState("");


  function handleChange(event) {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  }


  function handleSubmit(event) {

    event.preventDefault();

    const severityNum = Number(formData.severity);
    const affectedNum = Number(formData.affectedPeople);
    const urgencyNum = Number(formData.urgency);

    const priorityScore = calculatePriority(severityNum, affectedNum, urgencyNum);
    const priorityLevel = classifyPriority(priorityScore);
    const newId = `CF-${Math.floor(10000 + Math.random() * 90000)}`;

    const newIssue = {
      id: newId,
      title: formData.category,
      category: formData.category,
      location: formData.location,
      description: formData.description,
      priority: priorityScore,
      level: priorityLevel,
      status: "Pending",
      affected: affectedNum
    };

    if (onAddIssue) {
      onAddIssue(newIssue);
    }

    setSubmittedId(newId);
    setSubmitted(true);

  }

  function handleReset() {
    setFormData({
      category: "",
      location: "",
      description: "",
      severity: "5",
      affectedPeople: "1",
      urgency: "5"
    });
    setSubmitted(false);
  }


  if (submitted) {

    return (
      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h2>
          Issue Submitted
        </h2>

        <p>
          Your civic issue has been successfully
          registered.
        </p>

        <div className="issue-id">
          Issue ID: {submittedId}
        </div>

        <p>
          Status: Pending Analysis
        </p>

        <div className="success-actions">
          <button
            className="primary-button"
            onClick={() => setCurrentPage("dashboard")}
          >
            View Dashboard
          </button>
          <button
            className="secondary-button"
            onClick={handleReset}
          >
            Report Another Issue
          </button>
        </div>

      </div>
    );

  }


  return (
    <form
      className="issue-form"
      onSubmit={handleSubmit}
    >

      <label>
        Issue Category

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >

          <option value="">
            Select category
          </option>

          <option value="Road Damage">
            Road Damage
          </option>

          <option value="Water Leakage">
            Water Leakage
          </option>

          <option value="Waste Overflow">
            Waste Overflow
          </option>

          <option value="Streetlight">
            Streetlight
          </option>

        </select>

      </label>


      <label>
        Location

        <input
          type="text"
          name="location"
          placeholder="Example: Main Gate, Block A"
          value={formData.location}
          onChange={handleChange}
          required
        />

      </label>


      <label>
        Description

        <textarea
          name="description"
          placeholder="Describe the issue..."
          value={formData.description}
          onChange={handleChange}
          required
        />

      </label>


      <label>
        Severity

        <input
          type="range"
          name="severity"
          min="1"
          max="10"
          value={formData.severity}
          onChange={handleChange}
        />

        <span>
          {formData.severity} / 10
        </span>

      </label>


      <label>
        People Affected

        <input
          type="number"
          name="affectedPeople"
          min="1"
          value={formData.affectedPeople}
          onChange={handleChange}
        />

      </label>


      <label>
        Urgency

        <input
          type="range"
          name="urgency"
          min="1"
          max="10"
          value={formData.urgency}
          onChange={handleChange}
        />

        <span>
          {formData.urgency} / 10
        </span>

      </label>


      <button
        type="submit"
        className="primary-button submit-button"
      >
        Submit Issue
      </button>

    </form>
  );
}

export default IssueForm;