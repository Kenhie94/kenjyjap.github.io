"use client";

import React, { useEffect, useState, useRef } from "react";
import "./githubstyle.css";

export default function Github() {
  const [weeks, setWeeks] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [error, setError] = useState(null);
  const [months, setMonths] = useState([]);
  const scrollableRef = useRef(null);

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

        // Extract month labels with correct positioning
        const monthLabels = [];
        let lastMonth = "";
        calendar.weeks.forEach((week, index) => {
          const firstDayOfWeek = week.contributionDays[0];
          const currentMonth = new Date(firstDayOfWeek.date).toLocaleString("en-US", {
            month: "short",
          });

          // Add month label only when the month changes
          if (currentMonth !== lastMonth) {
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
    <div className="container mt-2">
      <div>
        <h1 className="githubContainer">My GitHub Contributions</h1>
      </div>
      <div className="graphContainer">
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            {/* Scrollable Container for Both Grid & Month Labels */}
            <div className="scrollableWrapper" ref={scrollableRef}>
              {/* Contribution Grid */}
              <div className="contributionsGrid">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="weekColumn">
                    {week.contributionDays.map((day, dayIndex) => (
                      <div key={dayIndex} className="contributionBox" style={{ backgroundColor: getColor(day.contributionCount) }} title={`${day.date}: ${day.contributionCount} contributions`} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution Legend */}
            <div className="legend d-flex flex-row justify-content-between">
              <h5>
                {totalContributions} contributions in {new Date().getFullYear()}
              </h5>
              <div className="d-flex flex-row">
                <h5 className="">Less</h5>
                <div className="legendBox mx-1 p-2" style={{ backgroundColor: getColor(0) }}></div>
                <div className="legendBox mx-1 p-2" style={{ backgroundColor: getColor(2) }}></div>
                <div className="legendBox mx-1 p-2" style={{ backgroundColor: getColor(5) }}></div>
                <div className="legendBox mx-1 p-2" style={{ backgroundColor: getColor(10) }}></div>
                <div className="legendBox mx-1 p-2" style={{ backgroundColor: getColor(20) }}></div>
                <h5>More</h5>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// GitHub Contribution Colors (Based on their Scale)
function getColor(count) {
  if (count === 0) return "#ffffff"; // (No contributions)
  if (count < 5) return "#d1b3ff"; // Light purple
  if (count < 10) return "#7a52aa"; // Medium purple
  if (count < 20) return "#5e1fa1"; // Medium purple
  return "#3a0077"; // Darkest purple
}
