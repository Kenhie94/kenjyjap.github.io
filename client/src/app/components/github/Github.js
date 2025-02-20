"use client";

import React, { useEffect, useState } from "react";
import "./githubstyle.css";

export default function Github() {
  const [weeks, setWeeks] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [error, setError] = useState(null);
  const [months, setMonths] = useState([]);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("/api/github"); // Fetch from API route
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        const calendar = data.data.user.contributionsCollection.contributionCalendar;
        setTotalContributions(calendar.totalContributions);
        setWeeks(calendar.weeks);

        // Extract month labels while avoiding duplicate at the start/end
        const monthLabels = [];
        let lastMonth = "";
        calendar.weeks.forEach((week, index) => {
          const firstDayOfWeek = week.contributionDays[0];
          const currentMonth = new Date(firstDayOfWeek.date).toLocaleString("en-US", {
            month: "short",
          });

          // Add month label only when the month changes and avoid duplicate at start/end
          if (currentMonth !== lastMonth && !(monthLabels.length > 0 && currentMonth === monthLabels[0].month)) {
            monthLabels.push({ month: currentMonth, index });
            lastMonth = currentMonth;
          }
        });

        setMonths(monthLabels);
      } catch (err) {
        setError("Failed to load GitHub contributions");
      }
    }

    fetchContributions();
  }, []);

  return (
    <div className="github-container">
      <h2>My Github Contributions</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          {/* Month Labels Above Grid */}
          <div className="month-labels">
            {months.map((month, index) => (
              <span key={index} style={{ gridColumnStart: month.index + 1 }}>
                {month.month}
              </span>
            ))}
          </div>

          {/* Contribution Grid */}
          <div className="contributions-grid">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="week-column">
                {week.contributionDays.map((day, dayIndex) => (
                  <div key={dayIndex} className="contribution-box" style={{ backgroundColor: getColor(day.contributionCount) }} title={`${day.date}: ${day.contributionCount} contributions`} />
                ))}
              </div>
            ))}
          </div>

          {/* Legend for Contribution Intensity */}
          <div className="d-flex flex-row justify-content-between">
            <div>
            <p>{totalContributions} contributions in {new Date().getFullYear()}</p>
            </div>
            <div className="legend">
              <p>Less</p>
              <div className="legend-box" style={{ backgroundColor: getColor(0) }}></div>
              <div className="legend-box" style={{ backgroundColor: getColor(2) }}></div>
              <div className="legend-box" style={{ backgroundColor: getColor(5) }}></div>
              <div className="legend-box" style={{ backgroundColor: getColor(10) }}></div>
              <p>More</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Function to determine color intensity based on contribution count
function getColor(count) {
  if (count === 0) return "#ffffff"; // No contributions
  if (count < 3) return "#d1b3ff"; // Light purple
  if (count < 6) return "#b48ede"; // Medium purple
  return "#7a52aa"; // Darkest purple
}
