"use client"; // Next.js Client Component

import React, { useEffect, useState } from "react";
import "./githubstyle.css";

const GITHUB_USERNAME = "Kenhie94";
const GITHUB_TOKEN = "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";

export default function Github() {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    async function fetchContributions() {
      const query = `
        {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    weekday
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      const calendar = data.data.user.contributionsCollection.contributionCalendar;

      setTotalContributions(calendar.totalContributions);
      setContributions(calendar.weeks);
    }

    fetchContributions();
  }, []);

  return (
    <div className="github-container">
      <h2>My Github Contributions</h2>

      {/* Contribution Grid */}
      <div className="contributions-grid">
        {/* Loop through weeks (columns) */}
        {contributions.map((week, weekIndex) => (
          <div key={weekIndex} className="week-column">
            {/* Loop through days (rows) Sunday - Saturday */}
            {week.contributionDays.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="contribution-box"
                style={{
                  backgroundColor: getColor(day.contributionCount),
                }}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>

      <p>
        {totalContributions} contributions in {new Date().getFullYear()}
      </p>
    </div>
  );
}

// Determine box color based on contribution count
function getColor(count) {
  if (count === 0) return "#ffffff"; // No contributions
  if (count < 5) return "#d1b3ff"; // Light purple
  if (count < 10) return "#b48ede"; // Medium purple
  return "#7a52aa"; // Darkest purple
}
